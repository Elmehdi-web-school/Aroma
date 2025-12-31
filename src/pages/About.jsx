import Header from "../components/Header";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

const About = () => {
  return (
    <>
      <Landing>
        <Header />
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center text-center"
      >
        <FadeIn>
          <div className="relative z-10 max-w-4xl px-6 text-white">
            <span className="tracking-widest text-sm">| À PROPOS |</span>
            <h1 className="text-5xl md:text-6xl font-serif mt-6 text-amber-400">
              Ecolodge Aroma Dades
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Une expérience authentique au cœur de la vallée des Dades
            </p>
          </div>
        </FadeIn>
      </section>
      </Landing>


      {/* ===== PRESENTATION ===== */}
      <section className="py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-sm tracking-widest text-[#8B5E3C]">| 01 |</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-12 text-[#3E2A1A]">
              Un lieu hors du temps
            </h2>

            <p className="text-lg leading-relaxed text-[#5E4B3A]">
              Situé à El Hart, au cœur de la vallée des Dades et de la vallée des
              Roses, l’Ecolodge Aroma Dades est un havre de paix entouré de
              montagnes, de jardins et de traditions berbères. L’établissement
              dispose d’un jardin luxuriant, d’un salon commun, d’une terrasse
              panoramique et d’un restaurant proposant une cuisine locale
              authentique.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section className="py-36 bg-[#f2f0bf]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-sm tracking-widest text-[#8B5E3C]">| 02 |</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-20 text-[#3E2A1A]">
              L’expérience Aroma Dades
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-14">
            {[
              [
                "🌿",
                "Éco-tourisme",
                "Permaculture, durabilité et respect de la nature",
              ],
              [
                "🥘",
                "Culture & partage",
                "Cours de cuisine, ateliers et échanges culturels",
              ],
              [
                "🏔️",
                "Nature & calme",
                "Randonnées, méditation et paysages grandioses",
              ],
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 120}>
                <div className="bg-white p-10 rounded-3xl shadow-xl">
                  <div className="text-5xl mb-6">{item[0]}</div>
                  <h3 className="text-2xl mb-3 text-[#3E2A1A]">
                    {item[1]}
                  </h3>
                  <p className="text-[#6B5A44]">{item[2]}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDER STORY ===== */}
      <section className="py-36 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <img
              src="/images/pic6.jpg"
              className="rounded-3xl shadow-2xl object-cover"
              alt="Anir Aroma Dades"
            />
          </FadeIn>

          <FadeIn>
            <span className="text-sm tracking-widest text-[#8B5E3C]">| 03 |</span>
            <h2 className="text-4xl font-serif mt-6 mb-8 text-[#3E2A1A]">
              Votre hôte Anir Bastos / Abderrahmane Oukajji
            </h2>

            <p className="text-[#5E4B3A] leading-relaxed mb-6">
              Je m’appelle Anir, hôte passionné né et élevé dans la vallée des
              Dades. Dès mon plus jeune âge, j’ai développé un lien profond avec
              la terre, le jardinage et la vie locale. Après des études en
              management du tourisme et plus de dix ans d’expérience comme tour
              opérateur, j’ai transformé notre maison familiale en un lieu
              d’accueil unique.
            </p>

            <p className="text-[#5E4B3A] leading-relaxed">
              Aroma Dades est né pendant le confinement, avec une vision claire :
              offrir une alternative au tourisme de masse, fondée sur
              l’authenticité, l’échange humain, la nature et le respect des
              animaux.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== LOCATION ===== */}
      <section className="py-36 bg-[#f2f0bf]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-sm tracking-widest text-[#8B5E3C]">| 04 |</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-12 text-[#3E2A1A]">
              Un emplacement exceptionnel
            </h2>

            <p className="text-lg leading-relaxed text-[#5E4B3A]">
              Située à Souk Elkhmis Dades, entre Kelaat M’Gouna et Boumalne Dades,
              notre maison d’hôtes offre une vue imprenable sur le Djbel Saghro et
              le mont M’Goune. Entourée de familles locales, de jardins et d’une
              nature préservée, elle promet calme, authenticité et sérénité.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== LANGUAGES ===== */}
      <section className="py-24 bg-white text-center">
        <FadeIn>
          <h3 className="text-2xl font-serif mb-6 text-[#3E2A1A]">
            Langues parlées
          </h3>
          <p className="text-[#6B5A44] text-lg">
            Arabe • Français • Anglais • Espagnol • Italien
          </p>
        </FadeIn>
      </section>

      {/* ===== CTA ===== */}
      <section
        className="relative py-36 text-center text-white"
        style={{
          backgroundImage: "url(/images/pic2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <FadeIn>
          <div className="relative z-10">
            <h2 className="text-5xl font-serif mb-10">
              Vivez l’expérience Aroma Dades
            </h2>
            <a
              href="https://www.booking.com/hotel/ma/ecolodge-aroma-dades.fr.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-16 py-4 bg-[#f2f0bf] text-[#3E2A1A] rounded-full font-semibold hover:scale-105 transition"
            >
              Réserver sur Booking.com
            </a>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
};

export default About;
