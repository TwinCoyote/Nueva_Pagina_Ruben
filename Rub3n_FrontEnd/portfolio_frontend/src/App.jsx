import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import OtraPagina from "./pages/Certifications";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Certifications" element={<OtraPagina />} />
      </Routes>
      <Footer />
    </Router>
  );
}
