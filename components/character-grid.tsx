"use client"

import { motion } from "motion/react";

const characters = "abcdefghijklmnopqrstuvwxyz0123456789+,.:;/-"

export function CharacterGrid() {
  return (
    <div className="grid grid-cols-13 gap-4 max-w-4xl mx-auto p-8">
      {characters.split("").map((char, i) => (
        <motion.div
          key={char}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.02 }}
          className="aspect-square flex items-center justify-center text-4xl font-tars hover:scale-150 transition-transform cursor-crosshair"
        >
          {char}
        </motion.div>
      ))}
    </div>
  )
}

