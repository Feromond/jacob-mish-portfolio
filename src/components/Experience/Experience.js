import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Avatar, Slide, Divider, List, ListItem, ListItemText } from '@mui/material';
import strathconaLogo from '../../assets/strathconaLogo.png';
import altaMLLogo from '../../assets/altaml-logo.png';
import uofcLogo from '../../assets/uofcLogo.png';
import irisLogo from '../../assets/irisLogo.png';


const experiences = [
    {
      title: 'Data Developer',
      duration: 'March 2023 - Present',
      company: 'Strathcona Resources LTD.',
      location: 'Calgary, AB',
      logo: strathconaLogo,
      shape: 'round',
      zoom: 1,
      responsibilities: [
        'Utilized LLM Transformers to create a Q&A chatbot with contextual knowledge of company HR documentation.',
        'Developed a Streamlit-based web app featuring Azure Single Sign-On authentication, managed group-based permissions, and integration with multiple APIs, centralizing access to diverse tools for enhanced user experience.',
        'Utilize various REST APIs to collect data, automate tasks, and gather insights for business intelligence purposes.',
        'Design and develop curated tables from raw data to provide valuable insights for various teams across the organization.',
        'Create automated workflows for efficient data collection, cleaning, and transformation, generating curated data ready for analysis and visualization.',
        'Optimize cloud compute costs by configuring ideal settings for specific tasks and improving script runtime efficiency.',
        'Implement data validation, data transformation, and data quality checks to ensure data consistency and accuracy.',
        'Stay current with industry trends and best practices in data engineering and technologies to continuously improve data infrastructure and workflows.',
      ],
    },
    {
      title: 'Associate Machine Learning Developer (4-Month Contract)',
      duration: 'September 2022 - December 2022',
      company: 'AltaML',
      location: 'Calgary, AB - Hybrid',
      logo: altaMLLogo,
      shape: 'round',
      zoom: 1,
      responsibilities: [
        'Implemented tree-based regression algorithms for predicting the permeability of rock core images with an accuracy of 94%, saving the client upwards of $10 million dollars.',
        'Conducted error analysis to further improve model performance.',
        'Prepared visualizations and presented weekly updates to clients.',
        'Developed a Machine Learning pipeline from scratch on Azure.',
        'Competed in a Microsoft-hosted hackathon, and created an application utilizing Natural Language Processing (NLP) to extract moods from journals.',
      ],
    },
    {
      title: 'Undergraduate Researcher',
      duration: 'December 2020 – February 2022',
      company: 'University Of Calgary',
      location: 'Calgary, AB',
      logo: uofcLogo,
      shape: 'round',
      zoom: 1,
      responsibilities: [
        'Published and presented as primary speaker at EAGE Edinburgh',
        'Used Machine Learning / Convolutional Neural Networks (CNN’s) from Python Tensorflow to Detect Near Surface Geohazards from Distributed Acoustic Sensing (DAS) Data',
        'Utilized signal processing techniques to filter and process raw data',
        'Worked with AWS cloud computing to store and handle large data volumes',
        'Generated figures and graphics to display analysis and results',
        'Built interpretation of results from statistical analysis',
        'Published in Near Surface Geoscience Conference & Exhibition',
      ],
    },
    {
      title: 'IRIS Intern',
      duration: 'May 2020 – September 2020',
      company: 'Incorporated Research Institutions for Seismology (IRIS) & University of Miami',
      location: 'Online / Remote',
      logo: irisLogo,
      shape: 'square',
      zoom: 1,
      responsibilities: [
        'Worked with Linux (Shell Scripting, AWK, GMT), Seismic Analysis Code (SAC), Web Services (IRIS DATABASE), Python (Pandas, Numpy, Obspy)',
        'Processed Seismic data from Web-Services and identified epicenters and hypocenters of events, along with magnitudes',
        'Determined principal functions of events using models and predicted likelihood of future events',
        'Used seismic data to create a model showing changes in human activity after COVID-19 pandemic restrictions were set in place',
        'Differentiated between natural seismic events and human-related activity (bomb testing)',
      ],
    },
  ];
  
  

const Experience = () => (
<Container sx={{ marginTop: '30px' }}>
    <Typography variant="h2" sx={{ marginBottom: '20px', textAlign: 'left' }}>Experience</Typography>
    {experiences.map((exp, idx) => (
    <Slide direction="down" in={true} timeout={(idx + 1) * 400} key={exp.title}>
        <Grid container spacing={3} direction={idx % 2 === 0 ? 'row' : 'row-reverse'} sx={{ marginBottom: '20px' }} alignItems="center" justifyContent="center">
        <Grid item xs={24} md={2} container justifyContent="center">
            <Avatar
            alt={exp.company}
            src={exp.logo}
            sx={{
                width: { xs: 100, md: 150 },
                height: { xs: 100, md: 150 },
                borderRadius: exp.shape === 'round' ? '50%' : '10%',
                transform: `scale(${exp.zoom || 1})`,
            }}
            />
        </Grid>
        <Grid item xs={24} md={10}>
            <Card variant="outlined" elevation={0} sx={{ borderRadius: '20px' }}>
            <CardContent>
                <Typography variant="h5">{exp.title}</Typography>
                <Typography variant="h6">{exp.duration} | {exp.company} | {exp.location}</Typography>
                <ul>
                {exp.responsibilities.map((responsibility) => (
                    <li key={responsibility}><Typography variant="body1">{responsibility}</Typography></li>
                ))}
                </ul>
            </CardContent>
            </Card>
        </Grid>
        </Grid>
    </Slide>
    ))}
    <Divider sx={{ marginY: '30px' }} />
    <div>
      <Typography variant="h3" sx={{ marginBottom: '10px', textAlign: 'left' }}>
        Other Experiences
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Medical Office Assistant"
            secondary="Dr. Noiles & Mish Medical Clinic"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Pizza Restaurant Supervisor"
            secondary="Andaros Pizza"
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Volunteer" secondary="Youth Central" />
        </ListItem>
      </List>
    </div>
</Container>
);

export default Experience;




