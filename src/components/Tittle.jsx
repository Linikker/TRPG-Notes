import playingdnd from "../assets/playingdnd.jpg";

function Tittle() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 gap-3 bg-white min-h-[calc(100vh-80px)]">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-6xl font-bold">This is TRPG</h2>
        <p className="text-lg text-gray-700">
          Take control of your <strong className="font-bold">D&D campaign</strong> by keeping everything easy and
          accessible on your screen.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-md text-lg hover:bg-gray-900">
          Start here
        </button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src={playingdnd}
          alt="People playing D&D"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
export default Tittle;
