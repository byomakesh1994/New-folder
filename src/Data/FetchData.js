import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const FetchData = () => {
  const [records, setRecords] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetData();
  }, []);
  const GetData = async () => {
    try {
      await axios
        .get(`http://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
          setRecords(response.data);
          console.log(response.data);
        });

      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* <button onClick={GetData}>GetData</button> */}
      {loading ? (
        <table border="1">
          <tbody>
            {records.map((record) => (
              <tr>
                <td>{record.userId}</td>
                <td>{record.title}</td>
                <td>{record.body}</td>
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
