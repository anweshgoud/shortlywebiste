import Body1Subpart1 from "./Body1Subpart1"
import Body1Subpart2 from "./Body1Subpart2";
import Body2 from "./Body1Subpart3";

const Body1=()=>{

    return (
        <div style={{display:"flex"}}>
            <div style={{width:"55%"}}>
                <Body1Subpart1></Body1Subpart1>
                <Body1Subpart2></Body1Subpart2>
            </div>
            <div>
                <Body2></Body2>
            </div>
        </div>
    )
}

export default Body1;