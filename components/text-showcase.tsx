"use client";

import { motion } from "motion/react";

export function TextShowcase() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <h2 className="font-tars text-sm tracking-wider text-neutral-500">
        TEXT SHOWCASE
      </h2>
      <div className="space-y-16">
        {/* Large Display Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <p className="font-tars text-6xl leading-16">
            TARS THE ROBOT,
            <br />
            <span className="text-4xl">HONESTY: 90, HUMOR: 100</span>
          </p>
          <p className="font-tars text-xl text-neutral-500">
            SETTINGS CAN BE ADJUSTED
          </p>
        </motion.div>

        {/* Medium Text Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="space-y-4">
            <p className="font-tars text-2xl">RECTANGULAR MONOLITH</p>
            <p className="font-tars leading-relaxed text-neutral-600">
              A HIGHLY ADVANCED ROBOTIC ARTIFICIAL INTELLIGENCE, TARS STANDS AS
              A RECTANGULAR MONOLITH WHEN INACTIVE. ITS UNIQUE DESIGN ALLOWS IT
              TO SPLIT INTO FOUR SECTIONS, ENABLING REMARKABLE MOBILITY AND
              ADAPTABILITY IN VARIOUS ENVIRONMENTS.
            </p>
          </div>
          <div className="space-y-4">
            <p className="font-tars text-2xl">ADAPTIVE INTELLIGENCE</p>
            <p className="font-tars leading-relaxed text-neutral-600">
              EQUIPPED WITH ADJUSTABLE PERSONALITY SETTINGS AND A SOPHISTICATED
              SENSE OF HUMOR, TARS PROVIDES BOTH TACTICAL SUPPORT AND
              COMPANIONSHIP. ITS ABILITY TO BALANCE EFFICIENCY WITH HUMAN-LIKE
              INTERACTION MAKES IT AN INVALUABLE CREW MEMBER.
            </p>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <p className="font-tars text-4xl leading-tight">
            "WHY ARE YOU WHISPERING. THEY CANT HEAR YOU."
          </p>
          <p className="font-tars text-xl text-neutral-500">
            — TARS, DEMONSTRATING HUMOR SETTING
          </p>
        </motion.div>

        {/* Small Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 text-sm leading-relaxed"
        >
          <p className="font-tars text-neutral-600">
            DESIGNED WITH ARTICULATED JOINTS, TARS CAN TRANSFORM ITS RECTANGULAR
            FRAME INTO VARIOUS CONFIGURATIONS, ALLOWING IT TO WALK, ROLL, AND
            SWIM THROUGH DIVERSE TERRAINS.
          </p>
          <p className="font-tars text-neutral-600">
            THE ROBOT'S MILITARY ORIGIN IS EVIDENT IN ITS ROBUST CONSTRUCTION
            AND TACTICAL CAPABILITIES, YET ITS ADAPTABLE PERSONALITY SETTINGS
            MAKE IT AN IDEAL COMPANION FOR LONG-TERM SPACE MISSIONS.
          </p>
          <p className="font-tars text-neutral-600">
            DESPITE ITS MECHANICAL NATURE, TARS EXHIBITS A REMARKABLE
            UNDERSTANDING OF HUMAN PSYCHOLOGY, OFTEN USING HUMOR TO ALLEVIATE
            TENSION IN CRITICAL SITUATIONS.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
