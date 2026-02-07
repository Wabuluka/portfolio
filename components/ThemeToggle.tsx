"use client";

import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "@/lib/store/slices/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const { isDarkMode } = useAppSelector((state: any) => state.theme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="w-8 h-8 rounded-md flex items-center justify-center text-base-content/50 hover:text-primary hover:bg-primary/[0.08] border border-transparent hover:border-primary/20 transition-all duration-200"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
}
