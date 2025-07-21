import { useEffect, useState } from "react";
import classes from "./images-slideshow.module.scss";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";

const images = [
  { image: "/images/flowers/cvece-02.jpg", alt: "Opis prve slike" },
  { image: "/images/flowers/cvece-03.jpg", alt: "Opis druge slike" },
  { image: "/images/flowers/cvece-04.jpg", alt: "Opis trece slike" },
  { image: "/images/flowers/cvece-05.jpg", alt: "Opis cetvrte slike" },
  { image: "/images/flowers/cvece-06.jpg", alt: "Opis pete slike" },
];

export default function ImageSladeshow() {
  const myLoader = ({ src }) => {
    return src;
  };
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      <p>Testing</p>

      {images.map((image, index) => (
        <Image
          loader={myLoader}
          key={index}
          src={image.image}
          width={800}
          height={600}
          className={index === currentImage ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
