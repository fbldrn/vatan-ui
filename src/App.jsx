import Header from "./components/Header";
import Courier from "./components/footer/Courier";
import Footer from "./components/footer/Footer";
import Items from "./components/items/Items";
import Mostsellers from "./components/items/Mostsellers";
import Webspecial from "./components/items/Webspecial";
import ImageSlider from "./components/slider/imageSlider";
import "./index.css";

function App() {
  return (
  <>
    <Header/>
    <ImageSlider/>
    <Items/>
    <Webspecial/>
    <Mostsellers/>
    <Courier/>
    <Footer/>
    </>
  );
}

export default App;
