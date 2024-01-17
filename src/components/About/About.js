import React from 'react';
import { Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import { keyframes } from '@mui/system';
import jacobMishPortrait from '../../assets/Jacob_Mish_portrait_3.PNG';
import backgroundImage from '../../assets/IMG_7244.webp';
import ResumeDownloadButton from './ResumeDownloadButton';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const About = () => (
	<Container
		sx={{
			animation: `${fadeInAnimation} 0.8s ease-in-out`,
			animationFillMode: 'forwards',
		}}
	>
		<Grid
			container
			spacing={0}
			justifyContent={'center'}
			alignItems={'center'}
			sx={{
				background: `url(${backgroundImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				borderRadius: '2%',
			}}
		>
			<Grid item xs={8} md={3.98}>
				<Paper elevation={10} sx={{ borderRadius: '45%', background: 'transparent' }}>
					<Avatar
						alt="Jacob Mish"
						src={jacobMishPortrait}
						sx={{
							width: { xs: '80%', md: 396 }, // 80% width on small screens, 396px on medium and up
							height: { xs: 'auto', md: 413 }, // auto height on small screens, 413px on medium and up
							borderRadius: '50%',
							display: 'block', // to center the image
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
					/>
				</Paper>
			</Grid>
			<Grid item xs={8} md={6}>
				<Paper elevation={0} sx={{ padding: '30px', background: 'transparent', borderRadius: '10% 10%' }}>
					<Typography variant="h2" sx={{ color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
						Jacob Mish
					</Typography>
					<Typography variant="h5" sx={{ color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
						Machine Learning Engineer / Data Engineer
					</Typography>
				</Paper>
			</Grid>
		</Grid>
		<Grid item xs={8} md={7} justifyContent={'center'} alignItems={'center'}>
			<Paper elevation={4} sx={{ padding: '50px' }}>
				<Typography variant="h3" sx={{}}>
					About Me
				</Typography>
				<Typography variant="h7">
					<p>
						I'm Jacob Mish, a professional in the field of data and machine learning with a genuine passion for
						discovering how technology can simplify and solve complex problems. My background in Geophysics has
						instilled in me a strong analytical mindset and a keen attention to detail, qualities that I bring to every
						project I undertake.
					</p>
					<p>
						In my career, I've had the opportunity to engage with a variety of programming languages and data science
						tools, constantly learning and adapting to meet the needs of each new challenge. While I've enjoyed the
						process of developing solutions and automating tasks to drive efficiency, I believe the true reward comes
						from working collaboratively, sharing insights, and learning from the diverse perspectives of team members.
					</p>
					<p>
						Outside of my professional roles, I dedicate time to personal projects and keeping up with the latest trends
						in technology. This not only fuels my creativity but also ensures that I remain connected with the
						ever-evolving tech landscape.
					</p>
					<p>
						I approach my work with a balanced mix of curiosity, diligence, and a humble attitude, always ready to roll
						up my sleeves and tackle the next challenge. To me, success is not just about achieving personal goals, but
						also about contributing to a larger purpose and making a positive impact through my work.
					</p>

					{/* <p>
						I am a passionate data professional with a strong focus on machine learning and data science. My educational
						background in geophysics and computer science has provided me with a unique perspective in tackling complex
						data-related challenges. Proficient in programming languages like Python, Java, and Rust, and experienced in
						using libraries such as Numpy, Pandas, Tensorflow, and Pytorch. My expertise includes developing ML models,
						creating efficient data pipelines, and utilizing cloud computing platforms like AWS and Azure. I have a
						strong track record of success, including predicting rock permeability with 94% accuracy and detecting
						geohazards using CNNs. With excellent communication and collaboration skills, I am able to effectively
						convey complex technical information and work well with cross-functional teams in a diverse range of
						projects.
					</p>

					<p>
						I enjoy working on small passion projects in my free time, typically while also trying to learn some sort of
						new tool. I am constantly learning and trying new things and will hopefully develop some cool projects in
						the future.
					</p> */}
				</Typography>
			</Paper>
		</Grid>
		<ResumeDownloadButton />
	</Container>
);

export default About;
