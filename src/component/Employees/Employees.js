import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../PageHeader";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import {
  makeStyles,
  Paper,
  Select,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@material-ui/core";
import * as EmployeeService from "../control/services/Employeesservices";
import { useTable } from "./useTable";
import Input from "../control/Input";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const headCells = [
  { id: "fullname", label: "FullName" },
  { id: "email", label: "Email" },
  { id: "phone", label: "Phone" },
  { id: "city", label: "City" },
  { id: "gender", label: "Gender" },
];

const Employees = () => {
  const [records, setRecords] = useState(EmployeeService.getAllEmployees());
  const [filterfn, setFilterfn] = useState({
    fn: (item) => {
      return item;
    },
  });
  const classes = useStyles();
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterfn);

  const handleChange = (e) => {
    let target = e.target;
    setFilterfn({
      fn: (item) => {
        if (target.value == "") return item;
        else
          return item.filter((x) =>
            x.fullname.toLowerCase().includes(target.value)
          );
      },
    });
  };

  return (
    <div>
      <PageHeader
        title="New Employees"
        subtitle="Employees Form"
        icon={<PeopleOutlineIcon />}
      />
      <Paper className={classes.pageContent} elevation={5}>
        <EmployeeForm />
        <Toolbar>
          <Input label="Search Records" onChange={handleChange} />
        </Toolbar>

        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullname}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.city}</TableCell>
                <TableCell>{item.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </div>
  );
};

export default Employees;
