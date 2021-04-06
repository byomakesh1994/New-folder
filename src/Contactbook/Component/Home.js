import React from "react";
import Table from "./Table";
import { Route, Switch } from "react-router-dom";
import CreateData from "../Container/CreateData";

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Table />
      <Switch>
        <Route path="/NewContact" exact strict component={CreateData} />
      </Switch>
    </div>
  );
};

export default Home;
