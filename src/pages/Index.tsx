import { useState, useRef } from "react";
import { ImagePlus, Star } from "lucide-react";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    audioRef.current?.play();
  };

  return (
    <div className="fixed inset-0 bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        src="/video.mp4"
        onPlay={handlePlay}
      />
      <audio ref={audioRef} src="/audio.mpeg" />
    </div>
  );
};

export default Index;
