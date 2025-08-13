import { React } from "react";
import Tittle from "./Tittle";
import About from "./About";

export default function Home() {
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
