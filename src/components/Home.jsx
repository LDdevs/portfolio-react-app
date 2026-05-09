export default function Home() {
  return (
    <section className="min-h-screen flex items-center px-6 relative overflow-hidden bg-[#0b0b0f]">

      {/* subtle animated gradient (keep ONE system only) */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-600/10 bg-[length:200%_200%] animate-gradientMove" />

      {/* soft glow (much more subtle than before) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-10%] right-1/4 w-[500px] h-[500px] bg-purple-600 blur-[180px] rounded-full" />
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto relative z-10">

        {/* role label */}
        <p className="text-cyan-400 tracking-[0.25em] uppercase text-xs mb-4">
          Frontend Developer • React • UI Engineering
        </p>

        {/* headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          I build{" "}
          <span className="text-cyan-300">
            modern web applications
          </span>{" "}
          with React
        </h1>

        {/* description */}
        <p className="text-zinc-400 mt-6 max-w-xl leading-relaxed">
          I design and develop performant, scalable interfaces using React,
          TailwindCSS and modern frontend architecture. Focused on clean UI,
          UX and maintainable code.
        </p>

        {/* tech stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {["React", "TailwindCSS", "TypeScript", "Node.js", "UI/UX"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* buttons */}
        <div className="mt-10 flex gap-4">
          <a
            href="#work"
            className="px-6 py-3 rounded-xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/25 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white/10 text-white hover:border-cyan-500/30 hover:text-cyan-300 transition"
          >
            Contact Me
          </a>
        </div>

        {/* subtle status line */}
        <p className="text-zinc-500 text-sm mt-8">
          Currently building: AI workflow tools & interactive dashboards
        </p>

      </div>
    </section>
  );
}