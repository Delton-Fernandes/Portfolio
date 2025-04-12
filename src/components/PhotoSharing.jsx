import { useState } from 'react';
import { useUploadContext } from '../context/UploadContext';
import { Card, Container, Row, Col, Form, ProgressBar } from 'react-bootstrap';
import { Upload } from 'lucide-react';
import.meta.env;

const API_BASE_URL = import.meta.env.VITE_IMAGE_LIB_BASE_URI;

export default function PhotoSharingApp() {
  const { files, setFiles } = useUploadContext();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setIsUploading(true);
    setUploadProgress(0);

    for (let i = 0; i < uploadedFiles.length; i++) {
      const file = uploadedFiles[i];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch(`${API_BASE_URL}/upload`, {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        console.log("API Response:", result);

        setFiles((prevFiles) => [...prevFiles, { name: result.filename, url: result.url }]);
        setUploadProgress(((i + 1) / uploadedFiles.length) * 100);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }

    setIsUploading(false);
  };

  return (
    <Container className="py-5 custom-container">
      {/* Decorative icons */}
      <img src="/decor-pacifier.png" className="decor-icon top-left" alt="decor" />
      <img src="/decor-rattle.png" className="decor-icon top-right" alt="decor" />
      <img src="/decor-pacifier.png" className="decor-icon bottom-left" alt="decor" />
      <img src="/decor-rattle.png" className="decor-icon bottom-right" alt="decor" />

      <header className="text-center mb-5">
        <div className="profile-pic mx-auto mb-3">
          <img
            src="/birthday-banner.png"
            alt="Dawson"
            className="img-fluid"
          />
        </div>
        <h1 className="display-4 text-primary">Dawson's Baptism 🎉</h1>
        <p className="text-muted">Share your beautiful memories!</p>
      </header>

      <Form.Group className="text-center mb-4">
        <Form.Label className="custom-upload-label">
          <Upload size={40} className="text-primary mb-2" />
          <span className="text-muted font-weight-bold">Click to upload photos/videos</span>
          <Form.Control
            type="file"
            multiple
            className="d-none"
            onChange={handleFileUpload}
          />
        </Form.Label>
      </Form.Group>

      {isUploading && (
        <ProgressBar
          animated
          now={uploadProgress}
          label={`${Math.round(uploadProgress)}%`}
          className="mb-4 custom-progress"
        />
      )}

      {files.length === 0 ? (
        <Col className="text-center">
  <p className="text-muted mb-3">
    No uploads from you — Check out what other people have <a href="/#/gallery" className="text-primary text-decoration-underline">uploaded</a> ! 🎉
  </p>
</Col>
      ) : (
        <Row className="g-4">
          {files.map((file, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="shadow-sm">
                {file.url.endsWith(".mp4") ? (
                  <video src={file.url} controls className="w-100 rounded" />
                ) : (
                  <Card.Img
                    variant="top"
                    src={file.url}
                    alt={file.name}
                    className="rounded"
                  />
                )}
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <footer className="text-center mt-5">
        <a href="/#/gallery" className="btn btn-link text-primary">
          Go to Gallery
        </a>
      </footer>
    </Container>
  );
}
