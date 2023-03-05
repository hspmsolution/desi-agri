import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Box, Divider, FormControl, Grid, InputLabel, ListSubheader, MenuItem, Select, Typography } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { toLower } from "lodash";
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
    <MenuItem onClick={() => navigate(`/${toLower(item.replaceAll(' ', ''))}`)}>{item}</MenuItem>
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
          </div>
        </HtmlTooltip>
      ) : (<>{title}</>)}
    </>
  );
};

export default PopupMenu;