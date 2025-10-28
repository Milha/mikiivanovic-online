import { GetStaticPaths, GetStaticProps } from "next";

import { staklici } from "@/data/staklici";
import GalleryItem from "@/components/images/GalleryItem";

import { StakliciPageProps } from "@/types/gallery";

import classes from "./index.module.scss";

const StakliciGalleryPage = ({ items }: StakliciPageProps) => {
  return (
    <>
      <div className={classes.cont}>
        <h2>Galerija ponude staklica</h2>
        <div className={classes.galleryCont}>
          {items.map((st) => (
            <GalleryItem key={st.id} data={st} />
          ))}
        </div>
      </div>
    </>
  );
};

// export const getStaticPaths: GetStaticPaths = () => {
//   return {
//     paths: [],
//     fallback: false,
//   };
// };

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      items: staklici,
    },
  };
};

export default StakliciGalleryPage;
