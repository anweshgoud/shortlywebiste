import { AiOutlineFacebook } from "react-icons/ai";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import styles from './Footer3.module.css'
const Footer3=()=>{


    return (
        <div style={{marginTop:'0%',display:'flex' ,color:'white',justifyContent:'space-between'}}>

            <p className={styles.myclass}><AiOutlineFacebook /></p>
            <p className={styles.myclass}><FaSquareTwitter /></p>
            <p className={styles.myclass}><FaPinterestSquare /></p>
            <p className={styles.myclass}><FaInstagram /></p>

        </div>
    )
}

export default Footer3;