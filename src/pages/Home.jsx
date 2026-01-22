import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import { UtensilsCrossed, Flame, Mountain } from "lucide-react";

import {
  Bike,
  CookingPot,
  Landmark,
  Compass
} from "lucide-react";

import {
  Footprints,
} from "lucide-react";

import {
  Bus,
  ParkingCircle,
  Ban,
  Utensils,
  Accessibility,
  ConciergeBell,
  Wifi,
  Users,
  Coffee,
} from "lucide-react";
import { Link } from "react-router-dom";

const cuisineImages = [
  "/images/pic10.webp",
  "/images/pic11.webp",
  "/images/pic12.webp",
  "/images/pic13.webp",
  "/images/pic14.webp",
];

const detenteImages = [
  "/images/pic18.webp",
  "/images/pic19.webp",
  "/images/pic20.webp",
];

const excursionImages = [
  "/images/pic15.webp",
  "/images/pic16.webp",
  "/images/pic17.webp",
];



/* ===== DATA ===== */
const rooms = ["/images/room1.webp","/images/room2.webp","/images/room3.webp","/images/room4.webp","/images/room5.webp"];
const gallery = ["/images/pic1.webp","/images/pic2.webp","/images/pic3.webp","/images/pic4.webp","/images/pic5.webp","/images/pic6.webp"];

const reviews = [
  { text: "A magical place, absolute calm and exceptional hospitality.", author: "Marie – France", rating: "★★★★★ 9,1/10" },
  { text: "Incredible view of the valley, magnificent rooms.", author: "Lucas – Belgium", rating: "★★★★★ 9,3/10" },
  { text: "An authentic and unforgettable Berber experience.", author: "Anna – Germany", rating: "★★★★★ 9,2/10" },
];

const activities = [
  {
    icon: Mountain,
    title: "Hiking",
    text: "Explore the natural trails of the Dades Valley with spectacular views.",
  },
  {
    icon: Bike,
    title: "Biking",
    text: "Discover the villages and surrounding landscapes at your own pace.",
  },
  {
    icon: CookingPot,
    title: "Cooking Classes",
    text: "Learn to prepare traditional Moroccan dishes with our chefs.",
  },
  {
    icon: Flame,
    title: "Evening Gatherings",
    text: "Music, campfire and Berber atmosphere under the stars.",
  },
  {
    icon: Landmark,
    title: "Local culture",
    text: "Immersion in local traditions, crafts and life.",
  },
  {
    icon: Compass,
    title: "Excursions",
    text: "Organized outings outside the institution to unique sites.",
  },
  {
    icon: Bike,
    title: "Bike Rentals",
    text: "Bicycles available on site to explore the region. Additional charge applies.",
  },
  {
    icon: Bike,
    title: "Cycling Tours",
    text: "Guided cycling circuits to discover the surroundings. Additional charge applies.",
  },
  {
    icon: Footprints,
    title: "Hiking Tours",
    text: "Guided walks through landscapes and local villages. Additional charge applies.",
  },
];


const Home = () => {
  const [cuisineIndex, setCuisineIndex] = useState(0);
  const [detenteIndex, setDetenteIndex] = useState(0);
  const [excursionIndex, setExcursionIndex] = useState(0);
  const [roomIndex, setRoomIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [activityIndex, setActivityIndex] = useState(0);

  useEffect(() => {
    const c = setInterval(() => setCuisineIndex(i => (i + 1) % cuisineImages.length), 4000);
    const d = setInterval(() => setDetenteIndex(i => (i + 1) % detenteImages.length), 4000);
    const e = setInterval(() => setExcursionIndex(i => (i + 1) % excursionImages.length), 4000);
    const a = setInterval(() => setActivityIndex(i => (i + 1) % activities.length), 3000);
    const r = setInterval(() => setRoomIndex(i => (i + 1) % rooms.length), 5000);
    const g = setInterval(() => setGalleryIndex(i => (i + 1) % gallery.length), 4000);
    const v = setInterval(() => setReviewIndex(i => (i + 1) % reviews.length), 5000);
    // return () => { clearInterval(a); clearInterval(r); clearInterval(g); clearInterval(v); };

    return () => {
      clearInterval(a);
      clearInterval(r);
      clearInterval(g);
      clearInterval(v);
      clearInterval(c);
      clearInterval(d);
      clearInterval(e);
    };

  }, []);

  return (
    <>
      <Landing>
        <Header />
        <Hero />
      </Landing>

      {/* ===== 01 EXPERIENCES ===== */}

      <Section title="Unique Experiences" number="01">
        {[
          ["🌿","Nature preserved","Wild landscapes of the Dades Valley"],
          ["🏺","Berber culture","Architecture and local traditions"],
          ["🌙","Absolute calm","A refuge far from modern life"],
        ].map((i,idx)=>(
          <FadeIn><Card key={idx} icon={i[0]} title={i[1]} text={i[2]} hover /></FadeIn>
        ))}
      </Section>

      {/* ===== 02 SERVICES ===== */}
<section className="py-36 bg-white overflow-hidden">
  <FadeIn>
    <span className="text-sm tracking-widest block text-center">| 02 |</span>
    <h2 className="text-5xl font-serif mt-6 mb-32 text-center">
      Our services
    </h2>
  </FadeIn>

  <div className="space-y-20 md:space-y-44 max-w-7xl mx-auto px-6">

    {/* === CUISINE LOCALE === */}
    <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
      {/* TEXT */}
      <FadeIn>
      <div className="relative z-10 md:mb-32">
        <div className="mb-8">
          <UtensilsCrossed
            size={54}
            strokeWidth={1.25}
            className="text-[#d6caa1]"
          />
        </div>

        <h3 className="text-4xl font-serif mb-6">Local cuisine</h3>
        <p className="text-lg text-gray-700 leading-relaxed max-w-md">
          Fresh, locally sourced produce, cooked daily according to traditional recipes passed down from generation to generation.
        </p>
      </div>
      </FadeIn>

      {/* IMAGE SLIDER */}
      <FadeIn>
      <div className="relative">
        <div className="absolute -inset-6 bg-white/60 rounded-md -z-10" />
        <img
          src={cuisineImages[cuisineIndex]}
          className="w-full h-80 md:h-105 object-cover rounded-md"
          loading="lazy"
          decoding="async"
        />
        <SliderButtons
          prev={() =>
            setCuisineIndex(i => (i - 1 + cuisineImages.length) % cuisineImages.length)
          }
          next={() =>
            setCuisineIndex(i => (i + 1) % cuisineImages.length)
          }
        />
      </div>
      </FadeIn>
    </div>

    {/* === ESPACES DÉTENTE (REVERSED) === */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 items-center">

  {/* TEXT — mobile first, desktop right */}
  <FadeIn className="order-1 md:order-2 md:col-start-2">
    <div className="relative z-10 md:mb-32">
      <Flame size={56} strokeWidth={1.25} className="text-[#d6caa1] mb-8" />
      <h3 className="text-4xl font-serif mb-6">Relaxation areas</h3>
      <p className="text-lg text-gray-700 leading-relaxed max-w-md">
        Enjoy panoramic terraces, cozy lounges and campfires for moments of absolute calm under the starry sky.
      </p>
    </div>
  </FadeIn>

  {/* IMAGE — mobile second, desktop left */}
  <FadeIn className="order-2 md:order-1 md:col-start-1">
    <div className="relative">
      <div className="absolute -inset-6 bg-white/60 rounded-md -z-10" />
      <img
        src={detenteImages[detenteIndex]}
        className="w-full h-80 md:h-105 object-cover rounded-md"
        loading="lazy"
        decoding="async"
      />
      <SliderButtons
        prev={() =>
          setDetenteIndex(i => (i - 1 + detenteImages.length) % detenteImages.length)
        }
        next={() =>
          setDetenteIndex(i => (i + 1) % detenteImages.length)
        }
      />
    </div>
  </FadeIn>

</div>






    {/* === EXCURSIONS === */}
    <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
      {/* TEXT */}
      <FadeIn>
      <div className="relative z-10 md:mb-32">
        <Mountain
          size={56}
          strokeWidth={1.25}
          className="text-[#d6caa1] mb-8"
        />

        <h3 className="text-4xl font-serif mb-6">Excursions</h3>
        <p className="text-lg text-gray-700 leading-relaxed max-w-md">
          Guided tours to explore the stunning landscapes, local villages, and cultural heritage of the Dades Valley and surrounding areas.
        </p>
      </div>
      </FadeIn>

      {/* IMAGE SLIDER */}
      <FadeIn>
      <div className="relative">
        <div className="absolute -inset-6 bg-white/60 rounded-md -z-10" />
        <img
          src={excursionImages[excursionIndex]}
          className="w-full h-80 md:h-105 object-cover rounded-md"
          loading="lazy"
          decoding="async"
        />
        <SliderButtons
          prev={() =>
            setExcursionIndex(i => (i - 1 + excursionImages.length) % excursionImages.length)
          }
          next={() =>
            setExcursionIndex(i => (i + 1) % excursionImages.length)
          }
        />
      </div>
      </FadeIn>
    </div>

  </div>
</section>



      {/* ===== 04 ACTIVITÉS ===== */}
      <section className="py-36 mb-32 bg-[#1f1f1f] text-white relative">
        <FadeIn>
          <span className="text-sm tracking-widest block text-center text-[#d6caa1]">
            | 03 |
          </span>
          <h2 className="text-5xl font-serif mt-6 mb-20 text-center">
            Activities
          </h2>
        </FadeIn>

        <div className="relative max-w-7xl mx-auto px-6">
        
          {/* ===== DESKTOP GRID (NO SLIDE EVER) ===== */}
          <div className="hidden md:grid grid-cols-3 mb-10 gap-px bg-white/10">
            {activities.map((a, idx) => (
              <div
                key={idx}
                className={`
                  bg-[#1f1f1f] p-10 min-h-65 flex flex-col
                  
                `}
              >

              <a.icon
                size={48}
                strokeWidth={1.25}
                className="text-[#d6caa1] mb-6"
              />

              <h3 className="text-xl font-serif mb-4">
                {a.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {a.text}
              </p>
            </div>
          ))}
        </div>

    {/* ===== MOBILE SLIDER ONLY ===== */}
<div className="md:hidden overflow-hidden">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${activityIndex * 100}%)`,
    }}
  >
    {activities.map((a, idx) => (
      <div
        key={idx}
        className="w-full shrink-0 bg-[#1f1f1f] p-10 min-h-65 text-center"
      >
        <a.icon
          size={48}
          strokeWidth={1.25}
          className="text-[#d6caa1] mx-auto mb-6"
        />

        <h3 className="text-xl font-serif mb-4">
          {a.title}
        </h3>

        <p className="text-sm text-gray-300 leading-relaxed">
          {a.text}
        </p>
      </div>
    ))}
  </div>

  
  

  {/* MOBILE ARROWS */}
  <div className="flex justify-between">
    <button
      onClick={() =>
        setActivityIndex(
          (i) => (i - 1 + activities.length) % activities.length
        )
      }
      className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center"
    >
      ‹
    </button>

    <button
      onClick={() =>
        setActivityIndex(
          (i) => (i + 1) % activities.length
        )
      }
      className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center"
    >
      ›
    </button>
  </div>

</div>


  </div>
  <div className="mt-20">
    <Link
      to="/activities"
      className="p-5 ml-[33%] md:ml-[45%] text-center border border-white rounded-full text-white hover:bg-[#d6caa1] hover:text-black font-bold transition"
    >
      View details
    </Link>
  </div>
</section>



      {/* ===== 05 CHAMBRES ===== */}
      <FadeIn>
      <ImageSlider title="Nos chambres" number="04" src={rooms[roomIndex]} onPrev={()=>setRoomIndex(i=>(i-1+rooms.length)%rooms.length)} onNext={()=>setRoomIndex(i=>(i+1)%rooms.length)} />
      </FadeIn>

      {/* ===== 03 ÉQUIPEMENTS ===== */}
      <section className="py-36 bg-white text-center">
      <FadeIn>
        <span className="text-sm tracking-widest">| 05 |</span>
        <h2 className="text-5xl font-serif mt-6 mb-20">
          Equipments
        </h2>
      </FadeIn>

  <div className="grid grid-cols-2 md:grid-cols-5 gap-10 max-w-6xl mx-auto px-6 text-sm text-start">
    {[
      { icon: <Bus size={22} />, label: "Airport shuttle" },
      { icon: <ParkingCircle size={22} />, label: "Free parking" },
      { icon: <Ban size={22} />, label: "Non-smoking rooms" },
      { icon: <Utensils size={22} />, label: "Restaurant" },
      { icon: <Accessibility size={22} />, label: "Accès PMR" },
      { icon: <ConciergeBell size={22} />, label: "Room service" },
      { icon: <Wifi size={22} />, label: "Free Wi-Fi" },
      { icon: <Users size={22} />, label: "Family rooms" },
      { icon: <Coffee size={22} />, label: "Breakfast" },
    ].map((item, idx) => (
      <div
        key={idx}
        className="flex items-center gap-3 justify-center"
      >
        <span className="text-green-600">{item.icon}</span>
        <span>{item.label}</span>
      </div>
    ))}
  </div>
</section>


      {/* ===== 06 GALERIE ===== */}
      <FadeIn>
        <ImageSlider title="Gallerie" number="06" src={gallery[galleryIndex]} onPrev={()=>setGalleryIndex(i=>(i-1+gallery.length)%gallery.length)} onNext={()=>setGalleryIndex(i=>(i+1)%gallery.length)} />
      </FadeIn>

      {/* ===== 07 AVIS ===== */}
      <section className="py-36 bg-white text-center relative">
        <FadeIn>
          <span className="text-sm tracking-widest">| 07 |</span>
          <h2 className="text-5xl font-serif mt-6 mb-20">Traveler Reviews</h2>
        </FadeIn>

        <div className="flex justify-center gap-10 max-w-6xl mx-auto px-6 flex-col md:flex-row">

          {[-1,0,1].map((offset, i)=>{
            console.log(i);
            if (window.innerWidth < 768 && offset !== 0) return null;
            const idx = (reviewIndex + offset + reviews.length) % reviews.length;
            return (
              <div key={idx} className={`max-w-sm transition ${offset===0?"opacity-100 scale-105":"opacity-40"}`}>
                <p className="italic mb-4">“ {reviews[idx].text} ”</p>
                <p>{reviews[idx].author}</p>
                <p className="text-sm">{reviews[idx].rating}</p>
              </div>
            );
          })}
        </div>

        <SliderButtons0
          prev={()=>setReviewIndex(i=>(i-1+reviews.length)%reviews.length)}
          next={()=>setReviewIndex(i=>(i+1)%reviews.length)}
        />
      </section>

      <Footer />
    </>
  );
};

/* ===== REUSABLE ===== */
const Section = ({title, text, number,bg,children})=>(
  <section className={`py-28 ${bg?"bg-[#E6E2D8]":"bg-white"} text-center`}>
    <FadeIn>
      <span className="text-sm tracking-widest">| {number} |</span>
      <h2 className="text-3xl md:text-5xl font-serif mt-6 mb-20">{title}</h2>
      <p className="text-2xl font-serif mt-6 mb-20">{text}</p>
    </FadeIn>
    <div className="grid md:grid-cols-3 gap-14 max-w-6xl mx-auto px-6">
      {children}
    </div>
  </section>
);

const Card = ({icon,title,text,hover})=>(
  <div className={`p-10 border rounded-3xl h-full flex flex-col justify-center bg-white
    ${hover && "transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"}`}>
    <div className="text-4xl mb-6">{icon}</div>
    <h3 className="text-xl mb-2">{title}</h3>
    {text && <p>{text}</p>}
  </div>
);

const ImageSlider = ({title,number,src,onPrev,onNext})=>(
  <section className="py-12 md:py-28 text-center bg-[#e9f2f1]">
    <FadeIn>
      <span className="text-sm tracking-widest">| {number} |</span>
      <h2 className="text-5xl font-serif mt-6 mb-16">{title}</h2>
    </FadeIn>
    <div className="relative max-w-6xl mx-auto">
      <img src={src} className="w-[80%] h-80 md:h-130 object-cover mx-auto" loading="lazy" decoding="async" />
      <SliderButtons prev={onPrev} next={onNext}/>
    </div>
  </section>
);

const SliderButtons = ({ prev, next }) => (
  <>
    <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full">‹</button>
    <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full">›</button>
  </>
);

const SliderButtons0 = ({ prev, next }) => (
  <>
    <button onClick={prev} className="absolute left-32 top-[88%] md:top-[65%] -translate-y-1/2 w-12 h-12 border border-black bg-white/80 rounded-full">‹</button>
    <button onClick={next} className="absolute right-32 top-[88%] md:top-[65%] -translate-y-1/2 w-12 h-12 border border-black bg-white/80 rounded-full">›</button>
  </>
);

const SliderButtons1 = ({ prev, next }) => (
  <>
    <div className="pt-10 flex items-center justify-center gap-6">
      <button onClick={prev} className="-translate-y-1/2 w-12 h-12 border border-black bg-white/80 rounded-full">‹</button>
      <button onClick={next} className="-translate-y-1/2 w-12 h-12 border border-black bg-white/80 rounded-full">›</button>
    </div>
  </>
);

export default Home;
