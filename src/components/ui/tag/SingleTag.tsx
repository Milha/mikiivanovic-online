import classes from "./SingleTag.module.scss";

import { TagProjectProps } from "../../../types/card";

const SingleTag: React.FC<TagProjectProps> = ({ tagTitle }) => {
  return <span className={classes.tag}>{tagTitle}</span>;
};

export default SingleTag;
