import styles from "./Body1Subpart1.module.css";

const Body1Subpart1 = () => {
  return (
    <div style={{ marginLeft: "6%", marginTop: "20%" }}>
      <p
        style={{
          fontSize: "3.4rem",
          fontWeight: "900",
          fontFamily: "Poppins,sans-serif",
          lineHeight: "0.5", 
          color:'#222831'
        }}
      >
        More than just
      </p>
      <p
        style={{
          fontSize: "3.4rem",
          fontWeight: "bolder",
          fontFamily: "Poppins,sans-serif",
          lineHeight: "0.5", 
          color:'#222831'
        }}
      >
        shorter links
      </p>
    </div>
  );
};

export default Body1Subpart1;
