// src/components/About/About.js
import React from 'react';
import { Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import jacobMishPortrait from '../../assets/jacob_mish_portrait.png';


const About = () => (
  <Container>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Avatar
          
          alt="Jacob Mish"
          src={jacobMishPortrait}
          sx={{ width: 396, height: 413 }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h2" sx={{ fontWeight: 'medium' }}>About Me</Typography>
          <Typography variant="body1">
          I am a passionate data professional with a strong focus on machine learning and data science. My educational background in geophysics and computer science has provided me with a unique perspective in tackling complex data-related challenges. Proficient in programming languages like Python, Java, and Rust, and experienced in using libraries such as Numpy, Pandas, Tensorflow, and Pytorch. My expertise includes developing ML models, creating efficient data pipelines, and utilizing cloud computing platforms like AWS and Azure. I have a strong track record of success, including predicting rock permeability with 94% accuracy and detecting geohazards using CNNs. With excellent communication and collaboration skills, I am able to effectively convey complex technical information and work well with cross-functional teams in a diverse range of projects. 

          I enjoy working on small passion projects in my free time, typically while also trying to learn some sort of new tool. I am constantly learning and trying new things and will hopefully develop some cool projects in the future.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
);

export default About;
