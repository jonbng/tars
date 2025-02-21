"use client";

import * as React from "react";
import { motion } from "motion/react";

const variants = [
  {
    name: "SMOOTH",
    class: "font-smooth",
    style: { fontFamily: "tarsMonoSmooth" },
  },
  {
    name: "SHARP",
    class: "font-sharp",
    style: { fontFamily: "tarsMonoSharp" },
  },
  {
    name: "ROUNDED",
    class: "font-rounded",
    style: { fontFamily: "tarsMonoRounded" },
  },
];

export function FontToggle() {
  const [activeVariant, setActiveVariant] = React.useState(variants[0]);

  React.useEffect(() => {
    document.documentElement.className = activeVariant.class;
    document.documentElement.style.setProperty(
      "--font-current",
      activeVariant.style.fontFamily,
      "important"
    );
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
