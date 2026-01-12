import Header from "../components/Header";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

import {
  Bird,
  Mountain,
  Droplets,
  Wind,
  Calendar,
  Leaf,
} from "lucide-react";

const Birds = () => {
  return (
    <>
      <Landing>
        <Header />

        {/* ===== HERO ===== */}
        <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center justify-center text-center">
          <FadeIn>
            <div className="relative z-10 max-w-4xl px-6 text-white">
              <span className="tracking-widest text-xl md:text-2xl md:font-bold">
                | BIRDS |
              </span>
              <h1 className="text-3xl md:text-7xl font-serif mt-6 text-amber-400">
                Vallée des Oiseaux
              </h1>
              <p className="mt-6 text-md md:text-lg text-white/90">
                Resident & Migratory Birds of Boumalne Dades
              </p>
            </div>
          </FadeIn>
        </section>
      </Landing>

      {/* ===== INTRODUCTION ===== */}
      <section className="py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-sm tracking-widest text-[#8B5E3C]">
              | 01 |
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-12 text-[#3E2A1A]">
              Birds of Boumalne Dades
            </h2>

            <p className="text-lg leading-relaxed text-[#5E4B3A]">
              The Vallée des Oiseaux (Valley of Birds) in Boumalne Dades,
              southeast Morocco, is a natural corridor where mountains,
              valleys, rivers, cliffs, caves, gorges, and desert plains meet.
              This diversity of landscapes makes the area one of the most
              important bird habitats in the High Atlas–Saghro transition zone.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-[#5E4B3A]">
              Birds here are either resident (living all year) or migratory
              (passing through seasonally), using the Dades Valley as a feeding,
              resting, or breeding ground.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== WHY IMPORTANT ===== */}
      <section className="py-36 bg-[#e9f2f1]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-sm tracking-widest text-[#8B5E3C]">
              | 02 |
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-20 text-[#3E2A1A]">
              Why Boumalne Dades Is Important for Birds
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-14">
            {[
              {
                icon: Wind,
                text: "Natural passage between Africa and Europe",
              },
              {
                icon: Droplets,
                text: "Presence of water sources (Dades River, oases)",
              },
              {
                icon: Mountain,
                text: "Rocky cliffs, gorges, and caves for nesting",
              },
              {
                icon: Bird,
                text: "Open plains and steppes for ground-dwelling species",
              },
              {
                icon: Leaf,
                text: "Low human disturbance in remote areas",
              },
              {
                icon: Calendar,
                text: "Seasonal migration routes used every year",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-white p-10 rounded-3xl shadow-xl">
                  <item.icon
                    size={42}
                    strokeWidth={1.25}
                    className="text-[#8B5E3C] mb-6 mx-auto"
                  />
                  <p className="text-[#5E4B3A] text-lg">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESIDENT BIRDS ===== */}
      <section className="py-36 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <span className="text-sm tracking-widest text-[#8B5E3C]">
              | 03 |
            </span>
            <h2 className="text-4xl font-serif mt-6 mb-12 text-[#3E2A1A]">
              Resident Birds (Present All Year)
            </h2>

            <p className="text-lg text-[#5E4B3A] mb-12 max-w-3xl">
              These birds live and breed permanently in the Dades Valley and
              surrounding landscapes, from gardens and villages to cliffs and
              desert plains.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-14">
            <FadeIn>
              <div>
                <h3 className="text-2xl font-serif mb-6 text-[#3E2A1A]">
                  Common Resident Species
                </h3>
                <ul className="space-y-2 text-[#5E4B3A]">
                  <li>House Sparrow</li>
                  <li>Desert Sparrow</li>
                  <li>Laughing Dove</li>
                  <li>Eurasian Collared Dove</li>
                  <li>Rock Dove (Wild Pigeon)</li>
                  <li>Common Bulbul</li>
                  <li>Hoopoe</li>
                  <li>Eurasian Magpie</li>
                  <li>Brown-necked Raven</li>
                  <li>Crested Lark</li>
                  <li>Thekla Lark</li>
                  <li>Trumpeter Finch</li>
                  <li>Chukar Partridge</li>
                  <li>Little Owl</li>
                  <li>Eurasian Eagle-Owl</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h3 className="text-2xl font-serif mb-6 text-[#3E2A1A]">
                  Desert & Steppe Residents
                </h3>
                <ul className="space-y-2 text-[#5E4B3A]">
                  <li>Thick-billed Lark</li>
                  <li>Greater Hoopoe-Lark</li>
                  <li>Cream-colored Courser</li>
                  <li>Black-bellied Sandgrouse</li>
                  <li>Pin-tailed Sandgrouse</li>
                  <li>Crowned Sandgrouse</li>
                  <li>Desert Wheatear</li>
                  <li>Red-rumped Wheatear</li>
                  <li>Mourning Wheatear</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== MIGRATORY BIRDS ===== */}
      <section className="py-36 bg-[#e9f2f1]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <span className="text-sm tracking-widest text-[#8B5E3C]">
              | 04 |
            </span>
            <h2 className="text-4xl font-serif mt-6 mb-12 text-[#3E2A1A]">
              Migratory Birds
            </h2>

            <p className="text-lg text-[#5E4B3A] mb-12 max-w-3xl">
              Boumalne Dades lies on an important migration route, especially
              during spring and autumn, making it one of the best birdwatching
              locations in southeast Morocco.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-14">
            <FadeIn>
              <div>
                <h3 className="text-2xl font-serif mb-6 text-[#3E2A1A]">
                  Spring Migrants (March – May)
                </h3>
                <ul className="space-y-2 text-[#5E4B3A]">
                  <li>European Bee-eater</li>
                  <li>European Roller</li>
                  <li>Barn Swallow</li>
                  <li>House Martin</li>
                  <li>Common Swift</li>
                  <li>Alpine Swift</li>
                  <li>Subalpine Warbler</li>
                  <li>Whitethroat</li>
                  <li>Willow Warbler</li>
                  <li>Nightingale</li>
                  <li>Spotted Flycatcher</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h3 className="text-2xl font-serif mb-6 text-[#3E2A1A]">
                  Autumn Migrants (September – November)
                </h3>
                <ul className="space-y-2 text-[#5E4B3A]">
                  <li>Yellow Wagtail</li>
                  <li>Redstart</li>
                  <li>Pied Flycatcher</li>
                  <li>Garden Warbler</li>
                  <li>Marsh Harrier</li>
                  <li>Hen Harrier</li>
                  <li>Osprey</li>
                  <li>Various raptors and passerines</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== SEASONS ===== */}
      <section className="py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-sm tracking-widest text-[#8B5E3C]">
              | 05 |
            </span>
            <h2 className="text-4xl font-serif mt-6 mb-12 text-[#3E2A1A]">
              Bird Seasons in Vallée des Oiseaux
            </h2>

            <p className="text-lg text-[#5E4B3A]">
              The Vallée des Oiseaux is not just a place — it is a living
              ecosystem that deserves protection and respect.
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Birds;
