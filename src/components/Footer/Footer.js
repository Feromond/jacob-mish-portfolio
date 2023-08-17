import React from 'react';
import { Container, IconButton, Link, Grid, Typography, Box, Tooltip} from '@mui/material';
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
          <Tooltip title="My Linkedin Profile">
            <IconButton color="primary">
              <Link href="https://www.linkedin.com/in/jacob-mish-25915722a/" target="_blank" rel="noopener">
                <LinkedInIcon sx={{ color: '#673AAC' }}/>
              </Link>
            </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
          <Tooltip title="My Github Profile">
            <IconButton color="primary">
              <Link href="https://github.com/Feromond" target="_blank" rel="noopener">
                <GitHubIcon sx={{ color: '#673AAC' }}/>
              </Link>
            </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
          <Tooltip title="My Email">
            <IconButton color="primary">
              <Link href="mailto:JacobPMish@gmail.com" target="_blank" rel="noopener">
                <EmailIcon sx={{ color: '#673AAC' }}/>
              </Link>
            </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
          <Tooltip title="My Phone Number">
            <IconButton color="primary">
              <Link href="tel:+1-403-836-9391" target="_blank" rel="noopener">
                <PhoneIcon sx={{ color: '#673AAC' }} />
              </Link>
            </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ marginTop: '10px' }}>© Jacob Mish 2023</Typography>
        <Typography variant="body2" align="center" sx={{ marginTop: '10px' }}>Website Still Under Construction - Started On August 9th</Typography>
        <Typography variant="body2" align="center" sx={{ marginTop: '10px' }}>Created Using React: https://github.com/Feromond/jacob-mish-portfolio</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
