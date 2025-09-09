import Navbar from "../components/Navbar";

export default function Characters() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>

      {/* Content */}
      <section className="flex min-h-[calc(100vh-66px)] flex-col place-content-center items-center gap-10 bg-radial-[at_25%_10%] from-fuchsia-900 from-10% to-slate-900 to-60% px-6 pt-8 md:flex-row md:pt-0 md:pl-16">
        {/* Text */}
        <div className="space-y-6 text-center">
          <h2 className="text-9xl font-bold text-rose-100">This is TRPG</h2>
          <p className="text-2xl text-rose-300">
            This'll be the characters session
          </p>
        </div>
      </section>
    </div>
  );
}
