import React from "react";
import { FormControl, FormControlLabel, Checkbox } from "@material-ui/core";
const CheckBox = (props) => {
  const { name, label, value, onChange } = props;

  const convertValue = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) => onChange(convertValue(name, e.target.checked))}
          />
        }
        label={label}
      />
    </FormControl>
  );
};

export default CheckBox;
