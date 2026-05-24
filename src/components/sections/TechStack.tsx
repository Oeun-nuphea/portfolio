"use client";

import {
  Smartphone,
  MonitorSmartphone,
  Apple,
  Bot,
  Globe,
  Atom,
  Server,
  Flame,
  Database,
  Cloud,
  Rocket,
  Brain,
  Container,
  GitBranch,
  Ship,
  ShieldCheck,
  Image as ImageIcon,
  PenTool,
  LayoutTemplate,
  CloudCog
} from "lucide-react";

const FigmaIcon = ({ size = 24 }: { size?: number | string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
    <path d="M12 9h3.5a3.5 3.5 0 1 1 0 7H12V9z"/>
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/>
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
  </svg>
);

const categories = [
  {
    title: "Mobile", desc: "Cross-platform & native frameworks",
    items: [
      { label: "React Native", icon: <Smartphone size={16} /> },
      { label: "Flutter", icon: <MonitorSmartphone size={16} /> },
      { label: "Swift / iOS", icon: <Apple size={16} /> },
      { label: "Kotlin / Android", icon: <Bot size={16} /> },
      { label: "Nextjs", icon: <Globe size={16} /> },
      { label: "React", icon: <Atom size={16} /> },
    ]
  },
  {
    title: "Backend", desc: "Server runtimes & APIs",
    items: [
      { label: "Node & Express", icon: <Server size={16} /> },
      { label: "Firebase",       icon: <Flame size={16} /> },
      { label: "MongoDB",        icon: <Database size={16} /> },
      { label: "PostgreSQL",     icon: <Database size={16} /> },
      { label: "AWS",            icon: <Cloud size={16} /> },
      { label: "Deployment",     icon: <Rocket size={16} /> },
      { label: "AI / ML",        icon: <Brain size={16} /> },
      { label: "Docker",         icon: <Container size={16} /> },
      { label: "CI / CD",        icon: <GitBranch size={16} /> },
      { label: "Kubernetes",     icon: <Ship size={16} /> },
      { label: "Security",       icon: <ShieldCheck size={16} /> },
    ]
  },
  {
    title: "Design", desc: "UI/UX & visual tooling",
    items: [
      { label: "Figma", icon: <FigmaIcon size={16} /> },
      { label: "Photoshop", icon: <ImageIcon size={16} /> },
      { label: "Illustrator", icon: <PenTool size={16} /> },
    ]
  },
  {
    title: "UX Practice", desc: "Mobile-first design systems",
    items: [{ label: "Mobile UI/UX", icon: <LayoutTemplate size={16} /> }]
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
                <div key={j} className="flex items-center gap-2.5 px-4 py-3 border border-slate-200 rounded-full text-[13px] bg-white hover:border-cyan-300 hover:bg-slate-50 hover:shadow-md transition-all cursor-default group">
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