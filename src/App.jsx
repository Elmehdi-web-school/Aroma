import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Birds from "./pages/Birds";
import Blogs from "./pages/Blogs";
import FullMoonMorocco2026 from "./pages/FullMoonMorocco2026";
import Activities from "./pages/Activities";
import Sejour from "./pages/Sejour";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/sejour" element={<Sejour />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/full-moon-morocco-2026"
          element={<FullMoonMorocco2026 />}
        />
        <Route path="/birds" element={<Birds />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/rooms" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App