import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/system';
import resumePDF from '../../assets/Jacob_Mish_Resume.pdf';

const StyledDownloadButton = styled(Button)(({ theme }) => ({
	margin: theme.spacing(2),
	padding: theme.spacing(1, 2),
	color: theme.palette.primary.contrastText,
	backgroundColor: theme.palette.primary.special,
	'&:hover': {
		backgroundColor: theme.palette.primary.dark,
	},
}));

function ResumeDownloadButton() {
	return (
		<Box display="flex" justifyContent="center">
			<Tooltip title="Download my updated resume created in LaTeX">
				<StyledDownloadButton variant="contained" href={resumePDF} download="Jacob_Mish_Resume.pdf">
					Download Resume
				</StyledDownloadButton>
			</Tooltip>
		</Box>
	);
}

export default ResumeDownloadButton;
