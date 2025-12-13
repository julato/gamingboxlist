/*
PHASE 1
Implement basic navigation between the primary pages using Next.js routing.
Simplified routing for phase 1; will implement dynamic routing phase 2 
yet to add title in navbar
yet to add profile page

PHASE 3
scrapped profile page
add title to banner
*/
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className="justify-between px-8 py-4 flex items-center bg-black text-white">
      <h1 className="text-3xl font-bold tracking-wide">
        GameBoxList
      </h1> 
      <div className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/game">Search</Link>
      <Link href="/about">About</Link>
    </div>
    </nav>
    

  );
}
