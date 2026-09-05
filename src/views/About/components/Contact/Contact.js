import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from 'components/Container';

/*
 * About-page contact block. Homebase-styled (near-black, hairline) and email
 * first: the practice is remote and independent, so email is the single direct
 * channel. No phone or physical address.
 */
const Contact = () => {
  return (
    <Container>
      <Box
        sx={{
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          backgroundColor: 'var(--surface)',
          paddingX: { xs: 3, md: 6 },
          paddingY: { xs: 5, md: 7 },
          textAlign: 'center',
        }}
      >
        <Typography variant="overline" component="p" color="text.secondary" gutterBottom>
          Let&apos;s connect
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600, marginBottom: 2 }} color="text.primary">
          Work directly with the principal delivering the engagement.
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ maxWidth: 600, margin: '0 auto 32px', lineHeight: 1.7 }}
        >
          Have a lakehouse to modernize, a pipeline to make reliable, an agentic
          AI system to build and guardrail, or Fractional Head of Data leadership to set technical
          direction? Reach out. You work directly with the principal delivering
          the engagement, with no account layer in between.
        </Typography>
        <Button
          component="a"
          variant="contained"
          color="primary"
          size="large"
          href="/contact-page#assessment"
        >
          Start with a readiness assessment
        </Button>
        <Typography
          component="a"
          href="mailto:ryan.franklin@ms3dm.tech"
          sx={{
            display: 'block',
            marginTop: 2,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            color: 'text.secondary',
            textDecoration: 'none',
            '&:hover': { color: 'text.primary' },
          }}
        >
          or email ryan.franklin@ms3dm.tech
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact;
