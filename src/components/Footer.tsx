import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-light">
      <Container className="py-3">
        <Row className="justify-content-center">
          <Col className="text-center">
            <p>&copy; 2023 Axel Castillo. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
