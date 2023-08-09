import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Header = ({ themeMode, toggleTheme }) => (
  <AppBar position="static" sx={{ background: themeMode === 'dark' ? '#333' : '#2196f3' }}>
    <Toolbar>
      <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold', marginLeft: '15px' }}>
        Portfolio Website
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {['About', 'Experience', 'Skills', 'Education', 'Projects', 'Social Links'].map((text, index) => (
          <Button 
            color="inherit" 
            component={RouterLink} 
            to={`/${text.toLowerCase() === 'about' ? '' : text.toLowerCase().replace(' ', '-')}`} 
            sx={{ textTransform: 'none', fontWeight: 'medium' }}>
            {text}
          </Button>
        ))}
        <IconButton edge="end" color="inherit" onClick={toggleTheme}>
          {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
