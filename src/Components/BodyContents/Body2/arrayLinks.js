import { useState } from "react";
import styles from "./arrayLinks.module.css";
const ArrayLink = ({ element }) => {

  const value=element["short"]; 

  const [button,setButton]=useState("copy")
  const [buttonclass,setbuttonclass]=useState("#2acfcf")
  const copyToClipboard = () => {

    if(button==='copy'){
        setButton('copied')
        setbuttonclass('darkblue')
    }
    else{
        setButton('copy')
        setbuttonclass('#2acfcf')
    }
    navigator.clipboard
      .writeText(value)
      .then(() => {
        alert("Short URL copied to clipboard!");
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid transparent",
        backgroundColor: "white",
        width: "80%",
        height: "60px",
        justifyContent: "space-evenly",
        marginLeft: "10%",
        alignItems: "center",
        borderRadius:'5px',
        marginBottom:'1.5%'
      }}
    >
      <a className={styles.LinksClass}>{element["long"]}</a>

      <a className={styles.LinksClass} style={{marginLeft:"30%",color:'#2acfcf',fontWeight:'bold'}}>{element["short"]}</a>

      <p style={{ marginTop: "2%" }}>
        <button
          style={{
            padding: "10px 30px 10px 30px",
            backgroundColor: `${buttonclass}`,
            borderColor: "transparent",
            color: "white",
            fontWeight: "bold",
            borderRadius:'5px'
          }}
          onClick={() => copyToClipboard()}
        >
          {button}
        </button>
      </p>
    </div>
  );
};

export default ArrayLink;
