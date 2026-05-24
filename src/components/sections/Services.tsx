export default function Services() {
  return (
    <section className="py-24 max-w-[1280px] mx-auto px-10 font-poppins">
       <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
        <div>
          <div className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.22em] uppercase text-cyan-800 mb-3.5">
            <span className="inline-block w-7 h-px bg-cyan-800" />
            Capabilities
          </div>
          <h2 className="font-dm-serif text-[clamp(40px,5vw,64px)] leading-[1.08] tracking-tight text-slate-900">
            Service<br /><em className="italic text-blue-700 not-italic">Tiers</em>
          </h2>
        </div>
        <p className="text-sm text-slate-400 font-light max-w-[280px] text-right leading-relaxed">
          Transparent packaging to help you self-select what fits your needs and budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
        {/* Tier 1 */}
        <div className="p-10 bg-white hover:bg-slate-50 transition-colors flex flex-col group relative">
          <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-slate-400 mb-4">Launch</div>
          <h3 className="font-dm-serif text-[32px] leading-tight mb-2 text-slate-900">The MVP</h3>
          <p className="text-xl text-blue-700 font-medium mb-6">From $15k</p>
          <p className="text-[14px] text-slate-400 font-light leading-relaxed mb-8 flex-grow">Perfect for startups needing to validate an idea quickly. A functional, polished V1 delivered in 4-6 weeks.</p>
          <ul className="space-y-4 mb-8">
            {['UI/UX Design for core flows', 'Frontend (React/Next.js)', 'Backend API & Database setup', 'Standard Authentication'].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] text-slate-700">
                <svg className="w-5 h-5 text-cyan-800 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-full text-[13px] uppercase tracking-widest font-medium text-slate-900 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-all">Get Started</button>
        </div>

        {/* Tier 2 */}
        <div className="p-10 bg-white hover:bg-slate-50 transition-colors flex flex-col group relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-800"></div>
          <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-cyan-800 mb-4 flex items-center gap-2">Scale <span className="bg-cyan-100 text-blue-700 px-2 py-0.5 rounded-full text-[9px]">Most Popular</span></div>
          <h3 className="font-dm-serif text-[32px] leading-tight mb-2 text-slate-900">The Core</h3>
          <p className="text-xl text-blue-700 font-medium mb-6">From $35k</p>
          <p className="text-[14px] text-slate-400 font-light leading-relaxed mb-8 flex-grow">For growing companies needing a scalable, production-ready platform with custom features.</p>
          <ul className="space-y-4 mb-8">
            {['Everything in MVP', 'Advanced State Management', 'Complex 3rd-party Integrations', 'Performance Optimization', 'Admin Dashboard'].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] text-slate-700">
                <svg className="w-5 h-5 text-cyan-800 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-full text-[13px] uppercase tracking-widest font-medium text-white bg-blue-700 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all">Get Started</button>
        </div>

        {/* Tier 3 */}
        <div className="p-10 bg-white hover:bg-slate-50 transition-colors flex flex-col group relative">
          <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-slate-400 mb-4">Enterprise</div>
          <h3 className="font-dm-serif text-[32px] leading-tight mb-2 text-slate-900">The Dedicated</h3>
          <p className="text-xl text-blue-700 font-medium mb-6">Custom</p>
          <p className="text-[14px] text-slate-400 font-light leading-relaxed mb-8 flex-grow">Ongoing partnership. We act as your external engineering and design department on retainer.</p>
          <ul className="space-y-4 mb-8">
            {['Dedicated Team Allocation', 'Custom Architecture', 'Priority Support SLA', 'Continuous Integration', 'Weekly Strategy Syncs'].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] text-slate-700">
                <svg className="w-5 h-5 text-cyan-800 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-full text-[13px] uppercase tracking-widest font-medium text-slate-900 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-all">Let's Talk</button>
        </div>
      </div>
    </section>
  );
}
