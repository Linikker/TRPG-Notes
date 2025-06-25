import playingdnd from "../assets/playingdnd.jpg";

function Tittle() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-between gap-3 bg-white p-10 md:flex-row">
      <div className="space-y-6 text-center md:w-1/2 md:text-left">
        <h2 className="text-6xl font-bold">This is TRPG</h2>
        <p className="text-lg text-gray-700">
          Take control of your{" "}
          <strong className="font-bold">D&D campaign</strong> by keeping
          everything easy and accessible on your screen.
        </p>
        <button className="rounded-md bg-black px-6 py-3 text-lg text-white hover:bg-gray-900">
          Start here
        </button>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2">
        <img src={playingdnd} alt="People playing D&D" className="rounded-lg" />
      </div>
    </section>
  );
}
export default Tittle;
