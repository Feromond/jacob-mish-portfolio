import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { IconButton, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Brightness4, Brightness7, Menu as MenuIcon, Home, Work, School, Book, BarChart, Assessment } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

const Sidebar = ({ themeMode, toggleTheme }) => {
  const theme = useTheme();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  
  const menuIcons = [<Home />, <Work />, <BarChart />, <School />, <Book />, <Assessment />];
  const iconColors = ['#F94144', '#F3722C', '#F8961E', '#F9C74F', '#90BE6D', '#43AA8B'];
  
  const location = useLocation();
  const menuItems = ['About', 'Experience', 'Skills', 'Education', 'Publications', 'Projects'].map((text, index) => {
    const path = `/${text.toLowerCase() === 'about' ? '' : text.toLowerCase().replace(' ', '-')}`;

    return (
      <ListItem
        key={text}
        button
        component={RouterLink}
        to={path}
        sx={{
          textTransform: 'none',
          fontWeight: 'medium',
          padding: '12px 16px',
          color: theme.palette.text.primary,
          backgroundColor: location.pathname === path ? (themeMode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light) : 'transparent', // Highlight current page
          transition: 'transform .2s, box-shadow .2s',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundColor: themeMode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
            borderRadius: '4px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          },
        }}
        onClick={handleDrawerToggle}
      >
        <ListItemIcon sx={{ color: iconColors[index] }}>{menuIcons[index]}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    );
  });


  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton 
      edge="start" 
      color="inherit" 
      onClick={handleDrawerToggle} 
      sx={{ 
        marginLeft: 2,
        '&:hover': {
          backgroundColor: '#673AAC', 
        },
      }}>
      <MenuIcon sx={{ fontSize: 45, color: '#F94144' }} /> 
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
            backgroundColor: themeMode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
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
