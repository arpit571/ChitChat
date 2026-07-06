import { create } from "zustand";

const savedTheme = localStorage.getItem("chat-theme") || "coffee";

// Apply theme immediately on app load
document.documentElement.setAttribute("data-theme", savedTheme);

export const useThemeStore = create((set) => ({
  theme: savedTheme,

  setTheme: (theme) => {
    // Save to localStorage
    localStorage.setItem("chat-theme", theme);

    // Apply theme to entire app
    document.documentElement.setAttribute("data-theme", theme);

    // Update Zustand state
    set({ theme });
  },
}));