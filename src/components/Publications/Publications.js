import React from 'react';
import { Container, Typography, Card, CardContent, CardHeader, Link, Divider, Box } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { useSpring, animated } from 'react-spring';
import mishFergusonMosher2023 from '../../assets/mishFergusonMosher2023.pdf';
import fergusonMosherDettmerMish2021 from '../../assets/ns2021FergEtAlDas.pdf';

const Publications = () => {
	const publications = [
		{
			title: 'Distributed Acoustic Sensing and Machine Learning: Rockfall Detection at Mt. Meager, B.C.',
			authors: 'Mish, J., Ferguson, R., Mosher, C.',
			conference:
				'NSG2023 29th European Meeting of Environmental and Engineering Geophysics, Sep 2023, Volume 2023, p.1 - 5',
			year: 2023,
			link: 'https://doi.org/10.3997/2214-4609.202320030',
			additional: '',
			pdf: mishFergusonMosher2023,
		},
		{
			title: 'Distributed Acoustic Sensing of daylight on a glacier in Canada: Hotspot Monitoring',
			authors: 'Ferguson, R., Mosher, C., Dettmer, J., & Mish, J.',
			conference: 'NSG2021 27th European Meeting of Environmental and Engineering Geophysics',
			year: 2021,
			link: 'https://doi.org/10.3997/2214-4609.202120218',
			additional: '',
			pdf: fergusonMosherDettmerMish2021,
		},
		{
			title: 'Javaseis cloud: A cloud-native framework for seismic io.',
			authors: 'Mosher, C. M., S. Sood, R. J. Ferguson, and Mish, J.',
			conference: '2022 Rice Oil & Gas HPC Conference',
			year: 2022,
			link: 'https://www.youtube.com/watch?v=fhp6-SSGkXg',
			additional: 'Video Recording, Houston, United States',
		},
	];

	const props = useSpring({
		from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
		to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
		delay: 160,
	});

	const [activeTray, setActiveTray] = React.useState(null);

	return (
		<Container sx={{ marginTop: '30px' }}>
			<Typography variant="h2" sx={{ marginBottom: '20px' }}>
				Publications
			</Typography>
			<animated.div style={props}>
				{publications.map((publication, index) => (
					<Box key={index} sx={{ marginBottom: '20px' }}>
						<Card
							elevation={3}
							sx={{
								borderRadius: '10px',
								transition: '0.3s',
								transform: 'scale(1)',
								'&:hover': { transform: 'scale(1.03)', boxShadow: '5px 5px 15px rgba(0,0,0,0.3)' },
							}}
							onClick={() => setActiveTray(index === activeTray ? null : index)}
						>
							<CardHeader title={publication.title} subheader={publication.authors} />
							<CardContent>
								<Typography variant="body1">{publication.conference}</Typography>
								<Typography variant="body2">{publication.year}</Typography>
								{publication.link && (
									<Link href={publication.link} target="_blank" rel="noopener">
										<Typography variant="body2" color="primary.special">
											<LinkIcon /> View Publication
										</Typography>
									</Link>
								)}
								{publication.additional && <Typography variant="body2">{publication.additional}</Typography>}
							</CardContent>
						</Card>
						{activeTray === index && (
							<Box
								sx={{ padding: '16px', backgroundColor: 'primary.background', borderRadius: '8px', marginTop: '8px' }}
							>
								{publication.pdf ? (
									<Link href={publication.pdf} download>
										Download PDF
									</Link>
								) : (
									<Typography>No PDF available for download.</Typography>
								)}
							</Box>
						)}
						{index < publications.length - 1 && <Divider />}
					</Box>
				))}
			</animated.div>
		</Container>
	);
};

export default Publications;
