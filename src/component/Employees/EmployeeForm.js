import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import useForm from "./useForm";
import Input from "../control/Input";
import Radiogroup from "../control/Radiogroup";
import Selectoption from "../control/Selectoption";
import * as EmployeeService from "../control/services/Employeesservices";
import CheckBox from "../control/CheckBox";
import DatePicker from "../control/DatePicker";
import SubmitButton from "../control/SubmitButton";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      margin: theme.spacing(1),
      width: "80%",
    },
  },
}));

const initialValues = {
  id: 0,
  fullname: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departments: "",
  isParmanent: false,
  hireDate: new Date(),
};

const genderItems = [
  { id: "male", label: "Male" },
  { id: "female", label: "Female" },
  { id: "other", label: "Other" },
];

const EmployeeForm = () => {
  const classes = useStyles();
  const {
    values,
    setValues,
    error,
    setError,
    handleInputChange,
    resetForm,
  } = useForm(initialValues);

  const Validation = () => {
    let temp = {};
    temp.fullname = values.fullname ? "" : "This Field is Required";
    temp.email = values.email ? "" : "Email is Required";
    temp.mobile = values.mobile.length > 9 ? "" : "Minimum 10 number Required";
    temp.city = values.city ? "" : "City is Required";
    temp.departments =
      values.departments.length != 0 ? "" : "This Field is Required";

    setError({
      ...temp,
    });
    return Object.values(temp).every((x) => x == "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Validation()) {
      EmployeeService.insertEmployees(values);
      resetForm();
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Grid container>
        <Grid item sm={6}>
          <Input
            label="Full Name"
            value={values.fullname}
            onChange={handleInputChange}
            name="fullname"
            error={error.fullname}
          />
          <Input
            label="email"
            value={values.email}
            onChange={handleInputChange}
            name="email"
            error={error.email}
          />
          <Input
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
            name="mobile"
            error={error.mobile}
          />
          <Input
            label="City"
            value={values.city}
            onChange={handleInputChange}
            name="city"
            error={error.city}
          />
        </Grid>
        <Grid item sm={6}>
          <Radiogroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Selectoption
            name="departments"
            label="Department"
            value={values.departments}
            onChange={handleInputChange}
            options={EmployeeService.Employeesservices()}
            error={error.departments}
          />
          <DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <CheckBox
            name="isParmanent"
            label="Parmanent Employee"
            value={values.isParmanent}
            onChange={handleInputChange}
          />

          <div>
            <SubmitButton text="Submit" type="submit" />
            <SubmitButton
              text="Reset"
              type="button"
              color="default"
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default EmployeeForm;
