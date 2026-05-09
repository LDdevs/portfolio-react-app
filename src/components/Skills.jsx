export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      items: ["React", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "Styling & UI",
      items: ["TailwindCSS", "Responsive Design", "UI Systems", "Figma"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Vite", "VS Code"],
    },
    {
      title: "Concepts",
      items: ["Component Design", "Accessibility", "Performance", "APIs"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0b0b0f] text-white relative overflow-hidden">

      {/* background glow (same system as Work/Hero) */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <div className="absolute top-[-20%] left-1/3 w-[450px] h-[450px] bg-cyan-500 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-20%] right-1/3 w-[450px] h-[450px] bg-purple-600 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-cyan-400">
            Skills
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            What I work with
          </h2>

          <p className="text-zinc-500 mt-4 max-w-2xl leading-relaxed">
            A focused set of tools and concepts I use to build modern,
            scalable front-end experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                p-6 rounded-2xl
                border border-white/10 bg-white/5
                transition duration-300
                hover:-translate-y-2
                hover:border-cyan-500/30
                hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
                relative overflow-hidden group
              "
            >

              {/* glow overlay (same as Work section) */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* content */}
              <div className="relative z-10">

                <h3 className="text-lg font-medium mb-4 group-hover:text-cyan-200 transition">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">

                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="
                        text-xs px-3 py-1 rounded-full
                        bg-black/40 border border-white/10 text-zinc-300
                        transition duration-300
                        group-hover:border-cyan-500/20
                        group-hover:text-cyan-200
                        group-hover:shadow-[0_0_10px_rgba(34,211,238,0.15)]
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom statement */}
        <div className="mt-16 text-center">
          <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed">
            I focus on building maintainable interfaces with clean structure,
            reusable components, and strong attention to user experience.
          </p>
        </div>

      </div>
    </section>
  );
}