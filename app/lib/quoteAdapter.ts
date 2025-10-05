import React from "react";
import { getRandomQuotes } from "./quoteService";

export interface Quote {
  content: string;
  author: string;
  html: string;
}

type ZenQuote = { q: string; a: string; h: string };

export async function quoteAdapter(): Promise<Quote> {
  const quotes: ZenQuote[] = await getRandomQuotes();
  const quote = quotes[0];

  return {
    content: quote?.q ?? "",
    author: quote?.a ?? "unknown",
    html: quote?.h ?? "unknown",
  };
}
