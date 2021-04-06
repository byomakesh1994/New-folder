import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  label: {
    textTransform: "none",
  },
}));

const SubmitButton = (props) => {
  const classes = useStyles();

  const { text, onClick, ...rest } = props;
  return (
    <Button
      classes={{ root: classes.root, label: classes.label }}
      variant="contained"
      color="primary"
      onClick={onClick}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
