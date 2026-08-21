import Link from "next/link";

interface HeaderNavLinksProps {
  label: string;
  href: string;
  onClose: () => void;
}

const HeaderNavLinks = ({ href, label, onClose }: HeaderNavLinksProps) => {
  return (
    <Link
      key={href}
      href={href}
      onClick={onClose}
      className="px-3 py-2.5 rounded-lg text-sm font-medium text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900 transition-colors duration-150"
    >
      {label}
    </Link>
  );
};

export default HeaderNavLinks;
