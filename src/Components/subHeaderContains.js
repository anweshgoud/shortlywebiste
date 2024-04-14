import { useState } from "react";
import styles from "./subHeaderContains.module.css";

const SubHeader = ({ elements }) => {
  const [handleitem, sethandleitem] = useState("Shortly");

  const HandleOverEnter = (element) => {
    sethandleitem(element);
  };
  const HandleOverLeave = () => {
    sethandleitem(null);
  };

  return (
    <div
      onMouseEnter={() => HandleOverEnter(elements)}
      className={`${elements === handleitem ? styles.Special : styles.Normal}`}
      onMouseLeave={HandleOverLeave}
    >
      {elements}
    </div>
  );
};

export default SubHeader;
