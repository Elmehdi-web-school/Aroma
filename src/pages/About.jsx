import Header from "../components/Header";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

import { Leaf, Mountain, Heart } from "lucide-react";

const About = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <Landing>
        <Header />

        <section className="relative py-20 md:py-40 flex items-center justify-center text-center">
          <FadeIn>
            <div className="relative z-10 max-w-5xl px-6 text-white">
              <span className="tracking-widest text-xl md:text-2xl md:font-bold">
                | About AROMA |
              </span>

              <h1 className="text-3xl md:text-7xl font-serif mt-6 text-amber-400">
                Aroma Dades
              </h1>

              <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
                From Nomadic Roots to a Home Opened with Love
              </p>
            </div>
          </FadeIn>
        </section>
      </Landing>

      {/* ===== NOMADIC ROOTS ===== */}
      <section className="py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <span className="text-sm tracking-widest text-[#8B5E3C]">
              | 01 |
            </span>

            <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-12 text-[#3E2A1A]">
              Our Nomadic Story
            </h2>

            <p className="text-lg text-[#5E4B3A] leading-relaxed mb-6">
              Before Aroma Dades became a guesthouse, before the garden bloomed
              again, before travelers arrived — there was the nomadic life.
            </p>

            <p className="text-lg text-[#5E4B3A] leading-relaxed mb-6">
              My grandfather was a true Berber Amazigh nomad. He moved from place
              to place with his animals, guided by nature, water, and seasons.
              He had no permanent home — only tents, caves, and open land.
            </p>

            <p className="text-lg text-[#5E4B3A] leading-relaxed">
              My father was born into this life. Later, he became a semi-nomad,
              settling in one place while continuing to farm and graze animals.
              The Dades River gave him the possibility to build a small home and
              begin gardening. That small house became our roots.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== GROWING UP ===== */}
      <section className="py-36 bg-[#e9f2f1]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <img
              src="/images/pic6.webp"
              alt="Growing up in Dades Valley"
              className="rounded-3xl shadow-2xl object-cover"
              loading="lazy"
            />
          </FadeIn>

          <FadeIn>
            <span className="text-sm tracking-widest text-[#8B5E3C]">
              | 02 |
            </span>

            <h2 className="text-4xl font-serif mt-6 mb-8 text-[#3E2A1A]">
              Growing Up in the Valley
            </h2>

            <p className="text-[#5E4B3A] leading-relaxed mb-6">
              I grew up here — in this garden, among fruit trees, animals, and
              changing seasons. Many of the trees you see today were planted by
              my hands when I was young.
            </p>

            <p className="text-[#5E4B3A] leading-relaxed">
              I am Berber native, raised in community life, shared work, music,
              storytelling, and a deep respect for nature. But my path also led
              me far from home.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== MARRAKECH ===== */}
      <section className="py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <span className="text-sm tracking-widest text-[#8B5E3C]">
              | 03 |
            </span>

            <h2 className="text-4xl font-serif mt-6 mb-10 text-[#3E2A1A]">
              From the Valley to Marrakech & Beyond
            </h2>

            <p className="text-lg text-[#5E4B3A] leading-relaxed mb-6">
              After my studies, I moved to Marrakech, where I worked for more
              than ten years as a tour operator, travel agent, and professional
              tour guide.
            </p>

            <p className="text-lg text-[#5E4B3A] leading-relaxed">
              I guided travelers across Morocco — deserts, mountains, kasbahs,
              valleys, and cities — learning deeply what travelers truly seek:
              authenticity, meaning, and real human connection.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== RETURN HOME ===== */}
      <section className="py-36 bg-[#e9f2f1]">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <span className="text-sm tracking-widest text-[#8B5E3C]">
              | 04 |
            </span>

            <h2 className="text-4xl font-serif mt-6 mb-10 text-[#3E2A1A]">
              The Return Home
            </h2>

            <p className="text-lg text-[#5E4B3A] leading-relaxed mb-6">
              During the COVID pandemic, everything stopped. I returned to my
              hometown and found the garden abandoned, the house unused, and
              nature waiting.
            </p>

            <p className="text-lg text-[#5E4B3A] leading-relaxed">
              For three years, I worked with my hands and heart — renewing the
              garden, renovating the house, caring for animals, living simply,
              and reconnecting with the land. This home was renewed with my
              energy, my vision, and my love.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== EXPERIENCE CARDS ===== */}
      <section className="py-36 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-sm tracking-widest text-[#8B5E3C]">
              | 05 |
            </span>

            <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-20 text-[#3E2A1A]">
              Luxury with Soul
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-14">
            {[
              {
                icon: Leaf,
                title: "Slow & Meaningful Travel",
                text: "Designed for long stays, cultural immersion, and real connection.",
              },
              {
                icon: Mountain,
                title: "Rooted in Nature",
                text: "Dadès Gorge, Roses Valley, rivers, kasbahs, and mountains.",
              },
              {
                icon: Heart,
                title: "A Home Shared with Love",
                text: "Not a hotel — a living home where moments are shared.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 120}>
                <div className="bg-white p-10 rounded-3xl shadow-xl">
                  <item.icon
                    size={48}
                    strokeWidth={1.25}
                    className="text-[#8B5E3C] mb-6 mx-auto"
                  />

                  <h3 className="text-2xl mb-3 text-[#3E2A1A]">
                    {item.title}
                  </h3>

                  <p className="text-[#6B5A44]">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        className="relative py-36 text-center text-white"
        style={{
          backgroundImage: "url(/images/pic2.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <FadeIn>
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-5xl font-serif mb-10">
              Welcome Home
            </h2>

            <p className="text-lg mb-12 leading-relaxed">
              This is my grandfather’s land. My father’s home. My life’s energy.
              And now — you are welcome to live it with us.
            </p>

            <a
              href="https://www.booking.com/hotel/ma/ecolodge-aroma-dades.fr.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-16 py-4 bg-[#f2f0bf] text-[#3E2A1A] rounded-full font-semibold hover:scale-105 transition"
            >
              Reserve Your Stay
            </a>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
};

export default About;
