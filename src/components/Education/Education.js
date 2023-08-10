import React from 'react';
import { Container, Typography, Grid, Paper, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import UniversityIcon from '@mui/icons-material/AccountBalance';
import { useSpring, animated } from 'react-spring';

const EducationCard = ({ Icon, title, subtitle, degree, listItems }) => {
  const [style, set] = useSpring(() => ({
    transform: 'translate3d(0,0,0)',
    boxShadow: '0px 6px 10px -4px rgba(0, 0, 0, 0.1)',
  }));

  return (
    <animated.div
      style={style}
      onMouseEnter={() => set({ transform: 'translate3d(0,-10px,0)', boxShadow: '0px 12px 18px -6px rgba(0, 0, 0, 0.5)' })}
      onMouseLeave={() => set({ transform: 'translate3d(0,0px,0)', boxShadow: '0px 6px 10px -4px rgba(0, 0, 0, 0.1)' })}
    >
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <ListItemIcon>
          <Icon color="primary" style={{ fontSize: 50 }} />
        </ListItemIcon>
        <Typography variant="h4" sx={{ fontWeight: '500' }}>{title}</Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: '400', marginBottom: '10px' }}>{subtitle}</Typography>
        <Typography variant="h6" sx={{ fontWeight: '400', marginBottom: '10px' }}>{degree}</Typography>
        <List>
          {listItems.map((item, index) => (
            <ListItem key={index}><ListItemText>{item}</ListItemText></ListItem>
          ))}
        </List>
      </Paper>
    </animated.div>
  );
};

const Education = () => {
  return (
    <Container sx={{ marginTop: '30px' }}>
      <Typography variant="h2" sx={{ marginBottom: '20px' }}>Education</Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <EducationCard
            Icon={UniversityIcon}
            title="University Of Calgary"
            subtitle="Calgary, AB:    September 2018 - May 2022"
            degree="Bachelor of Science in Geophysics"
            listItems={[
              "GPA: 3.7/4.0 Last 90 Credits",
              "Graduated With Distinction",
              "Elected as Geophysics Representative of the Graduating Class of 2022",
              "Suncor Energy Emerging Leaders Science Scholarship",
              "(PURE) Program for Undergraduate Research Experience Award",
              "Faculty of Science Deans List",
              "Jason Lang Scholarship",
            ]}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <EducationCard
            Icon={SchoolIcon}
            title="St.Mary’s Highschool"
            subtitle="Calgary, AB - Graduated May 2018"
            degree="High School Diploma"
            listItems={[
              "Full Alexander Rutherford Scholarship",
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Education;
