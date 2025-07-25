import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";

export default function About() {
  return (
    <section className="flex min-h-screen w-full flex-col bg-gradient-to-t from-[#1E1E1E] to-[#4D348F] text-white">
      {/* conteúdo central */}
      <div className="flex flex-grow flex-col items-center justify-center">
        <h1 className="mb-12 pt-16 text-center text-4xl font-bold underline">
          Adventure time!
        </h1>

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-3 pb-8">
          {[about1, about2, about3].map((img, idx) => (
            <div key={idx} className="rounded-lg p-4 text-center">
              <img
                src={img}
                alt={`Card ${idx + 1}`}
                className="mb-4 aspect-[1/0.8] w-full rounded-lg object-cover"
              />
              <h3 className="text-[28px] font-semibold">
                {['Create your character', 'Search for monsters', 'Run your encounters'][idx]}
              </h3>
              <p className="text-justify text-[17px] text-gray-300">
                {[
                  'Organize your character sheet and manage your equipment and skills.',
                  'Search the bestiary for the strongest creatures alive.',
                  'Keep everything flowing with all the information in order.'
                ][idx]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* rodapé */}
      <div className="flex w-full items-center justify-between bg-black px-10 py-3 text-xl">
        <h1 className="font-bold">TRPG Notes</h1>
        <h1 className="font-bold">By @Linikker_</h1>
      </div>
    </section>
  );
}
