import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/my-ui/carousel.tsx";
import { cn } from "@/lib/utils";

type ProductCarouselProps = {
  imagenes: string[];
};

function ProductCarousel({ imagenes }: ProductCarouselProps) {
  return (
    <Carousel
      opts={{
        loop: true,
        duration: 5,
      }}
    >
      <CarouselContent>
        {imagenes.map((item) => (
          <CarouselItem
            key={// Image name without extension
            item.split("/").at(-1)?.split(".").at(0)}
          >
            <img
              src={item}
              className={cn("object-cover object-center", "aspect-square")}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export { ProductCarousel };
