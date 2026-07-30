# Ajdin Salihović — Portfolio

Multi-page static site. No build step — plain HTML/CSS/JS. Works on GitHub Pages as-is.

## Pages
- index.html — home (hero, animated pipeline, highlights, about me section)
- work.html — full experience + skills
- freelance.html — services + process
- contact.html — inquiry form (FormSubmit → ajdin-salihovic@outlook.com)
- thanks.html — post-submit confirmation

## Deploy to GitHub Pages
1. Replace the contents of your `portfolio_ai` repo with these files (keep them at the repo root).
2. Commit & push. Site updates at https://ajdinsalihovic.github.io/portfolio_ai/

## Contact form — one-time activation
The form uses FormSubmit (free, no backend). The FIRST time someone submits,
FormSubmit emails ajdin-salihovic@outlook.com a confirmation link — click it once
and every future submission lands in your inbox.

If you ever deploy to a different domain, update the `_next` hidden input in
contact.html to point at your new thanks.html URL.

## Customizing
- Colors & fonts: top of styles.css (`:root` tokens)
- Nav/footer are duplicated per page — edit in each file if you change links.
