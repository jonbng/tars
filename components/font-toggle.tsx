"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const variants = [
  {
    name: "SMOOTH",
    class: "font-smooth",
    style: { fontFamily: "tarsMonoSmooth" },
    file: "/fonts/TarsMonoSmooth.ttf",
  },
  {
    name: "SHARP",
    class: "font-sharp",
    style: { fontFamily: "tarsMonoSharp" },
    file: "/fonts/TarsMonoSharp.ttf",
  },
  {
    name: "ROUNDED",
    class: "font-rounded",
    style: { fontFamily: "tarsMonoRounded" },
    file: "/fonts/TarsMonoRounded.ttf",
  },
];

export function FontToggle() {
  const [activeVariant, setActiveVariant] = useState(
    variants[parseInt(localStorage.getItem("fontVariant") || "0")]
  );

  useEffect(() => {
    // Set the font variant index in localStorage
    localStorage.setItem(
      "fontVariant",
      variants
        .findIndex((variant) => variant.name === activeVariant.name)
        .toString()
    );
    // Apply the font variant class and style
    document.documentElement.className = activeVariant.class;
    document.documentElement.style.setProperty(
      "--font-current",
      activeVariant.style.fontFamily,
      "important"
    );
    // Trigger storage event to update other components
    window.dispatchEvent(new Event("storage"));
  }, [activeVariant]);

  return (
    <div className="flex items-center gap-1 sm:gap-2 fixed top-12 sm:top-8 right-4 sm:right-8 bg-white/80 backdrop-blur-xs p-1 border z-10">
      {variants.map((variant) => (
        <button
          key={variant.name}
          onClick={() => setActiveVariant(variant)}
          className={`relative px-2 sm:px-6 py-2 transition-colors text-xs sm:text-sm ${
            activeVariant.name === variant.name
              ? "text-white"
              : "hover:bg-neutral-100"
          }`}
        >
          {activeVariant.name === variant.name && (
            <motion.div
              layoutId="activeVariant"
              className="absolute inset-0 bg-black -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 uppercase" style={variant.style}>
            {variant.name}
          </span>
        </button>
      ))}
    </div>
  );
}
