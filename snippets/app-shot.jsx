// A screenshot of the app: a real component rendered with sample data
// (captured from the app repo's marketing/docs-shots stage), centred on a
// quiet backdrop that works in light and dark mode.
export const AppShot = ({ src, alt, width = 420, caption }) => (
  <figure className="not-prose my-6">
    <div className="flex justify-center rounded-2xl border border-gray-950/[0.06] bg-gray-50 px-4 py-8 dark:border-white/[0.08] dark:bg-white/[0.03]">
      <img src={src} alt={alt} width={width} className="h-auto max-w-full drop-shadow-[0_18px_30px_rgba(17,12,46,0.12)]" />
    </div>
    <figcaption className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
      {caption ? `${caption} ` : ""}Sample data.
    </figcaption>
  </figure>
);
