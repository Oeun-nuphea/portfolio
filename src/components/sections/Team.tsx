"use client";

import data from "@/data/mockData.json";

function TeamMemberCard({ m, index }: { m: any; index: number }) {
  return (
    <div className="bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 rounded-2xl p-8 flex flex-col items-center text-center relative group w-full max-w-[384px] mx-auto">
      <span className="absolute top-4 right-4 text-[10px] font-medium text-slate-300 tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      {m.image ? (
        <img src={m.image} alt={m.name} className="rounded-full object-cover mb-6 shrink-0 shadow-sm ring-4 ring-slate-50 group-hover:ring-cyan-50 transition-all duration-300 w-24 h-24" />
      ) : (
        <div className={`rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center text-white font-dm-serif mb-6 shrink-0 ring-4 ring-slate-50 group-hover:ring-cyan-50 transition-all duration-300 w-24 h-24 text-3xl`}>
          {m.initials}
        </div>
      )}
      <div className="font-dm-serif text-slate-900 leading-tight mb-2 group-hover:text-cyan-700 transition-colors text-[24px]">{m.name}</div>
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

      <div className="flex flex-col items-center relative w-full max-w-[1200px] mx-auto">
        
        {/* Top Row: 2 Cards (Staggered) aligned to col 2 and col 4 of a 6-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 w-full relative z-10 gap-0 items-start">
          <div className="md:col-span-2 md:col-start-2 px-4">
            <TeamMemberCard m={lead} index={0} />
          </div>
          <div className="md:col-span-2 md:col-start-4 px-4 mt-6 md:mt-24">
            <TeamMemberCard m={subLead} index={1} />
          </div>
        </div>

        {/* Lines connecting the Top Row to the Bottom Row */}
        <div className="relative w-full h-16 hidden md:block">
           {/* Card 01 drops down to the horizontal line */}
           <div className="absolute bottom-1/2 left-1/3 w-px h-[150px] bg-slate-300 -translate-x-1/2" />
           
           {/* Card 02 drops down to the horizontal line */}
           <div className="absolute bottom-1/2 left-2/3 w-px h-[32px] bg-slate-300 -translate-x-1/2" />
           
           {/* Horizontal connection bridging Card 01 and Card 02 drop lines */}
           <div className="absolute bottom-1/2 left-1/3 right-1/3 h-px bg-slate-300" />

           {/* Main trunk dropping down to the bottom row */}
           <div className="absolute top-1/2 left-1/2 w-px h-1/2 bg-slate-300 -translate-x-1/2" />
        </div>

        {/* Tree Connection Lines (Desktop - 3 items) */}
        <div className="relative w-full h-10 hidden md:block">
          <div className="absolute top-0 left-1/6 right-1/6 h-px bg-slate-300" />
          <div className="absolute top-0 left-1/6 w-px h-full bg-slate-300 -translate-x-1/2" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-slate-300 -translate-x-1/2" />
          <div className="absolute top-0 left-5/6 w-px h-full bg-slate-300 -translate-x-1/2" />
        </div>
        
        {/* Gap for mobile/tablet instead of tree lines */}
        <div className="h-8 md:hidden w-px bg-slate-300 mx-auto" />

        {/* Bottom Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-6 w-full relative z-10 gap-0">
          {team.map((m, i) => (
            <div key={i} className="md:col-span-2 px-4 mt-6 md:mt-0">
              <TeamMemberCard m={m} index={i + 2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}