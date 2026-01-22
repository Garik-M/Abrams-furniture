import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import img1 from "@/assets/images/20220323_231726.webp";
import img2 from "@/assets/images/20220401_154959.webp";
import img3 from "@/assets/images/20220401_155137.webp";
import img4 from "@/assets/images/20221201_004716.webp";
import img5 from "@/assets/images/20221201_005004.webp";
import img6 from "@/assets/images/20221201_005126.webp";
import img7 from "@/assets/images/IMG_0560.webp";
import img8 from "@/assets/images/received_318287899094124.webp";

const galleryImages = [
  {
    id: 1,
    src: img1,
    title: "Custom Kitchen Cabinet",
    description: "Beautiful custom kitchen cabinet with premium finish",
  },
  {
    id: 2,
    src: img2,
    title: "Modern Cabinet Design",
    description: "Contemporary cabinet design with clean lines",
  },
  {
    id: 3,
    src: img3,
    title: "Cabinet Installation",
    description: "Professional cabinet installation in progress",
  },
  {
    id: 4,
    src: img4,
    title: "Wardrobe Collection",
    description: "Custom wardrobe with sliding doors and internal organization",
  },
  {
    id: 5,
    src: img5,
    title: "Storage Solutions",
    description: "Efficient storage solutions for modern homes",
  },
  {
    id: 6,
    src: img6,
    title: "Cabinet Details",
    description: "Close-up view of cabinet craftsmanship and details",
  },
  {
    id: 7,
    src: img7,
    title: "Furniture Showcase",
    description: "Showcase of our custom furniture pieces",
  },
  {
    id: 8,
    src: img8,
    title: "Completed Project",
    description: "Completed custom furniture project for client",
  },
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === " ") {
        event.preventDefault();
        setIsAutoPlay(!isAutoPlay);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <section className="py-12 md:py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our Work Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Explore our collection of custom furniture pieces, crafted with
            precision and attention to detail.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Image Display */}
          <Card className="overflow-hidden">
            <div className="relative aspect-video bg-secondary">
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].title}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Play/Pause Button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                onClick={toggleAutoPlay}
                title={isAutoPlay ? "Pause slideshow" : "Play slideshow"}
              >
                {isAutoPlay ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
            </div>

            {/* Image Info */}
            <div className="p-6 text-center">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {galleryImages[currentIndex].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {galleryImages[currentIndex].description}
              </p>
            </div>
          </Card>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-2 mt-6 overflow-x-auto pb-2">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
