import backgroundViolet from "./background.jpg";
import styles from "./body3Main.module.css";

const Body3 = () => {
  return (
    <>
      <div
        style={{
          height: "230px",
          width: "100%",
          backgroundImage: `url(${backgroundViolet})`,
          backgroundColor: "black",
          backgroundSize:'contain',
          backgroundPosition: "center",
          marginTop: "-5%",
        }}
      >
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'70%'}}>
          <p
            style={{
              color: "white",
              fontFamily: "sans-serif",
              fontWeight: "bolder",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            Boost your links today
          </p>
        </div>
        <button className={styles.newClass}>Get Started</button>
      </div>
    </>
  );
};

export default Body3;
