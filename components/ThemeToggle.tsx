"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { setTheme, toggleTheme } from "@/lib/store/slices/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const { currentTheme } = useAppSelector((state: any) => state.theme);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => dispatch(setTheme("light"))}
        className={`p-2 rounded-full transition-colors ${
          currentTheme === "light"
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
        }`}
        aria-label="Light mode"
      >
        <Sun className="w-5 h-5" />
      </button>

      <button
        onClick={() => dispatch(setTheme("dark"))}
        className={`p-2 rounded-full transition-colors ${
          currentTheme === "dark"
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
        }`}
        aria-label="Dark mode"
      >
        <Moon className="w-5 h-5" />
      </button>

      <button
        onClick={() => dispatch(setTheme("system"))}
        className={`p-2 rounded-full transition-colors ${
          currentTheme === "system"
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
        }`}
        aria-label="System theme"
      >
        <Monitor className="w-5 h-5" />
      </button>

      <button
        onClick={() => dispatch(toggleTheme())}
        className="ml-2 px-3 py-1.5 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        aria-label="Toggle theme"
      >
        Toggle
      </button>
    </div>
  );
}
