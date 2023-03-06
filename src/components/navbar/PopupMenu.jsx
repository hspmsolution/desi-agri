import * as React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { toLower } from "lodash";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Box, Divider, Grid, MenuItem, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { getProductInfo } from "../../actions/products";
import { PRODUCTPAGE_INFO } from "../../constants/actionTypes";
import './Popup.css';

// tooltip function to show menu item on hover and on click

const HtmlTooltip = styled(({ className, ...props }) => (
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
  const DropDown = ({ dropItems }) => (
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
    DropDown.propTypes = {
      dropItems: PropTypes.array
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

  MenuItems.propTypes = {
    item: PropTypes.object
  }

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

PopupMenu.propTypes = {
  title: PropTypes.string,
  menuItems: PropTypes.array
}

export default PopupMenu;