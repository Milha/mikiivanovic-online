import classes from "./card-overlay.module.scss";

import { CardProjectProps } from "../../types/card";
import SingleTag from "../ui/tag/SingleTag";

const CardProject: React.FC<CardProjectProps> = ({
  title,
  imageSrc,
  description,
  link,
  tagList,
}) => {
  return (
    <div className={classes.cardProjectCont}>
      <img src={imageSrc} alt={title} className={classes.cardImage} />
      <div className={classes.overlay}>
        <div className={classes.tags}>
          {tagList.map((tag, index) => (
            <SingleTag key={index} tagTitle={tag} />
          ))}
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={link}>Pogledajte</a>
      </div>
    </div>
  );
};

export default CardProject;
