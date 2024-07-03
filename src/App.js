import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

import Work from "./components/Work";
import ActiveSlider from "./components/ActiveSlider";


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (

    // 
    //   <BrowserRouter>
    //   <Routes>
    //     <Route index element={<Home />} />
    //     <Route Navbar element={<Navbar />} />
    //     <Route path="/Home" element={<Home />} />
    //     <Route path="/About" element={<About />} />
    //     <Route path="/Work" element={<Work />} />
    //     <Route path="/Skills" element={<Skills />} />
    //     <Route path="/Work" element={<Work />} />
    //     <Route path="/ActiveSlider" element={<ActiveSlider />} />
    //     <Route path="/Contact" element={<Contact />} />
    //   </Routes>
    // </BrowserRouter>
    // 
    <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <ActiveSlider />

        <Contact />
</div>
      
  );
}

export default App;
