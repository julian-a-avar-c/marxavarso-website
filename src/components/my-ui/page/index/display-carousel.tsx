import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/my-ui/carousel.tsx";
import { cn } from "@/lib/utils";

type DisplayCarouselProps = {
  images: string[];
};

function DisplayCarousel({ images }: DisplayCarouselProps) {
  return (
    <Carousel
      opts={{
        loop: true,
        duration: 5,
        active: true,
      }}
    >
      <CarouselContent>
        {images.map((item) => (
          <CarouselItem
            key={
              // Image name without extension
              item.split("/").at(-1)?.split(".").at(0)
            }
          >
            <img
              src={item}
              className={cn(
                "object-cover object-center",
                "h-64 lg:h-128 w-full"
              )}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export { DisplayCarousel };
