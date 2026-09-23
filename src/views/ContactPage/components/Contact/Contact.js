import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';
import ServiceNetwork from 'components/ServiceNetwork';
import { CALENDLY_URL, CALENDLY_LABEL } from 'config/calendly';

/*
 * Contact hero. Offers framing with Calendly and form as equal-weight
 * paths. Email remains available; no phone, physical address, or map.
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
            Tell me about the workflow.
          </Typography>
          <Typography color="text.secondary" sx={{ marginBottom: 4, lineHeight: 1.75 }}>
            Book a 30-minute discovery, or send details on an AI Ops Sprint,
            Internal Docs Q&amp;A, or a Monthly Builder Retainer. I ship
            production data and agent systems on AWS, with evals and a human
            go/no-go. Capacity is about 10 to 15 hours a week, so the next slot
            is limited. Every inquiry gets a principal-level response.
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

          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            gap={2}
          >
            <Button
              component="a"
              variant="contained"
              color="primary"
              size="large"
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CALENDLY_LABEL}
            </Button>
            <Button
              component="a"
              variant="outlined"
              color="primary"
              size="large"
              href="#contact-form"
            >
              Send a message
            </Button>
          </Box>
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
