import React from 'react';
import { Container, Typography, Card, CardContent, CardHeader, Link, Divider, Box } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { useSpring, animated } from 'react-spring';


const Publications = () => {
  const publications = [
    {
      title: "Distributed Acoustic Sensing and Machine Learning: Rockfall Detection at Mt. Meager, B.C.",
      authors: "Mish, J., Ferguson, R., Mosher, C.",
      conference: "NSG2023 29th European Meeting of Environmental and Engineering Geophysics",
      year: 2023,
      link: null,
      additional: "Accepted - DOI Available Soon"
    },
    {
      title: "Distributed Acoustic Sensing of daylight on a glacier in Canada: Hotspot Monitoring",
      authors: "Ferguson, R., Mosher, C., Dettmer, J., & Mish, J.",
      conference: "NSG2021 27th European Meeting of Environmental and Engineering Geophysics",
      year: 2021,
      link: "https://doi.org/10.3997/2214-4609.202120218",
      additional: ""
    },
    {
      title: "Javaseis cloud: A cloud-native framework for seismic io.",
      authors: "Mosher, C. M., S. Sood, R. J. Ferguson, and Mish, J.",
      conference: "2022 Rice Oil & Gas HPC Conference",
      year: 2022,
      link: 'https://www.youtube.com/watch?v=fhp6-SSGkXg', 
      additional: "Video Recording, Houston, United States"
    }
    
  ];

  const props = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    delay: 160
  });

  return (
    <Container sx={{ marginTop: '30px' }}>
      <Typography variant="h2" sx={{ marginBottom: '20px'}}>Publications</Typography>
      <animated.div style={props}>
        {publications.map((publication, index) => (
          <Box key={index} sx={{ marginBottom: '20px' }}>
            <Card elevation={3} sx={{ borderRadius: '10px', transition: '0.3s', transform: 'scale(1)', "&:hover": { transform: 'scale(1.03)', boxShadow: '5px 5px 15px rgba(0,0,0,0.3)' } }}>
              <CardHeader
                title={publication.title}
                subheader={publication.authors}
              />
              <CardContent>
                <Typography variant="body1">{publication.conference}</Typography>
                <Typography variant="body2">{publication.year}</Typography>
                {publication.link && (
                  <Link href={publication.link} target="_blank" rel="noopener">
                    <Typography variant="body2" color="primary">
                      <LinkIcon /> View Publication
                    </Typography>
                  </Link>
                )}
                {publication.additional && (
                  <Typography variant="body2">{publication.additional}</Typography>
                )}
              </CardContent>
            </Card>
            {index < publications.length - 1 && <Divider />}
          </Box>
        ))}
      </animated.div>
    </Container>
  );
};

export default Publications;
