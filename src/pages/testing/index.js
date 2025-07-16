import Image from "next/image";
import classes from "./index.module.scss";

export default function TestingPage() {
  return (
    <div className={classes.cont}>
      {/* <p>Prikaz slike</p> */}
      <div className={classes.image_cont}>
        <Image src="/images/flowers/cvece-01.jpg" fill />
      </div>
    </div>
  );
}
