import Header from "../components/Header";
import FadeIn from "../components/FadeIn";
import Landing from "../components/Landing";
import Footer from "../components/Footer";

const Gallery = () => {
  return (
    <>
      <Landing>
        <Header />

        {/* ===== HERO ===== */}
        <section className="py-40 text-center">
          <FadeIn>
            <span className="text-sm tracking-widest text-white">
              | GALERIE |
            </span>
            <h1 className="text-6xl md:text-7xl font-serif mt-8 text-amber-400">
              Instants d’Aroma Dades
            </h1>
            <p className="max-w-xl mx-auto mt-8 text-lg text-white">
              Une immersion visuelle au cœur de la vallée des Dades, entre nature,
              culture et sérénité.
            </p>
          </FadeIn>
        </section>
      </Landing>

      <main className="bg-[#f7f6f2] text-[#2e2e2e]">

        {/* ===== TITLE ===== */}
        <section className="pt-32 pb-20 text-center px-6">
          <FadeIn>
            <p className="text-xs tracking-widest uppercase mb-6">
              | Gallery |
            </p>
            <h2 className="text-4xl md:text-5xl font-serif max-w-4xl mx-auto leading-tight">
              The Place Of Your Dreams, Where You Will Completely Immerse Yourself In
              The Atmosphere Of Relaxation
            </h2>
          </FadeIn>
        </section>

        {/* ===== GALLERY GRID (SHale Style) ===== */}
        <section className="pb-40 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10 auto-rows-[260px]">

            <GalleryImage src="/images/pic1.jpg" className="row-span-2 rounded-[40px]" />
            <GalleryImage src="/images/pic2.jpg" className="row-span-3 rounded-full" />
            <GalleryImage src="/images/pic3.jpg" className="row-span-2 rounded-[40px]" />

            <GalleryImage src="/images/pic4.jpg" className="row-span-2 rounded-full" />
            <GalleryImage src="/images/pic5.jpg" className="row-span-2 rounded-[40px]" />
            <GalleryImage src="/images/pic6.jpg" className="row-span-2 rounded-full" />

            <GalleryImage src="/images/pic7.jpg" className="row-span-3 rounded-[40px]" />
            <GalleryImage src="/images/pic8.jpg" className="row-span-2 rounded-full" />
            <GalleryImage src="/images/pic1.jpg" className="row-span-2 rounded-full" />

            {/* CENTERED LAST ROW */}
            <div className="col-span-3 flex justify-center gap-12 mt-24">
              <GalleryImage
                src="/images/pic2.jpg"
                className="w-95 h-65 rounded-full"
              />
              <GalleryImage
                src="/images/pic3.jpg"
                className="w-95 h-65 rounded-[40px]"
              />
            </div>

          </div>
        </section>



      </main>

      <Footer />
    </>
  );
};

export default Gallery;

const GalleryImage = ({ src, className = "" }) => (
  <FadeIn>
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
      />
    </div>
  </FadeIn>
);

