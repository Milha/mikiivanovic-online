import { GalleryItemProps } from "@/types/gallery";

import classes from "./GalleryItem.module.scss";

const GalleryItem = ({ data }: GalleryItemProps) => {
  // console.log(data.id);
  return (
    <>
      <div className={classes.galleryItemCont}>
        <h2>{data.title}</h2>
        <img src={data.image} />
        <p>{data.title}</p>
        <p>Cena: </p>
      </div>
    </>
  );
};

export default GalleryItem;
