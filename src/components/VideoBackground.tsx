import { motion } from "framer-motion";

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-ink pointer-events-none overflow-hidden flex items-center justify-center">
      <motion.img
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        src="/space.gif"
        alt="Loop Space"
        className="absolute w-full h-full object-cover mix-blend-screen"
        style={{ 
          filter: "brightness(1.1) contrast(1.2)" 
        }}
      />
      
      {/* Vñeta oscura en los bordes para mejorar la lectura y dar efecto cinemático */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000_100%)] opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/80 via-transparent to-[#000000]/80" />
      
      {/* Ruido digital / Estática sutil */}
      <motion.div 
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
          opacity: [0.03, 0.08, 0.03]
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] mix-blend-overlay"
      />
    </div>
  );
}
