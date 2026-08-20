import { Button, BUTTON_SIZES, BUTTON_VARIANTS } from "@/components/ui/button";
import { IoLogoWechat } from "react-icons/io5";

export default function Home() {
  return (
    <div className="space-y-4 p-4 space-x-2">
      {/* <Button size={BUTTON_SIZES.SMALL} disabled>
        Label
      </Button>
      <Button size={BUTTON_SIZES.MEDIUM}>Label</Button> */}
      <Button
        size={BUTTON_SIZES.LARGE}
        variant={BUTTON_VARIANTS.PRIMARY}
        icon={<IoLogoWechat />}
        // iconOnly
      >
        Label
      </Button>
    </div>
  );
}
