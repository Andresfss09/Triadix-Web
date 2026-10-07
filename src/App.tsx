import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Demos from "./components/Demos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AudioPlayer from "./components/AudioPlayer";
import VideoBackground from "./components/VideoBackground";

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-paper font-body relative selection:bg-white selection:text-black">
      <VideoBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Demos />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      <AudioPlayer />
      </div>
    </div>
  );
}

