"use client";

import { Button, BUTTON_SIZES, BUTTON_VARIANTS } from "@/components/ui/button";
import { Input, INPUT_STATUS, INPUT_TYPES } from "@/components/ui/input";
import { useState } from "react";
import { FaDiceD6, FaDna } from "react-icons/fa";

export default function Home() {
  const [name, setName] = useState("");

  const handleApply = () => {
    console.log("Apply code: " + name);
  };

  console.log(name);

  return (
    <div className="space-y-4 p-4 space-x-2">
      <Input
        label="Name"
        type={INPUT_TYPES.TIME}
        required
        value={name}
        onValueChange={(value) => setName(value)}
        placeholder="Apply promote code"
        // leftIcon={<FaDiceD6 />}
        rightIcon={<FaDna />}
        // status={INPUT_STATUS.ERROR}
        // actionSlot={
        //   <Button
        //     variant={BUTTON_VARIANTS.MINIMAL}
        //     size={BUTTON_SIZES.SMALL}
        //     onClick={handleApply}
        //   >
        //     Apply
        //   </Button>
        // }
      />
    </div>
  );
}
