import { Parallax } from "react-parallax";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Home from "./Home";

export default function HeroCarousel() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1974&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&auto=format&fit=crop&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504610926078-a1611febcad3?auto=format&fit=crop&w=1974&q=80",
    },
  ];

  const scrollToNext = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center">
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          stopOnHover={false}
          showThumbs={false} 
          showStatus={false}
          interval={5000}
          transitionTime={1000}
          emulateTouch
        >
          {slides.map((slide, index) => (
            <Parallax
              key={index}
              bgImage={slide.image}
              strength={300}
              bgImageStyle={{
                objectFit: "cover",
              }}
            >
               <div className="h-screen relative flex items-center justify-center">
               <div className="absolute inset-0 bg-black/30"></div>
              </div>
            </Parallax>
          ))}
        </Carousel>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="pointer-events-auto">
            <Home />
          </div>
  </div>
        <button
          onClick={scrollToNext}
          className="scroll-indicator absolute z-20 bottom-8 left-1/2 -translate-x-1/2 text-white text-lg opacity-80 tracking-[2px] cursor-pointer transition-opacity duration-300 hover:opacity-100"
        >
          Scroll Down ↓
        </button>
      </section>

    </>
  );
}
