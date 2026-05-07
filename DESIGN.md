---
name: Dr. N.R. Acharya Memorial Hospital
description: A 40+ year community hospital on the Karavali coast of Karnataka, the family doctor at scale.
colors:
  hospital-navy: "#0A2540"
  hospital-navy-deep: "#081C32"
  clinical-teal: "#14B8A6"
  clinical-teal-light: "#2DD4BF"
  clinical-teal-deep: "#0D9488"
  surgical-mint: "#E0F2F1"
  paper-white: "#F8FAFB"
  white: "#FFFFFF"
  ink: "#1A2332"
  muted-slate: "#64748B"
  light-slate: "#94A3B8"
  divider: "#E2E8F0"
  emergency-red: "#B91C1C"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.25rem, 4vw + 1rem, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(1.875rem, 2vw + 1rem, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, Noto Sans Kannada, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, Noto Sans Kannada, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "10px"
  xl: "12px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "80px"
  xxl: "112px"
components:
  button-primary:
    backgroundColor: "{colors.clinical-teal}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.clinical-teal-light}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.hospital-navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.hospital-navy-deep}"
    textColor: "{colors.white}"
  button-outline-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.xl}"
    padding: "24px"
  card-surface-tinted:
    backgroundColor: "{colors.paper-white}"
    rounded: "{rounded.xl}"
    padding: "24px"
  pill:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.muted-slate}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  pill-active:
    backgroundColor: "{colors.clinical-teal}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  icon-container:
    backgroundColor: "{colors.surgical-mint}"
    textColor: "{colors.clinical-teal-deep}"
    rounded: "{rounded.full}"
    size: "48px"
  badge-soft:
    backgroundColor: "{colors.surgical-mint}"
    textColor: "{colors.clinical-teal-deep}"
    rounded: "{rounded.sm}"
    padding: "4px 12px"
---

# Design System: Dr. N.R. Acharya Memorial Hospital

## 1. Overview

**Creative North Star: "The Karavali Family Doctor"**

This system is for Dr. N.R. Acharya Memorial Hospital, a 40+ year community hospital on the Karavali coast of Karnataka, founded in 1983 in memory of Dr. N. R. Acharya. It is not a corporate hospital chain. It is not a Western health startup. It is the local family doctor at scale: a real institution with a real founder, a real address, real phone numbers, and decades of unbroken service to rural patients in Koteshwara and the surrounding villages of Udupi district.

The visual language is plain and professional. Warmth comes from tone and restraint, from plain language, generous spacing, real specifics, and human portraits, not from gradients, glassmorphism, animated flourish, or maximal color. The site's primary user arrives in a hurry, on a phone, on a 3G signal, with a sick relative in mind. Everything on the page must answer to that user first. Polish exists to get out of the way, never to detain them.

Structurally the system is restrained. Tinted neutrals, one accent (Clinical Teal) used sparingly, a calm Hospital Navy for committed surfaces (hero, footer, page headers), a Playfair Display + Inter pairing that signals institutional gravity without austerity. Bilingual support (Kannada + English) is a peer experience baked into the type stack, not a translation overlay applied at the end.

**Key Characteristics:**
- Plain and professional palette: institutional, not decorative.
- Serif display + humanist sans body: gravity in headings, clarity in reading.
- Flat surfaces at rest; hover-lift only as a response to interaction.
- Mobile-first geometry: large tap targets, type sized for arm-length phone reading.
- Bilingual-ready (Kannada + English) as a peer experience, not a translation overlay.
- Performance is a brand value: slow 3G is the design target, not an exception.

## 2. Colors: The Plain & Professional Palette

A deep institutional navy, a single clinical teal accent, and a warm-cool neutral spread that sits comfortably on a hospital wall and on a 3G phone.

### Primary
- **Hospital Navy** (`#0A2540`): the committed surface color. Used on the hero, page headers, the navbar (when scrolled), and the footer. Carries the institutional weight of the brand. Roughly 30% of any page that uses it.
- **Hospital Navy Deep** (`#081C32`): hover-state for navy buttons. Never used as a background.

### Secondary
- **Clinical Teal** (`#14B8A6`): the one accent. Used for the primary CTA, eyebrow text, section underline strokes, icon glyphs inside icon containers, active pill states. Used sparingly, under 10% of any screen. Its rarity is the point.
- **Clinical Teal Light** (`#2DD4BF`): hover-state for teal buttons; active link color on dark backgrounds.
- **Clinical Teal Deep** (`#0D9488`): icon-glyph color inside Surgical Mint containers; certain text accents on light backgrounds where Clinical Teal would be too bright.

### Tertiary
- **Surgical Mint** (`#E0F2F1`): the soft circle behind department and service icons; the section background that warms a teal CTA without competing with it; the badge surface for departments and availability tags. Allowed to carry up to ~20% of a page surface.

### Neutral
- **Paper White** (`#F8FAFB`): warm off-white surface for stat blocks, doctor-card grids, filter tabs, map placeholder. Default surface tint when white-on-white would be flat.
- **White** (`#FFFFFF`): card background, primary canvas.
- **Ink** (`#1A2332`): all body and heading text on light surfaces. Never use pure black.
- **Muted Slate** (`#64748B`): supporting body copy, captions, secondary metadata. Stays readable but recedes from the headline.
- **Light Slate** (`#94A3B8`): tertiary metadata only, like phone-number labels and breadcrumb separators. Use sparingly.
- **Divider** (`#E2E8F0`): all card borders, section borders, hairlines. Single weight only, 1px.

### System
- **Emergency Red** (`#B91C1C`): the dismissable emergency banner only. Never used elsewhere. Its rarity is what makes it work; it must remain the loudest color on any page it appears on.

### Named Rules

**The One Voice Rule.** Clinical Teal is the only chromatic accent. It carries primary CTAs, eyebrow labels, section underlines, and icon glyphs. It must not be paired with another saturated accent on the same screen. The legacy `--warm-gold` token defined in `src/index.css` is forbidden in production surfaces and should be removed.

**The Navy-Or-Mint Rule.** Strong sections use Hospital Navy (committed, institutional) or Surgical Mint (soft, calm). They never appear together as adjacent full-bleed sections; one must be separated from the other by a Paper White or White section to keep the rhythm legible.

**The Black-And-Pure-White Ban.** `#000000` and a flat printer's white are not in this palette. Text uses Ink (`#1A2332`); surfaces use White or Paper White.

## 3. Typography

**Display Font:** Playfair Display (with Georgia, serif as fallback)
**Body Font:** Inter (with Noto Sans Kannada and system-ui as fallbacks)

**Character:** A serif display paired with a humanist sans body. Playfair carries institutional gravity and connects to the founder-legacy framing without becoming archival or ornamental. Inter is the workhorse: humane, screen-optimized, bilingual-friendly when stacked with Noto Sans Kannada for the Kannada experience. The pairing reads as considered and grown-up, not template-y.

### Hierarchy

- **Display** (Playfair, 700, `clamp(2.25rem, 4vw + 1rem, 3.75rem)`, line-height 1.1): hero h1 only. One per page.
- **Headline** (Playfair, 700, `clamp(1.875rem, 2vw + 1rem, 2.25rem)`, line-height 1.2): section h2 across the site.
- **Title** (Playfair, 600, 1.25rem, line-height 1.4): card titles, doctor names, footer column headers.
- **Body** (Inter, 400, 1rem, line-height 1.65): all reading copy. Cap line length at 65 to 75 characters in long-form sections (About story, mission text).
- **Label** (Inter, 500, 0.75rem, letter-spacing 0.08em, UPPERCASE): the eyebrow above section headlines, button text, badges. The 0.08em tracking is the signature.

### Named Rules

**The Playfair-For-Headings-Only Rule.** Playfair Display is reserved for h1, h2, h3, and the hospital wordmark. It must never appear on body copy, button labels, navigation links, or form fields. Inter does the reading; Playfair does the framing.

**The 65ch Reading Rule.** All long-form body copy (About story, mission paragraphs, doctor bios) caps at 65 to 75 characters per line. Edge-to-edge prose is forbidden.

**The Single Display Per Page Rule.** Only one Display-size headline per page. Subsequent sections use Headline. This is what keeps the hierarchy readable rather than monumental.

**The Bilingual Pairing Rule.** Kannada copy uses Noto Sans Kannada at the same size and weight as the Inter equivalent. The two language layers must visually weigh the same on a page; the Kannada experience is never sized down or de-emphasized.

## 4. Elevation

This system is flat at rest. There are no ambient shadows on cards, sections, or surfaces under default conditions. Depth at rest is conveyed by tonal layering (Paper White on White, Surgical Mint on White), 1px Divider hairlines, and committed background colors (Hospital Navy sections, Surgical Mint sections).

Shadows appear only as a response to interaction. Cards lift on hover with a small upward translate (4px, `-translate-y-1`) and a soft `shadow-lg`. The navbar gains `shadow-lg` once the page has scrolled past 50px, signaling that the user is no longer at the page top. That is the entire shadow vocabulary.

### Shadow Vocabulary

- **shadow-xs** (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`): the resting hairline shadow available on form inputs and outline buttons. Optional; mostly invisible. Use only when a tonal border alone is insufficient.
- **shadow-lg** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`): the hover-lift shadow for cards and the scrolled-state navbar. Tailwind default. Don't introduce new tiers.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to state: hover, scroll, focus. A page on first paint has zero box-shadow except on inputs that ship with `shadow-xs`.

**The Two-Step-Shadow Ban.** No second elevation tier. We have hover (`shadow-lg`) and that is it. No "card resting at level 1, modal at level 4" Material Design ladder. If you need to communicate depth past hover, use background tone, not shadow.

## 5. Components

Components are refined and restrained: quiet shapes, generous internal padding, considered hover states, no playful bounces. Every component is designed to be reachable on a phone with one thumb.

### Buttons
- **Shape:** rounded-lg corners (8px). Pills (rounded-full) only for the navbar emergency CTA and filter tabs.
- **Primary:** Clinical Teal background, White text, 12-24px padding, 600 weight. Hover lightens to Clinical Teal Light. The default brand action.
- **Secondary on Light:** Hospital Navy background, White text, same padding. Used to balance a Primary teal CTA on the same surface (e.g. the founder section "Read Our Full Story" sits in Surgical Mint and uses navy).
- **Outline on Dark:** transparent background, `border-white/40`, White text. Used in the hero alongside the Primary CTA. Hover deepens to `bg-white/10`.
- **Ghost / Link:** Clinical Teal text, no background, underline on hover. Used for inline "View Doctors >" affordances inside cards.
- **Focus:** 3px Clinical Teal ring at 50% opacity. Visible on every interactive element.

### Pills (filter tabs and emergency CTA)
- **Shape:** rounded-full.
- **Inactive:** Paper White surface, Muted Slate text, 1px Divider border. Hover shifts background to Surgical Mint and text to Clinical Teal Deep.
- **Active:** Clinical Teal background, White text, no border.
- **Padding:** 16px horizontal, 8px vertical.

### Cards
- **Shape:** rounded-xl (12px). The friendly-but-serious shape.
- **Background:** White on Paper White sections; Paper White on White sections. Never card-on-card-on-card.
- **Border:** 1px Divider hairline at rest. Border shifts to Clinical Teal on hover (a 1px state change, not a glow).
- **Shadow Strategy:** none at rest. `shadow-lg` and `-translate-y-1` (4px) on hover, 300ms transition. See Elevation.
- **Internal Padding:** 24px on all sides (`p-6`).
- **Forbidden:** nested cards. A card never contains another card.

### Icon Containers
- **Shape:** rounded-full (circle), 48px (`w-12 h-12`) for inline use, 56px (`w-14 h-14`) for grid prominence.
- **Surface:** Surgical Mint background, Clinical Teal Deep glyph at 20-24px (lucide `w-5 h-5` or `w-6 h-6`).
- **Use:** the leading affordance on every department card, value card, and contact-info row. Replaces colored side-stripes (which are forbidden, see Don'ts).

### Inputs / Fields
- **Style:** White surface, 1px Divider stroke, rounded-md (8px), `shadow-xs` resting glow.
- **Focus:** Clinical Teal 3px ring at 50% opacity; no border-color flash.
- **Error:** destructive ring at 20% opacity; label inherits destructive color.
- **Disabled:** opacity 0.5, pointer events disabled.

### Badges
- **Style:** Surgical Mint background, Clinical Teal Deep text, rounded-md (8px), 4-12px padding, label typography (uppercase, tracking 0.08em).
- **Use:** department tags inside doctor cards, availability indicators ("Available: Mon-Fri"). The amber variant on visiting-consultant badges is the only sanctioned warm color outside Emergency Red.

### Section Header (signature pattern)
- A 12px uppercase Clinical Teal eyebrow ("Our Departments"), then a Playfair h2 in Ink, then a 60px wide by 3px tall Clinical Teal underline below the h2. The underline is the brand's small but consistent identifier across pages.

### Navigation
- **Default:** transparent background, full-bleed over hero. White links at 80% opacity; Clinical Teal Light on hover and active.
- **Scrolled:** Hospital Navy at 95% opacity with `backdrop-blur-md` and `shadow-lg`. Trigger at scrollY > 50px.
- **Mobile:** hamburger icon, full-width drawer in Hospital Navy at 98%. Same link styles.
- **Emergency CTA:** Clinical Teal pill button with phone icon, always visible at desktop sizes.

### Emergency Banner (signature component)
- Full-bleed Emergency Red background, White text, dismissable. Carries the headline message and four phone numbers as inline `tel:` links. Sits below the hero on the home page only. This is the loudest surface in the system; it must remain rare.

## 6. Do's and Don'ts

### Do:
- **Do** use Clinical Teal sparingly, as the one accent. Keep its surface footprint under 10% per screen.
- **Do** lead every department, service, and value with an icon container (`w-12 h-12 rounded-full bg-Surgical-Mint`), never a colored side stripe.
- **Do** keep cards flat at rest. Apply `shadow-lg` and `-translate-y-1` only on hover.
- **Do** use Playfair Display only for h1, h2, h3, and the hospital wordmark. Body, labels, navigation, and buttons stay in Inter.
- **Do** size body type for arm-length phone reading (16px minimum, 1.65 line-height) and treat 3G performance as a hard budget.
- **Do** carry every anti-reference from PRODUCT.md through to implementation: corporate-hospital chain glossiness, Western telehealth-startup warmth-strip, decorative overload, identical-card grids, template-y AI feel.
- **Do** treat Kannada as a peer language. Both versions must read naturally and both must reach the emergency phone numbers in the same number of taps.
- **Do** earn trust with specifics: years, names, places, phone numbers, department counts. Not stock photos or superlatives.

### Don't:
- **Don't** introduce a second saturated accent. The `--warm-gold` token defined in `src/index.css` is forbidden in production surfaces; it is a vestige and should be removed from the stylesheet.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored stripe on any element. Replace with full hairline borders, full-bleed surface tints, leading icon containers, or nothing.
- **Don't** apply `background-clip: text` with a gradient on any heading. Gradient text is forbidden across the system. Emphasis comes from weight and size, not chromatic flash.
- **Don't** use glassmorphism (backdrop-blur on translucent surfaces) decoratively. The one sanctioned use is the scrolled navbar (`bg-Hospital-Navy/95 backdrop-blur-md`); everywhere else it is forbidden.
- **Don't** ship the hero-metric template (huge gradient number, label, supporting stats with chromatic accent). The "40+ Years / 15+ Departments / 24/7 / 10000+" stats block is acceptable only as the plain four-column grid we have today; do not stylize it further.
- **Don't** stack identical icon-plus-heading-plus-paragraph cards as the dominant pattern of more than two consecutive sections. Vary the layout: legacy section, timeline section, founder portrait section.
- **Don't** nest cards. A card never contains another card.
- **Don't** use pure `#000000` or a flat printer's `#FFFFFF` for text. Text is Ink (`#1A2332`); body surfaces are Paper White or White.
- **Don't** introduce em dashes in shipped UI copy. Use commas, colons, semicolons, periods, or parentheses.
- **Don't** use bouncy, elastic, or playful easing curves. Motion is ease-out only, no spring physics.
- **Don't** animate CSS layout properties (width, height, top, left, padding). Only opacity and transform.
- **Don't** ship hero imagery that is stock-photo gloss or generic medical clip-art. If a real founder portrait or a real ward photo is not available, ship without imagery.
