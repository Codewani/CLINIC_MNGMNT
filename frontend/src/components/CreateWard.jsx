import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom CSS to match the original styling
const styles = {
  formControl: {
    border: 'none',
    borderBottom: '2.3px solid #59cc55',
    borderRadius: 0,
    outline: 'none',
  },
  formGroup: {
    marginBottom: '2rem',
  },
  card: {
    border: '2px solid #e9cdcd',
  },
  navItem: {
    '&:hover': {
      color: 'rgb(39, 235, 98)',
    },
  },
};

const WardForm = () => {
  const [formData, setFormData] = useState({
    ward_id: '',
    ward_name: '',
    number_beds: '',
    nurse_in_charge: '',
    ward_type: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title className="text-center">Ward Information</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group style={styles.formGroup}>
                  <Form.Label htmlFor="ward_id">Ward ID:</Form.Label>
                  <Form.Control
                    type="text"
                    name="ward_id"
                    id="ward_id"
                    required
                    maxLength={20}
                    value={formData.ward_id}
                    onChange={handleChange}
                    style={styles.formControl}
                  />
                </Form.Group>

                <Form.Group style={styles.formGroup}>
                  <Form.Label htmlFor="ward_name">Ward Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="ward_name"
                    id="ward_name"
                    required
                    maxLength={100}
                    value={formData.ward_name}
                    onChange={handleChange}
                    style={styles.formControl}
                  />
                </Form.Group>

                <Form.Group style={styles.formGroup}>
                  <Form.Label htmlFor="number_beds">Number of Beds:</Form.Label>
                  <Form.Control
                    type="number"
                    name="number_beds"
                    id="number_beds"
                    required
                    value={formData.number_beds}
                    onChange={handleChange}
                    style={styles.formControl}
                  />
                </Form.Group>

                <Form.Group style={styles.formGroup}>
                  <Form.Label htmlFor="nurse_in_charge">Nurse in Charge:</Form.Label>
                  <Form.Control
                    type="text"
                    name="nurse_in_charge"
                    id="nurse_in_charge"
                    required
                    maxLength={100}
                    value={formData.nurse_in_charge}
                    onChange={handleChange}
                    style={styles.formControl}
                  />
                </Form.Group>

                <Form.Group style={styles.formGroup}>
                  <Form.Label htmlFor="ward_type">Ward Type:</Form.Label>
                  <Form.Control
                    type="text"
                    name="ward_type"
                    id="ward_type"
                    maxLength={100}
                    value={formData.ward_type}
                    onChange={handleChange}
                    style={styles.formControl}
                  />
                </Form.Group>

                <Button 
                  variant="success" 
                  type="submit" 
                  className="w-100"
                >
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WardForm;