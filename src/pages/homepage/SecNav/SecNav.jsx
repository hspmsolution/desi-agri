import React from "react";
import { useSelector } from "react-redux";
import { AppBar, Typography, Tabs, Divider, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Marquee from "react-fast-marquee";
import './SecNav.css'

// Custom CSS

const useStyles = makeStyles(() => (
  {
    buttonContainer: {
      display: "flex",
      gap: "3em",
      justifyContent: "space-between",
      width: "100%",
      padding: "0 3em",
    },
    pChange: {
      fontSize: "0.8em",
    },
  }
));

const SecNav = () => {

  const classes = useStyles();
  const liveQuotes=useSelector((state)=>state.products.liveQuotes)

  // created array object of elements to display
//   const indices = [
//     {
//       indexname: "CASTOR SEED",
//       id: 0,
// percentChange:2.8,
// last:7070
//     },
//     {
//       indexname: "COTTON SEED OILCAKE",
//       id: 18,
// percentChange:-1.24,
// last:2706
//     },
//     {
//       indexname: "DHANIYA",
//       id: 23,
// percentChange:-1.98,
// last:7316
//     },
//     {
//       indexname: "GUAR GUM",
//       id: 25,
// percentChange:-3.56,
// last:11801
//     },
//     {
//       indexname: "GAUR SEED",
//       id: 19,
// percentChange:-2.49,
// last:5765
//     },
//     {
//       indexname: "JEERA",
//       id: 22,
// percentChange:-0.42,
// last:33170
//     },
//     {
//       indexname: "KAPAS",
//       id: 53,
// percentChange:-0.89,
// last:1620
//     },
//   ];

  // mapping all the elements and taking data from api array on basis of id. id is their index  tion in api
  // tabs are used to make scrollable effect

  return (
    <Box sx={{width: '100%', position: 'relative', backgroundColor:"#fff" }}>
      <AppBar
        sx={{
          // py: 0.5,
          // px: 0,
          padding: '0.5em',
          mt: "auto",
          mr: 0,
          width: '100%',
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
        color="secondary"
        style={{ zIndex: 900, position: 'relative', top: '-64px', backgroundColor:"#ffffff",boxShadow:"none"}}
      >
        <Tabs
          value={false}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Marquee gradient={false} pauseOnHover speed={40}>
            <div className={classes.buttonContainer}>
              {liveQuotes.map((index) => (
                <div key={index.id}>
                  <Typography variant="subtitle2" color={"black"}>
                    {index?.name}
                  </Typography>

                  <Typography color={"black"}>
                    {index?.price}&nbsp;
                    <span
                      className={classes.pChange}
                      style={{
                        color:
                          index?.percentChange < 0
                            ? "#a84032"
                            : "#32a852",
                      }}
                    >
                      {index?.percentChange}%
                    </span>
                  </Typography>
                </div>
              ))}
            </div>
          </Marquee>
        </Tabs>
        <Divider/>
      </AppBar>
     
    </Box>
  );
};

export default SecNav;