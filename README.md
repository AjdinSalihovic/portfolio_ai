# Ajdin Salihović — Portfolio

A production-ready personal portfolio with a separated frontend (HTML / CSS / JS) and a FastAPI backend that emails you contact-form submissions.

## Structure

```
portfolio/
├── frontend/
│   ├── index.html        # page structure & content
│   ├── css/styles.css    # "Pipeline & Stone" design system
│   └── js/main.js        # pipeline animation, reveals, contact form
├── backend/
│   ├── main.py           # FastAPI: /api/contact endpoint + serves frontend
│   ├── requirements.txt
│   └── .env.example      # copy to .env and fill in SMTP settings
└── README.md
```

## Run locally

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env        # fill in SMTP_USER, SMTP_PASSWORD, CONTACT_TO
uvicorn main:app --reload --port 8000
```

Open http://localhost:8000 — the backend serves the frontend and handles the contact form at `/api/contact`.

To preview the frontend alone (no email sending), just open `frontend/index.html` in a browser. The form will fall back to a pre-filled mailto link if the backend isn't reachable.

## Before you publish — 3 edits

1. **Your email** — in `frontend/index.html`, replace `you@example.com` (appears twice: the `mailto:` href and the visible text).
2. **SMTP credentials** — in `backend/.env` (Gmail: use an App Password, not your real password).
3. **Optional** — tweak copy, add project links, swap the LinkedIn URL if needed.

## Deploy (Render — same platform as LP Atlas)

1. Push this folder to a GitHub repo.
2. New → Web Service, root directory: `backend`
   - Build command: `pip install -r requirements.txt`
   - Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
3. Add environment variables: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `CONTACT_TO`.
4. Done — one service serves both frontend and API.

If you'd rather host the frontend separately (Netlify/Vercel/GitHub Pages), deploy only `backend/` to Render and set `API_BASE` at the top of `frontend/js/main.js` to your backend URL, plus `ALLOWED_ORIGINS` in the backend env to your frontend domain.

## Features

- Animated SVG data pipeline in the hero (your actual workflow: sources → ingestion → enrichment → delivery)
- Scroll-triggered reveals and animated stat counters (both respect `prefers-reduced-motion`)
- Fully responsive down to mobile, with keyboard-visible focus states
- Contact form with client-side validation, server-side rate limiting (5/hour per IP), and a mailto fallback if the backend is down
- `Reply-To` set to the visitor's address — hit Reply in your inbox and it goes straight to them
