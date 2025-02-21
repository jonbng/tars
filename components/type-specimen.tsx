"use client";

import { motion } from "motion/react";

export function TypeSpecimen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto p-4 sm:p-8 space-y-8"
    >
      <div className="space-y-2">
        <motion.h2
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          className="font-tars text-sm tracking-wider text-neutral-500"
        >
          SPECIMEN
        </motion.h2>
        <div className="relative">
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="font-tars text-[12vw] sm:text-[8vw] md:text-[6vw] leading-none"
          >
            TARS MONO
          </motion.div>
          {/* Typography Lines */}
          <div className="absolute inset-0 pointer-events-none hidden sm:block">
            <div className="absolute top-0 left-0 right-0 border-t border-dashed border-neutral-300">
              <span className="absolute right-full mr-2 text-[10px] sm:text-xs text-neutral-400 font-tars whitespace-nowrap">
                CAP HEIGHT
              </span>
            </div>
            <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-neutral-300">
              <span className="absolute right-full mr-2 text-[10px] sm:text-xs text-neutral-400 font-tars whitespace-nowrap">
                X-HEIGHT
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 border-t border-dashed border-neutral-300">
              <span className="absolute right-full mr-2 text-[10px] sm:text-xs text-neutral-400 font-tars whitespace-nowrap">
                BASELINE
              </span>
            </div>
            <div className="absolute -bottom-4 left-0 right-0 border-t border-dashed border-neutral-300">
              <span className="absolute right-full mr-2 text-[10px] sm:text-xs text-neutral-400 font-tars whitespace-nowrap">
                DESCENDER
              </span>
            </div>
          </div>
        </div>
      </div>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-tars text-sm sm:text-base md:text-lg max-w-2xl pt-5"
      >
        A MONOSPACED TYPEFACE DESIGNED FOR TITLES AND BEYOND. FEATURING THREE
        DISTINCT STYLES: SHARP FOR PRECISION, ROUNDED FOR WARMTH, AND SMOOTH FOR
        ELEGANCE.
      </motion.p>
    </motion.div>
  );
}
