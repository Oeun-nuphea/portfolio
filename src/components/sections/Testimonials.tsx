export default function Testimonials() {
  return (
    <section className="py-24 px-10 max-w-[1280px] mx-auto font-poppins relative z-10">
      <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
        <div>
          <div className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.22em] uppercase text-cyan-800 mb-3.5">
            <span className="inline-block w-7 h-px bg-cyan-800" />
            Client Love
          </div>
          <h2 className="font-dm-serif text-[clamp(40px,5vw,64px)] leading-[1.08] tracking-tight text-slate-900">
            What they<br /><em className="italic text-blue-700 not-italic">Say</em>
          </h2>
        </div>
        <p className="text-sm text-slate-400 font-light max-w-[280px] text-right leading-relaxed">
          Don't just take our word for it. Here is what our partners have experienced.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-10 md:p-14 bg-white/70 backdrop-blur-md hover:bg-white transition-colors relative group">
          <svg className="absolute top-10 right-10 text-cyan-500/10 w-24 h-24 transform group-hover:scale-110 group-hover:text-cyan-500/20 transition-all duration-500" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <p className="font-dm-serif text-[24px] leading-relaxed text-slate-900 mb-10 relative z-10">
            "The team felt like an extension of our internal staff. They communicated flawlessly and delivered our scalable MVP weeks ahead of schedule."
          </p>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 shadow-inner"></div>
            <div>
              <strong className="block text-slate-900 font-medium text-[15px]">Sarah Jenkins</strong>
              <div className="text-[12px] text-slate-400 uppercase tracking-widest mt-0.5">CTO at Nexus Tech</div>
            </div>
          </div>
        </div>

        <div className="p-10 md:p-14 bg-white/70 backdrop-blur-md hover:bg-white transition-colors relative group">
          <svg className="absolute top-10 right-10 text-cyan-500/10 w-24 h-24 transform group-hover:scale-110 group-hover:text-cyan-500/20 transition-all duration-500" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <p className="font-dm-serif text-[24px] leading-relaxed text-slate-900 mb-10 relative z-10">
            "We were struggling with our platform's scalability. FlowStack stepped in, audited our AWS infrastructure, and refactored everything perfectly."
          </p>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-blue-400 shadow-inner"></div>
            <div>
              <strong className="block text-slate-900 font-medium text-[15px]">Michael Chen</strong>
              <div className="text-[12px] text-slate-400 uppercase tracking-widest mt-0.5">Founder of Aura Health</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
