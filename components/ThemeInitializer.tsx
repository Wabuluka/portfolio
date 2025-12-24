"use client";

import { useEffect } from "react";
import { initializeTheme } from "@/lib/store/slices/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";

export function ThemeInitializer() {
  const dispatch = useAppDispatch();
  const { isInitialized } = useAppSelector((state: any) => state.theme);

  useEffect(() => {
    if (!isInitialized) {
      dispatch(initializeTheme());
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const { currentTheme } = useAppSelector((state: any) => state.theme);
      if (currentTheme === "system") {
        dispatch(initializeTheme());
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [dispatch, isInitialized]);

  return null; // This component doesn't render anything
}
