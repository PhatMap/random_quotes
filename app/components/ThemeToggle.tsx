"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const ctrl = new AbortController();
    (async () => {
      try {
        const res = await fetch("http://api.quotable.io/random", {
          referrerPolicy: "no-referrer",
        });
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const json = await res.json();
        setData(json);
      } catch (e: unknown) {
        if (e instanceof DOMException && e.name === "AbortError") return;
        console.error("onboarding fetch error:", e);
        setErr(e instanceof Error ? e.message : String(e));
      } finally {
        setLoading(false);
      }
    })().catch((e) => {
      console.error("unhandled in IIFE:", e);
      setErr(e instanceof Error ? e.message : String(e));
      setLoading(false);
    });
    return () => ctrl.abort();
  }, []);

  useEffect(() => {
    if (data) console.log("Data", data);
  }, [data]);

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
