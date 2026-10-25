import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import SectionFour from "./components/SectionFour";
const App = () => {
  return (
    <div data-theme="light">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree/>
      <SectionFour/>
    </div>
  );
};

export default App;
