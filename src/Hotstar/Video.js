import React, { useState } from "react";
import "./Row.css";
import Modal from "react-modal";

const Video = ({ item }) => {
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(false);

  console.log(item.name);

  const toggler = () => {
    setView(true);
  };
  const togglers = () => {
    setView(false);
  };

  return (
    <div>
      <div className="card video">
        <img
          className="row-banner card-img-top"
          key={item.id}
          src={item.poster_url}
          alt="Image"
          onClick={() => setModal(true)}
          onMouseOver={toggler}
          onMouseOut={togglers}
        />

        <div className="card-body">
          <div className="card-text">
            {view ? <span>{item.name}</span> : null}
          </div>
        </div>
      </div>
      <Modal isOpen={modal}>
        <h2>{item.name}</h2>
        <img src={item.poster_url} />
        <p>Duration : {item.video_duration}</p>
        <p>Description :{item.story}</p>
        <p>Release_date : {item.release_date}</p>
        <p>{item.genre}</p>
        <p>Rating : {item.rating}</p>
        <button className="btn btn-primary" onClick={() => setModal(false)}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default Video;
