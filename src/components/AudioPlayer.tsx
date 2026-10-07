import { useRef, useEffect } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    // Inicializar el audio
    audioRef.current = new Audio("/cancion.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    const startPlaying = () => {
      if (!hasStartedRef.current && audioRef.current) {
        audioRef.current.play().then(() => {
          hasStartedRef.current = true;
        }).catch(() => {
          // Si el navegador sigue bloqueando, ignoramos el error en silencio
        });
      }
    };

    // Intentar reproducir automáticamente (casi seguro que el navegador lo bloqueará inicialmente)
    startPlaying();

    // El truco definitivo: Apenas el usuario haga CUALQUIER interacción en la página (click, scroll, mover el mouse)
    // el audio arrancará inmediatamente, burlando la restricción visual del navegador.
    window.addEventListener('click', startPlaying, { once: true });
    window.addEventListener('scroll', startPlaying, { once: true });
    window.addEventListener('touchstart', startPlaying, { once: true });

    return () => {
      window.removeEventListener('click', startPlaying);
      window.removeEventListener('scroll', startPlaying);
      window.removeEventListener('touchstart', startPlaying);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // No renderiza ningún botón ni interfaz visual
  return null;
}
