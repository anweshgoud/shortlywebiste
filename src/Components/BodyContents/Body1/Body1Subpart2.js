import styles from "./Body1Subpart2.module.css"
const Body1Subpart2 = () => {
  return (
    <div style={{marginLeft: "6%"}}>
      <div className={styles.BuildClass}>
        <p>Build your brand's recognition and get</p>
        <p>detailed insights on how your links are </p>
        <p>performing</p>
      </div>

      <div>
        <button className={styles.newClass}>Get Started</button>
      </div>
    </div>
  );
};

export default Body1Subpart2;
