import Footer2subpart2 from "./Footer2subpart2";

const Footer2subpart1 = ({ element }) => {
  return (
    <div style={{marginTop:'2%'}}>
      {element.map((ele,index) => (
        <Footer2subpart2 key={index} ele={ele} />
      ))}
    </div>
  );
};

export default Footer2subpart1;