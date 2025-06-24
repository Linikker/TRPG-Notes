function Navbar() {
  return (
    <nav className="w-screen flex justify-between items-center px-18 py-4.5 bg-gradient-to-r from-[#1E1E1E] to-[#4D348F] text-white">
      <h1 className="text-xl font-bold">TRPG Notes</h1>
      <ul className="flex items-center gap-6 text-sm font-medium">
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
          <button className="bg-white text-[#4D348F] font-semibold px-4 py-1 rounded-lg hover:bg-purple-100">
            Sign in
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
