import './App.css';
import PhotoSharingApp from "./components/PhotoSharing";
import PhotoGallery from './components/PhotoGallery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhotoSharingApp />} />
        <Route path="/gallery" element={<PhotoGallery />} />
      </Routes>
    </Router>
  );
}

export default App;