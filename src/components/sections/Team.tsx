"use client";

import { useEffect, useRef } from "react";

const members = [
  { name: "Kert Damon", role: "Lead Architect", bio: "Obsessed with clean code and distributed systems. Brews his own coffee.", initials: "KD", color: "from-blue-600 to-cyan-400" },
  { name: "Khun Kimhab", role: "Fullstack & AI/ML Specialist", bio: "Full-stack developer with expertise in Python, Node.js, React, and Next.js.", initials: "KK", color: "from-indigo-600 to-blue-400" },
  { name: "Chea Ising", role: "Fullstack Engineer", bio: "Full-stack developer with expertise in Node.js, React, and Next.js.", initials: "CI", color: "from-sky-600 to-cyan-300" },
  { name: "Menghour", role: "UI/UX Designer", bio: "Designer with expertise in Figma, Photoshop, and Illustrator.", initials: "MH", color: "from-blue-700 to-sky-400" },
  { name: "Oeun Nuphea", role: "FullsEtack ngineer", bio: "Fullstack developer with expertise in Node.js, React, and Next.js.", initials: "ON", color: "from-cyan-600 to-teal-300" },
];

export default function Team() {
  return (
    <section className="py-20 px-10 max-w-[1280px] mx-auto font-poppins">
      <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
        <div>
          <div className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.22em] uppercase text-cyan-800 mb-3.5">
            <span className="inline-block w-7 h-px bg-cyan-800" />
            The People
          </div>
          <h2 className="font-dm-serif text-[clamp(40px,5vw,64px)] leading-[1.08] tracking-tight text-slate-900">
            Meet the<br /><em className="italic text-blue-700 not-italic">Team</em>
          </h2>
        </div>
        <p className="text-sm text-slate-400 font-light max-w-[220px] text-right leading-relaxed">
          Building the future, one commit at a time.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
        {members.map((m, i) => (
          <div
            key={i}
            className="bg-white hover:bg-slate-50 transition-colors p-9 flex flex-col relative group"
          >
            <span className="absolute top-7 right-7 text-[11px] font-medium text-slate-200 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center text-white font-dm-serif text-xl mb-7 shrink-0`}>
              {m.initials}
            </div>
            <div className="font-dm-serif text-[22px] text-slate-900 leading-tight mb-1.5">{m.name}</div>
            <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-cyan-800 mb-4">{m.role}</div>
            <div className="w-6 h-px bg-slate-200 group-hover:w-10 group-hover:bg-cyan-400 transition-all duration-300 mb-4" />
            <p className="text-[13.5px] text-slate-400 font-light leading-relaxed">{m.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}