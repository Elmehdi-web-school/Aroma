import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Landing from "@/components/Landing";

/* ================= SECTION 1 CARDS ================= */
const sectionOneCards = [
  { id: "hiking", title: "Hiking Adventures", image: "/images/hiking.webp" },
  { id: "cycling", title: "Cycling Tours", image: "/images/cycling.webp" },
  { id: "cooking", title: "Cooking Class with Locals", image: "/images/cooking.webp" },
  { id: "trekking", title: "Trekking with Mules or Donkeys", image: "/images/trekking.webp" },
  { id: "daytrips", title: "Day Trips", image: "/images/daytrip.webp" },
  { id: "overnight", title: "Overnight Experiences", image: "/images/overnight.webp" },
  { id: "cultural", title: "Cultural Visit", image: "/images/pic15.webp" },
];

/* ================= SECTION 2 CARDS ================= */
const sectionTwoCards = [
  { id: "saghrou-overview", title: "Volcano Trek Overview", image: "/images/saghrou1.webp" },
  { id: "saghrou-day1", title: "Day 1 – Volcano Trek & Camping", image: "/images/saghrou2.webp" },
  { id: "saghrou-day2", title: "Day 2 – Villages & Return", image: "/images/saghrou3.webp" },
  { id: "saghrou-unique", title: "Why This Experience Is Unique", image: "/images/saghrou4.webp" },
];

/* ================= SECTION 3 CARDS ================= */
const sectionThreeCards = [
  {
    id: "nomadic-overview",
    title: "Nomadic Journey Overview",
    image: "/images/nomad1.webp",
  },
  {
    id: "nomadic-day1",
    title: "Day 1 – Hiking & Nomad Life",
    image: "/images/nomad2.webp",
  },
  {
    id: "nomadic-day2",
    title: "Day 2 – Mgoun Valleys & Roses Valley",
    image: "/images/nomad3.webp",
  },
  {
    id: "nomadic-included",
    title: "What’s Included & Why This Experience",
    image: "/images/nomad4.webp",
  },
];


export default function Activities() {
  const [openDetails, setOpenDetails] = useState(null);

  return (
    <>
      <Landing>
        <Header />

        {/* HERO */}
        <section className="py-20 md:py-40 flex items-center justify-center text-center">
          <FadeIn>
            <div className="max-w-5xl px-6 text-white">
              <span className="tracking-widest text-xl font-semibold">
                | ACTIVITIES |
              </span>
              <h1 className="text-4xl md:text-7xl font-serif mt-6 text-amber-400">
                Activities & Experiences
              </h1>
              <p className="mt-6 text-lg md:text-xl">
                Authentic nature, culture & nomadic adventures in Dades & Mgoun
              </p>
            </div>
          </FadeIn>
        </section>
      </Landing>

      {/* ================= SECTION 1 ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif text-center text-[#3E2A1A]">
              🌄 Dades Gorge – Mgoune Valleys – Djbel Saghrou
            </h2>
            <p className="text-center mt-4 text-lg text-[#6B5A44]">
              Nature, Culture & Amazigh Hospitality
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12 mt-20">
            {sectionOneCards.map(card => (
              <FadeIn key={card.id}>
                <div className="rounded-3xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover hover:scale-105 transition duration-700"
                    />
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-xl font-serif text-[#3E2A1A]">
                      {card.title}
                    </h3>
                    <button
                      onClick={() => setOpenDetails(card.id)}
                      className="mt-6 px-8 py-3 border border-[#3E2A1A] rounded-full text-[#3E2A1A] hover:bg-[#3E2A1A] hover:text-white transition"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="py-32 bg-[#FAF7F3]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif text-center text-[#3E2A1A]">
              🏜️ 2 Days / 1 Night – Djbel Saghrou Volcano Trek
            </h2>
            <p className="text-center mt-4 text-lg text-[#6B5A44]">
              Dades to Saghrou – Night Under the Stars
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12 mt-20">
            {sectionTwoCards.map(card => (
              <FadeIn key={card.id}>
                <div className="rounded-3xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover hover:scale-105 transition duration-700"
                    />
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-[17px] font-serif text-[#3E2A1A]">
                      {card.title}
                    </h3>
                    <button
                      onClick={() => setOpenDetails(card.id)}
                      className="mt-6 px-6 py-3 border border-[#3E2A1A] rounded-full text-[#3E2A1A] hover:bg-[#3E2A1A] hover:text-white transition"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif text-center text-[#3E2A1A]">
              🏕️ 2-Day Nomadic Journey in Dades Gorge & Mgoun Valley
            </h2>

            <p className="text-center mt-6 text-lg text-[#6B5A44]">
              Sleep Under the Stars | Hike Remote Valleys | Live with Nomads
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-12 mt-20">
            {sectionThreeCards.map((card) => (
              <FadeIn key={card.id}>
                <div className="rounded-3xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover hover:scale-105 transition duration-700"
                    />
                  </div>

                  <div className="p-8 text-center">
                    <h3 className="text-xl font-serif text-[#3E2A1A]">
                      {card.title}
                    </h3>

                    <button
                      onClick={() => setOpenDetails(card.id)}
                      className="mt-6 px-6 py-3 border border-[#3E2A1A] rounded-full text-[#3E2A1A] hover:bg-[#3E2A1A] hover:text-white transition"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      



      {openDetails && (
  <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6">
    <div className="bg-white max-w-5xl w-full rounded-3xl p-10 overflow-y-auto max-h-[90vh] relative text-black">

      <button
        onClick={() => setOpenDetails(null)}
        className="absolute top-6 right-6 text-3xl"
      >
        ×
      </button>

      {openDetails === "hiking" && (
        <>
          <h3 className="text-2xl font-serif mb-6">1️⃣ Hiking Adventures</h3>

          <p>🚶♂ Half Day  ( 300 Dhs / Person )</p>
          <p>• Distance: 6–8 km</p>
          <p>• Highlights: Canyoning, lush gardens, local villages, panoramic viewpoints.</p>
          <p>• Includes: Local guide, tea/Coffe break.</p>

          <br />

          <p>🚶♂ Full Day   ( 600 Dhs / Person )</p>
          <p>• Distance: 12–16 km</p>
          <p>• Highlights: Canyoning,Valley hikes, hidden gorges, village encounters.</p>
          <p>• Includes: Picnic lunch Riverside , Local guide, bottled water, Coffe/Tea</p>
        </>
      )}

      {openDetails === "cycling" && (
        <>
          <h3 className="text-2xl font-serif mb-6">2️⃣ Cycling Tours</h3>

          <p>🚴 Half Day Guided    ( 400 Dhs / Person )</p>
          <p>• Distance: 17–25 km</p>
          <p>• Highlights: Scenic roads through the gorge, Berber farmlands,</p>
          <p>• Includes: Bike, helmet , Guided Cycling Tours</p>

          <br />

          <p>🚴 Full Day Guided    ( 550 Dhs / Person )</p>
          <p>• Distance:30–45 km</p>
          <p>• Highlights: Remote valleys, kasbahs, Nomads , panoramic mountain roads.</p>
          <p>• Includes: Pincnic Lunch, Bike, helmet , Guided Cycling Tours</p>

          <br />

          <p>🚴 Self-Guided Rental   ( 300 Dhs /Day )</p>
          <p>• Distance: Flexible (maps provided)</p>
          <p>• Includes: Bike, helmet, route map, tips from locals.</p>
        </>
      )}

      {openDetails === "cooking" && (
        <>
          <h3 className="text-2xl font-serif mb-6">
            3️⃣ Cooking Class with Locals   ( 300 Dhs / Person )
          </h3>

          <p>🍲 Lunch or Dinner Experience</p>
          <p>• Highlights: Learn traditional Amazigh & Moroccan recipes</p>
          <p>• Includes: Market/garden ingredient collection, cooking with local family, meal in outdoor kitchen, Herbs & Tea Ceremory</p>
          <p>• Duration: 3–4 hours.</p>
        </>
      )}

      {openDetails === "trekking" && (
        <>
          <h3 className="text-2xl font-serif mb-6">
            4️⃣ Trekking with Mules or Donkeys
          </h3>

          <p>🐴 Half Day :  ( 400 Dhs / Person )</p>
          <p>• Distance: 5–8 km (3–4 hours)</p>
          <p>• Highlights: Gentle paths through farmland, Nomads Families, local villages.</p>
          <p>• Includes: Trekking Mukes/Donkeys , Guide</p>

          <br />

          <p>🐴 Full Day :  ( 600 Dhs / Person )</p>
          <p>• Distance: 12–15 km (6–7 hours)</p>
          <p>• Highlights: Mountain viewpoints, picnic stops, hidden valleys.</p>
          <p>• Includes: Trekking Mules/donkeys , guide, River picnic lunch, Local Guide.</p>
        </>
      )}

      {openDetails === "daytrips" && (
        <>
          <h3 className="text-2xl font-serif mb-6">5️⃣ Day Trips</h3>

          <p>🗻 Djebel Saghrou – Full Journey- :   ( 900 Dhs / Person )</p>
          <p>• Total Drive : 4 Hours</p>
          <p>• Highlights: hike at Volcanic mountains, nomadic herders, almond tree valleys.</p>
          <p>• Includes: Guided Hike , picnic lunch, cultural encounters.</p>

          <br />

          <p>🌸 M’goun Valley – Full Journey -   : ( 700 Dhs / Person )</p>
          <p>• Total Drive : 3 Hours</p>
          <p>• Highlights: Nomads families, Fertile valleys, pink clay kasbahs.</p>
          <p>• Includes: Trekking Mules/Donkeys, Village walk, tea with local family, Picnic Lunch, Local Guide</p>
        </>
      )}

      {openDetails === "overnight" && (
        <>
          <h3 className="text-2xl font-serif mb-6">
            6️⃣ Overnight Experiences :  ( 700 Dhs / Person )
          </h3>

          <p>🏕 With Nomad Family : (from 4 PM to 10 AM )</p>
          <p>• Highlights: Share stories around the fire, eat bread baked in the sand, learn about nomadic traditions.</p>
          <p>• Includes: Dinner, breakfast, sleeping mats/blankets, transport.</p>

          <br />

          <p>⛺ Outdoor Camping  ( 700 Dhs / Person )</p>
          <p>• Highlights: Sleep under a sky full of stars in the peaceful mountains.</p>
          <p>• Includes:  Dinner, Breakfast, Campfire dinner, tents, sleeping bags.</p>

          <br /><br />

          <p>• Unique Experience: 2-Hour Horse Trek in the Hidden Roses Valley – The Valley of a Thousand Kasbahs</p>
          <p>Exclusive Activity – Only in Roses Valley / Dades Gorge</p>

          <br />

          <p>
            Discover one of the most unique things to do in Roses Valley and Dades Gorge:
            a 2-hour horse trek into the secret landscapes of the Valley of a Thousand Kasbahs — a place hidden from the road and untouched by time.
          </p>

          <br />

          <p>
            Offered for the first time in this region, this experience allows travelers to explore the valley the way locals once did: on horseback, moving slowly through ancient trails, rose fields, and old Amazigh villages.
          </p>

          <p>
            Your adventure begins at our stables with a warm welcome and introduction to our gentle, mountain-trained horses.
          </p>

          <p>
            After a short briefing, you ride deep into the heart of the valley, following paths that cars cannot access.
          </p>

          <p>
            Although the Roses Valley is famous for its “1000 kasbahs,” visitors rarely see them — because they are inside the valley, only reachable by walking or riding.
          </p>

          <p>
            During the trek, you will discover abandoned kasbahs and historic ruins from caravan times ride through rose fields, orchards, small farms, and adobe villages explore the hidden side valleys between the High Atlas and the Anti-Atlas learn about Amazigh history, architecture, and life in the valley stop for photos in panoramic viewpoints unknown to most travelers
          </p>

          <br />

          <p>🌅 Sunset Trek:</p>
          <p>
            magical golden light, calm landscapes, and a tea break with a local family overlooking the valley as the sun goes down.
          </p>

          <br />

          <p>🌞 Daytime Trek:</p>
          <p>
            clear views of the mountains, perfect for photography and exploring kasbahs and valley life in daylight.
          </p>

          <p>
            The experience ends back at our stables with a relaxing cup of herbal tea in the garden — a peaceful moment to connect with nature, your horse, and the beauty of Roses Valley.
          </p>

          <p>
            Whether you choose the sunset ride or the daytime exploration, this horse trek is a signature activity that reveals the true soul of Roses Valley — a place you can only discover by going inside the valley, slowly, authentically, and guided by locals.
          </p>
        </>
      )}

      {openDetails === "cultural" && (
        <>
          <h3 className="text-2xl font-serif mb-6">
            7️⃣ Cultural Visit – Nomads, Local Families & Kasbahs ( 200 Dhs / Person )
          </h3>
        </>
      )}

      

      {openDetails === "nomadic-overview" && (
  <>
    <h3 className="text-2xl font-serif mb-6">
      🏕️ 2-Day Nomadic Journey in Dades Gorge & Mgoun Valley
    </h3>

    <p>Sleep Under the Stars | Hike Remote Valleys | Live with Nomads</p>
    <br />

    <p>📍 Location: Dades Gorge – Mgoun Valley – Agouti – Ameskar – Roses Valley</p>
    <p>⏰ Duration: 2 Days / 1 Night</p>
    <p>🏞️ Experience Style: Nomadic Life | Hiking | Nature | Off-Road Adventure | Cultural Immersion</p>
    <p>🥾 Activity Level: Moderate to Active</p>
    <p>🌟 Ideal For: Adventure travelers, photographers, cultural explorers, and nature lovers seeking real Moroccan experiences</p>
  </>
)}


      {openDetails === "nomadic-day1" && (
  <>
    <h3 className="text-2xl font-serif mb-6">
      🗓️ Day 1: Hike, Picnic & Nomad Life Under the Stars
    </h3>

    <p>
      After breakfast, we begin a scenic hike across Dades Gorge, where dramatic rock formations,
      mountain trails, and endless views of the High Atlas Mountains unfold before you.
    </p>

    <br />

    <p>🥾 Morning Adventure:</p>
    <p>• Guided 3-4 hour hike through hidden canyons, high plateaus, and panoramic ridge trails.</p>
    <p>• Discover wild herbs, nomadic paths, and natural wonders only locals know.</p>

    <br />

    <p>🍃 Picnic Lunch in Nature</p>
    <p>
      Enjoy a fresh, organic picnic lunch in a peaceful wild spot,
      surrounded by the silence of the mountains, birdsong, and open skies.
    </p>

    <br />

    <p>🏕️ Evening with Nomads</p>
    <p>
      Reach a remote nomadic camp deep in the wilderness. Meet a real Berber nomadic family,
      still living traditionally in tents and mountain caves, surrounded by their goats,
      sheep, donkeys, and dogs.
    </p>

    <p>• Share tea and stories by the fire</p>
    <p>• Help with preparing a Berber dinner</p>
    <p>• Sleep in a tent or cave, under starry skies (sleeping bags, tents & full setup provided)</p>

    <br />

    <p>
      🛖 This is a rare opportunity to live like a nomad—raw, beautiful, real.
    </p>
  </>
)}


      {openDetails === "nomadic-day2" && (
  <>
    <h3 className="text-2xl font-serif mb-6">
      🌄 Day 2: Sunrise, Off-Road Adventure & Hidden Gorges of Mgoun
    </h3>

    <p>
      Wake up to a breathtaking sunrise over the High Atlas Mountains and the sounds of animals stirring—
      the true rhythm of nomadic life.
    </p>

    <br />

    <p>Watch the nomads begin their day:</p>
    <p>• Collecting wood and water</p>
    <p>• Herding livestock across rocky trails</p>
    <p>• Living in complete harmony with nature</p>

    <br />

    <p>🚙 Off-Road to the Hidden Mgoun Valleys</p>
    <p>
      After a traditional breakfast, we hop in the 4x4 and begin our off-road expedition
      into the untouched valleys of Mgoun, a place still unknown to mass tourism.
    </p>

    <br />

    <p>🏞️ Agouti Gorge – Secret Hike & Picnic</p>
    <p>• Guided 2-hour nature walk through this hidden paradise</p>
    <p>• Picnic lunch by the Agouti River, where you can relax, take photos, and even dip your feet in the water</p>

    <br />

    <p>🏔️ Amejgag to Ameskar – Village Life & Tea Time</p>
    <p>• Share tea with locals in a remote Berber village</p>
    <p>• Experience the timeless beauty of terraced fields, ancient stone homes, and rose gardens</p>
    <p>• Learn about seasonal agriculture, local crafts, and mountain traditions</p>

    <br />

    <p>🌹 Roses Valley Sunset & Kasbah Views</p>
    <p>• Stop at the picturesque Kasbah Itran for breathtaking sunset views</p>
    <p>• Reflect on two unforgettable days before returning to your accommodation</p>
  </>
)}


      {openDetails === "nomadic-included" && (
  <>
    <h3 className="text-2xl font-serif mb-6">
      ✅ What’s Included & Why This Experience
    </h3>

    <p>• Professional local guide</p>
    <p>• All meals: 2 lunches, 1 dinner, 1 breakfast</p>
    <p>• Nomadic overnight setup (tent, sleeping bags, mats)</p>
    <p>• Cultural tea breaks with nomadic and local families</p>
    <p>• All transport (hiking, off-road vehicle)</p>
    <p>• Drinking water and snacks</p>

    <br />

    <p>🌟 Why This Experience?</p>
    <p>• Sleep under the stars with a real nomad family</p>
    <p>• Hike remote gorges and valleys few travelers reach</p>
    <p>• Connect deeply with Morocco’s Amazigh heritage</p>
    <p>• Support local and sustainable eco-tourism</p>
    <p>• Experience the untamed beauty of Mgoun Valley & Roses Valley</p>
  </>
)}


      {/* ================= SAGHROU OVERVIEW ================= */}


      {openDetails === "saghrou-overview" && (
        <>
          <h3 className="text-3xl font-serif mb-6">
            2 Days / 1 Night – Djbel Saghrou Volcano Trek & Camping Experience
          </h3>

          <p className="font-semibold">
            Dades to Saghrou 2-Day Trek & Night Under the Stars
          </p>

          <p className="mb-6">
            From Dades Gorge & Roses Valley – Camping Inside the Anti-Atlas Volcano
          </p>

          <p>
            Discover one of Morocco’s most magical landscapes on this unique 2-day
            adventure from Dades Gorge and the Roses Valley.
          </p>

          <p>
            Djbel Saghrou — the volcanic heart of the Anti-Atlas — is one of the last
            wild places in Morocco, home to dramatic rock formations, nomadic families,
            juniper forests, ancient trails, and mineral-rich mountains full of silence
            and energy.
          </p>

          <p>
            This experience is created by local expert guide Anir and his team, born and
            raised in the region, offering deep knowledge, storytelling, and cultural
            immersion you won’t find anywhere else.
          </p>
        </>
      )}

      {/* ================= DAY 1 ================= */}
      {openDetails === "saghrou-day1" && (
        <>
          <h3 className="text-3xl font-serif mb-6">
            🌄 Day 1: Dades Gorge → Juniper Artisans → Tizi n’Tazazert → Bab n’Ali → Volcano Camping
          </h3>

          <p>
            We begin the journey by picking you up from Dades Gorge or the Roses Valley.
          </p>

          <p>
            As we leave the green valleys behind, the landscapes shift dramatically —
            from the edge of the High Atlas into the raw, volcanic world of the
            Anti-Atlas mountains.
          </p>

          <br />

          <p className="font-semibold">✓ Stop 1 – Juniper Wood Artisans</p>
          <p>
            Our first stop is a hidden workshop where local craftsmen carve traditional
            juniper cups, found only in this part of Morocco.
          </p>
          <p>
            Their scent, colors, and handmade designs are a treasured symbol of Berber
            heritage.
          </p>

          <br />

          <p className="font-semibold">✓ Scenic Drive to Tizi n’Tazazert Pass</p>
          <p>
            We continue into the mountains, driving through ever-changing landscapes
            until we reach the high pass of Tizi n’Tazazert, one of the most spectacular
            viewpoints of the Anti-Atlas.
          </p>

          <p>
            Your guide Anir will share stories, geology, nomadic life, and the volcanic
            history of the region.
          </p>

          <br />

          <p className="font-semibold">✓ Start Hiking from Bab n’Ali</p>
          <p>
            We begin our hike from the legendary rock towers of Bab n’Ali, two giant
            formations that resemble a man and his wife with their children — a powerful
            symbol in local tradition.
          </p>

          <p>3–4 hours hike</p>

          <p>Along the way, we explore:</p>
          <ul className="list-disc pl-6">
            <li>ancient nomadic paths</li>
            <li>black lava fields</li>
            <li>volcanic rock formations</li>
            <li>hidden valleys</li>
            <li>natural silence and desert winds</li>
          </ul>

          <br />

          <p className="font-semibold">✓ Outdoor Picnic Lunch</p>
          <p>
            We enjoy a fresh outdoor picnic in the middle of nature, surrounded by
            cliffs, colors, and pure wilderness.
          </p>

          <br />

          <p className="font-semibold">
            ✓ Camping Inside the Volcano – Night With Nomads
          </p>
          <p>
            Before sunset, we reach our campsite in the middle of the Saghrou volcanic
            plateau, near a nomadic family living with their goats and sheep.
          </p>

          <p>A magical evening awaits:</p>
          <ul className="list-disc pl-6">
            <li>golden sunset over volcanic peaks</li>
            <li>traditional dinner prepared on fire</li>
            <li>stargazing with zero light pollution</li>
            <li>silence, energy, and connection with nature</li>
          </ul>

          <p>
            This night is pure Anti-Atlas magic, full of mineral energy and the mystery
            of ancient landscapes.
          </p>
        </>
      )}

      {/* ================= DAY 2 ================= */}
      {openDetails === "saghrou-day2" && (
        <>
          <h3 className="text-3xl font-serif mb-6">
            🌅 Day 2: Volcano → Ighazoun → Nkob Village → Saffron Fields → Return to Dades
          </h3>

          <p>
            We wake up to a calm morning, fresh air, and mountains glowing with sunrise
            colors.
          </p>

          <p className="font-semibold">✓ Breakfast in Nature</p>
          <p>Enjoy a peaceful breakfast before starting the day’s hike.</p>

          <p className="font-semibold">✓ Hike to Ighazoun Village (4 hours)</p>
          <p>
            We continue through open desert mountains toward Ighazoun, a small Berber
            village where time stands still.
          </p>

          <p>Your guide will explain:</p>
          <ul className="list-disc pl-6">
            <li>nomadic traditions</li>
            <li>volcanic geology</li>
            <li>medicinal plants</li>
            <li>seasonal migration routes</li>
          </ul>

          <p className="font-semibold">✓ Nkob – Village of 45 Kasbahs</p>
          <p>
            Our driver picks us up and we continue to Nkob, famous for its 45 ancient
            kasbahs.
          </p>

          <p>We enjoy a delicious lunch, then take a short walk:</p>
          <ul className="list-disc pl-6">
            <li>through the palm oasis</li>
            <li>among mud-brick kasbahs</li>
            <li>inside narrow alleys of old caravan routes</li>
          </ul>

          <p className="font-semibold">✓ Land Art Camp & Saffron Fields</p>
          <ul className="list-disc pl-6">
            <li>the Saghrou Land Art Camp</li>
            <li>small saffron fields (during saffron season)</li>
          </ul>

          <p className="font-semibold">✓ Return to Dades Gorge / Roses Valley</p>
          <p>
            We arrive back in the valley in the late afternoon. Your adventure ends at
            your guesthouse — full of memories, landscapes, and moments you will never
            forget.
          </p>
        </>
      )}

      {/* ================= UNIQUE ================= */}
      {openDetails === "saghrou-unique" && (
        <>
          <h3 className="text-3xl font-serif mb-6">
            🔻 Why This Experience Is Unique
          </h3>

          <ul className="list-disc pl-6">
            <li>Only local expert team from Dades & Saghrou</li>
            <li>Hiking inside a real volcanic mountain</li>
            <li>Overnight camping with nomadic family</li>
            <li>Juniper wood artisans visit (exclusive)</li>
            <li>Hidden landscapes, no crowds</li>
            <li>Outdoor picnic & sunset in the volcano</li>
            <li>Perfect for photographers, families, hikers</li>
            <li>Fully guided and safe adventure</li>
          </ul>
        </>
      )}

    </div>
  </div>
)}


      <Footer />
    </>
  );
}
