import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import service from '../services/clinic';

const PatientForm = ({ wards }) => {
  const initForm = {
    patient_id: '',
    name: '',
    initials: '',
    sex: '',
    address: '',
    post_code: '',
    admission: '',
    DOB: '',
    ward: '',
    next_of_kin: ''
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
    service.create(formData, 'patients/').then(newPatient => {
      console.log(newPatient);
    });
    setFormData(initForm)
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card 
            className="shadow-sm border-0" 
            style={{
              background: 'linear-gradient(to right, #f0f8ff, #e6f2ff)',
              borderBottom: '3px solid #4a90e2'
            }}
          >
            <Card.Body className="p-4">
              <Card.Title className="text-center text-primary mb-4 fw-bold">
                <i className="bi bi-person-add me-2"></i>
                Patient Registration
              </Card.Title>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-primary">Patient ID</Form.Label>
                      <Form.Control
                        type="text"
                        name="patient_id"
                        required
                        maxLength={20}
                        value={formData.patient_id}
                        onChange={handleChange}
                        className="border-primary"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-primary">Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={handleChange}
                        className="border-primary"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-primary">Initials</Form.Label>
                      <Form.Control
                        type="text"
                        name="initials"
                        required
                        maxLength={100}
                        value={formData.initials}
                        onChange={handleChange}
                        className="border-primary"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-primary">Sex</Form.Label>
                      <Form.Control
                        type="text"
                        name="sex"
                        required
                        maxLength={10}
                        value={formData.sex}
                        onChange={handleChange}
                        className="border-primary"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label className="text-primary">Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    required
                    maxLength={255}
                    value={formData.address}
                    onChange={handleChange}
                    className="border-primary"
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-primary">Post Code</Form.Label>
                      <Form.Control
                        type="text"
                        name="post_code"
                        required
                        maxLength={10}
                        value={formData.post_code}
                        onChange={handleChange}
                        className="border-primary"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-primary">Ward</Form.Label>
                      <Form.Select
                        name="ward"
                        required
                        value={formData.ward}
                        onChange={handleChange}
                        className="border-primary"
                      >
                        <option value="">Select ward</option>
                        {wards.map(ward => (
                          <option key={ward.ward_id} value={ward.ward_id}>
                            {ward.ward_name} ({ward.ward_id})
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-primary">Admission Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="admission"
                        required
                        value={formData.admission}
                        onChange={handleChange}
                        className="border-primary"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-primary">Date of Birth</Form.Label>
                      <Form.Control
                        type="date"
                        name="DOB"
                        required
                        value={formData.DOB}
                        onChange={handleChange}
                        className="border-primary"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label className="text-primary">Next of Kin</Form.Label>
                  <Form.Control
                    type="text"
                    name="next_of_kin"
                    required
                    maxLength={255}
                    value={formData.next_of_kin}
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
                  Register Patient
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PatientForm;