import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';

/*
 * About hero. Homebase-styled: near-black, hairline, mono kicker. No stock
 * imagery (the previous datacity background asset was removed). Singular
 * practice voice.
 */
const Hero = () => {
  return (
    <Box
      position={'relative'}
      display={'flex'}
      alignItems={'center'}
      minHeight={{ xs: 160, md: 220 }}
      sx={{
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--bg-soft)',
      }}
    >
      <Container position={'relative'} zIndex={2}>
        <Box sx={{ maxWidth: 640 }}>
          <Typography
            variant="overline"
            component="p"
            color="text.secondary"
            gutterBottom
          >
            About
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, marginBottom: 1.5 }}
            color="text.primary"
          >
            An independent data and AI practice.
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.65 }}>
            I design and build data platforms and agentic AI systems on AWS: from
            governed Iceberg lakehouses to guardrailed, plan-and-execute agents.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
