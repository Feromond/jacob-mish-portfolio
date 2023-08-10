import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Chip, Avatar, List, ListItem, ListItemText, ListItemIcon, Slide, Zoom, Divider } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LibraryIcon from '@mui/icons-material/LibraryBooks';
import ToolsIcon from '@mui/icons-material/Build';
import VersionControlIcon from '@mui/icons-material/SystemUpdateAlt';
import DatabaseIcon from '@mui/icons-material/Storage';
import FrameworkIcon from '@mui/icons-material/Widgets';
import VisualizationIcon from '@mui/icons-material/BarChart';
import CommunicationIcon from '@mui/icons-material/Chat';
import CollaborationIcon from '@mui/icons-material/GroupWork';
import { styled } from '@mui/system';

const StyledChip = styled(Chip)`
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.1);
    background-color: rgba(0, 150, 136, 0.8); // Example color
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
  }
`;

const technicalSkills = {
  Programming: { skills: ['Python', 'Rust', 'Java', 'MATLAB', 'Typescript', 'Swift', 'SQL'], icon: <CodeIcon /> },
  Libraries: { skills: ['Numpy', 'Pandas', 'Scikit-learn', 'Tensorflow', 'Pytorch', 'Keras', 'Scipy', 'Obspy'], icon: <LibraryIcon /> },
  Tools: { skills: ['Azure ML Studio', 'Databricks', 'Amazon Web Services', 'Docker', 'MatGPR', 'R2'], icon: <ToolsIcon /> },
  'V-Control': { skills: ['Git/Github', 'Azure DevOps', 'GitLab'], icon: <VersionControlIcon /> },
  Database: { skills: ['Databricks SQL', 'MySQL', 'Microsoft SQL Server', 'Oracle SQL'], icon: <DatabaseIcon /> },
  Frameworks: { skills: ['React Native', 'Streamlit', 'Flask'], icon: <FrameworkIcon /> },
  Visualizations: { skills: ['Matplotlib', 'Plotly', 'Seaborn', 'Tableau', 'PowerBI'], icon: <VisualizationIcon /> },
};

const softSkills = [
  { skill: 'Strong communication skills - demonstrated through the ability to convey complex technical information to a non-technical audience through presentations', icon: <CommunicationIcon sx={{ color: 'primary.dark' }} /> },
  { skill: 'Collaboration skill - working with others and sharing ideas/feedback to produce effective results efficiently while maintaining a positive environment', icon: <CollaborationIcon sx={{ color: 'primary.dark' }} /> },
];


const Skills = () => {
    const [showSoftSkills, setShowSoftSkills] = useState(false);

    // Calculate the total delay for technical skills, assuming each takes 300ms to animate
    const technicalSkillsDelay = Object.keys(technicalSkills).length * 150;

    useEffect(() => {
        const timeout = setTimeout(() => {
        setShowSoftSkills(true);
        }, technicalSkillsDelay);

        return () => clearTimeout(timeout); // Clear timeout if the component unmounts
    }, [technicalSkillsDelay]);

    return(
    <Container sx={{ marginTop: '30px', padding: '20px', borderRadius: '15px' }}>
        <Typography variant="h2" sx={{ marginBottom: '20px' }}>Skills</Typography>
        <Typography variant="h3" sx={{ color: 'secondary.main' }}>Technical Skills</Typography>
        <Grid container spacing={3}>
            {Object.entries(technicalSkills).map(([category, { skills, icon }], index) => {
                const colorIndex = index % 3;
                let chipColor = 'error';
                let avatarColor = 'error.main';

                if (colorIndex === 1) {
                    chipColor = 'primary';
                    avatarColor = 'primary.main';
                } else if (colorIndex === 2) {
                    chipColor = 'secondary';
                    avatarColor = 'secondary.main';
                }

                return (
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={index * 300} key={category}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" sx={{ color: 'info.main' }}>
                        <Avatar sx={{ bgcolor: avatarColor, marginRight: '5px' }}>{icon}</Avatar>
                        {category}:
                        </Typography>
                        {skills.map(skill => (
                        <Zoom in={true} timeout={1000} key={skill}>
                            <StyledChip label={skill} variant="filled" color={chipColor} sx={{ margin: '5px' }} />
                        </Zoom>
                        ))}
                    </Grid>
                    </Slide>
                );
            })}
            </Grid>
        <Divider sx={{ marginY: '30px' }} />
        <Typography variant="h3" sx={{ marginTop: '20px', color: 'secondary.main' }}>Soft Skills</Typography>
        <List>
        {softSkills.map(({ skill, icon }, idx) => (
          <Slide
            direction="right"
            in={showSoftSkills}
            mountOnEnter
            unmountOnExit
            timeout={technicalSkillsDelay + 500 + idx * 1000} // Additional 500ms delay for the first one
            key={idx}
          >
            <ListItem>
              <ListItemIcon sx={{ color: 'primary.main' }}>{icon}</ListItemIcon>
              <ListItemText primary={skill} />
            </ListItem>
          </Slide>
        ))}
      </List>
    </Container>
    );
};
  
export default Skills;