import { useRef } from "react";
import Tittle from "./Tittle";
import About from "./About";

export default function Home() {
  const sectionsRef = useRef([]);

  const scrollToSection = (index) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-screen w-full snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth">
      {/* section 1 */}
      <div
        ref={(el) => (sectionsRef.current[0] = el)}
        className="h-screen snap-start relative"
      >
        <Tittle />
        <button
          onClick={() => scrollToSection(1)}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-lg text-2xl px-6 py-3 text-white shadow-lg hover:text-fuchsia-600"
        >
          ⮟
        </button>
      </div>

      {/* section 2 */}
      <div
        ref={(el) => (sectionsRef.current[1] = el)}
        className="h-screen snap-start relative"
      >
        <About />
        <button
          onClick={() => scrollToSection(0)}
          className="absolute top-10 left-1/2 -translate-x-1/2 rounded-lg text-2xl px-6 py-3 text-white shadow-lg hover:text-fuchsia-600"
        >
          ⮝
        </button>
      </div>
    </div>
  );
}
