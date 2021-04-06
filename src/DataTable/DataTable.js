import React from "react";

const DataTable = ({ data }) => {
  let column = data[0] && Object.keys(data[0]);
  return (
    <table cellPadding="10px" cellPadding="10px" border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Username</th>
          <th>Website</th>
          <th>Adress</th>

          {/* {data[0] &&
            column.map((heading, index) => <th key={index}>{heading}</th>)} */}
        </tr>
      </thead>
      <tbody>
        {data.map((record) => (
          <tr key={record.id}>
            <td>{record.id}</td>
            <td>{record.name}</td>
            <td>{record.phone}</td>
            <td>{record.username}</td>
            <td>{record.website}</td>
            <td>
              {record.address.street},{record.address.suite},
              {record.address.city},{record.address.zipcode}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
