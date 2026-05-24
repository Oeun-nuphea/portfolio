const SunIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
const ZapIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const AppleIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>;
const SmartphoneIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>;
const FigmaIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 9h3.5a3.5 3.5 0 1 1 0 7H12V9z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>;
const LayoutIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>;

// New components added by user
const Server = ({size = 24}: any) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>;
const Box = ({size = 24}: any) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
const Brain = ({size = 24}: any) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>;
const Shield = ({size = 24}: any) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const Cloud = ({size = 24}: any) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>;
const Database = ({size = 24}: any) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;

const categories = [
  {
    title: "Mobile", desc: "Cross-platform & native frameworks",
    items: [
      { label: "React Native", icon: <SunIcon /> },
      { label: "Flutter", icon: <ZapIcon /> },
      { label: "Swift / iOS", icon: <AppleIcon /> },
      { label: "Kotlin / Android", icon: <SmartphoneIcon /> },
      { label: "Nextjs", icon: <SmartphoneIcon /> },
      { label: "React", icon: <SmartphoneIcon /> },
      
    ]
  },

{
  title: "Backend", desc: "Server runtimes & APIs",
  items: [
    { label: "Node & Express", icon: <Cloud size={16} /> },
    { label: "Firebase",       icon: <Database size={16} /> },
    { label: "MongoDB",        icon: <Database size={16} /> },
    { label: "PostgreSQL",     icon: <Database size={16} /> },
    { label: "AWS",            icon: <Server size={16} /> },
    { label: "Deployment",     icon: <Box size={16} /> },
    { label: "AI / ML",        icon: <Brain size={16} /> },
    { label: "Security",       icon: <Shield size={16} /> },
  ]
},
  {
    title: "Design", desc: "UI/UX & visual tooling",
    items: [
      { label: "Figma", icon: <FigmaIcon /> },
      { label: "Photoshop", icon: <LayoutIcon /> },
      { label: "Illustrator", icon: <SunIcon /> },
    ]
  },
  {
    title: "UX Practice", desc: "Mobile-first design systems",
    items: [{ label: "Mobile UI/UX", icon: <SmartphoneIcon /> }]
  },
];

export default function TechStack() {
  return (
    <section className="py-20 px-10 max-w-[1280px] mx-auto font-poppins">
      <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
        <div>
          <div className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.22em] uppercase text-cyan-800 mb-3.5">
            <span className="inline-block w-7 h-px bg-cyan-800" />
            Tools & Frameworks
          </div>
          <h2 className="font-dm-serif text-[clamp(38px,5vw,60px)] leading-[1.08] tracking-tight">
            The Tech<br /><em className="italic text-blue-700">Stack</em>
          </h2>
        </div>
        <p className="text-sm text-slate-400 font-light max-w-[220px] text-right leading-relaxed">
          Cross-platform and native mobile, powered by robust backends.
        </p>
      </div>

      <div className="flex flex-col gap-px border border-slate-200 rounded-2xl overflow-hidden bg-slate-200">
        {categories.map((cat, i) => (
          <div key={i} className="grid grid-cols-[200px_1fr] bg-white">
            <div className="p-9 border-r border-slate-200 bg-slate-50 flex flex-col justify-center gap-1.5">
              <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-cyan-800">{cat.title}</div>
              <div className="text-xs text-slate-400 font-light leading-relaxed">{cat.desc}</div>
            </div>
            <div className="p-7 flex flex-wrap gap-3 items-center">
              {cat.items.map((item, j) => (
                <div key={j} className="flex items-center gap-2.5 px-4 py-3 border border-slate-200 rounded-full text-[13px] bg-white hover:border-cyan-300 hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-md transition-all cursor-default group">
                  <span className="text-slate-400 group-hover:text-cyan-700 transition-colors w-4 h-4">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}