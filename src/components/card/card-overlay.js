import classes from "./card-overlay.module.scss";

export default function CardProject({ title, imageSrc, description, link }) {
  return (
    <div className={classes.cardProjectCont}>
      <img src={imageSrc} alt={title} className={classes.cardImage} />
      <div className={classes.overlay}>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={link}>Pogledajte</a>
      </div>
    </div>
  );
}
