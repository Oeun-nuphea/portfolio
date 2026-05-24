import data from "@/data/mockData.json";
import Link from "next/link";

export default function Portfolio() {
  const projects = data.portfolio;

  return (
    <section className="py-12 md:py-24 px-10 max-w-[1280px] mx-auto font-poppins">
      <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
        <div>
          <div className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.22em] uppercase text-cyan-800 mb-3.5">
            <span className="inline-block w-7 h-px bg-cyan-800" />
            Case Studies
          </div>
          <h2 className="font-dm-serif text-[clamp(40px,5vw,64px)] leading-[1.08] tracking-tight text-slate-900">
            Selected<br /><em className="italic text-blue-700 not-italic">Works</em>
          </h2>
        </div>
        <p className="text-sm text-slate-400 font-light max-w-[280px] text-right leading-relaxed">
          A curated gallery of products we've brought to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, idx) => {
          const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return (
            <Link href={`/work/${slug}`} key={idx} className={`group block cursor-pointer ${project.offset ? 'md:mt-24' : ''}`}>
              <div className="w-full aspect-[4/3] rounded-2xl bg-slate-200 mb-8 overflow-hidden relative border border-slate-200 shadow-sm">
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className={`absolute inset-0 ${project.overlayColor} group-hover:bg-transparent transition-colors duration-700`}></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-cyan-800 mb-3">{project.category}</div>
                  <h3 className="font-dm-serif text-[32px] text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-[14px] text-slate-400 font-light leading-relaxed max-w-md">{project.description}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700 transition-all duration-300 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-20 text-center">
        <button className="inline-flex items-center justify-center px-8 py-4 rounded-full text-[13px] uppercase tracking-widest font-medium text-slate-900 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-all">
          View All Projects
        </button>
      </div>
    </section>
  );
}
