// Scroll-in reveal
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
  { threshold: 0.08 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Hide "scroll" hints on tracks that don't actually overflow
(function () {
  const tracks = document.querySelectorAll(".experience-track, .projects-track");
  if (!tracks.length) return;
  function update() {
    tracks.forEach((track) => {
      const hint = track.parentElement.querySelector(".scroll-hint");
      if (!hint) return;
      hint.style.visibility = track.scrollWidth > track.clientWidth + 8 ? "visible" : "hidden";
    });
  }
  update();
  window.addEventListener("resize", update);
})();

// Contact form: show a sending state so double-submits don't happen
(function () {
  const form = document.querySelector(".form");
  if (!form) return;
  form.addEventListener("submit", () => {
    const btn = form.querySelector('button[type="submit"]');
    if (!btn) return;
    btn.setAttribute("aria-busy", "true");
    // disable after the submit has been dispatched, so the click still counts
    setTimeout(() => { btn.disabled = true; }, 0);
  });
})();
