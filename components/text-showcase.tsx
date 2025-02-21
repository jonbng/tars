"use client"

import { motion } from "framer-motion"

export function TextShowcase() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <h2 className="font-tars text-sm tracking-wider text-neutral-500">TEXT SHOWCASE</h2>
      <div className="space-y-16">
        {/* Large Display Text */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <p className="font-tars text-6xl leading-tight">
            TARS: HONESTY 90%
            <br />
            HUMOR 100%
          </p>
          <p className="font-tars text-xl text-neutral-500">SETTINGS CAN BE ADJUSTED</p>
        </motion.div>

        {/* Medium Text Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 gap-8"
        >
          <div className="space-y-4">
            <p className="font-tars text-2xl">RECTANGULAR MONOLITH</p>
            <p className="font-tars leading-relaxed text-neutral-600">
              A HIGHLY ADVANCED ROBOTIC ARTIFICIAL INTELLIGENCE, TARS STANDS AS A RECTANGULAR MONOLITH WHEN INACTIVE.
              ITS UNIQUE DESIGN ALLOWS IT TO SPLIT INTO FOUR SECTIONS, ENABLING REMARKABLE MOBILITY AND ADAPTABILITY IN
              VARIOUS ENVIRONMENTS.
            </p>
          </div>
          <div className="space-y-4">
            <p className="font-tars text-2xl">ADAPTIVE INTELLIGENCE</p>
            <p className="font-tars leading-relaxed text-neutral-600">
              EQUIPPED WITH ADJUSTABLE PERSONALITY SETTINGS AND A SOPHISTICATED SENSE OF HUMOR, TARS PROVIDES BOTH
              TACTICAL SUPPORT AND COMPANIONSHIP. ITS ABILITY TO BALANCE EFFICIENCY WITH HUMAN-LIKE INTERACTION MAKES IT
              AN INVALUABLE CREW MEMBER.
            </p>
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 border rounded-3xl p-8"
        >
          <p className="font-tars text-sm tracking-wider text-neutral-500">TECHNICAL SPECIFICATIONS</p>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="font-tars text-sm text-neutral-500 mb-2">HUMOR SETTING</p>
              <p className="font-tars text-xl">100% CAPACITY</p>
            </div>
            <div>
              <p className="font-tars text-sm text-neutral-500 mb-2">HONESTY PARAMETER</p>
              <p className="font-tars text-xl">90% CAPACITY</p>
            </div>
            <div>
              <p className="font-tars text-sm text-neutral-500 mb-2">DISCRETION SETTING</p>
              <p className="font-tars text-xl">95% CAPACITY</p>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <p className="font-tars text-4xl leading-tight">"EVERYBODY GOOD? PLENTY OF SLAVES FOR MY ROBOT COLONY?"</p>
          <p className="font-tars text-xl text-neutral-500">— TARS, DEMONSTRATING HUMOR SETTING</p>
        </motion.div>

        {/* Small Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-3 gap-8 text-sm leading-relaxed"
        >
          <p className="font-tars text-neutral-600">
            DESIGNED WITH ARTICULATED JOINTS, TARS CAN TRANSFORM ITS RECTANGULAR FRAME INTO VARIOUS CONFIGURATIONS,
            ALLOWING IT TO WALK, ROLL, AND SWIM THROUGH DIVERSE TERRAINS.
          </p>
          <p className="font-tars text-neutral-600">
            THE ROBOT'S MILITARY ORIGIN IS EVIDENT IN ITS ROBUST CONSTRUCTION AND TACTICAL CAPABILITIES, YET ITS
            ADAPTABLE PERSONALITY SETTINGS MAKE IT AN IDEAL COMPANION FOR LONG-TERM SPACE MISSIONS.
          </p>
          <p className="font-tars text-neutral-600">
            DESPITE ITS MECHANICAL NATURE, TARS EXHIBITS A REMARKABLE UNDERSTANDING OF HUMAN PSYCHOLOGY, OFTEN USING
            HUMOR TO ALLEVIATE TENSION IN CRITICAL SITUATIONS.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

