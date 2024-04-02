import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgb(230, 242, 255)",
    color: "#333300",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(alerts, counts) {
  return { alerts, counts };
}

const rows = [
  createData("Power cut", 15),
  createData("Antenae cut", 4),
  createData("Panic", 0),
];

export default function StyleSimpleTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell
              sx={{ borderBottom: "none", paddingTop: 0.8, paddingBottom: 0 }}
            >
              Alerts
            </StyledTableCell>
            <StyledTableCell
              sx={{ borderBottom: "none", paddingTop: 0.8, paddingBottom: 0 }}
              align="right"
            >
              Counts
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.alerts}>
              <StyledTableCell
                sx={{ borderBottom: "none", paddingTop: 0.8, paddingBottom: 0 }}
                component="th"
                scope="row"
              >
                {row.alerts}
              </StyledTableCell>
              <StyledTableCell
                sx={{ borderBottom: "none", paddingTop: 0.8, paddingBottom: 0 }}
                align="right"
              >
                {row.counts}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
