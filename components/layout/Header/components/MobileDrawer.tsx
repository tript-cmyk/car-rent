"use client";

import { useEffect } from "react";
import {
  RiCloseLine,
  RiHeartLine,
  RiNotification3Line,
  RiSettings3Line,
} from "react-icons/ri";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/lib/utils";
import HeaderNavLinks from "./HeaderNavLinks";
import { HEADER_NAV_LINKS } from "../header.constants";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-60 bg-black/40 backdrop-blur-sm",
          "transition-opacity duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      <div
        title="Navigation menu"
        className={cn(
          "fixed top-0 left-0 z-100 h-full w-72 bg-white shadow-2xl",
          "flex flex-col",
          "transition-transform duration-300 ease-in-out",
          !isOpen && "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-secondary-100">
          <div className="flex items-center gap-3">
            <div className="relative size-10 rounded-full overflow-hidden ring-2 ring-secondary-200">
              <img
                src="/images/Profil.png"
                alt="User avatar"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-secondary-900">
                My Account
              </p>
              <p className="text-xs text-secondary-400">Welcome back!</p>
            </div>
          </div>
          <IconButton
            icon={<RiCloseLine />}
            label="Close menu"
            onClick={onClose}
          />
        </div>

        <nav className="flex flex-col gap-1 px-4 py-4">
          {HEADER_NAV_LINKS.map((link, index) => (
            <HeaderNavLinks
              key={index}
              href={link.href}
              label={link.label}
              onClose={onClose}
            />
          ))}
        </nav>

        <div className="mt-auto px-4 py-5 border-t border-secondary-100 flex items-center justify-end gap-3">
          <IconButton icon={<RiHeartLine />} label="Favourites" />
          <IconButton
            icon={<RiNotification3Line />}
            label="Notifications"
            badge
          />
          <IconButton icon={<RiSettings3Line />} label="Settings" />
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
