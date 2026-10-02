import { useState, useEffect } from "react";


const links = [
  { name: "NOSOTROS", href: "#nosotros" },
  { name: "SERVICIOS", href: "#servicios" },
  { name: "CONTACTO", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-ink/80 backdrop-blur-md shadow-geist-border" : "bg-transparent"} h-[80px] flex items-center`}>
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-4 group">
          <img src="/logo.png" alt="Triadix" className="w-7 h-7 object-contain theme-logo invert" />
          <span className="font-display font-semibold text-lg text-paper tracking-widest uppercase">Triadix</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-[11px] font-mono text-paper/60 hover:text-paper tracking-[2px] transition-colors">
              {link.name}
            </a>
          ))}
        </nav>
        
      </div>
    </header>
  );
}



