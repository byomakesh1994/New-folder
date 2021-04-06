import React from "react";
import Feature from "./FeatureContent";
import Row from "./Row";
const HomePage = () => {
  return (
    <div className="container-fluid">
      <Row title="Banner" />
      <Feature title="Feature" />
    </div>
  );
};

export default HomePage;
