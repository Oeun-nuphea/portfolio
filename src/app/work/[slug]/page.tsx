import data from "@/data/mockData.json";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return data.portfolio.map((project) => ({
    slug: project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = data.portfolio.find(
    (p) => p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === resolvedParams.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 font-poppins pt-24 pb-20">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="mb-12">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-cyan-700 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Works
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="text-[12px] font-medium tracking-[0.2em] uppercase text-cyan-800 mb-4">
              {project.category}
            </div>
            <h1 className="font-dm-serif text-[clamp(40px,5vw,64px)] leading-[1.1] tracking-tight text-slate-900 mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-slate-500 font-light leading-relaxed mb-8 max-w-xl">
              {project.description}
            </p>
            
            <div className="flex gap-4">
              <button className="px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium text-white bg-blue-700 hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg">
                View Live Site
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-3xl bg-slate-200 overflow-hidden shadow-xl border border-slate-200">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className={`absolute inset-0 ${project.overlayColor}`}></div>
            </div>
          </div>
        </div>
        
        {/* Mock detailed content section to make it feel like a complete page */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-200 pt-16">
          <div>
            <h3 className="text-lg font-dm-serif text-slate-900 mb-4">The Challenge</h3>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              Our client needed a scalable solution to handle rapidly growing user bases while maintaining strict compliance and absolute data integrity. Legacy systems were holding back their potential for market expansion.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-dm-serif text-slate-900 mb-4">The Solution</h3>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              We completely re-architected their digital presence using a modern Next.js and cloud-native backend infrastructure. This provided the speed, reliability, and security necessary to capture enterprise customers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-dm-serif text-slate-900 mb-4">The Results</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-slate-500 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                400% increase in performance
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                65% reduction in bounce rate
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                Zero downtime deployment pipeline
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
