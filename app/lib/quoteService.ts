import React from "react";

export async function getRandomQuotes() {
  const res = await fetch("/api/random_quotes", { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`API failed: ${res.status}`);
  }
  return res.json();
}
