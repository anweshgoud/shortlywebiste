import styles from "./Body2.module.css";
import imageSource from "./ComputerImage.jpg";

const Body2 = () => {
  return (
    <div style={{marginLeft:'-5%'}}>
      <div
        style={{
          backgroundImage: `url(${imageSource})`,
          height: "570px",
          backgroundSize: "contain",
          width: "630px",
          border:"1px solid transparent",
          backgroundRepeat:"no-repeat",
          backgroundSize:'cover',
          marginRight:'0%'
        }}
      ></div>
    </div>
  );
};

export default Body2;
