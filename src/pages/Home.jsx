import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

/* ===== IMAGES (Vercel-safe) ===== */
const rooms = [
  "/images/room1.jpg",
  "/images/room2.jpg",
  "/images/room3.jpg",
  "/images/room4.jpg",
  "/images/room5.jpg",
];

const gallery = [
  "/images/pic1.jpg",
  "/images/pic2.jpg",
  "/images/pic3.jpg",
  "/images/pic4.jpg",
  "/images/pic5.jpg",
  "/images/pic6.jpg",
  "/images/pic7.jpg",
  "/images/pic8.jpg",
];

const reviews = [
  {
    text: "Un lieu magique, calme absolu et accueil exceptionnel.",
    author: "Marie – France",
    rating: "★★★★★ 9,1/10",
  },
  {
    text: "Vue incroyable sur la vallée, chambres magnifiques.",
    author: "Lucas – Belgique",
    rating: "★★★★★ 9,3/10",
  },
  {
    text: "Une expérience authentique berbère inoubliable.",
    author: "Anna – Allemagne",
    rating: "★★★★★ 9,2/10",
  },
];

const Home = () => {
  const [roomIndex, setRoomIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);

  /* ===== AUTO SLIDE ===== */
  useEffect(() => {
    const r = setInterval(() => setRoomIndex(i => (i + 1) % rooms.length), 5000);
    return () => clearInterval(r);
  }, []);

  useEffect(() => {
    const g = setInterval(() => setGalleryIndex(i => (i + 1) % gallery.length), 4000);
    return () => clearInterval(g);
  }, []);

  useEffect(() => {
    const v = setInterval(() => setReviewIndex(i => (i + 1) % reviews.length), 6000);
    return () => clearInterval(v);
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <Landing>
        <Header />
        <Hero />
      </Landing>

      {/* ===== 01 EXPERIENCES ===== */}
      <section className="py-36 bg-white text-center">
        <FadeIn>
          <span className="text-sm tracking-widest text-[#8B5E3C]">| 01 |</span>
          <h2 className="text-5xl font-serif mt-6 mb-20 text-[#3E2A1A]">
            Expériences Uniques
          </h2>
        </FadeIn>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-14">
          {[
            ["🌿", "Nature Préservée", "Paysages sauvages de la vallée des Dades"],
            ["🏺", "Culture Berbère", "Architecture et traditions locales"],
            ["🌙", "Calme Absolu", "Un refuge loin du monde moderne"],
          ].map((i, idx) => (
            <FadeIn key={idx} delay={idx * 120}>
              <div className="p-10 rounded-3xl border border-[#e8e3c8] hover:shadow-2xl transition">
                <div className="text-5xl mb-6">{i[0]}</div>
                <h3 className="text-2xl mb-3 text-[#3E2A1A]">{i[1]}</h3>
                <p className="text-[#6B5A44]">{i[2]}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ===== 02 NOS SERVICES ===== */}
      <section className="py-36 bg-[#f2f0bf] text-center">
        <FadeIn>
          <span className="text-sm tracking-widest text-[#8B5E3C]">| 02 |</span>
          <h2 className="text-5xl font-serif mt-6 mb-20 text-[#3E2A1A]">
            Nos Services
          </h2>
        </FadeIn>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          {[
            ["🍽️", "Cuisine Locale", "Produits frais et recettes traditionnelles"],
            ["🔥", "Espaces Détente", "Terrasses, salons et feux de camp"],
            ["🥾", "Excursions", "Randonnées et découvertes locales"],
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div className="bg-white p-12 rounded-3xl shadow-xl">
                <div className="text-5xl mb-6">{s[0]}</div>
                <h3 className="text-2xl mb-4 text-[#3E2A1A]">{s[1]}</h3>
                <p className="text-[#6B5A44]">{s[2]}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ===== 03 CHAMBRES ===== */}
      <section className="py-36 bg-white text-center">
        <FadeIn>
          <span className="text-sm tracking-widest text-[#8B5E3C]">| 03 |</span>
          <h2 className="text-5xl font-serif mt-6 mb-16 text-[#3E2A1A]">
            Nos Chambres
          </h2>
        </FadeIn>

        <div className="relative max-w-5xl mx-auto">
          <img
            src={rooms[roomIndex]}
            className="h-130 w-full object-cover rounded-3xl shadow-2xl transition-all duration-1000"
          />
          <SliderButtons
            prev={() => setRoomIndex((roomIndex - 1 + rooms.length) % rooms.length)}
            next={() => setRoomIndex((roomIndex + 1) % rooms.length)}
          />
        </div>
      </section>

      {/* ===== 04 GALERIE ===== */}
      <section className="py-36 bg-[#f2f0bf] text-center">
        <FadeIn>
          <span className="text-sm tracking-widest text-[#8B5E3C]">| 04 |</span>
          <h2 className="text-5xl font-serif mt-6 mb-16 text-[#3E2A1A]">
            Galerie
          </h2>
        </FadeIn>

        <div className="relative max-w-6xl mx-auto">
          <img
            src={gallery[galleryIndex]}
            className="h-130 w-full object-cover rounded-3xl shadow-xl transition-all duration-1000"
          />
          <SliderButtons
            prev={() => setGalleryIndex((galleryIndex - 1 + gallery.length) % gallery.length)}
            next={() => setGalleryIndex((galleryIndex + 1) % gallery.length)}
          />
        </div>
      </section>

      {/* ===== 05 AVIS ===== */}
      <section className="py-40 bg-white text-center">
        <FadeIn>
          <span className="text-sm tracking-widest text-[#8B5E3C]">| 05 |</span>
          <h2 className="text-5xl font-serif mt-6 mb-20 text-[#3E2A1A]">
            Avis des Voyageurs
          </h2>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto px-6">
          <FadeIn key={reviewIndex}>
            <p className="text-3xl italic text-[#4A3A2A] mb-10">
              “ {reviews[reviewIndex].text} ”
            </p>
            <div className="text-lg text-[#6B4A2D]">
              {reviews[reviewIndex].author}
            </div>
            <div className="text-[#C2572A] mt-3">
              {reviews[reviewIndex].rating}
            </div>
          </FadeIn>

          <SliderButtons
            prev={() => setReviewIndex((reviewIndex - 1 + reviews.length) % reviews.length)}
            next={() => setReviewIndex((reviewIndex + 1) % reviews.length)}
          />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        className="relative py-36 text-center text-white"
        style={{
          backgroundImage: `url(/images/pic2.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl font-serif mb-12">
              Réservez votre séjour
            </h2>

            <a
              href="https://www.booking.com/hotel/ma/ecolodge-aroma-dades.fr.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-16 py-4 bg-[#f2f0bf] text-[#3E2A1A] rounded-full font-semibold tracking-wide hover:scale-105 transition-transform"
            >
              Booking.com
            </a>
          </FadeIn>
        </div>
      </section>


      <Footer />
    </>
  );
};

/* ===== SLIDER BUTTONS ===== */
const SliderButtons = ({ prev, next }) => (
  <>
    <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full text-xl">
      ‹
    </button>
    <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full text-xl">
      ›
    </button>
  </>
);

export default Home;
