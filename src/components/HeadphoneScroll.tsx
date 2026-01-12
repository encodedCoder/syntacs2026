"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

const TOTAL_FRAMES = 120;
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;

const HeadphoneScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth the scroll progress for a more fluid animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [1, TOTAL_FRAMES - 1]);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let count = 0;

      const loadImage = (index: number) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          // Adjust naming convention to match user request: frame_[i]_delay-0.04s.webp
          // Adjust naming convention to match user request: frame_[i]_delay-0.04s.webp
          // The uploaded files are JPG, so we'll use .jpg extension
          img.src = `/frames/frame_${index.toString().padStart(1, '0')}_delay-0.04s.jpg`;
          img.onload = () => {
            loadedImages[index] = img;
            count++;
            setLoadedCount(count);
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load frame ${index}`);
            resolve(); // Still resolve to not block the whole process
          };
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

  // Update canvas on frame change
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!canvas || !context) return;

      const index = Math.round(frameIndex.get());
      const img = images[index];

      if (img) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Center and scale image (contain fit)
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    frameIndex.onChange(render);
    return () => frameIndex.destroy();
  }, [images, frameIndex]);

  // Initial draw
  useEffect(() => {
    if (images.length > 0 && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context && images[0]) {
        context.drawImage(images[0], 0, 0, canvas.width, canvas.height);
      }
    }
  }, [images]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#050505]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4" />
            <p className="text-white/60 font-mono tracking-widest uppercase text-xs">
              Optimizing Soundscape {Math.round((loadedCount / TOTAL_FRAMES) * 100)}%
            </p>
          </div>
        )}
        
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="w-full h-full object-contain pointer-events-none"
        />

        {/* Text Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          {/* 0% Scroll */}
          <motion.div 
            style={{ opacity: useTransform(smoothProgress, [0, 0.15], [1, 0]) }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">ZENITH X</h1>
              <p className="text-xl md:text-2xl font-light tracking-wide uppercase text-white/40">Pure Sound.</p>
            </div>
          </motion.div>

          {/* 30% Scroll */}
          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0.2, 0.3, 0.4], [0, 1, 0]),
              x: useTransform(smoothProgress, [0.2, 0.3, 0.4], [50, 0, -50])
            }}
            className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 max-w-md"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 underline decoration-white/20 underline-offset-8">
              Precision Engineering.
            </h2>
            <p className="text-lg leading-relaxed">
              Every curve, every material, every component meticulously crafted for an unparalleled acoustic experience. 
              The future of audio is here.
            </p>
          </motion.div>

          {/* 60% Scroll */}
          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0.5, 0.6, 0.7], [0, 1, 0]),
              x: useTransform(smoothProgress, [0.5, 0.6, 0.7], [-50, 0, 50])
            }}
            className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 max-w-md text-right"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 underline decoration-white/20 underline-offset-8">
              Titanium Drivers.
            </h2>
            <p className="text-lg leading-relaxed">
              Experience depth like never before with custom-engineered 40mm titanium diaphragm drivers. 
              Crystal clear highs, resonant bass.
            </p>
          </motion.div>

          {/* 90% Scroll */}
          <motion.div 
            style={{ opacity: useTransform(smoothProgress, [0.85, 0.95], [0, 1]) }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="text-center bg-[#050505]/40 backdrop-blur-sm p-12 rounded-3xl border border-white/5">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">HEAR EVERYTHING.</h2>
              <button className="px-12 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300">
                PRE-ORDER NOW
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeadphoneScroll;
