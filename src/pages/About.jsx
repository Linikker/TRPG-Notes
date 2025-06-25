import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";

export default function About() {
  return (
    <section className="h-screen w-screen bg-gradient-to-t from-[#1E1E1E] to-[#4D348F] px-4 py-16 text-white">
      <h1 className="mb-12 text-center text-4xl font-bold underline">
        Adventure time!
      </h1>

      <div className="mx-auto grid grid-cols-1 gap-8 px-10 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-opacity-10 rounded-lg p-4 text-center">
          <img
            src={about1}
            alt="Create your character"
            className="mb-4 h-120 w-full rounded-lg object-cover"
          />
          <h3 className="text-lg font-semibold">Create your character</h3>
          <p className="text-sm text-gray-300">
            Organize your character sheet and manage your equipment and skills.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-opacity-10 rounded-lg p-4 text-center">
          <img
            src={about2}
            alt="Search for monsters"
            className="mb-4 h-120 w-full rounded-lg object-cover"
          />
          <h3 className="text-lg font-semibold">Search for monsters</h3>
          <p className="text-sm text-gray-300">
            Search the bestiary for the strongest creatures alive.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-opacity-10 rounded-lg p-4 text-center">
          <img
            src={about3}
            alt="Run your encounters"
            className="mb-4 h-120 w-full rounded-lg object-cover"
          />
          <h3 className="text-lg font-semibold">Run your encounters</h3>
          <p className="text-sm text-gray-300">
            Keep everything flowing with all the information in order.
          </p>
        </div>
      </div>
    </section>
  );
}
