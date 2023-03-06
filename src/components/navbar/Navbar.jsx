import React from 'react';
import PropTypes from 'prop-types';
import { useSelector} from 'react-redux';
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
import { Link, useNavigate } from 'react-router-dom';
import { toLower } from 'lodash';
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

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const products=useSelector((state)=>state.products.productsDetail)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  function getProductNamesByCategory(category) {
    return products.filter((product) => (
      product.category === category
    )).map((product) => (
      product.name
    ));
  }

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
        { subHeader: 'CEREALS AND PULSES', listItems: getProductNamesByCategory("Cereals and Pulses") },
        { subHeader: 'FIBRES', listItems: getProductNamesByCategory("Fibres") },
        { subHeader: 'SPICES', listItems:getProductNamesByCategory("Spices")},
        // { subHeader: 'INDEX PRODUCTS', listItems: products.filter((product)=>{return product.category==="Cereals and Pulses"}) },
        { subHeader: 'OIL AND OIL SEEDS', listItems:getProductNamesByCategory("Oil and Oil seeds")},
    ]},
    { title: "MEMBERSHIP" },
    { title: "INVESTOR SERVICES" },
    { title: "TECHNOLOGY" },
    { title: "REASEARCH" },
    { title: "FPO" },
  ];

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
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const navigate = useNavigate();


  return (
    <>
    <Box sx={{ display: 'flex', width: '100%' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#fff', py: 0.8 }}> { /*  width: '90%', left: '50%', transform: 'translate(-50%)', top: '15px' , */ }
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ backgroundColor: '#000', mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to='/'><img style={{ height: '60px', maxWidth: 'none', marginRight: '30px' }} src='images/logo.png' alt="" /></Link>
          <Box>
            <List
              sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly', padding: '0' }}
            >
              {topNav.map((item, index) => (
                <Button key={index} sx={{ color: '#000' }} onClick={() => navigate(`/${toLower((item.title).replaceAll(' ', ''))}`)}>
                  {item.title}
                </Button>
              ))}
            </List>
            <hr style={{ color: '#000', margin: '0.2rem 0' }} />
            <List
              sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly', padding: '0' }}
            >
              {bottomNav.map((item, index) => (
                <Button key={index} sx={{ color: '#000' }}>
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
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
    </>
  );
}

Navbar.propTypes = {
  window: PropTypes.instanceOf(window.constructor)
}

export default Navbar;