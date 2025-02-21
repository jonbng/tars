"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export function TypeTester() {
  const [text, setText] = React.useState("TYPE SOMETHING NICE HERE");
  const [fontSize, setFontSize] = React.useState(32);
  const [letterSpacing, setLetterSpacing] = React.useState(2);
  const [alignment, setAlignment] = React.useState<"left" | "center" | "right">(
    "left"
  );

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 space-y-4">
      <h2 className="font-tars text-sm tracking-wider text-neutral-500">
        TYPE TESTER
      </h2>
      <div className="border overflow-hidden">
        <div className="h-full flex flex-col">
          <div
            className="flex-1 p-4 sm:p-8 font-tars break-words"
            style={{
              fontSize: `${fontSize}px`,
              letterSpacing: `${letterSpacing}px`,
              textAlign: alignment,
            }}
          >
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value.toUpperCase())}
              className="w-full h-full bg-transparent resize-none outline-hidden"
              style={{
                fontSize: "inherit",
                letterSpacing: "inherit",
                textAlign: alignment,
              }}
            />
          </div>
          <div className="border-t bg-neutral-50 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-3">
              <div className="space-y-4 flex flex-col">
                <Label className="font-tars text-xs sm:text-sm">
                  SIZE: {fontSize}PX
                </Label>
                <Slider
                  value={[fontSize]}
                  onValueChange={([value]) => setFontSize(value)}
                  min={12}
                  max={120}
                  step={1}
                />
              </div>
              <div className="space-y-4 flex flex-col">
                <Label className="font-tars text-xs sm:text-sm">
                  SPACING: {letterSpacing}PX
                </Label>
                <Slider
                  value={[letterSpacing]}
                  onValueChange={([value]) => setLetterSpacing(value)}
                  min={-5}
                  max={20}
                  step={1}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Toggle
                pressed={alignment === "left"}
                onPressedChange={() => setAlignment("left")}
              >
                <AlignLeft className="h-4 w-4" />
              </Toggle>
              <Toggle
                pressed={alignment === "center"}
                onPressedChange={() => setAlignment("center")}
              >
                <AlignCenter className="h-4 w-4" />
              </Toggle>
              <Toggle
                pressed={alignment === "right"}
                onPressedChange={() => setAlignment("right")}
              >
                <AlignRight className="h-4 w-4" />
              </Toggle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
