import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "../data/slides";
import { DoorpassLogo } from "./DoorpassLogo";
import { SlideContent } from "./SlideContent";

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const goToNext = () => {
    if (currentSlide < slides.length - 1) {
      setDirection("forward");
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrevious = () => {
    if (currentSlide > 0) {
      setDirection("backward");
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col">
      <header className="p-4 sm:p-8">
        <DoorpassLogo />
      </header>

      <main className="flex-1 flex items-center justify-center px-4 sm:px-8 py-6 sm:py-12">
        <div
          key={currentSlide}
          className={`w-full max-w-6xl min-h-[500px] sm:h-[700px] animate-in fade-in duration-500 ${
            direction === "forward"
              ? "slide-in-from-right-8"
              : "slide-in-from-left-8"
          }`}
        >
          <div className="relative h-full bg-[#08371D] rounded-xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 shadow-[0_20px_60px_rgba(8,55,29,0.4)] overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FFFFFF]/5 to-transparent rounded-full -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#FFFFFF]/10 to-transparent rounded-full -ml-32 -mb-32" />

            <div className="relative h-full flex flex-col">
              <div className="flex-none space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-tight">
                  {slide.title}
                </h1>
              </div>

              <div className="flex-1 overflow-y-auto mt-6 sm:mt-8 lg:mt-12">
                <SlideContent slide={slide} />
              </div>

              {slide.talkingPoint && (
                <div className="flex-none mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#FFFFFF]/20">
                  <p className="text-[#FFFFFF] text-sm sm:text-base">
                    <span className="font-semibold">Talking Point:</span>{" "}
                    {slide.talkingPoint}
                  </p>
                </div>
              )}

              <div className="flex-none mt-6 sm:mt-8 flex items-center justify-between gap-2 sm:gap-4">
                <button
                  onClick={goToPrevious}
                  disabled={currentSlide === 0}
                  className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg bg-[#FFFFFF]/10 text-[#FFFFFF] hover:bg-[#FFFFFF]/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#FFFFFF]/10"
                >
                  <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
                  <span className="font-medium text-sm sm:text-base">Back</span>
                </button>

                <div className="text-[#FFFFFF]/60 text-xs sm:text-sm font-medium">
                  {currentSlide + 1}/{slides.length}
                </div>

                <button
                  onClick={goToNext}
                  disabled={currentSlide === slides.length - 1}
                  className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg bg-[#FFFFFF] text-[#08371D] hover:bg-[#FFFFFF]/90 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#FFFFFF]"
                >
                  <span className="font-medium text-sm sm:text-base">Next</span>
                  <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
