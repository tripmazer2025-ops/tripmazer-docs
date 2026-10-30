// A prompt card: the text to send Mazer, a copy button, and "Try in Mazer",
// which opens the web app with the prompt typed into the chat box (not sent),
// so placeholders in [brackets] can be filled in first.
export const Prompt = ({ title, text, why }) => {
  const [copied, setCopied] = useState(false);
  const tryUrl = `https://tripmazer.com/app?prompt=${encodeURIComponent(text)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      setCopied(false);
    }
  };

  return (
    <div className="not-prose my-4 rounded-2xl border border-gray-950/10 bg-white p-4 dark:border-white/10 dark:bg-white/5">
      {title && (
        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
          {title}
        </div>
      )}
      <p className="whitespace-pre-line text-[15px] leading-relaxed text-gray-900 dark:text-gray-100">{text}</p>
      {why && <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{why}</p>}
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={copy}
          className="rounded-lg border border-gray-950/10 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-white/15 dark:text-gray-200 dark:hover:bg-white/10"
        >
          {copied ? "Copied" : "Copy"}
        </button>
        <a
          href={tryUrl}
          target="_blank"
          rel="noopener"
          className="rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-white hover:opacity-90 dark:bg-primary-light dark:text-gray-950"
        >
          Try in Mazer →
        </a>
      </div>
    </div>
  );
};
