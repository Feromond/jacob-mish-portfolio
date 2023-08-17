import React from 'react';
import { Card, CardContent, CardMedia, CardActions, Typography, IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)`
	transition: transform 0.3s;
	&:hover {
		transform: scale(1.05);
	}
`;

function ProjectCard({ title, description, imageUrl, repoUrl }) {
	return (
		<StyledCard>
			<CardMedia component="img" height="140" image={imageUrl} alt={title} />
			<CardContent>
				<Typography variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<IconButton
					aria-label="go to github repository"
					onClick={() => window.open(repoUrl, '_blank')}
					sx={{ color: '#673AAC' }}
				>
					<GitHub />
				</IconButton>
			</CardActions>
		</StyledCard>
	);
}

export default ProjectCard;
