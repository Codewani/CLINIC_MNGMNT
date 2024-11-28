import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewPatients = ({patients}) => {
  // Sample hardcoded data
  // const patients = [
  //   {
  //     patient_id: "P001",
  //     name: "John Smith",
  //     initials: "JS",
  //     sex: "M",
  //     address: "123 Main St, City",
  //     post_code: "12345",
  //     admission: "2024-01-15",
  //     DOB: "1980-05-20",
  //     ward_id_id: "W101",
  //     next_of_kin: "Mary Smith"
  //   },
  //   {
  //     patient_id: "P002",
  //     name: "Sarah Johnson",
  //     initials: "SJ",
  //     sex: "F",
  //     address: "456 Oak Ave, Town",
  //     post_code: "67890",
  //     admission: "2024-02-01",
  //     DOB: "1992-11-10",
  //     ward_id_id: "W102",
  //     next_of_kin: "Mike Johnson"
  //   },
  //   {
  //     patient_id: "P003",
  //     name: "Robert Wilson",
  //     initials: "RW",
  //     sex: "M",
  //     address: "789 Pine Rd, Village",
  //     post_code: "34567",
  //     admission: "2024-02-15",
  //     DOB: "1975-03-25",
  //     ward_id_id: "W101",
  //     next_of_kin: "Jane Wilson"
  //   }
  // ];

  const handleEdit = (patientId) => {
    console.log(`Edit patient ${patientId}`);
    // Add edit logic here
  };

  const handleDelete = (patientId) => {
    console.log(`Delete patient ${patientId}`);
    // Add delete logic here
  };

  return (
    <Card className="m-4">
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Name</th>
              <th>Initials</th>
              <th>Sex</th>
              <th>Address</th>
              <th>Post Code</th>
              <th>Admission</th>
              <th>DOB</th>
              <th>Ward ID</th>
              <th>Next Of Kin</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.patient_id}>
                <td>{patient.patient_id}</td>
                <td>{patient.name}</td>
                <td>{patient.initials}</td>
                <td>{patient.sex}</td>
                <td>{patient.address}</td>
                <td>{patient.post_code}</td>
                <td>{patient.admission}</td>
                <td>{patient.DOB}</td>
                <td>{patient.ward_id}</td>
                <td>{patient.next_of_kin}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEdit(patient.patient_id)}
                    title="Edit"
                  >
                    <Pencil />
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(patient.patient_id)}
                    title="Delete"
                  >
                    <Trash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Patient ID</th>
              <th>Name</th>
              <th>Initials</th>
              <th>Sex</th>
              <th>Address</th>
              <th>Post Code</th>
              <th>Admission</th>
              <th>DOB</th>
              <th>Ward ID</th>
              <th>Next Of Kin</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </tfoot>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default ViewPatients;