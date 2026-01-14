import { useState, } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Start forex trading in minutes With",
    highlight: "Nebula Financial Services Ltd",
    desc: "Unleash your potential in the dynamic Forex Market with a Premier Forex Broker",
    btn: "GET STARTED",
    image: "/baneq2.png", 
  },
  {
    title: "Trade Global Markets With",
    highlight: "Advanced Trading Tools",
    desc: "Access Forex, Metals, Indices & Crypto with cutting-edge platforms",
    btn: "START TRADING",
    image: "/trade2min.png",
  },
  
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-gradient-to-b from-black to-[#0b0b0b] mt-[1px]">

      {/* BACKGROUND GRAPH EFFECT */}
      <div className="absolute inset-0 bg-[url('/graph-bg.png')] bg-cover bg-center opacity-20"></div>

      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out
            ${i === index ? "opacity-100 translate-x-0" : i < index ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"}`}
        >
          <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center">

            {/* LEFT CONTENT */}
            <div className="w-full lg:w-1/2 text-white">
              <h1 className="text-3xl lg:text-4xl font-bold leading-snug">
                {slide.title}{" "}
                <span className="text-[#d2aa73]">{slide.highlight}</span>
              </h1>

              <p className="mt-5 text-gray-300 text-lg">
                {slide.desc}
              </p>

              <button className="mt-8 bg-[#d2aa73] text-black px-8 py-3 font-semibold rounded hover:opacity-90 transition">
                {slide.btn}
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hidden lg:flex w-1/2 justify-end">
              <img
                src={slide.image}
                alt="slider"
                className="max-h-[500px] object-contain animate-fadeIn"
              />
            </div>
          </div>
        </div>
      ))}

      {/* LEFT ARROW */}
      <button
        onClick={() => setIndex(index === 0 ? slides.length - 1 : index - 1)}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#d2aa73] text-white p-3 rounded hover:bg-[#d4af37] hover:text-black transition-all duration-300 shadow-lg hover:scale-110"
      >
        <ChevronLeft size={20} strokeWidth={3} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => setIndex((index + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#d2aa73] text-white p-3 rounded hover:bg-[#d4af37] hover:text-black transition-all duration-300 shadow-lg hover:scale-110"
      >
        <ChevronRight size={20} strokeWidth={3} />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition
              ${i === index ? "bg-[#d2aa73]" : "bg-gray-500"}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
