import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
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
    <div className="sticky top-0 z-50 w-full">
      <nav className="flex w-full items-center justify-between border-b-2 border-rose-400 bg-zinc-900 px-6 py-4 text-rose-100">
        <h1 className="text-2xl font-bold">TRPG Notes</h1>

        {/* menu (mobile) */}
        <button
          ref={buttonRef}
          className="text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* menu desktop */}
        <ul className="hidden items-center gap-6 text-base font-medium md:flex">
          <li>
            <a href="#">Encounters</a>
          </li>
          <li>
            <a href="#">Characters</a>
          </li>
          <li>
            <a href="#">Monsters</a>
          </li>
          <li>
            <button className="rounded-lg bg-white px-4 py-1 font-semibold text-fuchsia-900 hover:bg-purple-100">
              Play now
            </button>
          </li>
        </ul>
      </nav>

      {/* menu mobile collapsable */}
      {menuOpen && (
        <ul
          ref={menuRef}
          className="flex w-full flex-col bg-[#4D348F] px-6 py-4 text-base font-medium text-white md:hidden"
        >
          <li className="py-2">
            <a href="#">Encounters</a>
          </li>
          <li className="py-2">
            <a href="#">Characters</a>
          </li>
          <li className="py-2">
            <a href="#">Monsters</a>
          </li>
          <li className="py-2">
            <button className="rounded-lg bg-white px-4 py-1 font-semibold text-fuchsia-900 hover:bg-purple-100">
              Sign in
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
