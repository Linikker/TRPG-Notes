import React from "react";
import Navbar from "./components/Navigator";
import Tittle from "./components/Tittle";
import About from "./pages/About";

function App() {
  return (
    <div className="sroll-smooth h-screen w-screen snap-y snap-mandatory flex-wrap justify-items-center overflow-y-scroll px-15">
      <div class="h-screen snap-start">
        <Navbar />
        <Tittle />
      </div>
      <div class="h-screen snap-start">
        <About />
      </div>
    </div>
  );
}

export default App;
