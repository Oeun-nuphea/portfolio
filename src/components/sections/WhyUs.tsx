export default function WhyUs() {
  return (
    <section className="py-24 relative max-w-[1280px] mx-auto px-10 font-poppins">
      <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
        <div>
          <div className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.22em] uppercase text-cyan-800 mb-3.5">
            <span className="inline-block w-7 h-px bg-cyan-800" />
            The Advantage
          </div>
          <h2 className="font-dm-serif text-[clamp(40px,5vw,64px)] leading-[1.08] tracking-tight text-slate-900">
            Why Choose a<br /><em className="italic text-blue-700 not-italic">Collective?</em>
          </h2>
        </div>
        <p className="text-sm text-slate-400 font-light max-w-[280px] text-right leading-relaxed">
          Get the agility of a freelancer with the reliability and skill breadth of an agency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
        {/* Benefit 1 */}
        <div className="p-10 bg-white hover:bg-slate-50 transition-colors flex flex-col group relative">
          <span className="absolute top-7 right-7 text-[11px] font-medium text-slate-200 tabular-nums">01</span>
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-blue-700 mb-8 group-hover:bg-cyan-50 group-hover:scale-110 transition-all duration-500 shrink-0">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <h3 className="font-dm-serif text-[26px] leading-tight mb-4 text-slate-900">Elite Talent</h3>
          <p className="text-[14px] text-slate-400 font-light leading-relaxed">We only hire senior-level engineers and designers. No junior devs learning on your dime.</p>
        </div>

        {/* Benefit 2 */}
        <div className="p-10 bg-white hover:bg-slate-50 transition-colors flex flex-col group relative">
          <span className="absolute top-7 right-7 text-[11px] font-medium text-slate-200 tabular-nums">02</span>
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-blue-700 mb-8 group-hover:bg-cyan-50 group-hover:scale-110 transition-all duration-500 shrink-0">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <h3 className="font-dm-serif text-[26px] leading-tight mb-4 text-slate-900">Agile Execution</h3>
          <p className="text-[14px] text-slate-400 font-light leading-relaxed">Skip the agency red tape. Direct communication with the people actually building your product.</p>
        </div>

        {/* Benefit 3 */}
        <div className="p-10 bg-white hover:bg-slate-50 transition-colors flex flex-col group relative">
          <span className="absolute top-7 right-7 text-[11px] font-medium text-slate-200 tabular-nums">03</span>
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-blue-700 mb-8 group-hover:bg-cyan-50 group-hover:scale-110 transition-all duration-500 shrink-0">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3 className="font-dm-serif text-[26px] leading-tight mb-4 text-slate-900">Scalable Systems</h3>
          <p className="text-[14px] text-slate-400 font-light leading-relaxed">We architect for the future. Your MVP will be built on a foundation that can handle millions of users.</p>
        </div>
      </div>
    </section>
  );
}
