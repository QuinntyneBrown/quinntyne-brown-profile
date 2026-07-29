# Deployment

The [GitHub Pages workflow](../.github/workflows/deploy-pages.yml) publishes the contents of `site/` whenever `main` changes. Pages is in `workflow` build mode, so the uploaded artifact becomes the site root — `site/index.html` is served at `/`, and the folder name never appears in a URL.

## Custom domain

The Pages custom domain is `quinntynebrown.com`.

`site/CNAME` must stay in place and contain `quinntynebrown.com`. Because the workflow publishes `site/` as the site root, that file is what asserts the custom domain on every deployment. Without it GitHub serves the default `*.github.io` certificate for `quinntynebrown.com` and HTTPS fails with `ERR_CERT_COMMON_NAME_INVALID`.

## DNS

Namecheap DNS must contain the following non-conflicting records:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `quinntynebrown.github.io` |

Keep unrelated email records in place. DNS propagation and GitHub's HTTPS certificate issuance can take time after the records change.

## Recovering broken HTTPS

Check the certificate state first:

```powershell
gh api repos/QuinntyneBrown/quinntyne-brown-profile/pages
```

A missing `https_certificate` field means GitHub never requested a certificate. Removing and re-adding the custom domain restarts issuance, after which `https_enforced` can be turned back on:

```powershell
'{"cname":null}' | gh api -X PUT repos/QuinntyneBrown/quinntyne-brown-profile/pages --input -
'{"cname":"quinntynebrown.com"}' | gh api -X PUT repos/QuinntyneBrown/quinntyne-brown-profile/pages --input -
'{"https_enforced":true}' | gh api -X PUT repos/QuinntyneBrown/quinntyne-brown-profile/pages --input -
```
