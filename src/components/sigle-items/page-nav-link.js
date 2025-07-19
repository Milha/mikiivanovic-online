import Link from "next/link";

import classes from "./page-nav-link.module.scss";

export default function PageNavLink() {
  return (
    <nav className={classes.nav}>
      <Link href="./testing/image-testing">Na stranu testiranja slika </Link>
      <Link href="./testing/image-testing/images-slideshow">
        Na stranu testiranja SlideShow
      </Link>
    </nav>
  );
}
