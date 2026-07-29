# Quinntyne Brown profile

A one-page personal profile inspired by the FaithTech design system.

## Layout

| Path | Purpose |
| --- | --- |
| `site/` | The production site. Everything here is published as-is. |
| `site/index.html` | The entire page — markup and styles in one self-contained file. |
| `site/CNAME` | Asserts the `quinntynebrown.com` custom domain on every deployment. |
| `docs/` | Documentation about the repository. Not published. |
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
