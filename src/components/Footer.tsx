export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-line/10 bg-ink/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Triadix" className="w-5 h-5 object-contain invert opacity-50" />
          <span className="text-[10px] font-mono text-dim tracking-[2px] uppercase">Triadix — Cali - Colombia</span>
        </div>
        <p className="text-[10px] font-mono text-dim/50 tracking-[2px] uppercase">© {new Date().getFullYear()} TRIADIX</p>
      </div>
    </footer>
  );
}

