// import Image from "next/image";

// import Reacts from "react";
import PageNavLink from "@/components/sigle-items/page-nav-link";
import classes from "./index.module.scss";
// import ExportedImage from "next-image-export-optimizer";

export default function TestingPage() {
  return (
    <div className={classes.cont}>
      <h3 className={classes.title}>Stranice testiranja</h3>
      <PageNavLink />
      {/* <p>Prikaz slike</p> */}
    </div>
  );
}
