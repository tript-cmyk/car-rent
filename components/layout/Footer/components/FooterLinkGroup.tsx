import Link from "next/link";
import React from "react";

interface FooterLinkGroupProps {
  title: string;
  links: {
    href: string;
    label: string;
  }[];
}

const FooterLinkGroup = ({ title, links }: FooterLinkGroupProps) => {
  return (
    <div className="flex flex-col min-w-35">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="flex flex-col items-start gap-4 text-[16px] text-secondary-400">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinkGroup;
