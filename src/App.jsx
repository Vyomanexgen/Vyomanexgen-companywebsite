import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services"; 
import PortFolio from "./components/PortFolio";
import Testimonals from "./components/Testimonals";
import Contact from "./components/Contact";
import Fotter from "./components/Fotter"

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services /> 
      <PortFolio/>
      <Testimonals/>
      <Contact/>
      <Fotter/>
      {/* Add more sections here */}
    </>
  );
}

export default App;
