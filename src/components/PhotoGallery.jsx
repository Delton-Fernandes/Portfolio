// src/components/PhotoGallery.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';

const PhotoGallery = () => {
  // Sample data, replace with actual shared state or props from PhotoSharingApp
  const [files] = useState([]); // Replace with actual file list

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
        <Link to="/" className="btn btn-link text-primary">
          Back to Upload Page
        </Link>
      </footer>
    </Container>
  );
};

export default PhotoGallery;
