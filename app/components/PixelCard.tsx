'use client';

import { useEffect, useRef } from 'react';
import { JSX } from 'react';

class Pixel {
  width: number;
  height: number;
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  color: string;
  speed: number;
  size: number;
  sizeStep: number;
  minSize: number;
  maxSizeInteger: number;
  maxSize: number;
  delay: number;
  counter: number;
  counterStep: number;
  isIdle: boolean;
  isReverse: boolean;
  isShimmer: boolean;

  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: string,
    speed: number,
    delay: number
  ) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = this.getRandomValue(0.1, 0.9) * speed;
    this.size = 0;
    this.sizeStep = Math.random() * 0.4;
    this.minSize = 0.5;
    this.maxSizeInteger = 2;
    this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
    this.delay = delay;
    this.counter = 0;
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  getRandomValue(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  draw() {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.x + centerOffset,
      this.y + centerOffset,
      this.size,
      this.size
    );
  }

  appear() {
    this.isIdle = false;
    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }
    if (this.size >= this.maxSize) {
      this.isShimmer = true;
    }
    if (this.isShimmer) {
      this.shimmer();
    } else {
      this.size += this.sizeStep;
    }
    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;
    if (this.size <= 0) {
      this.isIdle = true;
      return;
    } else {
      this.size -= 0.1;
    }
    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize) {
      this.isReverse = true;
    } else if (this.size <= this.minSize) {
      this.isReverse = false;
    }
    if (this.isReverse) {
      this.size -= this.speed;
    } else {
      this.size += this.speed;
    }
  }
}

function getEffectiveSpeed(value: number, reducedMotion: boolean) {
  const min = 0;
  const max = 100;
  const throttle = 0.001;

  if (value <= min || reducedMotion) return min;
  if (value >= max) return max * throttle;
  return value * throttle;
}

const VARIANTS = {
  default: {
    gap: 5,
    speed: 35,
    colors: '#f8fafc,#f1f5f9,#cbd5e1',
    noFocus: false
  },
  blue: {
    gap: 10,
    speed: 25,
    colors: '#e0f2fe,#7dd3fc,#0ea5e9',
    noFocus: false
  },
  yellow: {
    gap: 6,
    speed: 20,
    colors: '#fef9c3,#fde047,#facc15',
    noFocus: false
  },
  pink: {
    gap: 6,
    speed: 80,
    colors: '#ffffff,#fda4af,#e11d48',
    noFocus: true
  }
};

interface PixelCardProps {
  variant?: keyof typeof VARIANTS;
  gap?: number;
  speed?: number;
  colors?: string;
  noFocus?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function PixelCard({
  variant = 'default',
  gap,
  speed,
  colors,
  noFocus,
  className = '',
  children
}: PixelCardProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animationRef = useRef<number | null>(null);
  const timePreviousRef = useRef(0);
  const reducedMotionRef = useRef(false);

  const variantCfg = VARIANTS[variant];
  const finalGap = gap ?? variantCfg.gap;
  const finalSpeed = speed ?? variantCfg.speed;
  const finalColors = colors ?? variantCfg.colors;
  const finalNoFocus = noFocus ?? variantCfg.noFocus;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      reducedMotionRef.current = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
    }
  }, []);

  const initPixels = () => {
    if (!containerRef.current || !canvasRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    canvasRef.current.width = rect.width;
    canvasRef.current.height = rect.height;

    const colorsArray = finalColors.split(',');
    const pxs: Pixel[] = [];

    for (let x = 0; x < rect.width; x += finalGap) {
      for (let y = 0; y < rect.height; y += finalGap) {
        const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
        const dx = x - rect.width / 2;
        const dy = y - rect.height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);

        pxs.push(
          new Pixel(
            canvasRef.current,
            ctx,
            x,
            y,
            color,
            getEffectiveSpeed(finalSpeed, reducedMotionRef.current),
            reducedMotionRef.current ? 0 : distance
          )
        );
      }
    }

    pixelsRef.current = pxs;
  };

  const animate = (method: keyof Pixel) => {
    animationRef.current = requestAnimationFrame(() => animate(method));
    const now = performance.now();
    if (now - timePreviousRef.current < 16) return;
    timePreviousRef.current = now;

    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx || !canvasRef.current) return;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    let allIdle = true;
    pixelsRef.current.forEach(p => {
      // @ts-ignore
      p[method]();
      if (!p.isIdle) allIdle = false;
    });

    if (allIdle && animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const trigger = (method: keyof Pixel) => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }

    animationRef.current = requestAnimationFrame(() =>
      animate(method)
    );
  };

  useEffect(() => {
    initPixels();
    const observer = new ResizeObserver(initPixels);
    containerRef.current && observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [finalGap, finalSpeed, finalColors]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden border border-zinc-800 rounded-2xl isolate select-none ${className}`}
      onMouseEnter={() => trigger('appear')}
      onMouseLeave={() => trigger('disappear')}
      tabIndex={finalNoFocus ? -1 : 0}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      <div className="relative w-full h-full" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}