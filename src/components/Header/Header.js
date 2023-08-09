// src/components/Header/Header.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Jacob Mish's Portfolio Website
      </Typography>
      <Button color="inherit" component={RouterLink} to="/">About</Button>
      <Button color="inherit" component={RouterLink} to="/experience">Experience</Button>
      <Button color="inherit" component={RouterLink} to="/skills">Skills</Button>
      <Button color="inherit" component={RouterLink} to="/education">Education</Button>
      <Button color="inherit" component={RouterLink} to="/projects">Projects</Button>
      <Button color="inherit" component={RouterLink} to="/social-links">Social Links</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
