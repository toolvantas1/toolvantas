# Toolvantas — Project Status and Continuation Notes

## Project separation & audience scope
Toolvantas is a standalone project (`https://toolvantas.pages.dev`, repository `toolvantas1/toolvantas`, public email `toolvantas1@gmail.com`) built for **global visitors worldwide** (including the United States and other countries, without regional restriction to Bangladesh or the United States). Do not merge its code, branding, roadmap, or analytics with **UtilityCanvas** or **AI Signal News**.

## Approved homepage direction (Preserved)
**Hybrid: established utility-site usability with distinctive modern design.**
- Prioritize direct access to useful tools and categories.
- Use restrained typography, practical information density, and responsive layouts.
- Make the brand distinctive without copying a competitor's exact visual identity.
- Avoid fake usage statistics, testimonials, unsupported tool counts, or unverified claims.

## Original first-tool research — preserved as approved
**Approved first tool:** Freelance Hourly & Day Rate Calculator (`freelance-rate-calculator.html`, Official Roadmap #6).

**Primary keyword:** `freelance hourly rate calculator`

**Secondary keywords:**
- `hourly rate calculator for freelance`
- `freelance day rate calculator`
- `freelance rate calculator`

**User-provided third-party SBMM estimates (not independently verified ranking/revenue forecasts):**
- `freelance hourly rate calculator`: GSV 210/month, CPC $7.33, SBMM 35/100 (“Very easy win”), 5 weak sites/9 top 10, average DR 35.
- `freelance rate calculator`: GSV 880/month, CPC $16.05, SBMM 61/100 (“Moderate”), one weak site of 9, average DR 61.
- `freelance day rate calculator`: GSV 70/month, CPC $76.48, low ad competition, SBMM 34/100 (“Very easy win”), 3 weak sites/9, average DR 34.

These are third-party estimates, not guarantees of search rankings, traffic, or earnings.

## Workflow (Preserved)
For each tool: Research → competitor/SERP analysis → finalize keyword and feature specification → build → test → fix → lock → record. Work one controlled step at a time. Do not claim completion without evidence.

---

## Official 35-Tool Roadmap Reconciliation & Release Status (v1.4)

- **Intentionally Excluded Category — Image Tools (#1–#5):**
  - `#1` Image Compressor, `#2` Image Resizer, `#3` Image Format Converter, `#4` Image Cropper, `#5` Image to Base64 Converter.
  - Intentionally excluded from Toolvantas because the owner already maintains image tools on **UtilityCanvas**. Do not recreate unless the owner explicitly changes this decision.

- **Locked Individual Non-Image Tools (30/30 Intended Tools — #6–#35):**
  - *Freelance & Business (#6–#10):* `#6` `freelance-rate-calculator.html`, `#7` `freelance-project-pricing-calculator.html`, `#8` `freelance-income-calculator.html`, `#9` `freelance-profit-margin-calculator.html`, `#10` `invoice-generator.html`
  - *Developer (#11–#15):* `#11` `json-formatter-and-validator.html`, `#12` `url-encoder-and-decoder.html`, `#13` `base64-encoder-and-decoder.html`, `#14` `html-entity-encoder-and-decoder.html`, `#15` `unix-timestamp-converter.html`
  - *PDF (#16–#20):* `#16` `merge-pdf.html`, `#17` `split-pdf.html`, `#18` `rotate-pdf.html`, `#19` `extract-pdf-pages.html`, `#20` `count-pdf-pages.html`
  - *Unit Converters (#21–#25):* `#21` `length-converter.html` (reconciled version preserving 15 units, `ft + in` helper, athletic presets, reference table, and per-unit copy buttons), `#22` `weight-converter.html`, `#23` `temperature-converter.html`, `#24` `speed-converter.html`, `#25` `data-storage-converter.html`
  - *Text (#26–#30):* `#26` `word-counter.html`, `#27` `character-counter.html`, `#28` `text-case-converter.html`, `#29` `remove-duplicate-lines.html`, `#30` `find-and-replace-text.html`
  - *Everyday Calculators (#31–#35):* `#31` `percentage-calculator.html`, `#32` `age-calculator.html`, `#33` `date-duration-calculator.html`, `#34` `time-duration-calculator.html`, `#35` `discount-calculator.html`

- **Website-Wide, Favicon, Redirects & SEO Alignment (v1.4 Approved Release):**
  - `index.html` (preserved with extensionless canonical https://toolvantas.pages.dev/ and internal link alignment across v1.0–v1.4).
  - `favicon.ico` (`16×16`, `32×32`, `48×48` binary ICO) & `favicon.svg` at repository root, explicitly linked in `<head>` of `tools.html`, `privacy.html`, `terms.html`, and `contact.html`, and progressively linked via `site.js` for locked pages without modifying locked HTML files.
  - `privacy.html`, `terms.html`, and `contact.html` updated for global visitors using project name **Toolvantas** (no invented legal entity or postal address), confirmed public email `toolvantas1@gmail.com`, and **Cloudflare Web Analytics: Enabled** disclosed in `privacy.html`.
  - `sitemap.xml` (35 canonical URLs on `https://toolvantas.pages.dev`), `robots.txt`, `site.css`, `site.js`.

- **Remaining Pending Confirmations Before Final Sign-Off:**
  - Public release / effective date (`[OWNER TO SUPPLY: Public Release Date]`) in `privacy.html` and `terms.html`.
  - Governing law / jurisdiction (`[OWNER TO SUPPLY: Governing Jurisdiction — Pending Owner Confirmation]`) in `terms.html` (intentionally left pending rather than defaulted to United States law or any other national law).
  - Real physical-device browser and tab-icon smoke testing (iOS Safari, Android Chrome, desktop browsers) before/after manual GitHub upload.

## Packaging adjustment (mobile upload)
To simplify GitHub upload from a phone, all **45 website and project files** (`index.html`, `tools.html`, `privacy.html`, `terms.html`, `contact.html`, 30 tool HTML files, `_redirects`, `toolvantas-home.html`, `favicon.ico`, `favicon.svg`, `site.css`, `site.js`, `sitemap.xml`, `robots.txt`, `README.md`, `PROJECT-STATUS.md`) reside flat at the repository root in `toolvantas-final-verified-v1.4.zip`. Extract and upload the root files directly to `toolvantas1/toolvantas`; do not upload a `.zip` archive file itself.
