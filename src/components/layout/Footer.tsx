import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-10 font-poppins border-t border-slate-800">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand & About */}
        <div className="md:col-span-2">
          <Link href="/" className="text-2xl font-dm-serif text-white flex items-center gap-3 mb-6">
            <Image src="/logo.png" alt="FlowStack Logo" width={32} height={32} className="object-contain" />
            FlowStack
          </Link>
          <p className="text-[14px] font-light leading-relaxed max-w-md">
            FlowStack is a premium freelance collective specializing in modern web applications, high-performance architecture, and stunning user experiences. We build scalable digital products that drive growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-medium mb-6 text-[15px]">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-[13px] hover:text-cyan-400 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / Socials */}
        <div>
          <h4 className="text-white font-medium mb-6 text-[15px]">Connect</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="mailto:damonkert@gmail.com" target="_blank" className="text-[13px] hover:text-cyan-400 transition-colors">
                damonkert@gmail.com
              </a>
            </li>
            <li>
              <a href="https://t.me/oeunnuphea" target="_blank" className="text-[13px] hover:text-cyan-400 transition-colors">
                Telegram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ouen-nuphea"  target="_blank" className="text-[13px] hover:text-cyan-400 transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Oeun-nuphea" target="_blank" className="text-[13px] hover:text-cyan-400 transition-colors">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px]">
        <p>&copy; {currentYear} FlowStack Agency. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
