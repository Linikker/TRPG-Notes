import { useState, useEffect, useRef } from "react";
import playingdnd from "../assets/playingdnd.jpg";

function Tittle() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    const handleScroll = () => setMenuOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full">
        <nav className="flex w-full items-center justify-between bg-gradient-to-r from-[#1E1E1E] to-[#4D348F] px-6 py-4 text-white">
          <h1 className="text-2xl font-bold">TRPG Notes</h1>

          {/* Botão hambúrguer (mobile) */}
          <button
            ref={buttonRef}
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Menu desktop */}
          <ul className="hidden md:flex items-center gap-6 text-base font-medium">
            <li><a href="#">Encounters</a></li>
            <li><a href="#">Characters</a></li>
            <li><a href="#">Monsters</a></li>
            <li>
              <button className="rounded-lg bg-white px-4 py-1 font-semibold text-[#4D348F] hover:bg-purple-100">
                Sign in
              </button>
            </li>
          </ul>
        </nav>

        {/* Menu mobile colapsável */}
        {menuOpen && (
          <ul
            ref={menuRef}
            className="w-full flex flex-col bg-[#4D348F] px-6 py-4 text-white text-base font-medium md:hidden"
          >
            <li className="py-2"><a href="#">Encounters</a></li>
            <li className="py-2"><a href="#">Characters</a></li>
            <li className="py-2"><a href="#">Monsters</a></li>
            <li className="py-2">
              <button className="rounded-lg bg-white px-4 py-1 font-semibold text-[#4D348F] hover:bg-purple-100">
                Sign in
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* Content */}
      <section className="flex min-h-[calc(100vh-64px)] flex-col place-content-center items-center gap-10 px-6 pt-8 md:flex-row md:px-16 md:pt-0">
        {/* Text */}
        <div className="space-y-6 text-center md:w-1/2 md:text-left">
          <h2 className="text-5xl font-bold">This is TRPG</h2>
          <p className="text-lg text-gray-700">
            Take control of your <strong className="font-bold">D&D campaign</strong> by keeping
            everything easy and accessible on your screen.
          </p>
          <button className="rounded-md bg-black px-6 py-3 text-lg text-white hover:bg-gray-900">
            Start here
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={playingdnd}
            alt="People playing D&D"
            className="w-full max-w-full rounded-lg object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default Tittle;