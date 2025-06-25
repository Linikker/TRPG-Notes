function Navbar() {
  return (
    <nav className="flex w-screen items-center justify-between bg-gradient-to-r from-[#1E1E1E] to-[#4D348F] px-18 py-4.5 text-white">
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
          <button className="rounded-lg bg-white px-4 py-1 font-semibold text-[#4D348F] hover:bg-purple-100">
            Sign in
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
