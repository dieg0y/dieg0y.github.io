import { useState, useEffect, useRef } from "react";
import { cn } from "../lib/utils";

export function FadeImage({ className, src, onError, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setCurrentSrc(src);
    setIsLoaded(false);
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (currentSrc && currentSrc.includes("imgur.com") && !currentSrc.endsWith(".jpeg")) {
      setCurrentSrc("https://i.imgur.com/5ttxJOn.jpeg");
    } else if (onError) {
      onError(e);
    }
  };

  if (!currentSrc) {
    return null;
  }

  return (
    <img
      ref={imgRef}
      src={currentSrc}
      className={cn(
        "transition-all duration-700 ease-out",
        isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-md",
        className
      )}
      onLoad={() => setIsLoaded(true)}
      onError={handleError}
      {...props}
    />
  );
}
