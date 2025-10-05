"use client";
import React from "react";
import { useEffect, useState } from "react";
import { getRandomQuotes } from "../api/random_quotes/route";
import { quoteAdapter } from "../lib/quoteAdapter";

export default function Board() {
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    quoteAdapter()
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (data) console.log("Data", data);
  }, [data]);

  return (
    <div className="bg-emerald-700 w-[500px] h-[250px] border border-slate-600 rounded-[10px]"></div>
  );
}
