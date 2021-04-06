import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import Video from "./Video";

const Feature = (props) => {
  const [feature, setFeature] = useState([]);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    GetData();
  }, []);
  const GetData = async () => {
    const { data } = await axios.get(`http://localhost:3001/section_name`);
    setFeature(data);
    console.log(feature);

    setStatus(false);
  };

  return (
    <div className="row">
      <h2 className="feature">{props.title}</h2>

      {!status ? (
        <div>
          {feature.map((banner, index) => (
            <h5 className="row-banners" key={index}>
              <div className="title"> {banner.title}</div>
              {banner.data.map((item, index) => (
                <Video item={item} key={index} />
              ))}
            </h5>
          ))}
        </div>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default Feature;
