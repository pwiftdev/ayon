'use client';

import { useEffect, useRef, useState } from 'react';

interface OptimizedVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  crossOrigin?: 'anonymous' | 'use-credentials';
  webkitPlaysinline?: boolean;
  onLoadedData?: (e: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
}

export default function OptimizedVideo({
  src,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  crossOrigin = "anonymous" as const,
  webkitPlaysinline = true,
  onLoadedData,
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsIntersecting(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [hasLoaded]);

  const handleLoadedData = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.target as HTMLVideoElement;
    video.play().catch(() => {
      setTimeout(() => video.play(), 100);
    });
    
    if (onLoadedData) {
      onLoadedData(e);
    }
  };

  return (
    <video
      ref={videoRef}
      autoPlay={autoPlay && isIntersecting}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={isIntersecting ? "metadata" : "none"}
      crossOrigin={crossOrigin}
      webkit-playsinline={webkitPlaysinline}
      className={className}
      onLoadedData={handleLoadedData}
    >
      {isIntersecting && <source src={src} type="video/mp4" />}
    </video>
  );
}
