import { useEffect, useState } from "react";

const Hero = () => {
  /* =====================
     TYPEWRITER EFFECT
  ===================== */
  const fullText = "AROMA DADES";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 80 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (index < fullText.length) {
          setText(fullText.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (index > 0) {
          setText(fullText.slice(0, index - 1));
          setIndex(index - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [index, isDeleting, fullText]);

  /* =====================
     SCROLL
  ===================== */
  const scrollToNext = () => {
    const nextSection = document.querySelector("section + section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="text-white flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
          Découvrez Ecolodge <br />
          <span className="text-amber-400">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        {/* Scroll button */}
        <button
          onClick={scrollToNext}
          className="mt-14 w-10 h-10 rounded-full border border-white/60 flex items-center justify-center hover:border-white transition"
          aria-label="Scroll to next section"
        >
          ↓
        </button>
      </div>
    </section>
  );
};

export default Hero;
