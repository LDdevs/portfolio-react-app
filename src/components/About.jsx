import lisa from "../assets/lisapretty.png";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden bg-[#0b0b0f]">

            {/* background glow (matches rest of site) */}
            <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
                <div className="absolute top-[-20%] left-1/3 w-[450px] h-[450px] bg-cyan-500 blur-[160px] rounded-full" />
                <div className="absolute bottom-[-20%] right-1/3 w-[450px] h-[450px] bg-purple-600 blur-[180px] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* IMAGE WITH GLOW FRAME */}
                <div className="relative group">

                    {/* glowing outline */}
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/40 to-purple-600/30 blur-lg opacity-60 group-hover:opacity-80 transition duration-300" />

                    {/* image container */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10">

                        <img
                            src={lisa}
                            alt="me"
                            className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.02]"
                        />

                        {/* subtle overlay for depth */}
                        <div className="absolute inset-0 bg-black/10" />

                    </div>
                </div>

                {/* TEXT CONTENT */}
                <div>

                    {/* section label */}
                    <p className="text-xs tracking-[0.3em] uppercase text-cyan-400">
                        About
                    </p>

                    {/* heading */}
                    <h2 className="text-3xl font-semibold mt-4">

                        <span className="relative inline-block mr-2">
                            <span className="relative z-10">Who</span>
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                               w-16 h-16 bg-purple-500/30 blur-2xl rounded-full -z-10" />
                        </span>

                        I am
                    </h2>

                    {/* description */}
                    <p className="text-zinc-400 mt-6 leading-relaxed">
                        Frontend developer focused on React systems, UI architecture,
                        and building clean, scalable digital experiences.
                    </p>

                    <p className="text-zinc-500 mt-4 leading-relaxed">
                        I enjoy crafting interfaces that balance performance, usability,
                        and visual clarity.
                    </p>

                </div>

            </div>
        </section>
    );
}