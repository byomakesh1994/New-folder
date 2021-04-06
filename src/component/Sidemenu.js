import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    position: "absolute",
    left: "0px",
    width: "200px",
    height: "100%",
    backgroundColor: "#253053",
    flexDirection: "column",
  },
});

const Sidemenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.sideMenu}>
      <h1>Side Menu</h1>
    </div>
  );
};

export default Sidemenu;
