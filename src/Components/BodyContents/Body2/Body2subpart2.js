import { useContext } from "react";
import Body2subpart3 from "./Body2subpart3";
import { MyContext } from "../../Context/createContext";
import ArrayLink from "./arrayLinks";

const Body2subpart2 = () => {
  const { myArray } = useContext(MyContext);
  
  return (
    <>
      <div
        style={{
          backgroundColor: "#E3E1D9",
          marginTop: "-5%",
          overflow: "hidden",
          width: "100%",
        }}
      >
        
        <div style={{ marginTop: "8%" }}>
          <p
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              fontSize: "2.2rem",
              fontWeight: "bolder",
              marginTop:'2%'
            }}
          >
            <div style={{}}>
        {myArray.map((element, index) => (
          <ArrayLink key={index} element={element} />
        ))}
        </div>
            Advanced Statistics
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "1rem",
              marginTop: "5%",
              fontWeight: "600",
              color: "grey",
              fontFamily: "sans-serif",
            }}
          >
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>
    </>
  );
};

export default Body2subpart2;

