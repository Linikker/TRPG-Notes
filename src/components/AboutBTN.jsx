export default function Hero({ onArrowHover }) {
  return (
    <section className="h-[90vh] flex flex-col items-center justify-center bg-gradient-to-r from-[#1E1E1E] to-[#4D348F] text-white relative">
      <h1 className="text-5xl font-bold mb-4">TRPG Notes</h1>
      <p className="text-lg">Your campaign, under control.</p>

      <button
        onMouseEnter={onArrowHover}
        className="absolute bottom-4 text-3xl animate-bounce"
      >
        ↓
      </button>
    </section>
  );
}
