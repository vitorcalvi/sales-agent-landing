# Fix: WhatsApp Link Preview for 247.dyagnosys.com

**Project:** `sales-agent-landing/` (Next.js App Router, deployed on Vercel)
**Goal:** When `https://247.dyagnosys.com`, `https://247.dyagnosys.com/en`, or `https://247.dyagnosys.com/pt` is sent in WhatsApp, it must show a rich preview card (title + description + image) instead of a bare URL.

---

## Root cause

The site has correct OG tags and a working `/api/og/` image generator, but **all URLs point to the old domain `247sales.dyagnosys.com`**. The new domain is `247.dyagnosys.com`. WhatsApp's crawler fetches the URL it receives — if the meta tags reference a different domain, the preview may show nothing or stale data.

Additionally, WhatsApp's crawler has specific requirements: the OG image must be reachable by a simple GET without redirects, must have correct `Content-Type: image/*`, and the page HTML must render OG tags server-side (no client-only rendering).

---

## Changes required (5 files)

---

### 1. `app/layout.tsx` — update root `siteUrl`

**Find:**
```ts
const siteUrl = 'https://247sales.dyagnosys.com'
```
**Replace with:**
```ts
const siteUrl = 'https://247.dyagnosys.com'
```

Also update the OG image alt text at the bottom bar — find this string inside the file:
```ts
'247sales.dyagnosys.com'
```
Replace with:
```ts
'247.dyagnosys.com'
```

---

### 2. `app/en/page.tsx` — update locale `siteUrl`

**Find:**
```ts
const siteUrl = 'https://247sales.dyagnosys.com'
```
**Replace with:**
```ts
const siteUrl = 'https://247.dyagnosys.com'
```

Also remove trailing slashes from canonical and alternate URLs so WhatsApp doesn't follow a redirect:

**Find:**
```ts
canonical: `${siteUrl}/en/`,
languages: {
  en: `${siteUrl}/en/`,
  pt: `${siteUrl}/pt/`,
},
```
**Replace with:**
```ts
canonical: `${siteUrl}/en`,
languages: {
  en: `${siteUrl}/en`,
  pt: `${siteUrl}/pt`,
},
```

**Find:**
```ts
url: `${siteUrl}/en/`,
```
**Replace with:**
```ts
url: `${siteUrl}/en`,
```

---

### 3. `app/pt/page.tsx` — same changes as en/page.tsx

**Find:**
```ts
const siteUrl = 'https://247sales.dyagnosys.com'
```
**Replace with:**
```ts
const siteUrl = 'https://247.dyagnosys.com'
```

Remove trailing slashes:

**Find:**
```ts
canonical: `${siteUrl}/pt/`,
languages: {
  en: `${siteUrl}/en/`,
  pt: `${siteUrl}/pt/`,
},
```
**Replace with:**
```ts
canonical: `${siteUrl}/pt`,
languages: {
  en: `${siteUrl}/en`,
  pt: `${siteUrl}/pt`,
},
```

**Find:**
```ts
url: `${siteUrl}/pt/`,
```
**Replace with:**
```ts
url: `${siteUrl}/pt`,
```

---

### 4. `app/api/og/route.tsx` — update domain label in OG image

The generated image shows the domain in the bottom-left corner. Update it:

**Find:**
```tsx
247sales.dyagnosys.com
```
**Replace with:**
```tsx
247.dyagnosys.com
```

Also add explicit `Content-Type` header to help WhatsApp identify the image:

**Find:**
```ts
response.headers.set('Cache-Control', 'public, max-age=86400, s-maxage=3600')
response.headers.set('CDN-Cache-Control', 'public, max-age=3600')

return response
```
**Replace with:**
```ts
response.headers.set('Content-Type', 'image/png')
response.headers.set('Cache-Control', 'public, max-age=86400, s-maxage=3600')
response.headers.set('CDN-Cache-Control', 'public, max-age=3600')

return response
```

---

### 5. `app/components/JsonLd.tsx` — update schema.org URL

**Find:**
```ts
url: 'https://247sales.dyagnosys.com',
```
**Replace with:**
```ts
url: 'https://247.dyagnosys.com',
```

---

## WhatsApp preview requirements checklist

WhatsApp's link preview crawler (`WhatsApp/2.x`) requires:

| Requirement | Current status | Action |
|-------------|---------------|--------|
| `og:title` present in server-rendered HTML | ✅ Next.js metadata API renders it | No change |
| `og:description` present | ✅ | No change |
| `og:image` with absolute URL | ✅ `/api/og/` | No change |
| OG image reachable without auth/redirect | ✅ edge function | No change |
| OG image `Content-Type: image/png` | ⚠️ not explicit | Add header (step 4) |
| OG image size ≥ 300×200 (1200×630 recommended) | ✅ | No change |
| Domain in meta tags matches URL sent | ❌ `247sales` ≠ `247` | Steps 1–3 |
| No trailing-slash redirect on canonical URL | ⚠️ may 301 | Steps 2–3 |

---

## Build & deploy

```bash
cd sales-agent-landing
yarn build
vercel --prod
```

**After deploy**, test by sending `https://247.dyagnosys.com/pt` and `https://247.dyagnosys.com/en` in a WhatsApp message to yourself. The preview should appear within a few seconds.

If WhatsApp still shows the old cached preview, use the WhatsApp Business API Link Preview Debugger or wait ~24h for cache expiry. You can also force a fresh fetch by adding a query param the first time: `https://247.dyagnosys.com/pt?v=2` (then share the clean URL afterwards).
