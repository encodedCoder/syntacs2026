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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
      setIsLoading(true);
      setLoadedCount(0);
      const loadedImages: HTMLImageElement[] = [];
      let count = 0;

      const loadImage = (index: number) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          const folder = isMobile ? 'frames_mobile' : 'frames';
          img.src = `/${folder}/frame_${index}_delay-0.04s.jpg`;
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
  }, [isMobile]);

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

    const unsubscribe = frameIndex.on("change", render);
    
    // Initial render call
    render();

    return () => unsubscribe();
  }, [images, frameIndex]);

  const canvasWidth = isMobile ? 1080 : 1920;
  const canvasHeight = isMobile ? 1920 : 1080;

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#050505]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]" suppressHydrationWarning>
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4" />
            <p className="text-white/40 font-mono tracking-widest uppercase text-[10px] md:text-xs">
              Welcome to SYNTACS 2026 {Math.round((loadedCount / TOTAL_FRAMES) * 100)}%
            </p>
          </div>
        )}
        
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          className="w-full h-full object-cover pointer-events-none opacity-40 md:opacity-50 mix-blend-screen"
          suppressHydrationWarning
        />

        {/* Text Overlays */}
        <div className="absolute inset-0 pointer-events-none px-6">
          {/* 0% Scroll */}
          <motion.div 
            style={{ opacity: useTransform(smoothProgress, [0, 0.15], [1, 0]) }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="text-center transform translate-y-12 md:translate-y-0 pointer-events-auto">
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 text-white">
                2026
              </h1>
              <p className="text-sm md:text-xl font-light tracking-[0.2em] md:tracking-[0.3em] uppercase text-white transform md:translate-y-9 mb-8 md:mb-16">
                Department of Computer Science & Engineering, IIT Ropar · 20–21 March
              </p>
              <motion.a
                href="#welcome"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="inline-block px-8 py-3 md:px-10 md:py-4 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-xs md:text-sm font-medium tracking-[0.2em] uppercase rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>

          {/* 30% Scroll */}
          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0.2, 0.3, 0.4], [0, 1, 0]),
              x: useTransform(smoothProgress, [0.2, 0.3, 0.4], [30, 0, -30])
            }}
            className="absolute inset-x-6 md:left-24 md:right-auto md:max-w-xl top-1/2 -translate-y-1/2 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 md:mb-8 leading-none">
              Precision <br className="hidden md:block" /> Research.
            </h2>
            <p className="text-base md:text-lg text-white/50 leading-relaxed font-light">
              Dive into the core of technological innovation. SYNTACS brings together the brightest minds to disassemble today's complex challenges and build tomorrow's solutions.
            </p>
          </motion.div>

          {/* 60% Scroll */}
          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0.5, 0.6, 0.7], [0, 1, 0]),
              x: useTransform(smoothProgress, [0.5, 0.6, 0.7], [-30, 0, 30])
            }}
            className="absolute inset-x-6 md:right-24 md:left-auto md:max-w-xl top-1/2 -translate-y-1/2 text-center md:text-right"
          >
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 md:mb-8 leading-none">
              Immersive <br className="hidden md:block" /> Advances.
            </h2>
            <p className="text-base md:text-lg text-white/50 leading-relaxed font-light">
              From quantum computing to neural architectures. Explore the internal mechanics of the next digital era through peer-reviewed excellence and expert keynotes.
            </p>
          </motion.div>

          {/* 90% Scroll */}
          <motion.div 
            style={{ opacity: useTransform(smoothProgress, [0.85, 0.95], [0, 1]) }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="text-center px-4">
              <h2 className="text-4xl md:text-8xl font-bold tracking-tighter mb-6 md:mb-8">20-21 MARCH 2026</h2>
              <p className="text-sm md:text-xl text-white/40 font-mono tracking-widest uppercase mb-10 md:mb-12">IIT Ropar | Punjab, India</p>
              <a 
                href="https://www.syntacs2025.site/register"
                target="_blank"
                className="px-10 py-4 md:px-16 md:py-5 bg-white text-black text-sm md:text-lg font-bold rounded-full hover:scale-105 transition-transform duration-300 inline-block"
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
