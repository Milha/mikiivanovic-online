import classes from "./card-position.module.scss";

export default function PositionCard({ children }) {
  return <section className={classes.cont}>{children}</section>;
}
