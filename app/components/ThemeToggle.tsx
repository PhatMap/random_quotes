"use client";

export default function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => {
        const root = document.documentElement;
        const isDark = root.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        root.style.colorScheme = isDark ? "dark" : "light";
      }}
      className="rounded-md border px-3 py-2 text-sm"
    >
      Toggle theme
    </button>
  );
}
