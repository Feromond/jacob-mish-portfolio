// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import SocialLinks from './components/Sociallinks/SocialLinks';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
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
  );
}

export default App;
