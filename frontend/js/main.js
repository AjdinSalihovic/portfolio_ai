/* ============================================================
   Ajdin Salihović — Portfolio
   main.js — pipeline animation, scroll reveals, stat counters,
   mobile nav, and contact form submission.
   ============================================================ */

// -------- Config --------
// Point this at your deployed backend. Leave "" to use same-origin
// (works when the FastAPI backend also serves the frontend).
const API_BASE = "";

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// -------- Footer year --------
document.getElementById("year").textContent = new Date().getFullYear();

// -------- Mobile nav --------
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  // Close menu when a link is tapped
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// -------- Scroll reveals --------
const revealEls = document.querySelectorAll(".reveal");

if (prefersReducedMotion) {
  revealEls.forEach((el) => el.classList.add("visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
}

// -------- Stat counters --------
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  if (prefersReducedMotion || target <= 10) {
    el.textContent = target.toLocaleString("en-US");
    return;
  }
  const duration = 1200;
  const start = performance.now();
  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
    el.textContent = Math.round(target * eased).toLocaleString("en-US");
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const stripNums = document.querySelectorAll(".strip-num");
const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);
stripNums.forEach((el) => countObserver.observe(el));

// -------- Pipeline packet animation --------
// Moves teal "data packets" along the SVG pipe paths continuously.
(function pipelineAnimation() {
  if (prefersReducedMotion) return;

  const packets = document.querySelectorAll(".packet");
  if (!packets.length) return;

  const paths = {};
  document.querySelectorAll(".pipe").forEach((p) => {
    paths[p.id] = { el: p, length: p.getTotalLength() };
  });

  const SPEED = 0.00012; // fraction of path per ms

  function frame(now) {
    packets.forEach((packet) => {
      const path = paths[packet.dataset.path];
      if (!path) return;
      const offset = parseFloat(packet.dataset.offset) || 0;
      const progress = (now * SPEED + offset) % 1;
      const point = path.el.getPointAtLength(progress * path.length);
      packet.setAttribute("cx", point.x);
      packet.setAttribute("cy", point.y);
      // Fade in/out at the ends so packets don't pop
      const edge = Math.min(progress, 1 - progress);
      packet.style.opacity = Math.min(edge * 8, 1).toFixed(2);
    });
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

// -------- Contact form --------
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");
const submitBtn = document.getElementById("cf-submit");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    statusEl.className = "form-status";

    if (!name || !email || !message) {
      statusEl.textContent = "Please fill in all three fields.";
      statusEl.classList.add("err");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      statusEl.textContent = "That email address doesn't look right.";
      statusEl.classList.add("err");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
    statusEl.textContent = "";

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || `Request failed (${res.status})`);
      }

      statusEl.textContent = "Message sent. I'll get back to you soon.";
      statusEl.classList.add("ok");
      form.reset();
    } catch (err) {
      console.error("Contact form error:", err);
      // Graceful fallback: open the visitor's mail client pre-filled.
      const mailto = document.getElementById("mailto-link");
      const address = mailto ? mailto.textContent.trim() : "";
      statusEl.innerHTML = address
        ? `Couldn't reach the server — <a href="mailto:${address}?subject=${encodeURIComponent(
            "Portfolio contact from " + name
          )}&body=${encodeURIComponent(message)}">email me directly</a> instead.`
        : "Couldn't reach the server. Please try again later.";
      statusEl.classList.add("err");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send message";
    }
  });
}
