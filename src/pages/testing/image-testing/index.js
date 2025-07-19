import classes from "./index.module.scss";
import ExportedImage from "next-image-export-optimizer";

export default function ImageTesting() {
  return (
    <div>
      <div className={classes.image_cont}>
        <ExportedImage src="/images/flowers/cvece-01.jpg" fill />
      </div>
    </div>
  );
}
