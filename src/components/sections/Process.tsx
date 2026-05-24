import data from "@/data/mockData.json";

export default function Process() {
  const steps = data.process;

  return (
    <section className="py-24 px-10 max-w-[1280px] mx-auto font-poppins">
       <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
        <div>
          <div className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.22em] uppercase text-cyan-800 mb-3.5">
            <span className="inline-block w-7 h-px bg-cyan-800" />
            Methodology
          </div>
          <h2 className="font-dm-serif text-[clamp(40px,5vw,64px)] leading-[1.08] tracking-tight text-slate-900">
            How We<br /><em className="italic text-blue-700 not-italic">Work</em>
          </h2>
        </div>
        <p className="text-sm text-slate-400 font-light max-w-[280px] text-right leading-relaxed">
          A simple, transparent 4-step process. No black boxes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
        {steps.map((step, i) => (
          <div key={i} className="p-10 bg-white hover:bg-slate-50 transition-colors flex flex-col group relative">
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-slate-300 mb-8">{step.num}</span>
            <h3 className="font-dm-serif text-[26px] leading-tight mb-4 text-slate-900">{step.title}</h3>
            <p className="text-[14px] text-slate-400 font-light leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
