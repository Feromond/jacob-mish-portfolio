import React from 'react';
import { Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import jacobMishPortrait from '../../assets/jacob_mish_portrait.png';
import backgroundImage from '../../assets/IMG_7244.jpeg';

const About = () => (
  <Container >
    <Grid container spacing={0} justifyContent={"center"} alignItems={"center"} 
          sx={{ background: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '2%'}}>
      <Grid item xs={8} md={3.98}>
      <Avatar
        alt="Jacob Mish"
        src={jacobMishPortrait}
        sx={{
          width: { xs: '80%', md: 396 }, // 80% width on small screens, 396px on medium and up
          height: { xs: 'auto', md: 413 }, // auto height on small screens, 413px on medium and up
          borderRadius: '50%', 
          border: '12px solid #FFFF',
          display: 'block', // to center the image
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
      </Grid>
      <Grid item xs={8} md={6}>
        <Paper elevation={3} sx={{ padding: '40px', background: 'rgba(255, 255, 255, 0.9)', borderRadius: '10% 10%'}}>
          <Typography variant="h2" sx={{color: '#333' }}>Jacob Mish</Typography>
          <Typography variant="h5" sx={{color: '#333' }}>Machine Learning Engineer / Data Engineer</Typography>
        </Paper>
      </Grid>
    </Grid>
    <Grid item xs={8} md={7} justifyContent={"center"} alignItems={"center"}>
        <Paper elevation={4} sx={{ padding: '50px' }}>
          <Typography variant="h2" sx={{}}>About Me</Typography>
          <Typography variant="h6">
            <p>I am a passionate data professional with a strong focus on machine learning and data science. My educational background in geophysics and computer science has provided me with a unique perspective in tackling complex data-related challenges. Proficient in programming languages like Python, Java, and Rust, and experienced in using libraries such as Numpy, Pandas, Tensorflow, and Pytorch. My expertise includes developing ML models, creating efficient data pipelines, and utilizing cloud computing platforms like AWS and Azure. I have a strong track record of success, including predicting rock permeability with 94% accuracy and detecting geohazards using CNNs. With excellent communication and collaboration skills, I am able to effectively convey complex technical information and work well with cross-functional teams in a diverse range of projects.</p>

            <p>I enjoy working on small passion projects in my free time, typically while also trying to learn some sort of new tool. I am constantly learning and trying new things and will hopefully develop some cool projects in the future.</p>
          </Typography>
        </Paper>
      </Grid>
  </Container>

  
);

export default About;