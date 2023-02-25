import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Button from 'react-bootstrap/Button';

import './Table.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 18,
   
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, carbs, protein) {
  return { name, carbs, protein };
}

const rows = [
  createData('Cotton Seed Oilcake - Feb23',2775.00, "+ 1.76"),
  createData('Kapas - Apr23',1649, "+1.66"),
  createData('Cotton Seed Oilcake - Mar23',2745, "+1.33"),
  createData('Cotton Seed Oilcake - Apr23',2745, "+1.29"),
  createData('Guar Gum - Feb23',12024, "+1.24"),
];


export default function CustomizedTables() {
  return (
    
    <TableContainer component={Paper} id="tsi">
      {/* <div></div>
        <Button variant="success" id='TGL'>Top Gainer</Button>
        <Button variant="outline-success" id='TGL'>Top Loser</Button> */}
      
      <Table sx={{ minWidth: 100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Contract</StyledTableCell>
            {/* <StyledTableCell align="right">Calories</StyledTableCell> */}
            {/* <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell> */}
            <StyledTableCell align="right">LTP&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Change&nbsp;(%)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              {/* <StyledTableCell align="right">{row.calories}</StyledTableCell> */}
              {/* <StyledTableCell align="right">{row.fat}</StyledTableCell> */}
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}