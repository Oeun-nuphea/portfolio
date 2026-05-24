"use client";

import data from "@/data/mockData.json";

function TeamMemberCard({ m, index, level }: { m: any; index: number; level: number }) {
  const isTop = level === 1;
  const isMiddle = level === 2;
  
  // Sizing based on level
  const maxWidth = isTop ? 'max-w-[360px]' : isMiddle ? 'max-w-[340px]' : 'max-w-[320px]';
  const imgSize = isTop ? 'w-24 h-24' : isMiddle ? 'w-22 h-22' : 'w-20 h-20';
  const nameSize = isTop ? 'text-[24px]' : isMiddle ? 'text-[22px]' : 'text-[20px]';
  
  return (
    <div className={`bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 rounded-2xl p-8 flex flex-col items-center text-center relative group w-full ${maxWidth} mx-auto`}>
      <span className="absolute top-4 right-4 text-[10px] font-medium text-slate-300 tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      {m.image ? (
        <img src={m.image} alt={m.name} className={`rounded-full object-cover mb-6 shrink-0 shadow-sm ring-4 ring-slate-50 group-hover:ring-cyan-50 transition-all duration-300 ${imgSize}`} />
      ) : (
        <div className={`rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center text-white font-dm-serif mb-6 shrink-0 ring-4 ring-slate-50 group-hover:ring-cyan-50 transition-all duration-300 ${imgSize} text-3xl`}>
          {m.initials}
        </div>
      )}
      <div className={`font-dm-serif text-slate-900 leading-tight mb-2 group-hover:text-cyan-700 transition-colors ${nameSize}`}>{m.name}</div>
      <div className="text-[10px] font-medium tracking-[0.15em] uppercase text-cyan-800 mb-4">{m.role}</div>
      <div className="w-6 h-px bg-slate-200 group-hover:w-10 group-hover:bg-cyan-400 transition-all duration-300 mb-4" />
      <p className="text-[13px] text-slate-500 font-light leading-relaxed">{m.bio}</p>
    </div>
  );
}

export default function Team() {
  const members = data.team;
  const lead = members[0];
  const subLead = members[1];
  const team = members.slice(2);

  return (
    <section className="py-20 px-10 max-w-[1280px] mx-auto font-poppins overflow-hidden">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="flex items-center justify-center gap-2.5 text-[11px] font-medium tracking-[0.22em] uppercase text-cyan-800 mb-3.5">
          <span className="inline-block w-7 h-px bg-cyan-800" />
          The People
          <span className="inline-block w-7 h-px bg-cyan-800" />
        </div>
        <h2 className="font-dm-serif text-[clamp(40px,5vw,64px)] leading-[1.08] tracking-tight text-slate-900">
          Meet the<br /><em className="italic text-blue-700 not-italic">Team</em>
        </h2>
        <p className="text-sm text-slate-400 font-light max-w-[320px] leading-relaxed mt-6">
          Building the future, one commit at a time.
        </p>
      </div>

      <div className="flex flex-col items-center relative w-full max-w-[1000px] mx-auto">
        {/* Level 1: Lead */}
        <div className="relative z-10 w-full flex justify-center">
          <TeamMemberCard m={lead} index={0} level={1} />
          {/* Vertical Line going down from Lead */}
          <div className="absolute left-1/2 -bottom-8 w-px h-8 bg-slate-300 -translate-x-1/2" />
        </div>
        
        {/* Gap for Level 1 to Level 2 */}
        <div className="h-8 w-px bg-slate-300" />

        {/* Level 2: Sub-Lead */}
        <div className="relative z-10 w-full flex justify-center">
          <TeamMemberCard m={subLead} index={1} level={2} />
          {/* Vertical Line going down from Sub-Lead */}
          <div className="absolute left-1/2 -bottom-8 w-px h-8 bg-slate-300 -translate-x-1/2 hidden lg:block" />
        </div>

        {/* Tree Connection Lines (Desktop - 3 items) */}
        {/* Since there are 3 items, their centers in a 3-column grid are at 16.66%, 50%, and 83.33% */}
        <div className="relative w-full mt-8 h-8 hidden lg:block">
          <div className="absolute top-0 left-[16.66%] right-[16.66%] h-px bg-slate-300" />
          <div className="absolute top-0 left-[16.66%] w-px h-full bg-slate-300" />
          <div className="absolute top-0 left-[50%] w-px h-full bg-slate-300" />
          <div className="absolute top-0 left-[83.33%] w-px h-full bg-slate-300" />
        </div>
        
        {/* Gap for mobile/tablet instead of tree lines */}
        <div className="h-8 lg:hidden w-px bg-slate-300" />

        {/* Level 3: Children Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative z-10">
          {team.map((m, i) => (
            <TeamMemberCard key={i} m={m} index={i + 2} level={3} />
          ))}
        </div>
      </div>
    </section>
  );
}