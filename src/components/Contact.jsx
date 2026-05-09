import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can hook this up to EmailJS, Formspree, or backend later
    alert("Message sent (demo)");
  };

  return (
    <section id="contact" className="py-24 bg-[#0b0b0f] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-zinc-500">
            Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            Let’s build something together
          </h2>

          <p className="text-zinc-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Open to freelance work, collaborations, and frontend opportunities.
            If you have an idea or project, feel free to reach out.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="mb-4">
              <label className="text-sm text-zinc-400">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-xl bg-black/40 border border-white/10 focus:border-white/30 outline-none"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label className="text-sm text-zinc-400">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-xl bg-black/40 border border-white/10 focus:border-white/30 outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="text-sm text-zinc-400">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                className="w-full mt-2 p-3 rounded-xl bg-black/40 border border-white/10 focus:border-white/30 outline-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-white text-black font-medium hover:scale-[1.02] transition"
            >
              Send Message
            </button>
          </form>

          {/* Info panel */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <p className="text-zinc-500">lisadownie5@gmail.com</p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="text-lg font-medium mb-2">Availability</h3>
              <p className="text-zinc-500">Open to freelance & contract work</p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="text-lg font-medium mb-2">Response Time</h3>
              <p className="text-zinc-500">Usually within 24–48 hours</p>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-zinc-600 text-sm">
            Built with React + TailwindCSS
          </p>
        </div>
      </div>
    </section>
  );
}