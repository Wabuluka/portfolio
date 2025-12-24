import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Theme = "light" | "dark" | "system";

interface ThemeState {
  currentTheme: Theme;
  isDarkMode: boolean;
  isInitialized: boolean;
}

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "light";

  const saved = localStorage.getItem("theme") as Theme;
  if (saved && ["light", "dark", "system"].includes(saved)) {
    return saved;
  }

  return "system";
};

const initialState: ThemeState = {
  currentTheme: "light",
  isDarkMode: false,
  isInitialized: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    initializeTheme: (state) => {
      const initialTheme = getInitialTheme();
      let effectiveTheme: "light" | "dark" = "light";

      if (initialTheme === "system" && typeof window !== "undefined") {
        effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
      } else {
        effectiveTheme = initialTheme as "light" | "dark";
      }

      state.currentTheme = initialTheme;
      state.isDarkMode = effectiveTheme === "dark";
      state.isInitialized = true;
    },

    setTheme: (state, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload;

      let effectiveTheme: "light" | "dark" = "light";
      if (action.payload === "system" && typeof window !== "undefined") {
        effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
      } else {
        effectiveTheme = action.payload as "light" | "dark";
      }

      state.isDarkMode = effectiveTheme === "dark";
    },

    toggleTheme: (state) => {
      const newTheme: Theme = state.currentTheme === "light" ? "dark" : "light";
      state.currentTheme = newTheme;
      state.isDarkMode = newTheme === "dark";
    },
  },
});

export const { initializeTheme, setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
