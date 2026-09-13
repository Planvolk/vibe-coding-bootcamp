"use client";

import { useEffect, useState } from "react";

export default function TypingQuote({ text }: { text: string }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    setShown("");
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="text-center max-w-4xl">
      <div className="accent-bar mx-auto mb-8" />
      <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
        &bdquo;{shown}
        <span className="typing-cursor">|</span>&ldquo;
      </p>
      <div className="accent-bar mx-auto mt-8" />
    </div>
  );
}
