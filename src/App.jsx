import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div data-theme="light">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <Footer/>
    </div>
  );
};

export default App;
