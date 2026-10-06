# Quinntyne Brown profile

The one-page site for Quinntyne Brown Consulting: ink on white, Archivo from Google Fonts, no other external dependencies.

## Layout

| Path | Purpose |
| --- | --- |
| `site/` | The production site. Everything here is published as-is. |
| `site/index.html` | The entire page — markup and styles in one self-contained file. |
| `site/portrait.jpg` | Portrait used in the About section and as the Open Graph image. |
| `site/covers/` | Cover images for the Selected Projects cards, one per pinned GitHub repository. Sources and the render script live in `docs/covers/`. |
| `site/CNAME` | Asserts the `quinntynebrown.com` custom domain on every deployment. |
| `site/Quinntyne-Brown-Resume.pdf` | Public-safe résumé download (no phone number). Regenerate from `C:\projects\Resume` (`content/tailored/public-site.md`). |
| `docs/` | Documentation about the repository. Not published. |
| `docs/covers/` | Sources for the project cover images and the script that renders them. See [docs/covers/README.md](docs/covers/README.md). |
| `docs/improvements.html` | Historical visual review of the previous FaithTech-styled profile, benchmarked against [mitchell-newell.com](https://mitchell-newell.com/). |
| `.github/workflows/deploy-pages.yml` | Builds and deploys `site/` to GitHub Pages. |

## Local preview

From the repository root:

```powershell
python -m http.server 8000 --directory site
```

Then open <http://127.0.0.1:8000/>.

## Deployment

Pushing to `main` publishes `site/` to GitHub Pages at <https://quinntynebrown.com/>.

See [docs/deployment.md](docs/deployment.md) for the custom domain, DNS records, and HTTPS recovery steps.
