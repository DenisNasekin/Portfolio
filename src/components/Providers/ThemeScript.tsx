import { THEME_STORAGE_KEY } from "@/types/theme";

// Runs synchronously in <head> before hydration to set [data-theme] on <html>,
// preventing a flash of the wrong theme. Reads localStorage if set, otherwise
// falls back to the user's OS preference via `prefers-color-scheme`.
const script = `
(function () {
  try {
    var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
