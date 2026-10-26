"use client";

import { useSyncExternalStore } from "react";
import { Icon } from "./icons";
import { THEME_STORAGE_KEY } from "./theme";

type Theme = "dark" | "light";
const THEME_EVENT = "workshop-theme-change";

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerTheme(): Theme {
  return "dark";
}

function subscribe(onChange: () => void) {
  function onStorage(event: StorageEvent) {
    if (event.key === THEME_STORAGE_KEY || event.key === null) {
      document.documentElement.dataset.theme = event.newValue === "light" ? "light" : "dark";
      onChange();
    }
  }

  window.addEventListener(THEME_EVENT, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(THEME_EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.dispatchEvent(new Event(THEME_EVENT));
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // A alternância continua funcionando quando o armazenamento está indisponível.
  }
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  return (
    <div className="theme-toggle" role="group" aria-label="Tema da página">
      <button type="button" aria-label="Usar tema claro" aria-pressed={theme === "light"} title="Tema claro" onClick={() => setTheme("light")}>
        <Icon name="sun" /><span>Claro</span>
      </button>
      <button type="button" aria-label="Usar tema escuro" aria-pressed={theme === "dark"} title="Tema escuro" onClick={() => setTheme("dark")}>
        <Icon name="moon" /><span>Escuro</span>
      </button>
    </div>
  );
}
