"use client"; // Needed for interactive components

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          href="/dashboard"
          className={pathname === "/dashboard" ? "active" : ""}
        >
          Dashboard
        </Link>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>
          About
        </Link>
        <Link
          href="/contact"
          className={pathname === "/contact" ? "active" : ""}
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
