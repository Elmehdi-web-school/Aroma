import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

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
  Croissant
} from "lucide-react";

/* ===== DATA ===== */
const rooms = ["/images/room1.jpg","/images/room2.jpg","/images/room3.jpg","/images/room4.jpg","/images/room5.jpg"];
const gallery = ["/images/pic1.jpg","/images/pic2.jpg","/images/pic3.jpg","/images/pic4.jpg","/images/pic5.jpg","/images/pic6.jpg"];

const reviews = [
  { text: "Un lieu magique, calme absolu et accueil exceptionnel.", author: "Marie – France", rating: "★★★★★ 9,1/10" },
  { text: "Vue incroyable sur la vallée, chambres magnifiques.", author: "Lucas – Belgique", rating: "★★★★★ 9,3/10" },
  { text: "Une expérience berbère authentique et inoubliable.", author: "Anna – Allemagne", rating: "★★★★★ 9,2/10" },
];

const activities = [
  { icon: "🥾", title: "Randonnée", note: "En supplément" },
  { icon: "🚴‍♂️", title: "Balades à vélo", note: "En supplément" },
  { icon: "👨‍🍳", title: "Cours de cuisine", note: "En supplément" },
  { icon: "🔥", title: "Soirées traditionnelles" },
  { icon: "🏺", title: "Culture locale", note: "Visites guidées" },
  { icon: "🌄", title: "Excursions", note: "Hors établissement" },
];

const Home = () => {
  const [roomIndex, setRoomIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [activityIndex, setActivityIndex] = useState(0);

  useEffect(() => {
    const a = setInterval(() => setActivityIndex(i => (i + 1) % activities.length), 3000);
    const r = setInterval(() => setRoomIndex(i => (i + 1) % rooms.length), 5000);
    const g = setInterval(() => setGalleryIndex(i => (i + 1) % gallery.length), 4000);
    const v = setInterval(() => setReviewIndex(i => (i + 1) % reviews.length), 5000);
    return () => { clearInterval(a); clearInterval(r); clearInterval(g); clearInterval(v); };
  }, []);

  return (
    <>
      <Landing>
        <Header />
        <Hero />
      </Landing>

      {/* ===== 01 EXPERIENCES ===== */}
      <Section title="Expériences uniques" number="01">
        {[
          ["🌿","Nature préservée","Paysages sauvages de la vallée des Dades"],
          ["🏺","Culture berbère","Architecture et traditions locales"],
          ["🌙","Calme absolu","Un refuge loin du monde moderne"],
        ].map((i,idx)=>(
          <Card key={idx} icon={i[0]} title={i[1]} text={i[2]} hover />
        ))}
      </Section>

      {/* ===== 02 SERVICES ===== */}
      <Section title="Nos services" number="02" bg>
        {[
          ["🍽️","Cuisine locale", "Produits frais et recettes traditionnelles"],
          ["🔥","Espaces détente", "Terrasses, salons et feux de camp"],
          ["🥾","Excursions", "Randonnées et découvertes locales"],
        ].map((i,idx)=>(
          <Card key={idx} icon={i[0]} title={i[1]} text={i[2]} white />
        ))}
      </Section>

      {/* ===== 03 ÉQUIPEMENTS ===== */}
      <section className="py-36 bg-white text-center">
      <FadeIn>
        <span className="text-sm tracking-widest">| 03 |</span>
        <h2 className="text-5xl font-serif mt-6 mb-20">
          Équipements
        </h2>
      </FadeIn>

  <div className="grid grid-cols-2 md:grid-cols-5 gap-10 max-w-6xl mx-auto px-6 text-sm text-start">
    {[
      { icon: <Bus size={22} />, label: "Navette aéroport" },
      { icon: <ParkingCircle size={22} />, label: "Parking gratuit" },
      { icon: <Ban size={22} />, label: "Chambres non-fumeurs" },
      { icon: <Utensils size={22} />, label: "Restaurant" },
      { icon: <Accessibility size={22} />, label: "Accès PMR" },
      { icon: <ConciergeBell size={22} />, label: "Service d’étage" },
      { icon: <Wifi size={22} />, label: "Wi-Fi gratuit" },
      { icon: <Users size={22} />, label: "Chambres familiales" },
      { icon: <Coffee size={22} />, label: "Petit-déjeuner" },
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


      {/* ===== 04 ACTIVITÉS ===== */}
      <section className="py-36 bg-white text-center relative">
        <FadeIn>
          <span className="text-sm tracking-widest">| 04 |</span>
          <h2 className="text-5xl font-serif mt-6 mb-20">Activités</h2>
        </FadeIn>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[0,1,2].map((offset, i)=>{
              if (window.innerWidth < 768 && i > 0) return null;
              const idx = (activityIndex + offset) % activities.length;
              const a = activities[idx];
              return (
                <div key={idx} className="bg-white p-10 rounded-3xl shadow-lg h-full">
                  <div className="text-4xl mb-6">{a.icon}</div>
                  <h3 className="text-xl">{a.title}</h3>
                  {a.note && <p className="text-sm mt-2">{a.note}</p>}
                </div>
              );
            })}
          </div>
          <SliderButtons1
            prev={()=>setActivityIndex(i=>(i-1+activities.length)%activities.length)}
            next={()=>setActivityIndex(i=>(i+1)%activities.length)}
          />
        </div>
      </section>

      {/* ===== 05 CHAMBRES ===== */}
      <ImageSlider title="Nos chambres" number="05" src={rooms[roomIndex]} onPrev={()=>setRoomIndex(i=>(i-1+rooms.length)%rooms.length)} onNext={()=>setRoomIndex(i=>(i+1)%rooms.length)} />

      {/* ===== 06 GALERIE ===== */}
      <ImageSlider title="Galerie" number="06" src={gallery[galleryIndex]} onPrev={()=>setGalleryIndex(i=>(i-1+gallery.length)%gallery.length)} onNext={()=>setGalleryIndex(i=>(i+1)%gallery.length)} />

      {/* ===== 07 AVIS ===== */}
      <section className="py-36 bg-white text-center relative">
        <FadeIn>
          <span className="text-sm tracking-widest">| 07 |</span>
          <h2 className="text-5xl font-serif mt-6 mb-20">Avis des voyageurs</h2>
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
  <section className={`py-28 ${bg?"bg-[#f2f0bf]":"bg-white"} text-center`}>
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
  <section className="py-12 md:py-28 text-center bg-[#f2f0bf]">
    <FadeIn>
      <span className="text-sm tracking-widest">| {number} |</span>
      <h2 className="text-5xl font-serif mt-6 mb-16">{title}</h2>
    </FadeIn>
    <div className="relative max-w-6xl mx-auto">
      <img src={src} className="w-[80%] h-80 md:h-130 object-cover mx-auto" />
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
