import NavBar from "./components/NavBar";
import HeroCarousel from "./components/HeroCarousel";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Career from "./components/Career";
import Contact from "./components/Contact";
import './App.css'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroCarousel />
      <About/>
      <WhatIDo/>
      <Career/>
      <Contact/>
    </div>
  );
}

export default App;
