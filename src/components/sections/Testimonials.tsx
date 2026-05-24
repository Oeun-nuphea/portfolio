export default function Testimonials() {
  return (
    <section className="py-32 max-w-[1200px] mx-auto px-8">
       <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 tracking-tight">Client <span className="text-gradient">Testimonials</span></h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Don't just take our word for it.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative bg-white/80 backdrop-blur-md border border-black/10 rounded-3xl p-10 hover:-translate-y-1 hover:border-indigo-500/30 transition-all shadow-sm">
          <svg className="absolute top-6 right-8 text-black/5 w-16 h-16" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <p className="text-lg italic text-slate-700 mb-8 relative z-10">"The team felt like an extension of our internal staff. They communicated flawlessly and delivered our MVP weeks ahead of schedule."</p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-500 to-red-500"></div>
            <div>
              <strong className="block text-slate-900">Sarah Jenkins</strong>
              <div className="text-sm text-slate-600">CTO at FinFlow</div>
            </div>
          </div>
        </div>

        <div className="relative bg-white/80 backdrop-blur-md border border-black/10 rounded-3xl p-10 hover:-translate-y-1 hover:border-indigo-500/30 transition-all shadow-sm">
          <svg className="absolute top-6 right-8 text-black/5 w-16 h-16" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <p className="text-lg italic text-slate-700 mb-8 relative z-10">"We were struggling with our platform's scalability. FlowStack stepped in, audited our AWS infrastructure, and refactored everything perfectly."</p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-blue-500"></div>
            <div>
              <strong className="block text-slate-900">Michael Chen</strong>
              <div className="text-sm text-slate-600">Founder of Elevate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
