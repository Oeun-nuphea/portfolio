import data from "@/data/mockData.json";

export default function Testimonials() {
  const testimonials = data.testimonials;

  return (
    <section className="py-24 px-10 max-w-[1280px] mx-auto font-poppins relative z-10 overflow-hidden">
      <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
        <div>
          <div className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.22em] uppercase text-cyan-800 mb-3.5">
            <span className="inline-block w-7 h-px bg-cyan-800" />
            Client Love
          </div>
          <h2 className="font-dm-serif text-[clamp(40px,5vw,64px)] leading-[1.08] tracking-tight text-slate-900">
            Success<br /><em className="italic text-blue-700 not-italic">Stories</em>
          </h2>
        </div>
      </div>

      <div className="flex overflow-hidden relative w-full pt-4 pb-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div 
              key={idx} 
              className="w-[320px] md:w-[420px] bg-white/80 backdrop-blur-md rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 shrink-0 hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Header: Image + Name/Title */}
              <div className="flex items-center gap-5 mb-8">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover shadow-sm ring-2 ring-white"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                  <p className="text-sm font-medium text-blue-600 mt-0.5">{testimonial.title}</p>
                </div>
              </div>
              
              {/* Body: Quote */}
              <p className="italic text-slate-500 text-[15px] leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
