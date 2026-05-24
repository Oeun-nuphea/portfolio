"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-50 font-poppins">
      <nav className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-full px-6 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] flex justify-between items-center">
        <Link href="/" className="text-2xl font-dm-serif text-slate-900 flex items-center gap-3">
          <Image src="/logo.png" alt="FlowStack Logo" width={32} height={32} className="object-contain" />
          FlowStack
        </Link>
        <ul className="hidden md:flex gap-8 items-center list-none">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className={`text-[13px] uppercase tracking-widest font-medium transition-colors ${isActive ? "text-cyan-800" : "text-slate-400 hover:text-cyan-800"}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li>
            <Link 
              href="/contact" 
              className={`inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[13px] uppercase tracking-widest font-medium transition-all shadow-sm hover:-translate-y-0.5 hover:shadow-md ${pathname === '/contact' ? 'bg-blue-700 text-white' : 'bg-slate-900 text-white hover:bg-blue-700'}`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
