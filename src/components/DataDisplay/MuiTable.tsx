import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableContainer,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple-table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Almire",
    last_name: "Heindrich",
    email: "aheindrich0@timesonline.co.uk",
    gender: "Genderqueer",
    ip_address: "178.123.11.171",
  },
  {
    id: 2,
    first_name: "Basil",
    last_name: "Kield",
    email: "bkield1@storify.com",
    gender: "Male",
    ip_address: "79.92.104.203",
  },
  {
    id: 3,
    first_name: "Blondy",
    last_name: "Dalling",
    email: "bdalling2@smh.com.au",
    gender: "Female",
    ip_address: "52.102.179.241",
  },
  {
    id: 4,
    first_name: "Fleming",
    last_name: "Folke",
    email: "ffolke3@de.vu",
    gender: "Male",
    ip_address: "254.179.74.128",
  },
  {
    id: 5,
    first_name: "Armando",
    last_name: "Renton",
    email: "arenton4@bravesites.com",
    gender: "Male",
    ip_address: "49.236.128.66",
  },
  {
    id: 6,
    first_name: "Charmane",
    last_name: "Bowlands",
    email: "cbowlands5@merriam-webster.com",
    gender: "Female",
    ip_address: "151.253.69.185",
  },
  {
    id: 7,
    first_name: "Daffy",
    last_name: "Georgelin",
    email: "dgeorgelin6@independent.co.uk",
    gender: "Female",
    ip_address: "58.80.176.66",
  },
  {
    id: 8,
    first_name: "Shepperd",
    last_name: "MacLachlan",
    email: "smaclachlan7@cbsnews.com",
    gender: "Male",
    ip_address: "242.216.185.45",
  },
  {
    id: 9,
    first_name: "Garret",
    last_name: "Gaucher",
    email: "ggaucher8@vistaprint.com",
    gender: "Non-binary",
    ip_address: "14.185.35.158",
  },
  {
    id: 10,
    first_name: "Ettore",
    last_name: "Alford",
    email: "ealford9@tinypic.com",
    gender: "Male",
    ip_address: "78.146.213.82",
  },
];
