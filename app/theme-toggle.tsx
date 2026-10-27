"use client";

import { useSyncExternalStore } from "react";
import { Icon } from "./icons";
import { THEME_STORAGE_KEY } from "./theme";
import type { Dictionary } from "./i18n/pt-BR";

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

export function ThemeToggle({ labels }: { labels: Dictionary["theme"] }) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  return (
    <div className="theme-toggle" role="group" aria-label={labels.group}>
      <button type="button" aria-label={labels.useLight} aria-pressed={theme === "light"} title={labels.light} onClick={() => setTheme("light")}>
        <Icon name="sun" /><span>{labels.light}</span>
      </button>
      <button type="button" aria-label={labels.useDark} aria-pressed={theme === "dark"} title={labels.dark} onClick={() => setTheme("dark")}>
        <Icon name="moon" /><span>{labels.dark}</span>
      </button>
    </div>
  );
}
