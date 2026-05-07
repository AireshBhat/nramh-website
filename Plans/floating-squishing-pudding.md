# Plan: Add Brand Logos to Website

## Context
The website currently uses a generic `Cross` icon from lucide-react as a placeholder logo in both the Navbar and Footer. Brand assets exist in `~/Downloads/Kimi Agent Logo Asset/acharya_hospital_brand_assets/` with proper detailed vector logos (~165KB each). We need to copy the correct variants to `public/`, wire them into the components, and create a proper favicon.

The user also plans to add dark theme later, so we store both navy-bg and cream-bg variants for future use.

## Changes

### 1. Copy brand assets to `public/` with proper names

Source: `~/Downloads/Kimi Agent Logo Asset/acharya_hospital_brand_assets/`

| Source file | Destination (`public/`) | Purpose |
|---|---|---|
| `01_primary_fullcolor.svg` | `logo-primary-navy.svg` | Navbar & Footer icon (dark backgrounds) |
| `02_inverse_fullcolor.svg` | `logo-inverse-cream.svg` | Future dark theme (light backgrounds) |
| `03_mono_cream_on_navy.svg` | `logo-mono-cream.svg` | Future mono/print use |
| `06_symbol_only.svg` | `favicon.svg` | Browser favicon (symbol-only, no text) |

- Delete the existing `public/logo.svg` (was a placeholder horizontal lockup)
- Replace existing `public/favicon.svg` with the real symbol-only mark

### 2. Add favicon to `index.html`
- Add `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />` to `<head>`

### 3. Update Navbar logo ([src/components/Navbar.tsx](src/components/Navbar.tsx))
- Remove `Cross` from the lucide-react import
- Replace the placeholder div (lines 40-42: rounded bg circle + Cross icon) with:
  ```tsx
  <img src="/logo-primary-navy.svg" alt="Hospital logo" className="w-10 h-10 rounded-full object-cover" />
  ```
- Keep the hospital name text span as-is

### 4. Update Footer logo ([src/components/Footer.tsx](src/components/Footer.tsx))
- Remove `Cross` from the lucide-react import
- Replace the placeholder div (lines 12-14) with:
  ```tsx
  <img src="/logo-primary-navy.svg" alt="Hospital logo" className="w-10 h-10 rounded-full object-cover" />
  ```
- Keep the hospital name text and mission statement

## Files to Modify
- `public/favicon.svg` — replace with `06_symbol_only.svg`
- `public/logo-primary-navy.svg` — new (copy from `01_primary_fullcolor.svg`)
- `public/logo-inverse-cream.svg` — new (copy from `02_inverse_fullcolor.svg`)
- `public/logo-mono-cream.svg` — new (copy from `03_mono_cream_on_navy.svg`)
- `public/logo.svg` — delete (unused placeholder)
- `index.html` — add favicon link tag
- `src/components/Navbar.tsx` — replace Cross icon with brand mark img
- `src/components/Footer.tsx` — replace Cross icon with brand mark img

## Notes
- The SVGs are ~165KB each (detailed vector illustrations) — fine for img tags (cached, gzip-compressed)
- `06_symbol_only.svg` is the primary logo cropped to just the circular emblem (no wordmark text) — ideal for favicon
- `02_inverse_fullcolor.svg` (cream bg) stored for future dark theme toggle

## Verification
1. Run `npm run dev` and visually confirm:
   - Browser tab shows the detailed caduceus emblem favicon
   - Navbar displays the full-color emblem instead of the Cross icon
   - Footer displays the same emblem
2. Check both desktop and mobile views
3. Verify the round emblem integrates well with the dark nav/footer backgrounds
4. Confirm `logo-inverse-cream.svg` exists for future light-theme use
