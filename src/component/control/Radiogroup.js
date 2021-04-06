import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";

const Radiogroup = (props) => {
  const { name, label, value, onChange, items } = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item, index) => (
          <FormControlLabel
            key={index}
            value={item.id}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default Radiogroup;
