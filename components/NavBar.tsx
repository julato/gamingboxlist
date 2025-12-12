/*
Implement basic navigation between the primary pages using Next.js routing.
Simplified routing for phase 1; will implement dynamic routing phase 2 

yet to add title in navbar

yet to add profile page
*/
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/game">Search</Link>
      <Link href="/about">About</Link>
    </nav>

  );
}
