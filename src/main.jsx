import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UploadProvider } from './context/UploadContext.jsx'
import "bootstrap/dist/css/bootstrap.min.css";  // Import Bootstrap CSS


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UploadProvider>
      <App />
    </UploadProvider>
  </StrictMode>,
)
