# TripMazer Docs

The user docs for [TripMazer](https://tripmazer.com), built with [Mintlify](https://mintlify.com). A push to `main` publishes the site.

## Preview locally

```bash
npx mint dev
```

Then open http://localhost:3000.

## Layout

- `docs.json`: site config and navigation (tabs → groups → pages)
- `index.mdx`, `quickstart.mdx`, `concepts.mdx`, `plans.mdx`: Get started
- `install/`: web and iPhone, Android, WhatsApp, Telegram, Mazer Live
- `prompting/`: the prompting guide, prompt sheet, voice tips and the prompt library
- `snippets/prompt.jsx`: the `<Prompt>` card (Copy + "Try in Mazer", which opens `tripmazer.com/app?prompt=…`)
- `files/tripmazer-prompt-sheet.pdf`: the printable prompt sheet, rendered from `_build/prompt-sheet.html`

## Rebuild the prompt sheet PDF

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer --virtual-time-budget=8000 --print-to-pdf=files/tripmazer-prompt-sheet.pdf "file://$PWD/_build/prompt-sheet.html"
```

Check it is still one page.
