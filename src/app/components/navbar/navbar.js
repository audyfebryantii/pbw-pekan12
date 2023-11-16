'use client'

import "@app/components/navbar/navbar.css"
import Diary from "@app/diary/page";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="navbar-container">
      <Link className={`navbar-text ${pathname === '/' ? 'active' : 'default'}`} href="/">
        Home
      </Link>
      <p>|</p>
      <Link className={`navbar-text ${pathname === '/diary' ? 'active' : 'default'}`} href={"/diary"}>
        Fetch
      </Link>
    </div>
  );
};

export default Navbar;
