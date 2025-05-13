import { useEffect, useRef } from "react";
import BlazeSlider, { BlazeConfig } from "blaze-slider";
import "blaze-slider/dist/blaze.css";
import { Star } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export function useBlazeSlider(config?: BlazeConfig) {
  const sliderRef = useRef<BlazeSlider | null>(null);
  const sliderElRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !sliderRef.current &&
      !!sliderElRef.current
    ) {
      const blazeSlider = new BlazeSlider(sliderElRef.current, config);
      sliderRef.current = blazeSlider;
    }
  }, [config]);
  return { sliderElRef, sliderRef };
}

function Slider() {
  const { sliderElRef, sliderRef } = useBlazeSlider({
    all: {
      enableAutoplay: true,
      autoplayInterval: 2000,
      transitionDuration: 300,
      slidesToShow: 3,
    },
    "(max-width: 900px)": {
      slidesToShow: 2,
    },
    "(max-width: 500px)": {
      slidesToShow: 1,
    },
  });
  return (
    <div
      ref={sliderElRef}
      className="blaze-slider mx-auto my-10 max-w-screen-xl"
    >
      <div className="flex items-center justify-between border-b pb-1 text-sm text-gray-700">
        <span className="font-semibold">GERÇEK MÜŞTERİ YORUMLARI</span>
        <div className="flex items-center gap-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star key={i} size={16} fill="#facc15" stroke="#facc15" />
            ))}
          <span className="ml-1 text-xs text-gray-600">198453 Yorum</span>
          <div className="ml-2 flex cursor-pointer items-center space-x-1 text-gray-400">
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              onClick={() => sliderRef.current?.prev()}
              className="transition-colors hover:text-black"
            />
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              onClick={() => sliderRef.current?.next()}
              className="transition-colors hover:text-black"
            />
          </div>
        </div>
      </div>

      <div className="blaze-container">
        <div className="blaze-track-container">
          <div className="blaze-track">
            <div className="blaze-slide">
              <div className="flex h-40 items-center justify-center rounded bg-gray-200">
                03/05/24 → 03/05/24 Beğendim gayet güzeldi Ürün gayet güzel ama
                ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.
              </div>
            </div>
            <div className="blaze-slide">
              <div className="flex h-40 items-center justify-center rounded bg-gray-200">
                Slide 2
              </div>
            </div>
            <div className="blaze-slide">
              <div className="flex h-40 items-center justify-center rounded bg-gray-200">
                Slide 3
              </div>
            </div>
            <div className="blaze-slide">
              <div className="flex h-40 items-center justify-center rounded bg-gray-200">
                Slide 4
              </div>
            </div>
            <div className="blaze-slide">
              <div className="flex h-40 items-center justify-center rounded bg-gray-200">
                Slide 5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
