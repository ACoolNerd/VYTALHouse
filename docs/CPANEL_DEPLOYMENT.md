# VYTAL House — GoDaddy cPanel Deployment

## Current production diagnosis

The apex domain `vytalhouse.com` resolves and serves HTTPS content, but the deployed document root is currently serving the standalone VYTAL Pouches prototype rather than the VYTAL House master ecosystem.

## Controlled deployment sequence

1. In GoDaddy Hosting, open **cPanel Admin**.
2. Open **Domains** and confirm the exact **Document Root** assigned to `vytalhouse.com`.
3. Open **File Manager** and create a backup of the current VYTAL document root before replacing files.
4. Build this repository locally with:

```bash
npm install
npm run predeploy
```

5. Upload the **contents of `dist/`** into the VYTAL document root. `index.html` must sit directly in that document root.
6. Confirm `.htaccess` exists in the deployed root. In File Manager settings, enable **Show Hidden Files** if necessary.
7. Visit `/`, `/vytal-arc`, `/vytal-one`, `/products/vytal-air`, and `/brand-system` in a private browser window.
8. Purge any GoDaddy/CDN/browser cache if the old Pouches prototype still appears.

## DNS / SSL

The apex domain is already serving HTTPS. Verify the `www` DNS record separately if `www.vytalhouse.com` is required. Do not change apex DNS while the site is already resolving unless the hosting target is intentionally being moved.

## Public-claim discipline

The public shell must not silently convert draft assumptions into facts. Product composition, pricing, clinical claims, regulatory status, biometric functionality, commercial availability, and e-commerce activation require verification before public representation.
