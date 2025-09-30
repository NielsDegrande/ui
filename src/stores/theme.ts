import { create } from "zustand";

type Theme = "light" | "dark" | "system";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  initializeTheme: () => void;
}

const STORAGE_KEY = "ui-theme";

/**
 * Gets the system theme preference.
 * @returns The system theme preference.
 */
const getSystemTheme = (): "light" | "dark" => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

/**
 * Applies the theme to the document.
 * @param theme - The theme to apply.
 */
const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  const effectiveTheme = theme === "system" ? getSystemTheme() : theme;

  if (effectiveTheme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
};

/**
 * Represents the theme state.
 */
export const useThemeStore = create<ThemeState>((set, get) => ({
  /**
   * The current theme.
   */
  theme: "system",

  /**
   * Sets the current theme.
   * @param theme - The theme to set.
   */
  setTheme: (theme: Theme) => {
    set({ theme });
    localStorage.setItem(STORAGE_KEY, theme);
    applyTheme(theme);
  },

  /**
   * Initializes the theme from localStorage or system preference.
   */
  initializeTheme: () => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const theme = stored || "system";

    set({ theme });
    applyTheme(theme);

    // Listen for system theme changes.
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const currentTheme = get().theme;
      if (currentTheme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
  },
}));
