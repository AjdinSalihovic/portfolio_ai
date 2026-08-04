# Ajdin Salihović — Portfolio

Multi-page static site. No build step — plain HTML/CSS/JS. Works on GitHub Pages as-is.

## Pages
- index.html — home (hero, animated pipeline, highlights, about me section)
- work.html — full experience + skills
- freelance.html — services + process
- contact.html — inquiry form (FormSubmit → ajdin-salihovic@outlook.com)
- thanks.html — post-submit confirmation
- serve.py — local preview server (matches GitHub Pages URL behaviour)

## Deploy to GitHub Pages
1. Copy these files into your `portfolio_ai` repo, at the repo root.
   Copy them *over* the existing files rather than replacing the folder,
   so you keep your git history.
2. Commit & push. Site updates at https://ajdinsalihovic.github.io/portfolio_ai/

## Clean URLs
Pages are linked without the `.html` extension — `/work`, `/freelance`,
`/contact` — and the home link is just `./`. The files themselves are still
named `work.html` etc; GitHub Pages resolves the extensionless path to the
`.html` file automatically, so no config, redirects or Jekyll is needed.

Trade-off: this only works over HTTP. If you open `index.html` by
double-clicking it, the nav links will 404, because there's no server to do
the resolving. Use the included preview server instead:

    python3 serve.py     # then open http://localhost:8000

(Plain `python3 -m http.server` won't work — it doesn't resolve
extensionless URLs.)

If you ever move off GitHub Pages, check the new host does the same thing.
Netlify and Cloudflare Pages do; some others don't, in which case put each
page in its own folder as `work/index.html` and link to `/work/`.

## Contact form — one-time activation
The form uses FormSubmit (free, no backend). The FIRST time someone submits,
FormSubmit emails ajdin-salihovic@outlook.com a confirmation link — click it once
and every future submission lands in your inbox.

If you ever deploy to a different domain, update the `_next` hidden input in
contact.html to point at your new /thanks URL.

## Brand assets
The AY monogram is **embedded directly in the code** as base64 data URIs, so
there are no image files to lose when deploying:
- nav mark (navy) and footer mark (light) — both in `styles.css`, under
  `.brand-mark` and `.footer-mark`
- browser tab icon — in the `<link rel="icon">` of each HTML file

The `assets/` folder holds the full-resolution originals for your own use
(social profiles, business cards, etc). Only `favicon-180.png` (the iOS
home-screen icon) is still loaded from it; everything else works without it.

To swap the logo later, regenerate the data URIs — resize the new mark to
about 120px wide, save as PNG, base64-encode it, and replace the string
inside the `url("data:image/png;base64,...")` in `styles.css`.

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
