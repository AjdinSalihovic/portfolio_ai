# Ajdin Salihović — Portfolio

Multi-page static site. No build step — plain HTML/CSS/JS. Deploys as-is to
Vercel, GitHub Pages, Netlify or Cloudflare Pages.

## Pages
- index.html — home (hero, animated pipeline, highlights, about me section)
- work.html — freelance offer + process, then experience + skills (one page).
  The experience half has `id="experience"`, so `/work#experience` deep-links
  straight to it.
- freelance.html — retired. Kept only as a redirect to /work so old links and
  bookmarks don't 404. Safe to delete once nothing points at it.
- contact.html — inquiry form (FormSubmit → ajdin-salihovic@outlook.com)
- thanks.html — post-submit confirmation
- serve.py — local preview server (matches live URL behaviour)
- vercel.json — enables clean URLs on Vercel

## Deploy
Copy these files into your repo root — copy them *over* the existing files
rather than replacing the folder, so you keep your git history. Commit and
push; your host rebuilds automatically.

Keep `vercel.json` at the repo root if you deploy on Vercel. It's harmless
on other hosts, so the same files work everywhere.

## Clean URLs
Pages are linked without the `.html` extension — `/work`, `/freelance`,
`/contact` — and the home link is just `./`. The files themselves are still
named `work.html` etc; the host maps the extensionless path to the file.

**This needs host support, and hosts differ:**

| Host | What's needed |
|---|---|
| Vercel | `vercel.json` with `"cleanUrls": true` — included in this repo |
| GitHub Pages | nothing, it does this automatically |
| Netlify / Cloudflare Pages | nothing, on by default |

Deleting `vercel.json` will break every link on Vercel with a 404.

Trade-off: clean URLs only work over HTTP. If you open `index.html` by
double-clicking it, the nav links will 404, because there's no server to do
the resolving. Use the included preview server instead:

    python3 serve.py     # then open http://localhost:8000

(Plain `python3 -m http.server` won't work — it doesn't resolve
extensionless URLs.)

## Contact form — one-time activation
The form uses FormSubmit (free, no backend). The FIRST time someone submits,
FormSubmit emails ajdin-salihovic@outlook.com a confirmation link — click it once
and every future submission lands in your inbox.

**The `_next` hidden input in contact.html must be the full URL of your own
live site's /thanks page.** It currently points at the GitHub Pages domain —
if you're serving from Vercel or a custom domain, change it, or people who
submit the form land on the wrong site.

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
