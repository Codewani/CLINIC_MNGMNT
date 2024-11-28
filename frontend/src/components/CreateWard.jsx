import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import service from '../services/clinic.js'

const WardForm = () => {
  const initForm = {
    ward_id: '',
    ward_name: '',
    number_beds: '',
    nurse_in_charge: '',
    ward_type: '',
  };
  const [formData, setFormData] = useState(initForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting data:', JSON.stringify(formData, null, 2));
    service.create(formData, 'wards/').then(newPatient => {
      console.log(newPatient);
    });

    setFormData(initForm)
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card 
            className="shadow-sm border-0" 
            style={{
              background: 'linear-gradient(to right, #f0f8ff, #e6f2ff)',
              borderBottom: '3px solid #4a90e2'
            }}
          >
            <Card.Body className="p-4">
              <Card.Title className="text-center text-primary mb-4 fw-bold">
                <i className="bi bi-building-add me-2"></i>
                Register New Ward
              </Card.Title>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-primary">Ward ID</Form.Label>
                      <Form.Control
                        type="text"
                        name="ward_id"
                        required
                        maxLength={20}
                        value={formData.ward_id}
                        onChange={handleChange}
                        className="border-primary"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-primary">Ward Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="ward_name"
                        required
                        maxLength={100}
                        value={formData.ward_name}
                        onChange={handleChange}
                        className="border-primary"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-primary">Number of Beds</Form.Label>
                      <Form.Control
                        type="number"
                        name="number_beds"
                        required
                        value={formData.number_beds}
                        onChange={handleChange}
                        className="border-primary"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-primary">Nurse in Charge</Form.Label>
                      <Form.Control
                        type="text"
                        name="nurse_in_charge"
                        required
                        maxLength={100}
                        value={formData.nurse_in_charge}
                        onChange={handleChange}
                        className="border-primary"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label className="text-primary">Ward Type</Form.Label>
                  <Form.Control
                    type="text"
                    name="ward_type"
                    maxLength={100}
                    value={formData.ward_type}
                    onChange={handleChange}
                    className="border-primary"
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 mt-3"
                >
                  <i className="bi bi-plus-circle me-2"></i>
                  Register Ward
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