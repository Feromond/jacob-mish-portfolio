// src/App.js
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Publications from './components/Publications/Publications';
import Projects from './components/Projects/Projects';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from './theme';

function App() {
	const storedTheme = localStorage.getItem('themeMode') || 'light';
	const [themeMode, setThemeMode] = useState(storedTheme);

	const toggleTheme = () => {
		setThemeMode((prevMode) => {
			const newMode = prevMode === 'dark' ? 'light' : 'dark';
			localStorage.setItem('themeMode', newMode);
			return newMode;
		});
	};

	useEffect(() => {
		const localTheme = localStorage.getItem('themeMode');
		if (localTheme) {
			setThemeMode(localTheme);
		}
	}, []);

	const theme = themeMode === 'dark' ? darkTheme : lightTheme;

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Helmet>
				<meta name="theme-color" content="#673AAC" />
			</Helmet>
			<Router>
				<Navigation themeMode={themeMode} toggleTheme={toggleTheme} />
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/experience" element={<Experience />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/education" element={<Education />} />
					<Route path="/publications" element={<Publications />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
				<Footer />
			</Router>
		</ThemeProvider>
	);
}

export default App;
