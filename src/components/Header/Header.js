import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Header = ({ themeMode, toggleTheme }) => (
  <AppBar position="static" sx={{ background: themeMode === 'dark' ? '#333' : '#2196f3', boxShadow: 'none' }}>
    <Toolbar sx={{ padding: '0 15px' }}>
      <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', marginLeft: '15px', letterSpacing: '1px' }}>
        Portfolio Website
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          '& > :not(style):not(:last-child)': { mr: 2 },
        }}
      >
        {['About', 'Experience', 'Skills', 'Education', 'Publications', 'Social Links'].map((text, index) => (
          <Button
            color="inherit"
            component={RouterLink}
            to={`/${text.toLowerCase() === 'about' ? '' : text.toLowerCase().replace(' ', '-')}`}
            sx={{
              textTransform: 'none',
              fontWeight: 'medium',
              padding: '6px 8px',
              '&:hover': {
                backgroundColor: themeMode === 'dark' ? '#444' : '#90caf9',
                borderRadius: '4px',
              },
            }}
          >
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
