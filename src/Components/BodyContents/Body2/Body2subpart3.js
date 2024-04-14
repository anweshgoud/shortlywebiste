import Bodysubpart3array from "./body2subpart3array";

const Body2subpart3 = () => {
  const array = [
    {
      icons: "MdAutoGraph",
      heading: "Brand Recognition",
      subHeading:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
      top: "4",
      width: 100,
      height: 12,
      top1:-2
    },
    {
      icons: "IoSpeedometerSharp",
      heading: "Detailed Records",
      subHeading:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      top: "15",
      width: 100,
      height: 12,
      top1:2
    },
    {
      icons: "GiPencilBrush",
      heading: "Fully Customizable",
      subHeading:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      top: "25",
      width: 0,
      height: 0,
      top1:6
    },
  ];

  return (
    <>
    <div style={{display:'flex',marginLeft:'5%'}}>
    {
        array.map((element)=>(
            <Bodysubpart3array elements={element}></Bodysubpart3array>
        ))
    }
    </div>
    </>
  )
};

export default Body2subpart3;
