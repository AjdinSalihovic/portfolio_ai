"""
Ajdin Salihović — Portfolio backend
====================================
A small FastAPI service with one job: receive contact-form submissions
and email them to you via SMTP.

It also serves the frontend as static files, so you can deploy the whole
portfolio as a single service on Render (or run it locally with one command).

Run locally:
    cd backend
    pip install -r requirements.txt
    cp .env.example .env          # then fill in your SMTP details
    uvicorn main:app --reload --port 8000

Then open http://localhost:8000
"""

import os
import smtplib
import ssl
from email.message import EmailMessage
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, EmailStr, Field

load_dotenv()

# ---------------- Config (from .env) ----------------
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER", "")           # the account that sends
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD", "")   # app password, not your login password
CONTACT_TO = os.getenv("CONTACT_TO", SMTP_USER)  # where submissions land (your inbox)
ALLOWED_ORIGINS = [
    o.strip() for o in os.getenv("ALLOWED_ORIGINS", "*").split(",") if o.strip()
]

FRONTEND_DIR = Path(__file__).resolve().parent.parent / "frontend"

app = FastAPI(title="Portfolio contact API", docs_url=None, redoc_url=None)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_methods=["POST"],
    allow_headers=["*"],
)


# ---------------- Models ----------------
class ContactMessage(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    email: EmailStr
    message: str = Field(..., min_length=1, max_length=5000)


# ---------------- Simple in-memory rate limit ----------------
# Keeps one IP from flooding your inbox. Resets when the process restarts,
# which is fine for a portfolio site.
from collections import defaultdict
from time import time

_submissions: dict[str, list[float]] = defaultdict(list)
RATE_LIMIT = 5          # messages
RATE_WINDOW = 3600      # per hour


def _rate_limited(ip: str) -> bool:
    now = time()
    _submissions[ip] = [t for t in _submissions[ip] if now - t < RATE_WINDOW]
    if len(_submissions[ip]) >= RATE_LIMIT:
        return True
    _submissions[ip].append(now)
    return False


# ---------------- Email sending ----------------
def send_email(msg: ContactMessage) -> None:
    if not SMTP_USER or not SMTP_PASSWORD:
        raise RuntimeError(
            "SMTP is not configured. Set SMTP_USER and SMTP_PASSWORD in .env"
        )

    email = EmailMessage()
    email["Subject"] = f"Portfolio contact — {msg.name}"
    email["From"] = SMTP_USER
    email["To"] = CONTACT_TO
    email["Reply-To"] = msg.email  # hit "Reply" and it goes to the visitor
    email.set_content(
        f"New message from your portfolio site\n"
        f"{'-' * 40}\n"
        f"Name:  {msg.name}\n"
        f"Email: {msg.email}\n"
        f"{'-' * 40}\n\n"
        f"{msg.message}\n"
    )

    context = ssl.create_default_context()
    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
        server.starttls(context=context)
        server.login(SMTP_USER, SMTP_PASSWORD)
        server.send_message(email)


# ---------------- Routes ----------------
@app.post("/api/contact")
async def contact(msg: ContactMessage, request: Request):
    client_ip = request.client.host if request.client else "unknown"
    if _rate_limited(client_ip):
        raise HTTPException(
            status_code=429, detail="Too many messages — please try again later."
        )

    try:
        send_email(msg)
    except RuntimeError as exc:
        # Misconfiguration — surface a clear message
        raise HTTPException(status_code=503, detail=str(exc)) from exc
    except smtplib.SMTPException as exc:
        raise HTTPException(
            status_code=502, detail="Email delivery failed — please try again."
        ) from exc

    return {"ok": True}


@app.get("/api/health")
async def health():
    return {"status": "ok"}


# Serve the frontend (must be mounted last so /api routes win)
if FRONTEND_DIR.exists():
    app.mount("/", StaticFiles(directory=FRONTEND_DIR, html=True), name="frontend")
