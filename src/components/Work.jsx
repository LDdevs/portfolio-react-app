import wireframe from "../assets/wireframe.png";
import event from "../assets/event1.jpeg";
import wolf from "../assets/wolf.jpeg";

export default function Work() {
  const projects = [
    {
      title: "Event Management System",
      desc: "Full-stack event planning platform.",
      status: "Active",
      img: event,
    },
    {
      title: "AI Workflow System",
      desc: "Automation platform using AI + APIs.",
      status: "In Progress",
      img: wolf,
    },
    
    {
      title: "Dashboard UI",
      desc: "Realtime analytics interface.",
      status: "Prototype",
      img: wireframe,
    },
  ];

  return (
    <section id="work" className="py-24 px-6 bg-[#0b0b0f]">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Projects I’m building
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((p) => (
            <div
              key={p.title}
              className="
                group relative rounded-2xl overflow-hidden
                border border-white/10 bg-white/5
                transition duration-300
                hover:-translate-y-2
                hover:border-cyan-500/30
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
              "
            >

              {/* image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="
                    w-full h-full object-cover
                    transition duration-500
                    group-hover:scale-110
                    opacity-90 group-hover:opacity-100
                  "
                />

                {/* overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* content */}
              <div className="p-6">

                <span className="text-cyan-300 text-xs">
                  {p.status}
                </span>

                <h3 className="text-xl font-semibold mt-2">
                  {p.title}
                </h3>

                <p className="text-zinc-400 text-sm mt-2">
                  {p.desc}
                </p>

                <button className="mt-6 text-cyan-300 text-sm hover:text-cyan-200 transition">
                  View project →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}