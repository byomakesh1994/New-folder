import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../Container/Action";
import Success from "./Loading";
import Error from "./Error";
import { NavLink } from "react-router-dom";

const Table = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.data);
  const { success, data, error } = products;
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [check, setCheck] = useState("");

  useEffect(() => {
    dispatch(actions.getProducts());
  }, []);

  const SearchData = (rows) => {
    return rows.filter((row) => row.status.toLowerCase().includes(search));
  };
  const DropDown = (rows) => {
    if (dropdown == "All") {
      return rows;
    } else if (dropdown == "Completed") {
      return rows.filter((row) => row.status == "Completed");
    } else if (dropdown == "In Progress") {
      return rows.filter((row) => row.status == "In Progress");
    }
    return rows;
  };

  const checkbox = (rows) => {
    if (check == "All") {
      return rows;
    } else if (check == "Completed") {
      return rows.filter((row) => row.status == "Completed");
    } else if (check == "In Progress") {
      return rows.filter((row) => row.status == "In Progress");
    }
    return rows;
  };

  return (
    <div>
      <NavLink to="/NewContact">
        <button>CreateData</button>
      </NavLink>
      {!success ? (
        <Success></Success>
      ) : error ? (
        <Error></Error>
      ) : (
        <div>
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select onChange={(e) => setDropdown(e.target.value)}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
          </select>
          <div>
            <label>All</label>
            <input
              onChange={(e) => setCheck(e.target.value)}
              value="all"
              type="radio"
              name="data"
            />
            <label>Completed</label>
            <input
              onChange={(e) => setCheck(e.target.value)}
              value="Completed"
              type="radio"
              name="data"
            />
            <label>In Progress</label>
            <input
              onChange={(e) => setCheck(e.target.value)}
              value="In Progress"
              type="radio"
              name="data"
            />
          </div>
          <table border="1" cellPadding="10px" cellSpacing="10px">
            <thead>
              <tr>
                <th>index</th>
                <th scope="col">project_id</th>
                <th scope="col">project_code</th>
                <th scope="col">description</th>
                <th scope="col">start_date</th>
                <th scope="col">end_date</th>
                <th scope="col">company_name</th>
                <th scope="col">status</th>
              </tr>
            </thead>
            <tbody>
              {DropDown(checkbox(SearchData(data))).map((el, index) => (
                <tr key={el.project_id}>
                  <td>{index + 1}</td>
                  <td scope="col">{el.project_id}</td>
                  <td scope="col">{el.project_code}</td>
                  <td scope="col">{el.description}</td>
                  <td scope="col">{el.start_date}</td>
                  <td scope="col">{el.end_date}</td>
                  <td scope="col">{el.company_name}</td>
                  <td scope="col">{el.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
