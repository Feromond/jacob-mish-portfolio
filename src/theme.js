// src/theme.js
import { createTheme } from '@mui/material/styles';

export function remToPx(value) {
	return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
	return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }) {
	return {
		'@media (min-width:600px)': {
			fontSize: pxToRem(sm),
		},
		'@media (min-width:900px)': {
			fontSize: pxToRem(md),
		},
		'@media (min-width:1200px)': {
			fontSize: pxToRem(lg),
		},
	};
}

const FONT_PRIMARY = 'Public Sans, sans-serif'; // Google Font

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			special: '#673AAC',
			lighter: '#3A5A97',
			light: '#234A8D',
			main: '#103996',
			dark: '#061B64',
			darker: '#020A32',
			contrastText: '#fff',
		},
		secondary: {
			lighter: '#577AB7',
			light: '#3A66B7',
			main: '#1939B7',
			dark: '#091A7A',
			darker: '#040E3D',
			contrastText: '#fff',
		},
		background: {
			paper: '#1E1E1E',
			default: '#121212',
			neutral: '#121212',
		},
		text: {
			primary: '#E0E0E0',
			secondary: '#B0B0B0',
			disabled: '#757575',
		},
	},
	typography: {
		fontFamily: FONT_PRIMARY,
		fontWeightRegular: 400,
		fontWeightMedium: 600,
		fontWeightBold: 700,
		h1: {
			fontWeight: 800,
			lineHeight: 80 / 64,
			fontSize: pxToRem(40),
			...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
		},
		h2: {
			fontWeight: 800,
			lineHeight: 64 / 48,
			fontSize: pxToRem(32),
			...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
		},
		h3: {
			fontWeight: 700,
			lineHeight: 1.5,
			fontSize: pxToRem(24),
			...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
		},
		h4: {
			fontWeight: 700,
			lineHeight: 1.5,
			fontSize: pxToRem(20),
			...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
		},
		h5: {
			fontWeight: 700,
			lineHeight: 1.5,
			fontSize: pxToRem(18),
			...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
		},
		h6: {
			fontWeight: 700,
			lineHeight: 28 / 18,
			fontSize: pxToRem(17),
			...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
		},
		subtitle1: {
			fontWeight: 600,
			lineHeight: 1.5,
			fontSize: pxToRem(16),
		},
		subtitle2: {
			fontWeight: 600,
			lineHeight: 22 / 14,
			fontSize: pxToRem(14),
		},
		body1: {
			lineHeight: 1.5,
			fontSize: pxToRem(16),
		},
		body2: {
			lineHeight: 22 / 14,
			fontSize: pxToRem(14),
		},
		caption: {
			lineHeight: 1.5,
			fontSize: pxToRem(12),
		},
		overline: {
			fontWeight: 700,
			lineHeight: 1.5,
			fontSize: pxToRem(12),
			textTransform: 'uppercase',
		},
		button: {
			fontWeight: 700,
			lineHeight: 24 / 14,
			fontSize: pxToRem(14),
			textTransform: 'capitalize',
		},
	},
});

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			special: '#673AAC',
			lighter: '#D1E9FC',
			light: '#76B0F1',
			main: '#2065D1',
			dark: '#103996',
			darker: '#061B64',
			contrastText: '#fff',
		},
		secondary: {
			lighter: '#D6E4FF',
			light: '#84A9FF',
			main: '#3366FF',
			dark: '#1939B7',
			darker: '#091A7A',
			contrastText: '#fff',
		},
		background: {
			paper: '#fff',
			default: '#F4F6F8',
			neutral: '#F4F6F8',
		},
		text: {
			primary: '#212B36',
			secondary: '#637381',
			disabled: '#919EAB',
		},
	},
	typography: {
		fontFamily: FONT_PRIMARY,
		fontWeightRegular: 400,
		fontWeightMedium: 600,
		fontWeightBold: 700,
		h1: {
			fontWeight: 800,
			lineHeight: 80 / 64,
			fontSize: pxToRem(40),
			...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
		},
		h2: {
			fontWeight: 800,
			lineHeight: 64 / 48,
			fontSize: pxToRem(32),
			...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
		},
		h3: {
			fontWeight: 700,
			lineHeight: 1.5,
			fontSize: pxToRem(24),
			...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
		},
		h4: {
			fontWeight: 700,
			lineHeight: 1.5,
			fontSize: pxToRem(20),
			...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
		},
		h5: {
			fontWeight: 700,
			lineHeight: 1.5,
			fontSize: pxToRem(18),
			...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
		},
		h6: {
			fontWeight: 700,
			lineHeight: 28 / 18,
			fontSize: pxToRem(17),
			...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
		},
		subtitle1: {
			fontWeight: 600,
			lineHeight: 1.5,
			fontSize: pxToRem(16),
		},
		subtitle2: {
			fontWeight: 600,
			lineHeight: 22 / 14,
			fontSize: pxToRem(14),
		},
		body1: {
			lineHeight: 1.5,
			fontSize: pxToRem(16),
		},
		body2: {
			lineHeight: 22 / 14,
			fontSize: pxToRem(14),
		},
		caption: {
			lineHeight: 1.5,
			fontSize: pxToRem(12),
		},
		overline: {
			fontWeight: 700,
			lineHeight: 1.5,
			fontSize: pxToRem(12),
			textTransform: 'uppercase',
		},
		button: {
			fontWeight: 700,
			lineHeight: 24 / 14,
			fontSize: pxToRem(14),
			textTransform: 'capitalize',
		},
	},
});
