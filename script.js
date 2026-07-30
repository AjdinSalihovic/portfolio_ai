// Scroll-in reveal
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
  { threshold: 0.08 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
