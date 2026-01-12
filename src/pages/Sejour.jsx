"use client";

import { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Landing from "@/components/Landing";

/* ================= LIGHTBOX ================= */

function Lightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-9999 bg-black/90 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        decoding="async"
        className="max-h-[90vh] max-w-full rounded-xl object-contain"
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl"
      >
        ✕
      </button>
    </div>
  );
}

/* ================= SLIDER ================= */

function ImageSlider({ images, onImageClick }) {
  const sliderRef = useRef(null);

  const slide = (dir) => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* LEFT */}
      <button
        onClick={() => slide("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10
        bg-white/90 backdrop-blur rounded-full w-9 h-9 shadow
        flex items-center justify-center text-xl"
      >
        ‹
      </button>

      {/* TRACK */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth scrollbar-hide gap-5 snap-x snap-mandatory"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="min-w-full md:min-w-[320px] snap-center px-4 md:px-0 flex justify-center"
          >
            <img
              src={img}
              alt=""
              onClick={() => onImageClick(img)}
              loading="lazy"
              decoding="async"
              className="
                w-full max-w-md md:w-[320px]
                h-55
                object-cover cursor-pointer
              "
            />
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <button
        onClick={() => slide("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10
        bg-white/90 backdrop-blur rounded-full w-9 h-9 shadow
        flex items-center justify-center text-xl"
      >
        ›
      </button>
    </div>
  );
}

/* ================= PAGE ================= */

export default function SejourPage() {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <>
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />

      {/* ================= HERO ================= */}
      <Landing>
        <Header />
        <section className="py-20 md:py-40 text-center">
          <FadeIn>
            <div className="max-w-5xl mx-auto px-6 text-white">
              <span className="tracking-widest text-sm sm:text-base font-semibold">
                | SÉJOUR |
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-serif mt-4 text-amber-400">
                Immersive Moroccan Stays
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-xl">
                Nomads • Valleys • Kasbahs • Desert • Slow Travel
              </p>
            </div>
          </FadeIn>
        </section>
      </Landing>

      {/* ================= SECTION 1 ================= */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-20">

          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif text-[#3E2A1A]">
              6-Day Roses Valley – From Marrakech
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-[#6B5A44]">
              4 Days Trekking • Nomads • Kasbahs • Camping Under the Stars
            </p>
          </FadeIn>

          {/* DAY 1 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <FadeIn>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-3">
                  Day 1: Marrakech – Ait Benhaddou – Roses Valley
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  Cross the High Atlas via Tizi n’Tichka Pass, visit the UNESCO Kasbah
                  of Ait Benhaddou, continue through Ouarzazate and Skoura, and arrive
                  in Roses Valley.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <ImageSlider
                images={[
                  "/images/roses-valley.webp",
                  "/images/kasbah-ruins.webp",
                  "/images/local-artisans.webp",
                  "/images/tajine-workshop.webp",
                ]}
                onImageClick={setLightboxImage}
              />
            </FadeIn>
          </div>

          {/* DAY 2 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <FadeIn className="md:order-2">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-3">
                  Day 2: Roses Valley – Boutghrar
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  Walk through rose fields, ancient kasbahs, rivers and Amazigh villages
                  toward Boutghrar.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <ImageSlider
                images={[
                  "/images/roses-valley.webp",
                  "/images/kasbah-ruins.webp",
                  "/images/local-artisans.webp",
                ]}
                onImageClick={setLightboxImage}
              />
            </FadeIn>
          </div>

          {/* DAY 3 */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn>
              <div>
                <h3 className="text-2xl font-serif mb-4">
                  Day 3: Boutghrar – Agouti Gorge – Outdoor Camping
                </h3>
                <p>
                  Trek through Agouti Gorge and farmlands to Alemdoun village.
                  Camp in nature with tea, dinner, and stars above.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <ImageSlider
                images={[
                  "/images/roses-valley.webp",
                  "/images/kasbah-ruins.webp",
                  "/images/local-artisans.webp",
                  "/images/tajine-workshop.webp",
                ]}
              />
            </FadeIn>
          </div>

          {/* DAY 4 */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn className="md:order-2">
              <div>
                <h3 className="text-2xl font-serif mb-4">
                  Day 4: Alemdoun – Nomadic Family Camp
                </h3>
                <p>
                  Cross high plateaus with views toward M’Goun Peak. Share tea
                  and stories with a nomadic family. Overnight in tents or caves.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <ImageSlider
                images={[
                  "/images/roses-valley.webp",
                  "/images/kasbah-ruins.webp",
                  "/images/local-artisans.webp",
                  "/images/tajine-workshop.webp",
                ]}
              />
            </FadeIn>
          </div>

          {/* DAY 5 */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn>
              <div>
                <h3 className="text-2xl font-serif mb-4">
                  Day 5: Nomads – Monkeys Fingers – Dades Gorge
                </h3>
                <p>
                  Picnic by the river, light canyoning at Monkeys Fingers,
                  then transfer to Dades Gorge guesthouse.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <ImageSlider
                images={[
                  "/images/monkeys-fingers.webp",  // Iconic rock formations
                  "/images/canyoning.webp",  // Light canyoning
                  "/images/dades-river.webp",      // River picnic
                  "/images/dades-gorge-road.webp",
                ]}
              />
            </FadeIn>
          </div>

          {/* DAY 6 */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn className="md:order-2">
              <div>
                <h3 className="text-2xl font-serif mb-4">
                  Day 6: Dades Gorge – Skoura – Marrakech
                </h3>
                <p>
                  Drive through Skoura palm oasis and cross the High Atlas back
                  to Marrakech, arriving late afternoon.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <ImageSlider
                images={[
                  "/images/roses-valley.webp",
                  "/images/kasbah-ruins.webp",
                  "/images/local-artisans.webp",
                  "/images/tajine-workshop.webp",
                ]}
              />
            </FadeIn>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="py-20 md:py-32 bg-[#f9e9d4]">
        <div className="max-w-6xl mx-auto px-6 space-y-24">

          {/* INTRO */} <FadeIn> <h2 className="text-4xl md:text-6xl font-serif text-[#3E2A1A]"> 6 Days / 5 Nights : Star Tour Experience </h2> <p className="mt-4 text-lg text-[#6B5A44]"> A Unique Local Stay in Dades Gorge & Roses Valley </p> <p className="mt-6"> Disconnect from the noise. Reconnect with nature, culture, and yourself. </p> <p className="mt-4"> Welcome to Ecolodge Aroma Dades, your home in the heart of the Roses Valley and Dades Gorge — one of Morocco’s most authentic and peaceful regions. </p> <p className="mt-4"> This 6-day journey is designed for travelers, families, digital nomads, and anyone seeking reconnection, combining 5 nights in our local ecolodge with daily adventures into valleys, mountains, gorges, kasbahs, and nomadic lands. </p> </FadeIn>

          {/* ABOUT */}
          <FadeIn>
            <h3 className="text-2xl font-serif mb-4">🌹 About Roses Valley & Dades Gorge</h3>

            <p>
              The Roses Valley is world-famous for its Rosa Damascena, blooming each spring
              and used for natural oils and perfumes.
            </p>

            <p className="mt-2">
              Known as the “Valley of a Thousand Kasbahs”, it hides ancient earthen fortresses,
              Amazigh villages, and untouched gorges only accessible on foot or with locals.
            </p>

            <p className="mt-2">
              Dades Gorge completes the landscape with deep canyons, volcanic formations,
              dinosaur footprints, nomadic caves, and timeless beauty.
            </p>

            <p className="mt-2">
              We arrange transport from Marrakech, Casablanca, Ouarzazate, or anywhere in Morocco.
            </p>
          </FadeIn>

          {/* DAY 1 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <FadeIn>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-3">
                  ⭐ Day 1: Roses Valley Walk & Tajine Workshop
                </h3>
                <ul className="text-sm sm:text-base space-y-1">
                  <li>• Guided valley walk</li>
                  <li>• Tea with locals</li>
                  <li>• Tajine cooking experience</li>
                  <li>• Fire & stars at night</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn>
              <ImageSlider
                images={[
                  "/images/roses-valley.webp",
                  "/images/tajine-workshop.webp",
                  "/images/star-night.webp",
                ]}
                onImageClick={setLightboxImage}
              />
            </FadeIn>
          </div>

          {/* DAY 2 */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn className="md:order-2">
              <div>
                <h3 className="text-2xl font-serif mb-4">
                  ⭐ Day 2: Canyoning – Picnic BBQ – Sunset With Nomads
                </h3>
                <p>
                  3-hour canyoning hike at Monkeys Fingers, tea with nomads,
                  dinosaurs footprints at Ait Arbi.
                </p>
                <p className="mt-2">
                  Open-air barbecue by the river, swimming and relaxation.
                </p>
                <p className="mt-2">
                  Sunset off-road trip to nomadic caves.
                </p>
                <p className="mt-4 font-semibold">
                  Dinner & Overnight at Ecolodge Aroma Dades
                </p>
              </div>
            </FadeIn>

            <FadeIn className="md:order-1">
              <ImageSlider
                images={[
                  "/images/monkeys-fingers.webp",
                  "/images/canyoning.webp",
                  "/images/river-bbq.webp",
                  "/images/nomads-sunset.webp",
                ]}
              />
            </FadeIn>
          </div>

          {/* DAY 3 */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn>
              <div>
                <h3 className="text-2xl font-serif mb-4">
                  ⭐ Day 3: M’Goun Gorges Discovery
                </h3>
                <ul className="space-y-1">
                  <li>• 3-hour hike through villages</li>
                  <li>• Walk along rivers & farmland</li>
                  <li>• Explore Agouti Gorge</li>
                  <li>• Picnic in nature</li>
                  <li>• Off-road Amajagh & Ameskar gorges</li>
                </ul>
                <p className="mt-4 font-semibold">
                  Dinner & Overnight at Ecolodge Aroma Dades
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <ImageSlider
                images={[
                  "/images/agouti-gorge.webp",
                  "/images/mgoun-river.webp",
                  "/images/ameskar.webp",
                  "/images/hidden-valleys.webp",
                ]}
              />
            </FadeIn>
          </div>

          {/* DAY 4 */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn className="md:order-2">
              <div>
                <h3 className="text-2xl font-serif mb-4">
                  ⭐ Day 4: Jbel Saghrou Trek – Nomadic Lunch
                </h3>
                <p>
                  4-hour hike from Bab N’Ali to Tiblah through volcanic landscapes.
                </p>
                <p className="mt-2">
                  Lunch with a nomadic family in the heart of Saghrou.
                </p>
                <p className="mt-2">
                  Off-road journey to Nkob (45 kasbahs).
                </p>
                <p className="mt-4 font-semibold">
                  Dinner & Overnight in Nkob Guesthouse
                </p>
              </div>
            </FadeIn>

            <FadeIn className="md:order-1">
              <ImageSlider
                images={[
                  "/images/saghrou3.webp",
                  "/images/bab-n-ali.webp",
                  "/images/nomadic-lunch.webp",
                  "/images/nkob.webp",
                ]}
              />
            </FadeIn>
          </div>

          {/* DAY 5 */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn>
              <div>
                <h3 className="text-2xl font-serif mb-4">
                  ⭐ Day 5: Nkob – Rissani – Merzouga Desert Camp
                </h3>
                <p>
                  Visit Rissani market, camel ride into Merzouga dunes,
                  sunset, dinner, music, and fire under the stars.
                </p>
                <p className="mt-4 font-semibold">
                  Overnight in Luxury Desert Camp
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <ImageSlider
                images={[
                  "/images/rissani-market.webp",
                  "/images/camel-trek.webp",
                  "/images/merzouga-sunset.webp",
                  "/images/desert-camp.webp",
                ]}
              />
            </FadeIn>
          </div>

          {/* DAY 6 */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn className="md:order-2">
              <div>
                <h3 className="text-2xl font-serif mb-4">
                  ⭐ Day 6: Merzouga – Todra Gorge – Return
                </h3>
                <p>
                  Walk through Todra Gorge, photos, refreshing atmosphere,
                  return to Dades Valley for final dinner.
                </p>
                <p className="mt-2">
                  Option to extend or transfer anywhere in Morocco.
                </p>
              </div>
            </FadeIn>

            <FadeIn className="md:order-1">
              <ImageSlider
                images={[
                  "/images/todra-gorge.webp",
                  "/images/todra-walk.webp",
                  "/images/dades-valley.webp",
                ]}
              />
            </FadeIn>
          </div>

          {/* WHY */}
          <FadeIn>
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-3">
              ⭐ Why This Is a Unique Stay
            </h3>
            <ul className="text-sm sm:text-base space-y-1">
              <li>• Live with locals</li>
              <li>• Hidden valleys & gorges</li>
              <li>• Nomadic culture & slow travel</li>
              <li>• Disconnect to reconnect</li>
            </ul>
          </FadeIn>

        </div>
      </section>

      <Footer />
    </>
  );
}
