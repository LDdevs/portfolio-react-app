export default function WorkingOn() {
  const items = [
    {
      title: "React UI Systems",
      desc: "Building scalable component structures with reusable patterns.",
      status: "Active",
      img: "/assets/work/react-ui.jpg", // optional image (or replace later)
    },
    {
      title: "Frontend Refinement",
      desc: "Improving spacing systems, consistency, and UI polish.",
      status: "Ongoing",
      img: "/assets/work/refinement.jpg",
    },
    {
      title: "Interaction Design",
      desc: "Exploring micro-interactions and motion design patterns.",
      status: "Learning",
      img: "/assets/work/interaction.jpg",
    },
  ];

  return (
    <section id="working-on" className="py-24 px-6 bg-[#0b0b0f]">

      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <h2 className="text-4xl font-bold mb-12">
          What I’m working on
        </h2>

        {/* grid (same as Work section) */}
        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item) => (
            <div
              key={item.title}
              className="
                group relative rounded-2xl overflow-hidden
                border border-white/10 bg-white/5
                transition duration-300
                hover:-translate-y-2
                hover:border-cyan-500/30
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
              "
            >

              {/* optional visual block (can replace with images later) */}
              <div className="h-40 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 relative">
                <div className="absolute inset-0 opacity-30" />
              </div>

              {/* content */}
              <div className="p-6">

                <span className="text-cyan-300 text-xs">
                  {item.status}
                </span>

                <h3 className="text-xl font-semibold mt-2">
                  {item.title}
                </h3>

                <p className="text-zinc-400 text-sm mt-2">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}