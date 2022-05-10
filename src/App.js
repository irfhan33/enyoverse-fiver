import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import Header from "./components/header";
import Contact from "./pages/contact";
import MediaEnquirers from "./pages/mediaEnquirers";
import Whitepaper from "./pages/whitepaper";
import BecomeAPartner from "./pages/becomeAPartner";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media-enquirers" element={<MediaEnquirers />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/become-a-partner" element={<BecomeAPartner />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
