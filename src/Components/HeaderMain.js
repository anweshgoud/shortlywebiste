import { useState } from "react";
import styles from "./HeaderMain.module.css";
import SubHeader from "./subHeaderContains";
const HeaderMain = () => {
  const array = ["Shortly", "Features", "Pricing", "Resources"];

  const [buttonClass,setButtonClass]=useState(null);

  const HandleButtonClassEnter=(element)=>{
    setButtonClass(element);
  }
  const HandleButtonClassLeave=()=>{
    setButtonClass("");
  }

  return (
    <div className={styles.HeaderMainClass}>
      <div className={styles.HeaderPart1}>
        {array.map((elements) => (
          <SubHeader elements={elements}></SubHeader>
        ))}
      </div>

      <div className={styles.Login}>
        <button style={{marginRight:"90px"}} className={`${buttonClass==="Login" ? styles.newClass: styles.normalClass}`} onMouseEnter={()=>HandleButtonClassEnter("Login")} onMouseLeave={()=>HandleButtonClassLeave}>Login</button>
        <button className={`${buttonClass==="sign" ? styles.newClass: styles.normalClass}`} onMouseEnter={()=>HandleButtonClassEnter("sign")} onMouseLeave={()=>HandleButtonClassLeave}>Sign up</button>
      </div>
    </div>
  );
};

export default HeaderMain;
