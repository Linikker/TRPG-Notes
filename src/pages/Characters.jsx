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
        <div className="space-y-6 text-center md:w-1/2 md:text-left">
          <h2 className="text-9xl font-bold text-rose-100">This is TRPG</h2>
          <p className="text-2xl text-rose-300">
            Take control of your{" "}
            <strong className="font-bold">D&D campaign</strong> by keeping
            everything easy and accessible on your screen.
          </p>
          <button className="rounded-md bg-black px-8 py-4 text-xl text-rose-100 hover:bg-gray-900">
            Play now
          </button>
        </div>
      </section>
    </div>
  );
}
