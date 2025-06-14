import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/my-ui/carousel.tsx";
import { cn } from "@/lib/utils";

type DisplayCarouselProps = {
  className?: string,
  images: string[];
  imageClass?: string;
};

function DisplayCarousel({ className, images, imageClass }: DisplayCarouselProps) {
  return (
    <Carousel
      opts={{
        loop: true,
        duration: 5,
        active: true,
      }}
      className={className}
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
                "h-64 lg:h-128 w-full",
                imageClass
              )}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export { DisplayCarousel };
