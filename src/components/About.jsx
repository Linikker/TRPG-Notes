export default function About({ innerRef }) {
  return (
    <section
      ref={innerRef}
      className="h-screen bg-white flex items-center justify-center"
    >
      <p className="text-2xl text-gray-800">Welcome to the About section!</p>
    </section>
  );
}
