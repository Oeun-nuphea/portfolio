export default function Clients() {
  const clients = [
    "Nexus Tech",
    "Aura Health",
    "Vertex Finance",
    "Lumina AI",
    "Strata E-Com",
    "Nova Blockchain",
  ];

  return (
    <section className="py-12 border-b border-slate-200/50 bg-white/30 backdrop-blur-sm font-['Poppins',sans-serif]">
      <div className="max-w-[1280px] mx-auto px-10">
        <p className="text-center text-[11px] font-medium tracking-[0.22em] uppercase text-slate-400 mb-8">
          Trusted by innovative companies
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {clients.map((client, i) => (
            <div key={i} className="font-['DM_Serif_Display',serif] text-2xl md:text-3xl text-slate-800 hover:text-blue-700 transition-colors duration-300">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
