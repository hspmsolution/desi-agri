import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import { Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TableContainer from '@mui/material/TableContainer';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import { deleteAdmin, getAdmins } from '../../actions/auth';

const useStyles = makeStyles(() => ({
  tcontainer: {
    width: '90%',
  },
  table_cell: {
    fontWeight: 600,
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: '.00625em',
    fontSize: '1rem',
    textAlign: 'center',
  },
  table_row: {
    fontWeight: 600,
  },
  profit_cell: {
    color: '#137333',
    background: '#e6f4ea',
    padding: '14px',
    borderRadius: '9px',
    fontWeight: 600,
  },
}));

const ManageAdmin = () => {
  const dispatch = useDispatch();
  const admins = useSelector((state) => state.admins.allAdmin);

  useEffect(() => {
    dispatch(getAdmins());
  }, []);
  const classes = useStyles();
  return (
    <>
      <Box sx={{ py: 2 }}>
        <Link to="/dashboard/register">
          <Button color="primary" size="large" type="submit" variant="contained">
            <AddIcon /> Add Admin
          </Button>
        </Link>
      </Box>
      <div className={classes.tcontainer}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {['Sr no', 'User Name', 'Email', 'Role', 'Action'].map((data) => (
                  <TableCell
                    style={{
                      color: 'black',
                      fontWeight: '600',
                      textAlign: 'center',
                      fontSize: '18px',
                      padding: '15px 0 6px 0',
                    }}
                    key={data}
                  >
                    {data}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className="table_body">
              {admins.map((user, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="center" className={classes.table_cell} style={{ fontWeight: '500' }}>
                      {index + 1}
                    </TableCell>

                    <TableCell align="center" className={classes.table_cell} style={{ fontWeight: '500' }}>
                      {user.username}
                    </TableCell>
                    <TableCell align="center" className={classes.table_cell} style={{ fontWeight: '500' }}>
                      {user.email}
                    </TableCell>

                    <TableCell align="center" className={classes.table_cell} style={{ fontWeight: '500' }}>
                      {user.role}
                    </TableCell>

                    <TableCell align="center" className={classes.table_cell} style={{ fontWeight: '500' }}>
                      <Button
                        onClick={() => {
                          dispatch(deleteAdmin(user.id));
                        }}
                      >
                        <DeleteForeverIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ManageAdmin;
