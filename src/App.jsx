import React from "react";
import Tittle from "./pages/Tittle";
import About from "./pages/About";

function App() {
  return (
    <div className="h-screen w-full snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth">
      <div className="snap-start">
        <Tittle />
      </div>
      <div className="snap-start">
        <About />
      </div>
    </div>
  );
}

export default App;