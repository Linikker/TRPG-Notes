import React from "react";
import Navbar from "./components/Navigator";
import Tittle from "./pages/Tittle";
import About from "./pages/About";

function App() {
  return (
    <div className="h-screen w-full snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth">
      <div className="h-screen snap-start">
        <Tittle />
      </div>

      <div className="min-h-screen snap-start">
        <About />
      </div>
    </div>
  );
}

export default App;
