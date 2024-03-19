import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import mlProjectDemoImg from '../../assets/ML_project_Demo_Img.jpeg';
import portfolioWebsiteImg from '../../assets/my_portfolio_website_screenshot.png';
import filteringTechniquesImg from '../../assets/filtering_techniques_img.png';
import moodTrackerJavaImg from '../../assets/MoodTrackerJavaImg.png';
import fftRustImg from '../../assets/fftrustImg.png';
import hypixelAPIrustImg from '../../assets/hypixelbazzarRustImg.png';
import rustSnakeGameImg from '../../assets/rust_snake_game.jpeg';

const ProjectHeader = styled(Typography)`
	margin-bottom: 40px;
	text-align: center;
`;

const staggerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.16,
			staggerChildren: 0.16,
		},
	},
};

const itemVariants = {
	hidden: { y: -20, opacity: 0 },
	visible: { y: 0, opacity: 1 },
};

function ProjectsPage() {
	const projects = [
		{
			title: 'Machine Learning Pipeline',
			description:
				'Our goal with this ML pipeline template is to create a user friendly utility to drastically speed up the development and implementation of a machine learning model for all sorts of various problems.',
			imageUrl: mlProjectDemoImg,
			repoUrl: 'https://github.com/zamaniali1995/ml-pipeline',
		},
		{
			title: 'My Portfolio Website',
			description:
				'My portfolio website which I created using React and some Material UI components to demonstrate some web development skills and have another medium to display my resume and projects',
			imageUrl: portfolioWebsiteImg,
			repoUrl: 'https://github.com/Feromond/jacob-mish-portfolio',
		},
		{
			title: 'Rust Snake Game',
			description:
				'A very simple snake game created in the programming langauge Rust! Supports all kinds of collisions, maintains highscores, includes a main menu screen.',
			imageUrl: rustSnakeGameImg,
			repoUrl: 'https://github.com/Feromond/rust_snake_game',
		},
		{
			title: 'Hypixel Bazzar API - Rust',
			description:
				'Uses hypixel-api to grab bazaar item product information in near-real-time and displays the data visually in the command line.',
			imageUrl: hypixelAPIrustImg,
			repoUrl: 'https://github.com/Feromond/hypixel-bazaar-api',
		},
		{
			title: 'Filter Techniques',
			description: 'Using Prediction Filters, Bandpass Filters (Ormsby & Butterworth), and Match Filters on data.',
			imageUrl: filteringTechniquesImg,
			repoUrl: 'https://github.com/Feromond/FilteringTechniques',
		},
		{
			title: 'Fast Fourier Transform In Rust',
			description: 'Small project to help me learn Rust and develop skills.',
			imageUrl: fftRustImg,
			repoUrl: 'https://github.com/Feromond/fft_rust',
		},
		{
			title: 'Mood Tracker - Java',
			description: 'A mood tracker for daily recording of how a person feels using a JavaFX UI.',
			imageUrl: moodTrackerJavaImg,
			repoUrl: 'https://github.com/Feromond/MoodTrackerJavaEdition',
		},
	];

	return (
		<Container>
			<Box mt={4}>
				<ProjectHeader variant="h2" gutterBottom>
					My Projects
				</ProjectHeader>
				<Grid
					container
					spacing={4}
					component={motion.div}
					variants={staggerVariants}
					initial="hidden"
					animate="visible"
				>
					{projects.map((project, index) => (
						<Grid item xs={12} sm={6} md={4} key={index} component={motion.div} variants={itemVariants}>
							<ProjectCard {...project} />
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
}

export default ProjectsPage;
