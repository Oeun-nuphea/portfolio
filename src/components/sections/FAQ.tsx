"use client";

import { useState } from "react";
import data from "@/data/mockData.json";

export default function FAQ() {
  const faqs = data.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 max-w-[1280px] mx-auto px-10 font-poppins">
       <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2.5 text-[11px] font-medium tracking-[0.22em] uppercase text-cyan-800 mb-3.5">
            <span className="inline-block w-7 h-px bg-cyan-800" />
            Support
            <span className="inline-block w-7 h-px bg-cyan-800" />
        </div>
        <h2 className="font-dm-serif text-[clamp(40px,5vw,64px)] leading-[1.08] tracking-tight text-slate-900">
          Common <em className="italic text-blue-700 not-italic">Questions</em>
        </h2>
      </div>

      <div className="max-w-[800px] mx-auto flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            onClick={() => toggleFaq(i)}
            className="p-8 border border-slate-200 bg-white cursor-pointer hover:border-cyan-300 rounded-2xl transition-all group shadow-sm hover:shadow-md"
          >
            <div className="text-[20px] font-dm-serif flex justify-between items-center text-slate-900">
              {faq.question}
              <svg 
                className={`text-cyan-800 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
            <div 
              className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
            >
              <div className="overflow-hidden">
                <div className="text-[14px] text-slate-400 font-light leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
