import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import WorkingOn from "./components/WorkingOn";
import Work from "./components/Work";
import ActiveSlider from "./components/ActiveSlider";

function App() {
  return (
 <div className="relative bg-black text-white min-h-screen overflow-x-hidden">

      {/* neon background system */}
      <div className="fixed inset-0 -z-20 pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] bg-cyan-500 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-10%] right-1/4 w-[500px] h-[500px] bg-purple-600 blur-[180px] rounded-full" />
      </div>

      {/* grid overlay */}
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <Navbar />

      <Home />

      <Skills />

      <WorkingOn />

      <Work />

      <ActiveSlider />

      <About />

      <Contact />
    </div>
  );
}

export default App;