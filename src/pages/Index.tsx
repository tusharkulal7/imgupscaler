import { useState, useRef } from "react";
import { ImagePlus, Star } from "lucide-react";

const Index = () => {
  const [showMedia, setShowMedia] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleChooseImages = () => {
    setShowMedia(true);
    setTimeout(() => {
      videoRef.current?.play();
      audioRef.current?.play();
    }, 100);
  };

  if (showMedia) {
    return (
      <div className="fixed inset-0 bg-black">
        <video
          ref={videoRef}
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/video.mp4"
        />
        <audio ref={audioRef} src="/audio.mpeg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-[hsl(80,30%,30%)] text-center py-2 px-4 text-sm text-foreground/80">
        Upscale images/photos on mobile. Download AI Enlarger (-7s)
      </div>

      <nav className="flex items-center justify-between px-6 py-4 border-b border-border">
        <span className="text-xl font-bold tracking-tight">Img.Upscaler</span>
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <span className="hover:text-foreground cursor-pointer">Image Upscaler</span>
          <span className="hover:text-foreground cursor-pointer">Reimagine Upscaler</span>
          <span className="hover:text-foreground cursor-pointer">Pricing</span>
          <span className="hover:text-foreground cursor-pointer">Blog</span>
        </div>
      </nav>

      <section className="text-center pt-12 pb-6 px-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl mx-auto">
          Make your images bigger and better with AI Upscaler
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
          Based on the latest super-resolution technology, Our smart image upscaler could enhance your jpg, png, webp images in batch process. Increase image resolution effortlessly.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-8">
        <div className="border-2 border-dashed border-muted-foreground/30 rounded-xl p-12 flex flex-col items-center gap-4 relative">
          <button
            onClick={handleChooseImages}
            className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-semibold hover:opacity-90 transition"
          >
            <ImagePlus size={22} />
            Choose Images
          </button>
          <p className="font-semibold text-sm">Drag & Drop your images here</p>
          <p className="text-xs text-muted-foreground">Jpg / Png / Webp images allowed</p>
          <div className="absolute bottom-3 right-4 flex items-center gap-1 text-xs text-muted-foreground">
            <Star size={14} />
            Batch
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-sm font-semibold mb-4">Other tools you may be interested in</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Background Eraser", desc: "Remove background from images" },
            { title: "Image Colorizer", desc: "Colorize black & white photos" },
            { title: "Vheer Image Generator", desc: "New and free image generator" },
          ].map((tool) => (
            <div
              key={tool.title}
              className="bg-card border border-border rounded-lg p-4 flex items-center justify-between hover:bg-secondary transition cursor-pointer"
            >
              <div>
                <span className="font-semibold text-sm">{tool.title}</span>
                <span className="ml-2 text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full font-bold">
                  Free
                </span>
                <p className="text-xs text-muted-foreground mt-1">{tool.desc}</p>
              </div>
              <span className="text-muted-foreground">›</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
