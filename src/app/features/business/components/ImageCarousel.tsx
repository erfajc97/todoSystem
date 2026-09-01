import { useImageCarouselHook } from '../hooks/useImageCarouselHook';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const { emblaRef, index } = useImageCarouselHook();

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div key={`${src}-${i}`} className="min-w-0 shrink-0 grow-0 basis-full">
              <img src={src} alt={alt} className="aspect-[16/10] w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((src, i) => (
          <span
            key={`${src}-${i}`}
            className={`h-1.5 rounded-full ${i === index ? 'w-4 bg-on-brand' : 'w-1.5 bg-on-brand/50'}`}
          />
        ))}
      </div>
    </div>
  );
}
