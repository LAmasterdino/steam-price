
(function () {
  const root = document.documentElement;
  const storageKey = "steam-tracker-theme";
  const systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const saved = localStorage.getItem(storageKey);
  const initial = saved || (systemDark ? "dark" : "light");
  root.dataset.theme = initial;

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem(storageKey, theme);
    document.querySelectorAll("[data-theme-option]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.themeOption === theme);
      btn.setAttribute("aria-pressed", String(btn.dataset.themeOption === theme));
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-theme-option]").forEach((btn) => {
      btn.addEventListener("click", () => setTheme(btn.dataset.themeOption));
    });

    setTheme(root.dataset.theme || initial);

    const year = document.querySelector("[data-year]");
    if (year) year.textContent = String(new Date().getFullYear());
  });
})();
