import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Booking from "./components/Booking";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
