// src/components/PhotoSharingApp.jsx
import { useState } from 'react';
import { useUploadContext } from '../context/UploadContext';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PhotoSharingApp() {
  const { files, setFiles } = useUploadContext();

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
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

      <Row className="g-4">
        {files.length === 0 ? (
          <Col className="text-center">
            <p className="text-muted">No uploads yet. Be the first to share a memory! 🎂</p>
          </Col>
        ) : (
          files.map((file, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="shadow-sm">
                {file.type.startsWith('image') ? (
                  <Card.Img
                    variant="top"
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="rounded"
                  />
                ) : (
                  <video
                    src={URL.createObjectURL(file)}
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
        <Link to="/gallery" className="btn btn-link text-primary">
          Go to Gallery
        </Link>
      </footer>
    </Container>
  );
}
