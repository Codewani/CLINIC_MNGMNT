import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewWards = ({wards}) => {

  const handleEdit = (wardId) => {
    console.log(`Edit ward ${wardId}`);
    // Add edit logic here
  };

  const handleDelete = (wardId) => {
    console.log(`Delete ward ${wardId}`);
    // Add delete logic here
  };

  const handleWardClick = (wardId) => {
    console.log(`View patients for ward ${wardId}`);
    // Add navigation logic to ward patients page
  };

  return (
    <Card className="m-4">
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Ward ID</th>
              <th>Ward Name</th>
              <th>Number Of Beds</th>
              <th>Nurse In Charge</th>
              <th>Ward Type</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {wards.map((ward) => (
              <tr key={ward.ward_id}>
                <td>
                  <button
                    className="btn btn-link p-0"
                    onClick={() => handleWardClick(ward.ward_id)}
                  >
                    {ward.ward_id}
                  </button>
                </td>
                <td>{ward.ward_name}</td>
                <td>{ward.number_beds}</td>
                <td>{ward.nurse_in_charge}</td>
                <td>{ward.ward_type}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEdit(ward.ward_id)}
                    title="Edit"
                  >
                    <Pencil />
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(ward.ward_id)}
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
              <th>Ward ID</th>
              <th>Ward Name</th>
              <th>Number Of Beds</th>
              <th>Nurse In Charge</th>
              <th>Ward Type</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </tfoot>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default ViewWards;