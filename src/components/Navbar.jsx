export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-white font-semibold">
          Lisa Downie
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-zinc-400">
          <a href="#skills" className="hover:text-cyan-300 transition">Skills</a>
          <a href="#work" className="hover:text-cyan-300 transition">Work</a>
          <a href="#about" className="hover:text-cyan-300 transition">About</a>
          <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>
        </div>

        <a
          href="#contact"
          className="px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20 transition"
        >
          Let’s talk
        </a>

      </div>
    </nav>
  );
}