"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

const TOTAL_FRAMES = 120;
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;

const SyntacsScroll26 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let count = 0;

      const loadImage = (index: number) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = `/frames/frame_${index}_delay-0.04s.jpg`;
          img.onload = () => {
            loadedImages[index] = img;
            count++;
            setLoadedCount(count);
            resolve();
          };
          img.onerror = () => resolve();
        });
      };

      const promises = [];
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        promises.push(loadImage(i));
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setIsLoading(false);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!canvas || !context) return;

      const index = Math.round(frameIndex.get());
      const img = images[index];

      if (img) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    frameIndex.onChange(render);
    return () => frameIndex.destroy();
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#050505]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4" />
            <p className="text-white/40 font-mono tracking-widest uppercase text-xs">
              Deconstructing Reality {Math.round((loadedCount / TOTAL_FRAMES) * 100)}%
            </p>
          </div>
        )}
        
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="w-full h-full object-contain pointer-events-none opacity-40 mix-blend-screen"
        />

        {/* Text Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          {/* 0% Scroll */}
          <motion.div 
            style={{ opacity: useTransform(smoothProgress, [0, 0.15], [1, 0]) }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 text-white">
                SYNTACS<span className="text-white/20">'26</span>
              </h1>
              <p className="text-lg md:text-xl font-light tracking-[0.3em] uppercase text-white/40">
                Future of Computational Intelligence
              </p>
            </div>
          </motion.div>

          {/* 30% Scroll */}
          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0.2, 0.3, 0.4], [0, 1, 0]),
              x: useTransform(smoothProgress, [0.2, 0.3, 0.4], [50, 0, -50])
            }}
            className="absolute left-10 md:left-24 top-1/2 -translate-y-1/2 max-w-xl"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
              Precision <br /> Research.
            </h2>
            <p className="text-lg text-white/50 leading-relaxed font-light">
              Dive into the core of technological innovation. SYNTACS '26 brings together the brightest minds to disassemble today's complex challenges and build tomorrow's solutions.
            </p>
          </motion.div>

          {/* 60% Scroll */}
          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0.5, 0.6, 0.7], [0, 1, 0]),
              x: useTransform(smoothProgress, [0.5, 0.6, 0.7], [-50, 0, 50])
            }}
            className="absolute right-10 md:right-24 top-1/2 -translate-y-1/2 max-w-xl text-right"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
              Immersive <br /> Advances.
            </h2>
            <p className="text-lg text-white/50 leading-relaxed font-light">
              From quantum computing to neural architectures. Explore the internal mechanics of the next digital era through peer-reviewed excellence and expert keynotes.
            </p>
          </motion.div>

          {/* 90% Scroll */}
          <motion.div 
            style={{ opacity: useTransform(smoothProgress, [0.85, 0.95], [0, 1]) }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="text-center">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">20-21 MARCH 2026</h2>
              <p className="text-xl text-white/40 font-mono tracking-widest uppercase mb-12">IIT Ropar | Punjab, India</p>
              <a 
                href="https://www.syntacs2025.site/register"
                target="_blank"
                className="px-16 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 inline-block text-lg"
              >
                JOIN THE FRONTIER
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SyntacsScroll26;
