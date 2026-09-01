import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export function useImageCarouselHook() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  return { emblaRef, index };
}
