import { useState, useRef } from "react";
import Header from "../components/Header";
import FadeIn from "../components/FadeIn";
import Landing from "../components/Landing";
import Footer from "../components/Footer";

const images = [
  "/images/pic1.webp",
  "/images/pic2.webp",
  "/images/pic3.webp",
  "/images/pic4.webp",
  "/images/pic5.webp",
  "/images/pic6.webp",
  "/images/pic7.webp",
  "/images/pic8.webp",
  "/images/pic18.webp",
  "/images/room1.webp",
  "/images/room2.webp",
  "/images/room3.webp",
  "/images/room4.webp",
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <Landing>
        <Header />

        {/* ===== HERO ===== */}
        <section className="py-20 md:py-40 text-center">
          <FadeIn>
            <span className="text-xl md:text-2xl md:font-bold tracking-widest text-white">
              | GALLERIE |
            </span>
            <h1 className="text-3xl md:text-7xl font-serif mt-8 text-amber-400">
              Instants d’Aroma Dades
            </h1>
            <p className="max-w-xl mx-auto mt-8 text-md md:text-lg text-white">
              Une immersion visuelle au cœur de la vallée des Dades, entre nature,
              culture et sérénité.
            </p>
          </FadeIn>
        </section>
      </Landing>

      <main className="bg-[#f7f6f2] text-[#2e2e2e]">

        {/* ===== TITLE ===== */}
        <section className="pt-32 pb-20 px-6">
          <FadeIn>
            <p className="text-xs tracking-widest text-center uppercase mb-6">
              | Gallery |
            </p>
            <h2 className="text-3xl md:text-5xl text-center font-serif max-w-4xl mx-auto leading-tight">
              Le lieu de vos rêves, où vous vous plongerez complètement dans une atmosphère de détente et de tranquillité.
            </h2>
          </FadeIn>
        </section>

        {/* ===== GALLERY GRID ===== */}
        <section className="pb-40 px-6">
          <div className="
            max-w-7xl mx-auto 
            grid 
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 
            gap-8 
            lg:gap-10
            auto-rows-auto
            lg:auto-rows-[260px]
          ">
            {images.slice(0, 9).map((src, i) => (
              <GalleryImage
                key={i}
                src={src}
                index={i}
                onOpen={setActiveIndex}
                className={`
                  ${i % 3 === 1 ? "lg:row-span-3 rounded-full" : "lg:row-span-2 rounded-[40px]"}
                `}
              />
            ))}

            {/* CENTERED LAST ROW */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col sm:flex-row justify-center gap-8 mt-16">
              {images.slice(9).map((src, i) => (
                <GalleryImage
                  key={i + 9}
                  src={src}
                  index={i + 9}
                  onOpen={setActiveIndex}
                  className="w-full sm:w-[320px] h-55 rounded-full"
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ===== LIGHTBOX ===== */}
      {activeIndex !== null && (
        <Lightbox
          images={images}
          index={activeIndex}
          setIndex={setActiveIndex}
        />
      )}
    </>
  );
};

export default Gallery;

/* ============================= */
/* ===== GALLERY IMAGE ===== */
/* ============================= */
const GalleryImage = ({ src, index, onOpen, className }) => (
  <FadeIn>
    <div
      onClick={() => onOpen(index)}
      className={`relative overflow-hidden cursor-pointer ${className}`}
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.08] bg-[url('/grain.png')]" />

      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full h-full min-h-55 object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  </FadeIn>
);

/* ============================= */
/* ===== LIGHTBOX MODAL ===== */
/* ============================= */
const Lightbox = ({ images, index, setIndex }) => {
  const touchStart = useRef(0);

  const prev = () =>
    setIndex((index - 1 + images.length) % images.length);
  const next = () =>
    setIndex((index + 1) % images.length);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={() => setIndex(null)}
    >
      <div
        className="relative max-w-6xl w-full px-6"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const delta = touchStart.current - e.changedTouches[0].clientX;
          if (delta > 50) next();
          if (delta < -50) prev();
        }}
      >
        {/* Grain overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[url('/grain.png')]" />

        <img
          src={images[index]}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full max-h-[85vh] object-contain rounded-2xl"
        />

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl"
        >
          ›
        </button>
        <button
          onClick={() => setIndex(null)}
          className="absolute top-4 right-4 text-white text-3xl"
        >
          ×
        </button>
      </div>
    </div>
  );
};
