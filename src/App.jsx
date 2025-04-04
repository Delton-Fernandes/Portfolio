import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PhotoSharingApp from "./components/PhotoSharing";
import PhotoGallery from "./components/PhotoGallery";
import AdminGallery from "./components/AdminGallery";
import NotFound from "./components/NotFound";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    if (window.location.pathname === "/" || window.location.pathname === "/#" ) {
      window.location.replace("/#/"); // Redirect on initial load
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhotoSharingApp />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="/admin" element={<AdminGallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

