import Image from "next/image";
import Link from "next/link";

import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header>
      <Link href="/" className={classes.logo}>
        <Image
          src="/images/logo/logo.png"
          alt="Logo sa inicijalima vlasnika sajta"
          width={45}
          height={45}
        />
      </Link>
    </header>
  );
}
