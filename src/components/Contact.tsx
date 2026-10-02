import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/andressarriasabogal@gmail.com", {
        method: "POST",
        body: formData,
      });
      setStatus("MENSAJE ENVIADO");
      form.reset();
      setTimeout(() => setStatus(""), 5000);
    } catch (err) {
      setStatus("ERROR. INTENTA POR WHATSAPP.");
    }
  };

  return (
    <section id="contacto" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-paper tracking-tighter uppercase mb-6">
            Inicia tu proyecto
          </h2>
          <p className="text-paper/60 text-lg font-body mb-16 max-w-md">
            Plataformas escalables, auditoría de seguridad profunda e inteligencia artificial nativa. Estamos listos.
          </p>

          <div className="space-y-10">
            <div>
              <div className="text-[10px] font-mono tracking-[2px] text-paper/50 uppercase mb-2">Soporte y Consultas</div>
              <a href="mailto:andressarriasabogal@gmail.com" className="text-xl font-display font-semibold text-paper hover:text-paper/70 transition-colors uppercase tracking-tight">
                andressarriasabogal@gmail.com
              </a>
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-[2px] text-paper/50 uppercase mb-2">Línea Directa</div>
              <a href="https://wa.me/573185753889" target="_blank" rel="noopener noreferrer" className="text-xl font-display font-semibold text-paper hover:text-paper/70 transition-colors uppercase tracking-tight">
                WhatsApp Directo
              </a>
            </div>
          </div>
        </div>

        <motion.form 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-10 bg-ink/60 backdrop-blur-xl shadow-geist-border rounded-none"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_cc" value="chavezoliveros2004@gmail.com,luisitodam@gmail.com" />
          <input type="hidden" name="_subject" value="🌟 ¡NUEVO CLIENTE - TRIADIX WEB! 🌟" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          
          <div className="space-y-8">
            <div>
              <label className="block text-[10px] font-mono tracking-[2px] text-paper/50 uppercase mb-3">Nombre o Empresa</label>
              <input 
                type="text" 
                name="Cliente_O_Empresa"
                required
                className="w-full bg-transparent border-b border-line/20 px-0 py-3 text-paper focus:outline-none focus:border-white transition-colors placeholder:text-paper/20 font-body rounded-none"
                placeholder="Ej: Triadix Corp"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono tracking-[2px] text-paper/50 uppercase mb-3">Correo de contacto</label>
              <input 
                type="email" 
                name="Correo_Electronico"
                required
                className="w-full bg-transparent border-b border-line/20 px-0 py-3 text-paper focus:outline-none focus:border-white transition-colors placeholder:text-paper/20 font-body rounded-none"
                placeholder="hola@empresa.com"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono tracking-[2px] text-paper/50 uppercase mb-3">Desafío</label>
              <textarea 
                required
                name="Mensaje_Del_Cliente"
                rows={4}
                className="w-full bg-transparent border-b border-line/20 px-0 py-3 text-paper focus:outline-none focus:border-white transition-colors resize-none placeholder:text-paper/20 font-body rounded-none"
                placeholder="Queremos desarrollar..."
              />
            </div>
            <button 
              type="submit"
              disabled={status === "Enviando..."}
              className="w-full py-5 bg-paper text-ink font-semibold text-xs tracking-[2px] uppercase rounded-none flex items-center justify-center gap-3 hover:bg-paper/90 transition-colors disabled:opacity-50 mt-4"
            >
              {status || "ENVIAR MENSAJE"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

