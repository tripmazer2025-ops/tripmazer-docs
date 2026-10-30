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
- `images/tripmazer-prompt-sheet.png`: the prompt sheet as an image, rendered from `_build/prompt-sheet.html`. The PDF lives in the app repo at `public/files/tripmazer-prompt-sheet.pdf` (served at tripmazer.com), because Mintlify serves PDFs only on Enterprise

## Rebuild the prompt sheet

```bash
C="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$C" --headless=new --hide-scrollbars --force-device-scale-factor=2 --window-size=794,1123 --virtual-time-budget=8000 --screenshot=images/tripmazer-prompt-sheet.png "file://$PWD/_build/prompt-sheet.html"
"$C" --headless=new --no-pdf-header-footer --virtual-time-budget=8000 --print-to-pdf=/tmp/tripmazer-prompt-sheet.pdf "file://$PWD/_build/prompt-sheet.html"
```

Check the PDF is still one page, then copy it to the app repo's `public/files/`.
