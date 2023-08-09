import React from 'react';
import { Container, Typography, Grid, IconButton, Paper, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const SocialLinks = () => {
  return (
    <Container sx={{ marginTop: '30px' }}>
      <Typography variant="h2" sx={{ marginBottom: '20px', fontWeight: '500', textAlign: 'center' }}>Social Links</Typography>
      <Paper elevation={3} sx={{ padding: '40px', textAlign: 'center' }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item>
            <IconButton color="primary">
              <Link href="https://www.linkedin.com/in/jacob-mish-25915722a/" target="_blank" rel="noopener">
                <LinkedInIcon fontSize="large" />
              </Link>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="primary">
              <Link href="https://github.com/Feromond" target="_blank" rel="noopener">
                <GitHubIcon fontSize="large" />
              </Link>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="primary">
              <Link href="mailto:JacobPMish@gmail.com" target="_blank" rel="noopener">
                <EmailIcon fontSize="large" />
              </Link>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="primary">
              <Link href="tel:+1-403-836-9391" target="_blank" rel="noopener">
                <PhoneIcon fontSize="large" />
              </Link>
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SocialLinks;
