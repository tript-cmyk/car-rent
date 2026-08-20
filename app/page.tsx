"use client";

import { Select, SELECT_SIZES } from "@/components/ui/select";
import { useState } from "react";

export default function Home() {
  const [car, setCar] = useState("");

  console.log(car);

  return (
    <div className="space-y-4 p-4 space-x-2">
      <Select
        required
        value={car}
        onValueChange={(value) => setCar(value)}
        options={[
          {
            label: "bmw",
            value: "BMW",
          },
          {
            label: "audi",
            value: "AUDI",
          },
          {
            label: "mercedes",
            value: "MERCEDES",
          },
        ]}
        label="Car Brand"
        size={SELECT_SIZES.MEDIUM}
        placeholder="Select your car"
      />
    </div>
  );
}
