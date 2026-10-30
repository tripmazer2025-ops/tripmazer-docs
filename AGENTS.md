# Documentation project instructions

## About this project

- User docs for TripMazer, built on [Mintlify](https://mintlify.com). Pages are MDX with YAML frontmatter; config and navigation live in `docs.json`.
- The product lives in the app repo (`tripmazer/trip-mazer-v2`). Its `supabase/functions/_shared/capability-manifest.ts` is the most complete statement of what Mazer can do, per channel and plan. Check a claim against it (or the app source) before writing it.
- Plan limits come from the app's pricing components (`src/components/pricing/`). Don't quote prices here: they vary by country. Link to https://tripmazer.com/pricing.

## Terminology

- **TripMazer** is the product; **Mazer** is the AI companion inside it. Never "the bot" or "the AI" in prose.
- Plans are **Free**, **Mazer Pro** (Pro) and **Mazer Elite** (Elite).
- **Mazer Live** is real-time voice. **Trip Home** is a trip's main screen.
- Settings paths are written **Settings → Section**, using the app's own section names (Integrations, AI Preferences, AI Memory, Skills, Usage & Limits, Billing & Plan).

## Style

- Second person, active voice, plain words, sentence-case headings.
- Bold for UI labels: **Settings → Integrations**.
- Say which plan a feature needs when it isn't on Free.
- Prompts go in `<Prompt>` cards (`/snippets/prompt.jsx`) with [bracketed] placeholders.
- Never document internal tools, providers' API names or admin features.
