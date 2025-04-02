import { useState } from 'react';
import { useUploadContext } from '../context/UploadContext';
import { Card, Container, Row, Col, Form, ProgressBar } from 'react-bootstrap';
import { Upload } from 'lucide-react';

const API_BASE_URL = "http://localhost:5000/api/blob";

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
    <Container className="py-5">
      <header className="text-center mb-4">
        <img
          src="/birthday-banner.jpg"
          alt="Birthday Banner"
          className="img-fluid rounded shadow mb-3"
        />
        <h1 className="display-4 text-primary">Dawson's First Birthday 🎉</h1>
        <p className="text-muted">Share your special moments from the event!</p>
      </header>

      <Form.Group className="text-center mb-4">
        <Form.Label className="d-block p-4 border border-primary rounded bg-light shadow-sm cursor-pointer">
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
        <ProgressBar animated now={uploadProgress} label={`${Math.round(uploadProgress)}%`} className="mb-4" />
      )}

      <Row className="g-4">
        {files.length === 0 ? (
          <Col className="text-center">
            <p className="text-muted">No uploads yet. Be the first to share a memory! 🎂</p>
          </Col>
        ) : (
          files.map((file, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="shadow-sm">
                {file ? (
                  <Card.Img
                    variant="top"
                    src={file.url}
                    alt={file.name}
                    className="rounded"
                  />
                ) : (
                  <video
                    src={file.url}
                    controls
                    className="w-100 rounded"
                  />
                )}
              </Card>
            </Col>
          ))
        )}
      </Row>

      <footer className="text-center mt-5">
        <a href="/gallery" className="btn btn-link text-primary">
          Go to Gallery
        </a>
      </footer>
    </Container>
  );
}
