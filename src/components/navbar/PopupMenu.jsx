import * as React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { toLower } from "lodash";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Box, Divider, FormControl, Grid, InputLabel, ListSubheader, MenuItem, Select, Typography } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { getProductInfo } from "../../actions/products";

import { PRODUCTPAGE_INFO } from "../../constants/actionTypes";

import './Popup.css';

// tooltip function to show menu item on hover and on click

const HtmlTooltip = styled(({ className, isMatch, ...props }) => (
  <Tooltip
    leaveTouchDelay={6000000}
    enterTouchDelay={0}
    placement={"bottom"}
    {...props}
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 620,
    height: '500px',
    overflow: 'scroll',
    horizontalScroll: 'none',
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    borderRadius: "8px",
    boxShadow: "rgb(0 0 0 / 28%) 0px 0px 13px 0px"
  },
}));

// mapping popup menu items
const PopupMenu = ({ title, menuItems }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products=useSelector((state)=>state.products.productsDetail)
  const DropDown = ({ dropItems }) => {
    return (
      <>
        {dropItems.map((item, index) => (
          <React.Fragment key={index}>
            <Typography variant="overline" gutterBottom>
              {item.subHeader}
            </Typography>
            {item.listItems.map((headList, i) => (
              <>
                <MenuItems item={headList} key={i} />
              </>
            ))}
            <Divider />
          </React.Fragment>
        ))}
      </>
    )
  }

  const MenuItems = ({ item }) => (
    <MenuItem onClick={() =>{ 
        if (title==="PRODUCTS") {
          dispatch(getProductInfo(products.find((product)=>product.name===item).id))
          dispatch({type:PRODUCTPAGE_INFO,name:item})
          navigate(`/products`)
        } else {
          navigate(`/${toLower(item)}`)
        }
      }}>{item}</MenuItem>
  )

  const MenuList = 9

  return (
    <>
      {menuItems ? (
        <HtmlTooltip

          title={
            <Grid item xs={12}>
              <Box
                sx={{
                  // p: 2,
                  bgcolor: 'background.default',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr' },
                  gridTemplateRows: { md: '1fr 1fr' },
                  // gap: 2,
                }}
              >

                <DropDown dropItems={menuItems} />
              </Box>
            </Grid>
          }
        >
          <div id="" >
            {title}
            {/* <KeyboardArrowDown style={{ marginLeft: '8px' }} /> */}
          </div>
        </HtmlTooltip>
      ) : (<>{title}</>)}
    </>
  );
};

export default PopupMenu;
/*
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

function PopupMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        {/* <MoreVert /> *//* }Market Data
</IconButton>
<Menu
id="dropdown-menu"
anchorEl={anchorEl}
keepMounted
open={open}
onClose={handleClose}
>
{props.menuItems.map((item, index) => (
<div key={index}>
{item.subHeader && <MenuItem disabled>{item.subHeader}</MenuItem>}
{item.listItems.map((listItem, subIndex) => (
<MenuItem key={`${index}-${subIndex}`} onClick={handleClose}>{listItem}</MenuItem>
))}
</div>
))}
</Menu>
</div>
);
}

export default PopupMenu; *//*

import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { MenuItem } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
// import { useStateContext } from "../../Contexts/ContextProvider";

// tooltip function to show menu item on hover and on click

const HtmlTooltip = styled(({ className, isMatch, ...props }) => (
  <Tooltip
    leaveTouchDelay={6000}
    enterTouchDelay={0}
    placement={isMatch ? "right-start" : "bottom"}
    {...props}
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    borderRadius:"8px",
    boxShadow:"rgb(0 0 0 / 28%) 0px 0px 13px 0px"
  },
}));

// mapping popup menu items
const PopupMenu = ({ name, menuItems }) => {
  // const { isMatch } = useStateContext();
  
  return (
     

    <div>
      <HtmlTooltip
        // isMatch={isMatch}
         
        title={menuItems.map((items) => (
         
          <MenuItem key={items}>{items}</MenuItem>
        ))}
      >
        <Button
          endIcon={<KeyboardArrowDown />}
          fullWidth
         
          style={{fontSize:"1em",textTransform: 'none',color:"black"}}
        >
          {name}
        </Button>
      </HtmlTooltip>
    </div>
  );
};

export default PopupMenu; */