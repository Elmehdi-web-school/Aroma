import { useEffect, useState } from "react";
const images = [
  "/images/pic5.webp",
  "/images/pic3.webp",
  "/images/pic4.webp",
];

const Landing = ({ children }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="h-[75vh] md:min-h-screen bg-cover bg-center relative pb-16 transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      {/* Header + Hero */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Landing;
