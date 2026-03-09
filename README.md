# Brave Camp — Beta Website

**A program of [Today, I'm Brave Foundation](https://todayimbrave.org)**

Beta website for Brave Camp, a free weeklong overnight camp experience for middle school kids from Harlem, hosted at Camp Eagle Hill in Elizaville, NY.

## Live Preview

Deploy to GitHub Pages or open `index.html` in a browser.

## Structure

```
index.html    — Self-contained single-page app (React 18 + Babel standalone)
README.md     — This file
```

The site is intentionally a single file for simplicity during beta development. All images are embedded as base64. For production, images should be extracted to a `/images` directory and served separately.

## Pages

- **Home** — Hero, value pillars, stats, photo strip, donor module, press logos
- **The Program** — Brave Journey methodology, daily schedule, activities, facility
- **Who It's For** — Eligibility, what's included, how to apply, first-timer section
- **Safety & Care** — Supervision, medical, emotional wellbeing, communication
- **Stories** — Testimonials, photo gallery, press coverage
- **FAQ** — Accordion-style answers organized by concern category
- **Support Us** — Giving levels, monthly option, tax-deductible confirmation

## Tech

- React 18 (via CDN)
- Babel standalone (for JSX in-browser)
- Google Fonts: Fraunces (serif display) + DM Sans (body)
- No build step required
- Mobile responsive

## Notes

- Images are AI-generated placeholders for design purposes only. They must be replaced with real photographs before public launch.
- Parent testimonial placeholders are marked — T,IB must supply real quotes.
- Stats (camper count, year number, ratios) need confirmation from T,IB leadership.
- Giving levels ($50/$200/$500) need validation against actual per-camper costs.

## Contact

support@todayimbrave.org

---

Today, I'm Brave® is a registered 501(c)(3) nonprofit organization | EIN: 81-4843811
