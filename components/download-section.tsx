"use client";

import { motion } from "motion/react";
import { Download } from "lucide-react";
import { variants } from "./font-toggle";
import { useEffect, useState } from "react";

export function DownloadSection() {
  const [currentVariantIndex, setCurrentVariantIndex] = useState(
    parseInt(localStorage.getItem("fontVariant") || "0")
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setCurrentVariantIndex(
        parseInt(localStorage.getItem("fontVariant") || "0")
      );
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-4">
      <h2 className="font-tars text-sm tracking-wider text-neutral-500">
        DOWNLOAD
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        {variants.map((variant, index) => (
          <motion.a
            key={variant.name}
            href={variant.file}
            download
            className={
              "flex-1 flex items-center justify-center gap-2 p-4 font-tars hover:opacity-80 transition-opacity bg-black text-white" +
              (currentVariantIndex === index
                ? " ring-4 ring-black ring-offset-2 ring-offset-white"
                : " ")
            }
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
