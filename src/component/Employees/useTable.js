import {
  Table,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import React, { useState } from "react";

export const useTable = (records, headCells, filterfn) => {
  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const TblContainer = (props) => <Table>{props.children}</Table>;
  const TblHead = (props) => {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell, index) => (
            <TableCell key={index}>{headCell.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const recordsAfterPagingAndSorting = () => {
    return filterfn
      .fn(records)
      .slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };

  const TblPagination = () => (
    <TablePagination
      component="div"
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={pages}
      count={records.length}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );

  return {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  };
};
