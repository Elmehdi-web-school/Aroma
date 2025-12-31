import Header from "../components/Header";
import Hero from "../components/Hero";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* ===== HERO + HEADER (Shared Background) ===== */}
      <Landing>
        <Header />
        <Hero />
      </Landing>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section id="about" className="py-24 px-6 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Expériences Uniques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Nature Authentique",
                desc: "Plongez dans la beauté sauvage et préservée de la vallée des Dades.",
                icon: "🌿",
              },
              {
                title: "Culture Berbère",
                desc: "Une immersion dans les traditions locales et l’hospitalité marocaine.",
                icon: "🏺",
              },
              {
                title: "Sérénité Absolue",
                desc: "Un lieu paisible pour se reconnecter à l’essentiel.",
                icon: "🌙",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100 text-3xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT / IMAGE + TEXT ===== */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Découvrez Aroma Dades
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Niché au cœur de la vallée des Dades, Aroma Dades est un écolodge
              conçu pour offrir une expérience authentique mêlant nature,
              confort et traditions berbères.
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              En savoir plus
            </Link>
          </div>

          {/* Image Frame Placeholder */}
          <div className="w-full h-80 bg-white border border-gray-300 rounded-xl flex items-center justify-center text-gray-400">
            Image placeholder
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Galerie
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="h-64 bg-gray-100 border border-gray-300 rounded-xl flex items-center justify-center text-gray-400 hover:shadow-lg transition-all"
              >
                Image {i + 1}
              </div>
            ))}
          </div>

          <Link
            to="/gallery"
            className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Voir toute la galerie
          </Link>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="relative text-xl md:text-2xl italic text-gray-700 leading-relaxed mb-6">
            <span className="absolute -top-8 -left-4 text-6xl text-green-200">
              “
            </span>
            Un séjour inoubliable à Aroma Dades. Le calme, la beauté du paysage
            et l’accueil chaleureux rendent l’expérience magique.
          </blockquote>

          <cite className="font-semibold text-gray-900">
            — Marie & Jean, France
          </cite>
        </div>
      </section>

      {/* ===== BOOKING CTA ===== */}
      <section className="py-24 px-6 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt pour une aventure unique ?
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Réservez votre séjour et vivez une expérience authentique au cœur
            de la nature marocaine.
          </p>

          <button className="px-10 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Réserver maintenant
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
