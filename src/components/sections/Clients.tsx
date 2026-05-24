import data from "@/data/mockData.json";

export default function Clients() {
  const clients = data.clients;

  return (
    <section className="py-12 border-b border-slate-200/50 bg-white/30 backdrop-blur-sm font-poppins overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-10">
        <p className="text-center text-[11px] font-medium tracking-[0.22em] uppercase text-slate-400 mb-8">
          Trusted by innovative companies
        </p>
        
        <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex overflow-x-auto snap-x snap-mandatory items-center gap-16 md:gap-24 pb-6 pt-2 px-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {clients.map((client, i) => (
              <div 
                key={i} 
                className="flex items-center justify-center gap-3.5 shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300 group cursor-pointer snap-start"
                title={client.name}
              >
                <img 
                  src={client.image} 
                  alt={`${client.name} logo`} 
                  className="h-7 md:h-8 w-auto object-contain transition-all" 
                  style={{ filter: 'brightness(0)' }}
                />
                <span className="font-bold text-2xl md:text-3xl tracking-tight text-slate-800">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
