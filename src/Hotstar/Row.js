import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "axios";
import Loading from "./Loading";

const Row = (props) => {
  const [banners, setBanners] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    GetData();
  }, []);
  const GetData = async () => {
    await axios
      .get(`http://localhost:3001/banner_section_list`)
      .then((response) => {
        setBanners(response.data);
        // console.log(banners);
      });
    setStatus(false);
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      {!status ? (
        <div className="row-banners">
          {banners.map((banner, index) => (
            <img
              className="row-banner"
              key={index}
              src={banner.image_path}
              alt="Image"
            />
          ))}
        </div>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default Row;
