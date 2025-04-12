import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import "./PhotoSharing.css";

const API_BASE_URL = import.meta.env.VITE_IMAGE_LIB_BASE_URI;

const PhotoGallery = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchBlobs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/list`);
        const blobNames = await response.json();

        const filesWithUrls = blobNames.map((name) => ({
          name,
          url: `${API_BASE_URL}/download/${name}`,
        }));

        setFiles(filesWithUrls);
      } catch (error) {
        console.error("Error fetching blobs:", error);
      }
    };

    fetchBlobs();
  }, []);

  const handleDelete = async (fileName) => {
    try {
      await fetch(`${API_BASE_URL}/delete/${fileName}`, { method: "DELETE" });
      setFiles(files.filter((file) => file.name !== fileName));
    } catch (error) {
      console.error("Error deleting blob:", error);
    }
  };


  return (
    <Container className="py-5">
      <header className="text-center mb-4">
        <h1 className="display-4 text-primary">Photo Gallery</h1>
        <p className="text-muted">See all the uploaded memories!</p>
      </header>

      <Row className="g-4">
        {files.length === 0 ? (
          <Col className="text-center">
            <p className="text-muted">No photos uploaded yet.</p>
          </Col>
        ) : (
          files.map((file, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="position-relative">
              <div className="position-relative">
                {/* Image/Video */}
                {file.url.endsWith(".mp4") ? (
                  <video src={file.url} controls className="w-100 rounded" />
                ) : (
                  <Card.Img variant="top" src={file.url} alt={file.name} className="rounded" />
                )}
              </div>
            </Col>
          ))
        )}
      </Row>

      <footer className="text-center mt-5">
        <a href="/" className="btn btn-link text-primary">
          Back to Upload Page
        </a>
      </footer>
    </Container>
  );
};

export default PhotoGallery;
