import React from 'react';
import { Container, IconButton, Link, Grid, Typography, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'background.default', padding: '20px', borderTop: '1px solid grey' }}>
      <Container>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item>
            <IconButton color="primary">
              <Link href="https://www.linkedin.com/in/jacob-mish-25915722a/" target="_blank" rel="noopener">
                <LinkedInIcon />
              </Link>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="primary">
              <Link href="https://github.com/Feromond" target="_blank" rel="noopener">
                <GitHubIcon />
              </Link>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="primary">
              <Link href="mailto:JacobPMish@gmail.com" target="_blank" rel="noopener">
                <EmailIcon />
              </Link>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="primary">
              <Link href="tel:+1-403-836-9391" target="_blank" rel="noopener">
                <PhoneIcon />
              </Link>
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ marginTop: '10px' }}>© Jacob Mish 2023</Typography>
        <Typography variant="body2" align="center" sx={{ marginTop: '10px' }}>Website Still Under Construction</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
