import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Home', 'Gallery', 'Contact'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {  

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = event => {
    setAnchorElNav(null);
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography sx={{mr: 2, display: {xs: "none", sm: "flex"}}}>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/gallery" end>Gallery</NavLink>
            <NavLink to="/contact" end>Contact</NavLink>
            </Typography>
            <Box sx={{flexGrow: 1, display: {xs: "flex", sm: "none"}}} >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;