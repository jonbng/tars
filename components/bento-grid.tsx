"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "PRECISION IN DESIGN",
    description:
      "CRAFTED WITH METICULOUS ATTENTION TO DETAIL, EACH CHARACTER IN TARS MONO EMBODIES MATHEMATICAL PRECISION AND VISUAL HARMONY.",
  },
  {
    title: "THREE PERSONALITIES",
    description:
      "FROM SHARP EDGES TO SMOOTH CURVES, TARS MONO ADAPTS TO YOUR AESTHETIC NEEDS WHILE MAINTAINING ITS DISTINCTIVE CHARACTER.",
  },
  {
    title: "MODERN MINIMALISM",
    description:
      "STRIPPED OF UNNECESSARY ELEMENTS, TARS MONO DELIVERS MAXIMUM IMPACT THROUGH REFINED SIMPLICITY.",
  },
];

export function BentoGrid() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 space-y-4">
      <h2 className="font-tars text-sm tracking-wider text-neutral-500">
        DESIGN PHILOSOPHY
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 sm:p-6 border bg-white/50 backdrop-blur-xs space-y-2"
          >
            <h3 className="font-tars text-base sm:text-lg">{item.title}</h3>
            <p className="font-tars text-xs sm:text-sm text-neutral-600">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
