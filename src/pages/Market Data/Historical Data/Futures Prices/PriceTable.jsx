import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import './PriceTable.css';
import { Autocomplete, Button, Grid, TextField } from '@mui/material';

function createData(label, expiry, date, previous, open, high, low, close, volume, interest, value, delivery) {
  return {
    label, expiry, date, previous, open, high, low, close, volume, interest, value, delivery,
  };
}

const rows = [
  createData('COTTON', '20-Feb-2024', '24-Feb-2023', 29000.00, 0.00, 0.00, 0.00, 29000.00, 0.00, 0.00, 0.00, 'Rajkot' ),
];

const instruments = [ 'Futures', 'Futures Index', 'Options' ];

const expiryDate = [ 'June-2023', 'May-2023' ]

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Product Name',
  },
  {
    id: 'expiryDate',
    numeric: true,
    disablePadding: false,
    label: 'Expiry Date',
  },
  {
    id: 'date',
    numeric: true,
    disablePadding: false,
    label: 'Date',
  },
  {
    id: 'prevClose',
    numeric: true,
    disablePadding: false,
    label: 'Prev. Close Price',
  },
  {
    id: 'open',
    numeric: true,
    disablePadding: false,
    label: 'Open Price',
  },
  {
    id: 'high',
    numeric: true,
    disablePadding: false,
    label: 'High Price',
  },
  {
    id: 'low',
    numeric: true,
    disablePadding: false,
    label: 'Low Price',
  },
  {
    id: 'close',
    numeric: true,
    disablePadding: false,
    label: 'Close Price',
  },
  {
    id: 'volume',
    numeric: true,
    disablePadding: false,
    label: 'Volume',
  },
  {
    id: 'interest',
    numeric: true,
    disablePadding: false,
    label: 'Open Interest',
  },
  {
    id: 'tradeValue',
    numeric: true,
    disablePadding: false,
    label: 'Traded Value',
  },
  {
    id: 'deliveryCenter',
    numeric: true,
    disablePadding: false,
    label: 'Delivery Center',
  },
];

const filters = [
  {
    heading: 'Instrument Type',
    options: instruments,
    label: "select instrument type"
  },
  {
    heading: 'Choose product',
    options: rows,
    label: "select product name"
  },
  {
    heading: 'Select expiry date ',
    options: expiryDate,
    label: "Expiry"
  }
]

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

function EnhancedTableToolbar() {

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Nutrition
      </Typography>
    </Toolbar>
  );
}


export default function PriceTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              display: 'grid',
              gridTemplateColumns: { md: '4fr 4fr 4fr' },
              gap: 2,
            }}
          >
            {filters.map((filter, index) => (
              <Box key={index}>
                <Typography variant="h6" gutterBottom>
                  {filter.heading}
                </Typography>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={filter.options}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label={filter.label} />}
                />
              </Box>
            ))}
            <Button variant="contained" sx={{ width: '10rem' }}>Show</Button>
          </Box>
        </Grid>
      </Grid>

      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.label}
                    >
                      <TableCell
                        sx={{ padding: '16px' }}
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.label}
                      </TableCell>
                      <TableCell align="right">{row.expiry}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.previous}</TableCell>
                      <TableCell align="right">{row.open}</TableCell>
                      <TableCell align="right">{row.high}</TableCell>
                      <TableCell align="right">{row.low}</TableCell>
                      <TableCell align="right">{row.close}</TableCell>
                      <TableCell align="right">{row.volume}</TableCell>
                      <TableCell align="right">{row.interest}</TableCell>
                      <TableCell align="right">{row.value}</TableCell>
                      <TableCell align="right">{row.delivery}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}