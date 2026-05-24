export default function FooterCTA() {
  return (
    <footer className="py-24 text-center bg-slate-50 border-t border-slate-200 px-10 font-poppins">
      <div className="max-w-[600px] mx-auto">
        <h2 className="font-dm-serif text-[clamp(40px,5vw,64px)] leading-[1.08] tracking-tight mb-4 text-slate-900">Ready to <em className="italic text-blue-700 not-italic">Scale?</em></h2>
        <p className="text-[15px] text-slate-400 font-light mb-12 leading-relaxed">No pressure, let's just chat about your goals. If we're not a fit, we'll point you in the right direction.</p>
        
        <div className="bg-white border border-slate-200 p-10 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
          <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-[14px] focus:outline-none focus:border-cyan-400 focus:bg-white transition-all" />
          <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-[14px] focus:outline-none focus:border-cyan-400 focus:bg-white transition-all" />
          <textarea placeholder="Tell us about your project" rows={4} className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-[14px] resize-none focus:outline-none focus:border-cyan-400 focus:bg-white transition-all"></textarea>
          <button className="w-full mt-2 py-4 rounded-xl text-[13px] uppercase tracking-widest font-medium text-white bg-blue-700 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all">
            Book a Discovery Call
          </button>
        </div>
      </div>
    </footer>
  );
}
