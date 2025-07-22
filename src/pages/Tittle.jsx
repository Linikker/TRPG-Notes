import playingdnd from "../assets/playingdnd.jpg";

function Tittle() {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex w-full items-center justify-between bg-gradient-to-r from-[#1E1E1E] to-[#4D348F] px-6 py-4 text-white">
        <h1 className="text-2xl font-bold">TRPG Notes</h1>
        <ul className="flex items-center gap-6 text-base font-medium">
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

      {/* Content */}
      <section className="flex h-screen w-full flex-col items-center justify-center gap-10 bg-white px-15 py-10 md:flex-row">
        {/* Text */}
        <div className="space-y-6 text-center md:w-1/2 md:text-left">
          <h2 className="text-5xl font-bold">This is TRPG</h2>
          <p className="text-lg text-gray-700">
            Take control of your <strong className="font-bold">D&D campaign</strong> by keeping everything easy and accessible on your screen.
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