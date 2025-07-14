import Image from "next/image";
import Link from "next/link";

import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image
          src="/images/logo/logo.png"
          alt="Logo sa inicijalima vlasnika sajta"
          width={45}
          height={45}
        />
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/projects">Projekti</Link>
          </li>
          <li>
            <Link href="/testing">Testiranje</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
