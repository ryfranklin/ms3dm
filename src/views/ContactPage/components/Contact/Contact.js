import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';
import ServiceNetwork from 'components/ServiceNetwork';

/*
 * Contact hero. Homebase-styled (near-black, hairline) and email first: the
 * practice is remote and independent, so email is the single direct channel.
 * No phone, physical address, or map.
 */
const details = [
  { label: 'Email', value: 'ryan.franklin@ms3dm.tech' },
  { label: 'Working style', value: 'Remote, working with teams on AWS' },
];

const Contact = () => {
  return (
    <Container>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="overline" component="p" color="text.secondary" gutterBottom>
            Contact
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 600, marginBottom: 2 }} color="text.primary">
            Let&apos;s talk.
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 4, lineHeight: 1.75 }}>
            Have a lakehouse to modernize, a pipeline to make reliable, or an
            agentic AI system to build and guardrail? I am an independent data
            architect and AI/ML engineer working directly with your team on AWS.
            Send me the details and I will reply personally.
          </Typography>

          <Box display="flex" flexDirection="column" gap={2} marginBottom={4}>
            {details.map((item) => (
              <Box
                key={item.label}
                sx={{
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--surface)',
                  paddingX: 2.5,
                  paddingY: 2,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'text.disabled',
                    marginBottom: 0.5,
                  }}
                >
                  {item.label}
                </Typography>
                <Typography color="text.primary" sx={{ fontWeight: 500 }}>
                  {item.value}
                </Typography>
              </Box>
            ))}
          </Box>

          <Button
            component="a"
            variant="contained"
            color="primary"
            size="large"
            href="#contact-form"
          >
            Send a message
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              backgroundColor: 'var(--bg-soft)',
              paddingY: 5,
            }}
          >
            <ServiceNetwork height={320} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
