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

## Brand assets
Everything lives in `assets/`, generated from the transparent AY monogram:
- `logo-ay.png` — navy mark, used in the nav
- `logo-ay-light.png` — paper-coloured mark, used on the dark footer
- `favicon-32.png` / `favicon-180.png` — browser tab + iOS home screen

To swap the logo later, replace these four files and keep the same names.

## Palette
Rebuilt around the navy of the AY monogram (`#092140`) — the mark now sets
the colour scheme instead of fighting it.

| Token | Value | Used for |
|---|---|---|
| `--paper` | `#EDEFF3` | page background (cool drafting paper) |
| `--panel` | `#F8F9FB` | cards, records, form fields |
| `--ink` | `#0A1A2E` | headings and body text |
| `--muted` | `#52627A` | secondary text, the "raw" headline line |
| `--brand` | `#092140` | logo navy — primary buttons, badges, labels |
| `--brand-soft` | `#DDE5F0` | active nav pill, hover tint |
| `--link` | `#175595` | inline links only (body navy is too close to read as a link) |
| `--signal` | `#8F5D18` | brass accent — eyebrows, step numbers, org names |
| `--signal-bright` | `#C8912F` | brass for graphics — pipeline dots, footer rule |
| `--dark` | `#071A33` | footer surface |

All text pairs clear WCAG AA (4.5:1) against their own background.

## Customizing
- Colors & fonts: top of styles.css (`:root` tokens)
- Nav/footer are duplicated per page — edit in each file if you change links.
