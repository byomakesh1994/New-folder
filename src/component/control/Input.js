import { TextField } from "@material-ui/core";
import React from "react";

const Input = (props) => {
  const { value, name, error = null, onChange, ...rest } = props;
  return (
    <TextField
      variant="outlined"
      value={value}
      onChange={onChange}
      name={name}
      {...rest}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export default Input;
