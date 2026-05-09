import { useState } from "react";

export default function ActiveSlider() {
  const items = [
    {
      title: "UI Experiments",
      desc: "Small interface studies focused on motion, layout, and interaction patterns.",
    },
    {
      title: "Component Prototypes",
      desc: "Rapidly built UI components exploring reusable design systems.",
    },
    {
      title: "Frontend Studies",
      desc: "Practice builds focused on improving React structure and performance.",
    },
    {
      title: "Design-to-Code",
      desc: "Translating UI designs into responsive React components with Tailwind.",
    },
  ];

  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % items.length);
  const prev = () => setActive((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className="py-24 bg-[#0b0b0f] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-zinc-500">
            Active Work
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            Things I’m exploring right now
          </h2>

          <p className="text-zinc-500 mt-4 max-w-2xl">
            A rotating snapshot of experiments, prototypes, and ongoing frontend
            development work.
          </p>
        </div>

        {/* Slider */}
        <div className="relative border border-white/10 rounded-2xl p-8 bg-white/5 overflow-hidden">
          <div className="transition-all duration-500">
            <p className="text-xs uppercase tracking-wider text-zinc-500 mb-3">
              {String(active + 1).padStart(2, "0")} / {items.length}
            </p>

            <h3 className="text-2xl font-medium mb-4">
              {items[active].title}
            </h3>

            <p className="text-zinc-500 leading-relaxed max-w-xl">
              {items[active].desc}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={prev}
              className="px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 transition text-sm"
            >
              Prev
            </button>

            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition $ {
                    i === active ? "bg-white" : "bg-zinc-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 transition text-sm"
            >
              Next
            </button>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-10 text-center">
          <p className="text-zinc-500 text-sm">
            Continuous experimentation is part of my development process.
          </p>
        </div>
      </div>
    </section>
  );
}
