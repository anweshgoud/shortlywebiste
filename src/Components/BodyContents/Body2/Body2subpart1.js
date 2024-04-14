import { useContext, useRef } from "react"
import styles from "./Body2subpart1.module.css"
import background from "./background1.jpg"
import { MyContext } from "../../Context/createContext"

const Body2subpart1=()=>{

    const { myArray, addToArray,longUrl,shortenUrl}=useContext(MyContext);
    const Valueinput=useRef(null);

    const handleinput=()=>{
        console.log(Valueinput.current.value);
        addToArray(Valueinput.current.value);
        Valueinput.current.value="";
    }

    return (

        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"5%"}}>
            <div style={{width:"75%",height:"130px",display:"flex",justifyContent:"center",alignItems:"center",backgroundImage:`url(${background})`,borderRadius:'4px'}}>
                <div><input type="text" placeholder="Shorten a link here.." ref={Valueinput} style={{width:"600px",height:"40px",fontFamily:"sans-serif",fontSize:"medium",marginInline:"5px",borderRadius:'5px'}}></input></div>
                <div ><button className={styles.newClass} onClick={()=>handleinput()}>Shorten here</button></div>
            </div>
        </div>
    )
}

export default Body2subpart1;