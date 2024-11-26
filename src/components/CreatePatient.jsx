import React, { useState } from 'react';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    patient_id: '',
    name: '',
    initials: '',
    sex: '',
    address: '',
    post_code: '',
    admission: '',
    DOB: '',
    ward_id: '',
    next_of_kin: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to the desired endpoint
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Patient Information</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="patient_id" className="form-label">Patient ID:</label>
                  <input type="text" className="form-control" name="patient_id" id="patient_id" required maxLength="20" value={formData.patient_id} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input type="text" className="form-control" name="name" id="name" required maxLength="100" value={formData.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="initials" className="form-label">Initials:</label>
                  <input type="text" className="form-control" name="initials" id="initials" required maxLength="100" value={formData.initials} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="sex" className="form-label">Sex:</label>
                  <input type="text" className="form-control" name="sex" id="sex" required maxLength="10" value={formData.sex} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address:</label>
                  <input type="text" className="form-control" name="address" id="address" required maxLength="255" value={formData.address} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="post_code" className="form-label">Post Code:</label>
                  <input type="text" className="form-control" name="post_code" id="post_code" required maxLength="10" value={formData.post_code} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="admission" className="form-label">Admission Date:</label>
                  <input type="date" className="form-control" name="admission" id="admission" required value={formData.admission} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="DOB" className="form-label">Date of Birth:</label>
                  <input type="date" className="form-control" name="DOB" id="DOB" required value={formData.DOB} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="ward_id" className="form-label">Ward ID:</label>
                  <input type="text" className="form-control" name="ward_id" id="ward_id" required maxLength="20" value={formData.ward_id} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="next_of_kin" className="form-label">Next of Kin:</label>
                  <input type="text" className="form-control" name="next_of_kin" id="next_of_kin" required maxLength="255" value={formData.next_of_kin} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-danger d-block w-100">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientForm;