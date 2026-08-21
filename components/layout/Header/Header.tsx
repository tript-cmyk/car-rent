"use client";

import { useState } from "react";
import Link from "next/link";
import {
  RiHeartLine,
  RiNotification3Line,
  RiSettings3Line,
  RiMenuLine,
  RiSearchLine,
  RiEqualizerLine,
} from "react-icons/ri";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { INPUT_TYPES } from "@/components/ui/input";
import MobileDrawer from "./components/MobileDrawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-secondary-100 bg-white/80 backdrop-blur-md">
        <div className="hidden md:flex items-center gap-4 px-8 lg:px-12 py-4">
          <Link href="/" className="shrink-0 mr-4">
            <img
              src="/images/Logo.png"
              alt="Morent"
              className="h-6 lg:h-7 w-auto"
            />
          </Link>

          <div className="flex-1 max-w-sm lg:max-w-md">
            <Input
              placeholder="Search something here"
              type={INPUT_TYPES.SEARCH}
            />
          </div>

          <IconButton icon={<RiEqualizerLine />} label="Filter search" />

          <div className="flex-1" />

          <div className="flex items-center gap-2 lg:gap-3">
            <IconButton icon={<RiHeartLine />} label="Favourites" />
            <IconButton
              icon={<RiNotification3Line />}
              label="Notifications"
              badge
            />
            <IconButton icon={<RiSettings3Line />} label="Settings" />
            <div className="size-10 rounded-full ml-1">
              <img
                src="/images/Profil.png"
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex md:hidden flex-col px-4 pt-4 pb-3 gap-3">
          <div className="flex items-center justify-between">
            <IconButton
              icon={<RiMenuLine />}
              label="Open menu"
              onClick={() => setIsDrawerOpen(true)}
            />
            <div className="relative size-9 rounded-full overflow-hidden ring-2 ring-secondary-200">
              <img
                src="/images/Profil.png"
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Link href="/" className="self-start">
            <img src="/images/Logo.png" alt="Morent" className="h-6 w-auto" />
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex-1">
              <Input
                placeholder="Search something here"
                leftIcon={<RiSearchLine />}
                type={INPUT_TYPES.TEXT}
              />
            </div>
            <IconButton icon={<RiEqualizerLine />} label="Filter search" />
          </div>
        </div>
      </header>

      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
};

export default Header;
