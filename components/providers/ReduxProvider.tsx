"use client";

import { Provider } from "react-redux";
import { store } from "@/lib/store";
import { useEffect } from "react";
import { initializeTheme, setTheme } from "@/lib/store/slices/themeSlice";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize theme
    store.dispatch(initializeTheme());

    // Apply theme to DOM
    const applyThemeToDOM = () => {
      const state = store.getState();
      const { currentTheme } = state.theme;

      if (typeof window !== "undefined") {
        // Determine effective theme
        let effectiveTheme: "light" | "dark";
        if (currentTheme === "system") {
          effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)")
            .matches
            ? "dark"
            : "light";
        } else {
          effectiveTheme = currentTheme as "light" | "dark";
        }

        // Save to localStorage
        localStorage.setItem("theme", currentTheme);

        // Apply to document — DaisyUI uses data-theme attribute
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(effectiveTheme);
        document.documentElement.style.colorScheme = effectiveTheme;
        document.documentElement.setAttribute("data-theme", effectiveTheme);
      }
    };

    // Listen for Redux state changes
    const unsubscribe = store.subscribe(() => {
      applyThemeToDOM();
    });

    // Initial application
    applyThemeToDOM();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      const { currentTheme } = store.getState().theme;
      if (currentTheme === "system") {
        store.dispatch(initializeTheme());
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      unsubscribe();
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
