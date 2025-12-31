import { useEffect, useState } from "react";
const images = [
  "/images/pic5.jpg",
  "/images/pic3.jpg",
  "/images/pic4.jpg",
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
      className="relative min-h-screen bg-cover bg-center transition-all duration-1000"
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
