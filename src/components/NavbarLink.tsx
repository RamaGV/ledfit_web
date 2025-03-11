interface NavbarLinkProps {
  href: string;
  label: string;
  isMobile?: boolean;
  onClick?: () => void;
}

export default function NavbarLink({ 
  href, 
  label,
  isMobile = false,
  onClick
}: NavbarLinkProps) {
  return (
    <a 
      href={href} 
      className={`
        ${isMobile 
          ? "block w-full py-3 px-4 text-left hover:bg-gray-800" 
          : "text-white hover:text-primary-400 transition-colors duration-200 font-medium"
        }
      `}
      onClick={onClick}
    >
      {label}
    </a>
  );
}
