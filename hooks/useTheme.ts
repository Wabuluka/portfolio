"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import { setTheme, toggleTheme, Theme } from "@/lib/store/slices/themeSlice";

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const themeState = useAppSelector((state) => state.theme);

  const handleSetTheme = (theme: Theme) => {
    dispatch(setTheme(theme));
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return {
    ...themeState,
    setTheme: handleSetTheme,
    toggleTheme: handleToggleTheme,
  };
};
