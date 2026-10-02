import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-start pt-32 pb-32 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start gap-8"
      >
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-semibold text-paper tracking-tighter uppercase max-w-[1200px]">
          Tres <br /> disciplinas. <br />
          <span className="text-paper/60">Una<br/>evolución.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-paper/80 max-w-2xl leading-relaxed font-body mt-4">
          Diseñamos plataformas digitales de élite donde el desarrollo, la seguridad y la inteligencia artificial nacen unidas. No agregamos tecnología al final; la construimos desde el núcleo.
        </p>
        
        <div className="flex items-center gap-6 mt-8">
          <a
            href="#contacto"
            className="flex items-center gap-4 bg-paper text-ink px-8 py-5 text-xs font-semibold tracking-[2px] uppercase rounded-none hover:bg-paper/90 transition-colors"
          >
            Iniciar Proyecto
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}



