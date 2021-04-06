import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./DataTable";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
    console.log(data);
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const Search = (rows) => {
    let columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) =>
      columns.some((column) =>
        row[column].toString().toLowerCase().includes(search)
      )
    );
  };

  return (
    <div>
      <div>Filter Goes Here</div>
      <input type="text" placeholder="Search" onChange={handleSearch} />
      {/* <h1>{JSON.stringify(data)}</h1> */}
      <DataTable data={Search(data)} />
    </div>
  );
};

export default Home;
