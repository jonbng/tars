"use client";

import { motion } from "motion/react";
import { Download } from "lucide-react";

const variants = [
  { name: "SHARP", file: "/fonts/TarsMonoSharp.ttf" },
  { name: "ROUNDED", file: "/fonts/TarsMonoRounded.ttf" },
  { name: "SMOOTH", file: "/fonts/TarsMonoSmooth.ttf" },
];

export function DownloadSection() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-4">
      <h2 className="font-tars text-sm tracking-wider text-neutral-500">
        DOWNLOAD
      </h2>
      <div className="flex gap-4">
        {variants.map((variant) => (
          <motion.a
            key={variant.name}
            href={variant.file}
            download
            className="flex-1 flex items-center justify-center gap-2 p-4 bg-black text-white font-tars hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="h-4 w-4" />
            <span>{variant.name}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
