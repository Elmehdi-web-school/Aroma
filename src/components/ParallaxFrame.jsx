import { useEffect, useRef } from "react";

const ParallaxFrame = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const offset = rect.top * 0.08;
      ref.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="transition-transform duration-200">
      {children}
    </div>
  );
};

export default ParallaxFrame;
