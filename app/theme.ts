export const THEME_STORAGE_KEY = "workshop-biometria-theme";

// Executado antes da pintura da página para restaurar o tema sem piscar.
export const themeInitializationScript = `(() => {
  try {
    const saved = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    document.documentElement.dataset.theme = saved === "light" ? "light" : "dark";
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();`;
