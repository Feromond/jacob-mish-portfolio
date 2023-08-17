import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	useMediaQuery,
	Box,
	useTheme,
} from '@mui/material';
import {
	Brightness4,
	Brightness7,
	Menu as MenuIcon,
	Home,
	Work,
	School,
	Book,
	BarChart,
	Assessment,
} from '@mui/icons-material';
import { styled } from '@mui/system';

const menuIcons = [<Home />, <Work />, <BarChart />, <School />, <Book />, <Assessment />];
const iconColors = ['#F94144', '#F3722C', '#F8961E', '#F9C74F', '#90BE6D', '#43AA8B'];

const menuItems = ['About', 'Experience', 'Skills', 'Education', 'Publications', 'Projects'].map((text, index) => {
	const path = `/${text.toLowerCase() === 'about' ? '' : text.toLowerCase().replace(' ', '-')}`;
	return {
		text,
		path,
		icon: menuIcons[index],
	};
});

// StyledLink for the hover underline effect
const StyledLink = styled(RouterLink)`
	text-decoration: none;
	color: inherit;
	position: relative;
	padding: 0 15px;
	font-weight: bold;
	margin: 0 5px;
	display: flex;
	align-items: center;

	&:hover::before,
	&.active::before {
		width: 100%;
		visibility: visible;
	}

	&::before {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: currentColor;
		visibility: hidden;
		transition: all 0.3s ease-in-out;
	}

	// New styles to change the color based on index
	${menuItems.map(
		(item, index) => `
      &[href="${item.path}"] {
        color: ${iconColors[index]}; 
      }
    `
	)}
`;

function Navigation({ themeMode, toggleTheme }) {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const location = useLocation();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('lg')); // change to 'xs' for an earlier breakpoint

	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			{isMobile ? (
				// For Mobile View
				<>
					<IconButton
						edge="start"
						color="inherit"
						sx={{
							marginLeft: 2,
							'&:hover': {
								backgroundColor: '#673AAC',
							},
						}}
						onClick={() => setDrawerOpen(!drawerOpen)}
					>
						<MenuIcon sx={{ fontSize: 25, color: '#F94144' }} />
					</IconButton>
					<Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
						<List>
							{menuItems.map((item, index) => (
								<ListItem button key={index} onClick={() => setDrawerOpen(false)}>
									<StyledLink to={item.path} className={location.pathname === item.path ? 'active' : ''}>
										<ListItemIcon sx={{ color: iconColors[index] }}>{item.icon}</ListItemIcon>
										<ListItemText primary={item.text} />
									</StyledLink>
								</ListItem>
							))}
						</List>
					</Drawer>
					<IconButton edge="end" color="inherit" onClick={toggleTheme} sx={{ position: 'absolute', top: 0, right: 16 }}>
						{themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
					</IconButton>
				</>
			) : (
				// For Desktop View
				<AppBar position="static" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)' }}>
					<Toolbar>
						<Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
							{menuItems.map((item, index) => (
								<StyledLink key={index} to={item.path} className={location.pathname === item.path ? 'active' : ''}>
									{item.icon} {item.text}
								</StyledLink>
							))}
						</Box>
						<IconButton
							edge="end"
							color="inherit"
							onClick={toggleTheme}
							sx={{ position: 'absolute', top: 0, right: 16 }}
						>
							{themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
						</IconButton>
					</Toolbar>
				</AppBar>
			)}
		</Box>
	);
}

export default Navigation;
