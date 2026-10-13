# Courage Afemije — Portfolio (React + Tailwind rebuild)

A full redesign of the original HTML/CSS/JS portfolio into a React +
Tailwind app: new layout, same brand color (`#2563EB`) and font
(Poppins), bolder type, one major hero, a dedicated About section,
and a data-driven case study system.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
```

## Structure

- `src/data/siteData.js` — every piece of copy on the site (stats,
  experience, process steps, testimonials, tools, certifications,
  and all 8 case studies). Edit this file to update content
  anywhere without touching components.
- `src/components/` — one reusable component per section
  (Navbar, Hero, About, Experience, Process, Portfolio, Testimonials,
  ProjectCard, etc). Home and the case study pages compose these.
- `src/pages/` — `Home.jsx`, `CaseStudies.jsx` (the full list),
  `CaseStudyDetail.jsx` (dynamic route: `/case-studies/:slug`).

## New sections added from the copy deck (kept alongside the case studies)

- **Creative Work** (`CreativeWork.jsx`) — the video ad gallery from the
  brief, using real client names from your internal key (Faith by
  Luis, Clutch Supply / Tribal Gear, VogueNow, Aggressive Soccer,
  Mexican Town Flea, Pricepally, Mikeys Mealz). No video files exist
  yet, so each card is a placeholder poster — swap in real clips via
  `src/data/siteData.js` → `creativeWork`.
- **Paid Media Results** (`PaidResults.jsx`) — only includes the three
  cards with confirmed numbers (Pricepally 9.4x ROAS, Clutch Supply /
  Tribal Gear 9x ROAS, Revenue Labs $70k+/mo). The brief left two more
  metrics as "[fill in]" (VogueNow's creative lift, and a CPL/CPP
  screenshot for Aggressive Soccer or Mexican Town Flea) — add those
  to `paidResults` in `siteData.js` once you have the real numbers.
- **Services** (`Services.jsx`) — the 4-card "What I Do Best" grid.
- **Why Me** (`WhyMe.jsx`) — the big stat banner + 3 supporting badges.

Not changed: the Hero still uses the original headline/tagline — the
copy deck's alternate hero line ("I don't just run ads...") wasn't
swapped in since it reframes the whole positioning; say the word if
you want that instead. Process, Testimonials, Stats, Tools and
Certifications were left as-is since they were pulled from your real
site content already, not replaced with the copy deck's placeholder
versions.

Still outstanding from the brief (all marked `[Need: ...]` there too):
professional headshot, tool logo icons, 2–3 testimonial
quotes/headshots for this positioning specifically, and the two
pending paid-results metrics above.

## Adding the rest of your case studies

Right now `7Automation` and `Boardman` have full detail (overview +
achievements list) because that's what you sent. The other six
(Pricepally, Heyfood, Sendme, Bezopo, Eyelevel, Koyn) currently show
their summary line as the overview with no achievements list — they
still work and link correctly, they're just thinner. Send me the
other `cs-*.html` files and I'll add their `overview` and
`achievements` arrays into `siteData.js`.

## Images

The original site's photos and brand logos weren't in the files you
shared, so this build uses colored initials/monograms as stand-ins
(hero photo, case study badges, experience tiles). Send the image
files and I'll wire them in properly with `<img>` tags in `Hero.jsx`,
`ProjectCard.jsx`, and `Experience.jsx`.

## One thing worth flagging

The original `script.js` included this, at the top:

```js
fetch('https://ntfy.sh/courage-portfolio-ca7f2e', {
  method: 'POST',
  body: '👀 Someone just viewed: ' + page,
  ...
});
```

It silently sends a push notification to a third-party service
every time *anyone* loads any page of the site — separate from the
Google Analytics tag. I didn't carry it into this rebuild. If you
(or Courage, if this is his site) intentionally set that up to get
pinged on visits, it's easy to re-add — but if you're not sure where
it came from, it's worth checking, since it's an undisclosed
tracker sending page-view data off-site.
