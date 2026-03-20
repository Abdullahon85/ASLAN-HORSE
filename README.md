# ASLAN Horse Club — Website

Vue 3 + Vite single-page landing for ASLAN конный клуб, Ташкент.

---

## Quick Start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build
```

---

## Image Setup

Place your photos in `public/images/`:

```
public/
└── images/
    ├── hero.jpg              ← Hero section background (1920×1080+)
    ├── about-team.jpg        ← About section team photo (800×600+)
    ├── og-cover.jpg          ← Open Graph preview (1200×630)
    └── gallery/
        ├── training-1.jpg
        ├── training-2.jpg
        ├── training-3.jpg
        ├── training-4.jpg
        ├── competition-1.jpg
        ├── competition-2.jpg
        ├── competition-3.jpg
        ├── competition-4.jpg
        ├── photo-1.jpg
        ├── photo-2.jpg
        ├── photo-3.jpg
        └── photo-4.jpg
```

All images have graceful fallback placeholders — the site works without them.

---

## Before Launch Checklist

1. **GA4**: replace `G-XXXXXXXXXX` in `index.html` with your real Measurement ID
2. **Phone numbers**: confirm `+998882586565` and `+998959090875` are correct
3. **Domain / canonical URL**: update `https://aslan-horse.uz` in `index.html`
4. **Photos**: drop real images into `public/images/`
5. **Form backend**: in `LeadFormSection.vue`, replace the `setTimeout` stub with a real API call (Formspree, EmailJS, your backend)
6. **Map embed**: in `ContactSection.vue`, replace the placeholder with a real Google Maps `<iframe>` embed

---

## Analytics Events Tracked

| Event            | Trigger                          |
| ---------------- | -------------------------------- |
| `click_to_call`  | Any phone link click             |
| `whatsapp_click` | WhatsApp button click            |
| `form_submit`    | Lead form submission             |
| `gallery_click`  | Gallery photo open               |
| `cta_click`      | CTA button click (with location) |

---

## Project Structure

```
src/
├── main.js
├── style.css                  ← Global CSS variables & utilities
├── App.vue
├── composables/
│   └── useAnalytics.js        ← GA4 + Meta Pixel event helpers
└── components/
    ├── SiteHeader.vue         ← Fixed nav with mobile menu
    ├── StickyMobileBar.vue    ← Fixed bottom Call/WA bar (mobile)
    ├── HeroSection.vue        ← Full-screen hero
    ├── BenefitsSection.vue    ← 4 benefit cards
    ├── ServicesSection.vue    ← 5 service cards
    ├── TestimonialsSection.vue ← Reviews + stats
    ├── AboutSection.vue       ← Team & infrastructure
    ├── PricesSection.vue      ← Pricing cards + schedule
    ├── GallerySection.vue     ← Photo gallery with lightbox
    ├── FAQSection.vue         ← Accordion FAQ
    ├── LeadFormSection.vue    ← Lead capture form
    ├── ContactSection.vue     ← Contact info + map
    └── SiteFooter.vue         ← Footer with CTA
```
