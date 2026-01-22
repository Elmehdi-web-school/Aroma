import Header from "../components/Header";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import { Moon } from "lucide-react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      {/* ===== HERO ===== */}
    <Landing>
        <Header />

        <section className="relative py-20 md:py-40 flex items-center justify-center text-center">
        <FadeIn>
            <div className="relative z-10 max-w-5xl px-6 text-white">
            <span className="tracking-widest text-xl md:text-2xl md:font-bold">
                | BLOGS |
            </span>

            <h1 className="text-3xl md:text-7xl font-serif mt-6 text-amber-400">
                Stories & Experiences
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
                Nature, culture, slow travel & unique journeys in Morocco
            </p>
            </div>
        </FadeIn>
        </section>
    </Landing>

      {/* ===== BLOG LIST ===== */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <FadeIn>
            <div className="grid md:grid-cols-3 gap-12">

              {/* ===== BLOG CARD ===== */}
              <Link
                to="/full-moon-morocco-2026"
                target="_blank"
                className="group block"
              >
                <div className="bg-linear-to-b from-[#fbf7f1] via-[#f1ebe1] to-[#eef6f3] rounded-3xl overflow-hidden shadow-xl transition hover:-translate-y-2">
                  
                  {/* Image */}
                  <div
                    className="h-56 bg-cover bg-center"
                    style={{
                      backgroundImage: "url(/images/pic2.webp)",
                    }}
                  />

                  {/* Content */}
                  <div className="p-8 text-[#3E2A1A]">
                    <Moon
                      size={32}
                      strokeWidth={1.25}
                      className="text-amber-500 mb-4"
                    />

                    <h2 className="text-2xl font-serif mb-4 group-hover:underline">
                      Full-Moon Morocco 2026
                    </h2>

                    <p className="text-[#5E4B3A] mb-6">
                      A moonlit journey through canyons, valleys, nomadic caves
                      and the Sahara Desert — aligned with Morocco’s full moon
                      calendar.
                    </p>

                    <span className="font-semibold text-sm tracking-wide">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>

            </div>
          </FadeIn>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blogs;
