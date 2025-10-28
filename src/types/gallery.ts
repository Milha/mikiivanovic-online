export type StaklicProp = {
  id: string;
  title: string;
  image: string;
};

export type StakliciPageProps = {
  items: StaklicProp[];
};

export type GalleryItemProps = {
  data: StaklicProp;
};
