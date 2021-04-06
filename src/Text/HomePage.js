import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const FetchData = () => {
  const [records, setRecords] = useState();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   GetData();
  // }, []);
  const GetDatas = () => {
    GetData();
  };

  const GetData = async () => {
    try {
      const result = await axios.get(`http://localhost:3001/users`);
      setRecords(result.data);
      console.log(result.data);

      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    GetData();
  };

  return (
    <div>
      <button className="btn btn-primary mb-2" onClick={GetDatas}>
        GetData
      </button>
      {loading ? (
        <table
          border="1"
          className="table table-dark table-striped table-hover"
        >
          <thead>
            <tr>
              <th>Index</th>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={record.eid}>
                <td>{index + 1}</td>
                <td>{record.eid}</td>
                <td>{record.fname}</td>
                <td>{record.lname}</td>
                <td>{record.email}</td>
                <td onClick={() => deleteUser(record.id)}>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default FetchData;
