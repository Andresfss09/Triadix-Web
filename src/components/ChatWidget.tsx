import { useState, FormEvent } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Message = { role: "user" | "bot"; text: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hola, soy el asistente de Triadix. ¿En qué puedo ayudarte?" },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || sending) return;

    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setSending(true);

    try {
      // Reemplazar por la URL real del backend del chatbot.
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "bot", text: data.reply ?? "..." }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "bot", text: "No pude conectarme al servidor. Intenta más tarde." },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-80 sm:w-96 h-[28rem] bg-surface border border-line rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-line">
            <span className="font-display text-sm font-medium">Asistente Triadix</span>
            <button onClick={() => setOpen(false)} aria-label="Cerrar chat" className="text-dim hover:text-paper">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                  m.role === "user"
                    ? "ml-auto bg-dev text-ink"
                    : "bg-ink border border-line text-paper"
                }`}
              >
                {m.text}
              </div>
            ))}
            {sending && <div className="text-dim text-xs">Escribiendo...</div>}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-line">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 bg-ink border border-line rounded-full px-4 py-2 text-sm placeholder:text-dim focus:outline-none focus:border-dev"
            />
            <button
              type="submit"
              disabled={sending}
              aria-label="Enviar"
              className="p-2 rounded-full bg-paper text-ink disabled:opacity-60"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
        className="w-14 h-14 rounded-full bg-paper text-ink flex items-center justify-center shadow-lg hover:bg-white transition-colors"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}