import "./App.css";
import PhotoSharingApp from "./components/PhotoSharing";
import PhotoGallery from "./components/PhotoGallery";
import './App.css'
import AdminGallery from "./components/AdminGallery";

function App() {
  const path = window.location.pathname;

  return (
    <div>
      {/* <nav>
        <a href="/">Home</a>
        <a href="/gallery">Gallery</a>
      </nav> */}

      {path === "/" && <PhotoSharingApp />}
      {path === "/gallery" && <PhotoGallery />}
      {path === "/admin" && <AdminGallery />}
    </div>
  );
}

export default App
