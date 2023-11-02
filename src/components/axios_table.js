import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export default function Axios_table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/people")
      .then((res) => setData(res.data))
      .catch((error) => error);
  });
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user.Id}>
              <td>{index + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>{user.number}</td>
              <td>
                <span className="mx-2">
                  <button>Post</button>
                </span>
                <span>
                  <button>Todo</button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
