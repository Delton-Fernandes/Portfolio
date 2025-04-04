import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const API_BASE_URL = import.meta.env.VITE_IMAGE_LIB_BASE_URI;

const AdminGallery = () => {
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

    {/* Overlay - Appears on Hover */}
    <div
      className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50 rounded"
      style={{ opacity: 0, transition: "opacity 0.3s" }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
    >
      {/* Centered Trash Icon */}
      <button
        className="btn btn-light btn-sm rounded-circle shadow"
        onClick={() => handleDelete(file.name)}
        title="Delete"
        style={{ width: "40px", height: "40px" }}
      >
        🗑️
      </button>
    </div>
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

export default AdminGallery;
