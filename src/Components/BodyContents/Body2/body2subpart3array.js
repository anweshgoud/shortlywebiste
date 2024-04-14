import { GiPencilBrush } from "react-icons/gi";
import { MdAutoGraph } from "react-icons/md";
import { IoSpeedometerSharp } from "react-icons/io5";

const Bodysubpart3array = ({ elements }) => {
  const { icons, heading, subHeading, top, width, heigth, top1 } = elements;

  const renderIcon = () => {
    switch (icons) {
      case "GiPencilBrush":
        return (
          <GiPencilBrush
            style={{
              fontSize: "2.5rem",
              color: "#15F5BA",
              marginLeft: "20px",
              marginTop: "13px",
            }}
          />
        );
      case "MdAutoGraph":
        return (
          <MdAutoGraph
            style={{
              fontSize: "2.5rem",
              color: "#15F5BA",
              marginLeft: "20px",
              marginTop: "13px",
            }}
          />
        );
      case "IoSpeedometerSharp":
        return (
          <IoSpeedometerSharp
            style={{
              fontSize: "2.5rem",
              color: "#15F5BA",
              marginLeft: "20px",
              marginTop: "13px",
            }}
          />
        );
      default:
        return null;
    }
  };
  return (
    <>
      <div style={{ display: "flex", marginTop: "8%" }}>
        <div>
          <div>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                alignContent: "center",
                width: "80px",
                height: "70px",
                borderRadius: "50%",
                backgroundColor: "#31363F",
                position: "absolute",
                marginLeft: "10%",
                marginTop: `-3%`,
              }}
            >
              {renderIcon()}
            </div>
            <div
              style={{
                width: "330px",
                height: "340px",
                backgroundColor: "white",
                textAlign: "center",
                marginTop: `${top}%`,
                borderRadius: "5px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginTop: "5%",
                  lineHeight: "100px",
                  color: "#31363F",
                }}
              >
                {heading}
              </h3>
              <p
                style={{
                  marginLeft: "35px",
                  marginRight: "35px",
                  fontSize: "1.2rem",
                  lineHeight: "30px",
                  fontWeight: "500",
                  color: "grey",
                }}
              >
                {subHeading}
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: `${width}px`,
            height: `12px`,
            backgroundColor: "#2acfcf",
            marginTop: "50%",
          }}
        ></div>
      </div>
    </>
  );
};

export default Bodysubpart3array;
