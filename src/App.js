// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import SocialLinks from './components/Sociallinks/SocialLinks';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Light Blue
    },
    secondary: {
      main: '#f48fb1', // Pink
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#e0e0e0', // Light Grey
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h2: {
      fontWeight: 500,
      fontSize: 32,
    },
    h5: {
      fontWeight: 400,
      fontSize: 20,
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Dark Blue
    },
    secondary: {
      main: '#e57373', // Light Red
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333', // Dark Grey
    },
  },
  typography: {
    fontFamily: 'Georgia, serif',
    h2: {
      fontWeight: 500,
      fontSize: 32,
    },
    h5: {
      fontWeight: 400,
      fontSize: 20,
    },
  },
});


function App() {
  const [themeMode, setThemeMode] = useState('light');
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  const theme = themeMode === 'dark' ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <Header themeMode={themeMode} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/social-links" element={<SocialLinks />} />
          </Routes>
          <Footer />
        </Router>
    </ThemeProvider>
  );
}

export default App;
