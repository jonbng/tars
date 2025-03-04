"use client";

import Link from "next/link";
import { FontToggle } from "@/components/font-toggle";
import { TypeSpecimen } from "@/components/type-specimen";
import { CharacterDetail } from "@/components/character-detail";
import { TypeTester } from "@/components/type-tester";
import { DownloadSection } from "@/components/download-section";
import { BentoGrid } from "@/components/bento-grid";
import { TextShowcase } from "@/components/text-showcase";
import { ArrowLeft, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import endurance from "@/public/endurance.svg";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen w-full py-20 sm:py-24 overflow-x-hidden">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, y: -1000 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="fixed inset-0 flex items-center justify-center bg-white z-50 h-[200vh] pb-[100vh]"
        >
          <motion.span
            initial={{ y: 0 }}
            animate={{ y: -20 }}
            transition={{ yoyo: Infinity, duration: 0.2 }}
            className="font-tars text-2xl"
          >
            LOADING
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1, repeatDelay: 0.5 }}
            >
              .
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1, repeatDelay: 1 }}
            >
              .
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1, repeatDelay: 1.5 }}
            >
              .
            </motion.span>
          </motion.span>
        </motion.div>
      )}
      {showContent && (
        <>
          <Link
            href="https://jonathanb.dk"
            className="fixed top-5 sm:top-8 left-4 sm:left-8 flex items-center gap-2 font-tars text-xs sm:text-sm hover:opacity-60 transition-opacity uppercase bg-white p-1 z-10"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>BACK TO PORTFOLIO</span>
          </Link>
          <FontToggle />
          <TypeSpecimen />
          <div className="fixed -top-[30%] -right-[25%] flex w-full h-full min-w-5xl min-h-5xl items-start">
            <Image
              src={endurance}
              fill
              alt="Endurance spaceship outline"
              className="-z-10 opacity-10 scale-[25%] -rotate-12 w-full h-auto"
              priority
            />
          </div>
          <BentoGrid />
          <CharacterDetail />
          <TextShowcase />
          <TypeTester />
          <DownloadSection />
          <footer className="fixed bottom-4 sm:bottom-8 left-4 sm:left-8 font-tars text-xs sm:text-sm text-neutral-500 flex items-center gap-1.5 uppercase bg-white p-1 z-10">
            DESIGNED WITH{" "}
            <Heart className="h-4 w-4 text-red-500 fill-red-500" /> BY{" "}
            <Link
              href="https://jonathanb.dk"
              className="text-black hover:opacity-60 transition-opacity"
            >
              JONATHAN BANGERT
            </Link>
          </footer>
        </>
      )}
    </main>
  );
}
