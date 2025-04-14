import { useState, useEffect } from "react";
import { Card, Container, Row, Col, Spinner, Button } from "react-bootstrap";
import "./PhotoSharing.css";

const API_BASE_URL = import.meta.env.VITE_IMAGE_LIB_BASE_URI;

const PhotoGallery = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlobs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/list`);
        const blobNames = await response.json();

        const filesWithUrls = blobNames.map((name) => ({
          name,
          url: `${API_BASE_URL}/download/${encodeURIComponent(name)}`,
        }));

        setFiles(filesWithUrls);
      } catch (error) {
        console.error("Error fetching blobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlobs();
  }, []);

  // Helper function to check if file is video
  const isVideoFile = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    return ['mp4', 'webm', 'ogg', 'mov'].includes(extension);
  };

  const getFileExtension = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    return extension;
  };

  const handleDownloadAll = () => {
    console.log(files);
    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file.url;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <div>
          <h1 className="display-5 text-primary mb-0">Photo Gallery</h1>
          <p className="text-muted mb-0">{files.length} {files.length === 1 ? 'file' : 'files'} uploaded</p>
        </div>
        <Button variant="primary" onClick={handleDownloadAll} disabled={files.length === 0}>
          Download All
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
          <p className="text-muted mt-3">Loading photos...</p>
        </div>
      ) : (
        <Row className="gx-3 gy-4">
          {files.length === 0 ? (
            <Col className="text-center">
              <p className="text-muted">No photos uploaded yet.</p>
            </Col>
          ) : (
            files.map((file, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <div className="position-relative gallery-item">
                  {isVideoFile(file.name) ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      src={file.url}
                      controls
                      className="w-100 rounded"
                      preload="metadata"
                      typeof={"video/" + getFileExtension(file.name)}
                      onError={() => console.error(`Could not load video: ${file.name}`)}
                    />
                  ) : (
                    <Card.Img
                      variant="top"
                      src={file.url}
                      alt={file.name}
                      className="rounded img-fluid"
                      loading="lazy"
                    />
                  )}
                </div>
              </Col>
            ))
          )}
        </Row>
      )}

      <footer className="text-center mt-5">
        <a href="/" className="btn btn-link text-primary">
          Back to Upload Page
        </a>
      </footer>
    </Container>
  );
};

export default PhotoGallery;
