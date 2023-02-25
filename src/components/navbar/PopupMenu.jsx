/*
import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { MenuItem } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { toLower } from "lodash";

// tooltip function to show menu item on hover and on click

const HtmlTooltip = styled(({ className, isMatch, ...props }) => (
  <Tooltip
    leaveTouchDelay={6000}
    enterTouchDelay={0}
    placement={"bottom"}
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
    borderRadius: "8px",
    boxShadow: "rgb(0 0 0 / 28%) 0px 0px 13px 0px"
  },
}));

// mapping popup menu items
const PopupMenu = ({ name, menuItems }) => {
  const navigate = useNavigate();

  const MenuItems = ({ item }) => (
    <MenuItem onClick={() => navigate(`/${toLower(item)}`)}>{item}</MenuItem>
  )

  const MenuList = 9

  return (
    <div>
      <HtmlTooltip

        title={menuItems.listItems.map((item) => (
          <MenuItems key={item} item={item} />
        ))}
      >
        <div id="buttonTouchRipple" >
          {name}
          <KeyboardArrowDown style={{ marginLeft: '8px' }} />
        </div>
      </HtmlTooltip>
    </div>
  );
};

export default PopupMenu;
*//*
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

export default PopupMenu; */

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

export default PopupMenu;