import Link from "next/link";

export default function Hero() {
  return (
    <header className="min-h-screen flex items-center pt-20 relative overflow-hidden font-poppins">
      {/* Animated Fluid Mesh Background */}
      <div className="fixed inset-0 w-screen h-screen -z-10 overflow-hidden pointer-events-none bg-slate-50">
        <div className="absolute top-[-10%] left-[10%] w-72 md:w-96 h-72 md:h-96 bg-[#00d2ff] rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-30 animate-blob"></div>
        <div className="absolute top-[10%] right-[10%] w-72 md:w-96 h-72 md:h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[30%] w-72 md:w-96 h-72 md:h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      <div className="max-w-[1280px] mx-auto px-10 relative z-10 text-center max-w-4xl">
        <div className="flex items-center justify-center gap-2.5 text-[11px] font-medium tracking-[0.22em] uppercase text-cyan-800 mb-6">
          <span className="inline-block w-7 h-px bg-cyan-800" />
          FlowStack Agency
          <span className="inline-block w-7 h-px bg-cyan-800" />
        </div>
        <h1 className="font-dm-serif text-[clamp(48px,6vw,80px)] leading-[1.05] tracking-tight mb-8 text-slate-900">
          We build <em className="italic text-transparent bg-clip-text bg-gradient-to-br from-[#00d2ff] to-blue-700 not-italic">scalable</em> digital products that drive growth
        </h1>
        <p className="text-[15px] text-slate-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          FlowStack is a premium freelance collective specializing in modern web applications, high-performance architecture, and stunning user experiences.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full text-[13px] uppercase tracking-widest font-medium text-white bg-gradient-to-br from-cyan-500 to-blue-700 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all">
            Book a Consultation
          </Link>
          <Link href="/work" className="inline-flex items-center justify-center px-8 py-4 rounded-full text-[13px] uppercase tracking-widest font-medium text-slate-900 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-all">
            View Our Work
          </Link>
        </div>
      </div>
    </header>
  );
}
