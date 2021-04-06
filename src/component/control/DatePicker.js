import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
const DatePicker = (props) => {
  const { name, value, label, onChange } = props;

  const convertValue = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        format ="MM/dd/yyyy"
        name={name}
        value={value}
        onChange={(date) => onChange(convertValue(name, date))}
      ></KeyboardDatePicker>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
