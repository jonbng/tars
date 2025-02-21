import Link from "next/link";
import { FontToggle } from "@/components/font-toggle";
import { TypeSpecimen } from "@/components/type-specimen";
import { CharacterDetail } from "@/components/character-detail";
import { TypeTester } from "@/components/type-tester";
import { DownloadSection } from "@/components/download-section";
import { BentoGrid } from "@/components/bento-grid";
import { TextShowcase } from "@/components/text-showcase";
import { ArrowLeft, Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen w-full py-16 sm:py-24 overflow-x-hidden">
      <Link
        href="https://jonathanb.dk"
        className="fixed top-4 sm:top-8 left-4 sm:left-8 flex items-center gap-2 font-tars text-xs sm:text-sm hover:opacity-60 transition-opacity uppercase"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>BACK TO PORTFOLIO</span>
      </Link>
      <FontToggle />
      <TypeSpecimen />
      <BentoGrid />
      <CharacterDetail />
      <TextShowcase />
      <TypeTester />
      <DownloadSection />
      <footer className="fixed bottom-4 sm:bottom-8 left-4 sm:left-8 font-tars text-xs sm:text-sm text-neutral-500 flex items-center gap-1.5 uppercase">
        DESIGNED WITH <Heart className="h-4 w-4 text-red-500 fill-red-500" /> BY{" "}
        <Link
          href="https://jonathanb.dk"
          className="text-black hover:opacity-60 transition-opacity"
        >
          JONATHAN BANGERT
        </Link>
      </footer>
    </main>
  );
}
