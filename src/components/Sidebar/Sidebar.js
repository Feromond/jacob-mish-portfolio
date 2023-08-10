import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { IconButton, Box, Drawer, List, ListItem, useTheme } from '@mui/material';
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material';

const Sidebar = ({ themeMode, toggleTheme }) => {
  const theme = useTheme();

  // Start with the drawer closed
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = ['About', 'Experience', 'Skills', 'Education', 'Publications', 'Social Links'].map((text, index) => (
    <ListItem
      key={text}
      button
      component={RouterLink}
      to={`/${text.toLowerCase() === 'about' ? '' : text.toLowerCase().replace(' ', '-')}`}
      sx={{
        textTransform: 'none',
        fontWeight: 'medium',
        padding: '12px 16px',
        color: 'white', // White text color
        '&:hover': {
          backgroundColor: themeMode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
          borderRadius: '4px',
        },
      }}
      onClick={handleDrawerToggle}
    >
      {text}
    </ListItem>
  ));

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton edge="start" color="inherit" onClick={handleDrawerToggle} sx={{ marginLeft: 2 }}>
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          width: 250,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
        PaperProps={{
          style: {
            backgroundColor: themeMode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
            overflowX: 'hidden',
            width: 250,
          },
        }}
      >
        <List>
          {menuItems}
        </List>
      </Drawer>
      <IconButton edge="end" color="inherit" onClick={toggleTheme} sx={{ position: 'absolute', top: 16, right: 16 }}>
        {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  );
};

export default Sidebar;
