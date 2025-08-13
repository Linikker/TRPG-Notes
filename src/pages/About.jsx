import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";

export default function About() {
  return (
    <section className="flex min-h-screen w-full flex-col bg-radial-[at_50%_95%] from-fuchsia-900 from-25% to-slate-900 to-90% text-white">
      {/* content */}
      <div className="flex flex-grow flex-col items-center justify-center">
        <h1 className="mb-12 bg-gradient-to-b from-violet-900 to-zinc-100 bg-clip-text pt-16 text-center text-8xl font-bold text-transparent">
          Adventure time!
        </h1>

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 pb-8 transition-transform duration-300 md:grid-cols-3">
          {[about1, about2, about3].map((img, idx) => (
            <div
              key={idx}
              className="rounded-lg p-4 text-center hover:opacity-100"
            >
              <img
                src={img}
                alt={`Card ${idx + 1}`}
                className="mb-4 aspect-[1/0.8] w-full rounded-lg object-cover transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-[28px] font-semibold">
                {
                  [
                    "Create your character",
                    "Search for monsters",
                    "Run your encounters",
                  ][idx]
                }
              </h3>
              <p className="text-justify text-[17px] text-gray-300">
                {
                  [
                    "Organize your character sheet and manage your equipment and skills.",
                    "Search the bestiary for the strongest creatures alive.",
                    "Keep everything flowing with all the information in order.",
                  ][idx]
                }
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* rodapé */}
      <div className="flex w-full items-center justify-between border-t-2 border-rose-400 bg-zinc-900 px-10 py-3 text-xl">
        <h1 className="font-bold">TRPG Notes</h1>
        <h1 className="font-bold">By @Linikker_</h1>
      </div>
    </section>
  );
}
