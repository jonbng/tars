"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+,.:;/-"

export function CharacterDetail() {
  const [selectedChar, setSelectedChar] = React.useState<string | null>(null)

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <h2 className="font-tars text-sm tracking-wider text-neutral-500">CHARACTER SET</h2>
      <div className="relative">
        <AnimatePresence>
          {selectedChar && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-48 h-48 flex items-center justify-center bg-white border shadow-lg"
            >
              <span className="font-tars text-8xl">{selectedChar}</span>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="grid grid-cols-13 gap-4">
          {characters.split("").map((char) => (
            <motion.div
              key={char}
              onMouseEnter={() => setSelectedChar(char)}
              onMouseLeave={() => setSelectedChar(null)}
              className="aspect-square flex items-center justify-center text-4xl font-tars hover:scale-150 transition-transform cursor-crosshair"
            >
              {char}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

