import logo from "./logo.svg";
import "./App.css";
import HeaderMain from "./Components/HeaderMain";
import MainDiv from "./Components/BodyContents/MainBody";
import { MyContextProvider } from "./Components/Context/createContext";
import FooterMain from "./Components/Footer/FooterMain";

function App() {
  return (
    <MyContextProvider>
      <HeaderMain></HeaderMain>
      <MainDiv></MainDiv>
      <FooterMain></FooterMain>
    </MyContextProvider>
  );
}

export default App;
