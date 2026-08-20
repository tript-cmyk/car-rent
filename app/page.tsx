"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function Home() {
  const [slider, setSlider] = useState(10);

  console.log(slider);

  return (
    <div className="space-y-4 p-4 space-x-2">
      <Slider value={slider} onValueChange={setSlider} step={10} />
      <p>Max: {slider}</p>
    </div>
  );
}
