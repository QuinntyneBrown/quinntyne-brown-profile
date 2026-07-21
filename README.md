# Quinntyne Brown profile

A one-page personal profile inspired by the FaithTech design system.

## Local preview

From the repository root:

```powershell
python -m http.server 8000 --directory docs
```

Then open <http://127.0.0.1:8000/mocks/>.

## Deployment

The [GitHub Pages workflow](.github/workflows/deploy-pages.yml) publishes the contents of `docs/mocks` whenever `main` changes. The deployed artifact treats that folder as the site root, so `docs/mocks/index.html` is served at `/`.

The Pages custom domain is `quinntynebrown.com`. Namecheap DNS must contain the following non-conflicting records:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `quinntynebrown.github.io` |

Keep unrelated email records in place. DNS propagation and GitHub's HTTPS certificate issuance can take time after the records change.
