import Footer2subpart1 from "./Footer2subpart1";

const Footer2 = () => {
  const array1 = [
    ["Features", "Link Shortening", "Branded Links", "Analytics"],
    ["Resources", "Blog", "Developers", "Support"],
    ["Company","About","Our team","Careers","Contact"]
  ];

  return (
    <>
    {
        array1.map((element)=>(
            <Footer2subpart1 element={element}></Footer2subpart1>
        ))
    }
    </>
  )


};

export default Footer2;
