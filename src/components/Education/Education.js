import React from 'react';
import { Container, Typography, Grid, Paper, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import UniversityIcon from '@mui/icons-material/AccountBalance';

const Education = () => (
  <Container sx={{ marginTop: '30px' }}>
    <Typography variant="h2" sx={{ marginBottom: '20px'}}>Education</Typography>

    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ padding: '20px' }}>
          <ListItemIcon>
            <UniversityIcon color="primary" style={{ fontSize: 50 }} />
          </ListItemIcon>
          <Typography variant="h4" sx={{ fontWeight: '500' }}>University Of Calgary</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: '400', marginBottom: '10px' }}>Calgary, AB:    September 2018 - May 2022</Typography>
          <Typography variant="h6" sx={{ fontWeight: '400', marginBottom: '10px' }}>Bachelor of Science in Geophysics</Typography>
          <List>
            <ListItem><ListItemText>GPA: 3.7/4.0 Last 90 Credits</ListItemText></ListItem>
            <ListItem><ListItemText>Graduated With Distinction</ListItemText></ListItem>
            <ListItem><ListItemText>Elected as Geophysics Representative of the Graduating Class of 2022</ListItemText></ListItem>
            <ListItem><ListItemText>Suncor Energy Emerging Leaders Science Scholarship</ListItemText></ListItem>
            <ListItem><ListItemText>(PURE) Program for Undergraduate Research Experience Award</ListItemText></ListItem>
            <ListItem><ListItemText>Faculty of Science Deans List</ListItemText></ListItem>
            <ListItem><ListItemText>Jason Lang Scholarship</ListItemText></ListItem>
          </List>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ padding: '20px' }}>
          <ListItemIcon>
            <SchoolIcon color="primary" style={{ fontSize: 50 }} />
          </ListItemIcon>
          <Typography variant="h4" sx={{ fontWeight: '500' }}>St.Mary’s Highschool</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: '400', marginBottom: '10px' }}>Calgary, AB - Graduated May 2018</Typography>
          <Typography variant="h6" sx={{ fontWeight: '400', marginBottom: '10px' }}>High School Diploma</Typography>
          <List>
          <ListItem><ListItemText>Full Alexander Rutherford Scholarship</ListItemText></ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  </Container>
);

export default Education;
