import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import PopupMenu from './PopupMenu';

const drawerWidth = 240;
const topNav = [
  { title: "About Us", src: "/" },
  { title: "Training & Education", src: "/" },
  { title: "Downloads", src: "/" },
  { title: "Media", src: "/" },
  { title: "FAQs", src: "/" },
  { title: "Careers", src: "/" },
  { title: "Get In Touch", src: "/" },
];

const bottomNav = [
  {
    title: "MARKET DATA",
    menuItems: [
      { subHeader: 'MARKET WATCH', listItems: ["Live Quotes", "Live Quotes - Spot", "Heat maps", "Advance Chart", "Daily Margins", "MIS Report"] },
      { subHeader: 'MARKET DETAILS', listItems: ["Bhav Copy", "Premium/Discount", "Physical settlement details"] },
  ]},
  {
    title: "PRODUCTS",
    menuItems: [
      { subHeader: 'CEREALS AND PULSES', listItems: ['CHANA', 'BARLEY', 'BAJRA', 'WHEAT', 'MOONG', 'MAIZE FEED INDUSTRIAL GRADE', 'PADDY (BASMATI) - PUSA 1121'] },
      { subHeader: 'FIBRES', listItems: ['KAPAS', '29 MM COTTON'] },
      { subHeader: 'SPICES', listItems: ['TURMERIC', 'CORIANDER', 'JEERA'] },
      { subHeader: 'INDEX PRODUCTS', listItems: ['GUAREX'] },
      { subHeader: 'OIL AND OIL SEEDS', listItems: ['CASTOR SEED', 'REFINED CASTOR OIL', 'COTTON SEED OILCAKE', 'SOYBEAN', 'REFINED SOY OIL', 'MUSTARD SEED', 'CRUDE PALM OIL', 'NATURAL WHITISH SESAME SEEDS', 'HIPRO SOYBEAN MEAL'] },
  ]},
  { title: "MEMBERSHIP" },
  { title: "INVESTOR SERVICES" },
  { title: "TECHNOLOGY" },
  { title: "REASEARCH" },
  { title: "FPO" },
];

// function AppBarDropdown(props) {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };
// }

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Divider />
        <List>
          {topNav.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                {
                  (item.menuItems) ?
                    <PopupMenu name={item.title} menuItems={item.menuItems} /> :
                    <ListItemText primary={item.title} />
                }
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {bottomNav.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                {/* <ListItemText primary={item.title} /> */}
                {/* <PopupMenu name={item.title} menuItems={["Governer", "Team", "About", "Chart"]} /> */}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#0000007a', borderRadius: '4rem', width: '90%', left: '50%', transform: 'translate(-50%)', top: '15px' , py: 0.8 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ backgroundColor: '#000', mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to='/'><img style={{ height: '60px', maxWidth: 'none', marginRight: '30px' }} src='images/logo.png' alt="" /></Link>
          <Box>
            <List
              sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-evenly', padding: '0' }}
            >
              {topNav.map((item, index) => (
                <Button key={index} sx={{ color: '#fff' }}>
                  {item.title}
                </Button>
              ))}
            </List>
            <hr style={{ color: '#000', margin: '0.2rem 0' }} />
            <List
              sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-evenly', padding: '0' }}
            >
              {/*  {bottomNav.map((item, index) => (
                <div key={index}>
                  <button
                    // ...
                    aria-expanded={dropdown ? "true" : "false"}
                    onClick={() => setDropdown((prev) => !prev)}
                  >
                    {items.title}{" "}
                  </button>
                  {item.menuItems &&
                    item.menuItems.map((subItem, subIndex) => (
                      <a key={subIndex} href={subItem.src}>
                        {subItem.title}
                      </a>
                    ))}
                </div>
                    ))} */}{/*
              {bottomNav.map((items, index) => (
                <div key={index}>
                {items.map((navItem, i) => (
                <div key={i} style={{ marginLeft: '16px' }}>
                  {navItem.menuItems ? (
                    <PopupMenu menuItems={[navItem.menuItems]} />
                  ) : (
                    <Typography variant="h6">
                      {navItem.title}
                    </Typography>
                  )}
                </div>
                ))}
                </div>
                  ))} */}
              {bottomNav.map((item, index) => (
                <Button key={index} sx={{ color: '#fff' }}>
                  {/* {item.title} */}
                  <PopupMenu title={item.title} menuItems={item.menuItems} />
                </Button>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

// export default Navbar;
/*
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import PopupMenu from './PopupMenu';

const Nav = [
  {
    title: "MARKET DATA",
    menuItems: {
      subHeader: 'MARKET WATCH',
      listItems: ["Live Quotes", "Heat maps", "MIS Report", "Chart"]
    }
  },
  { title: "PRODUCTS" },
  { title: "MEMBERSHIP" },
  { title: "INVESTOR SERVICES" },
  { title: "TECHNOLOGY" },
  { title: "RESEARCH" },
  { title: "FPO" },
];



function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {Nav.map((navItem, index) => (
            <div key={index} style={{ marginLeft: '16px' }}>
              {navItem.menuItems ? (
                <PopupMenu menuItems={[navItem.menuItems]} />
              ) : (
                <Typography variant="h6">
                  {navItem.title}
                </Typography>
              )}
            </div>
          ))}
        </Toolbar>
      </AppBar>
      <div style={{ padding: '16px' }}>
        <Typography variant="h6">
          Main Content
        </Typography>
      </div>
    </div>
  );
}

*/
export default Navbar;