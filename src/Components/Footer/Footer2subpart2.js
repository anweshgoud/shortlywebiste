import { useState } from "react";
import styles from "./Footer2subpart2.module.css";

const Footer2subpart2 = ({ ele }) => {
  const [known, setKnown] = useState("");

  const onMounseEnterHandle = () => {
    setKnown(ele);
  };
  const onMouseLeaveHandle = () => {
    setKnown("");
  };

  return (
    <p
      className={`${known===ele ? styles.Special : styles.Normal}`}
      onMouseEnter={() => onMounseEnterHandle()}
      onMouseLeave={() => onMouseLeaveHandle()}
    >
      {ele}
    </p>
  );
};

export default Footer2subpart2;
