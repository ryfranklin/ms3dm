import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

/*
 * Productized AI offers sized for a ~10 to 15 hour / week practice.
 * Same hairline-card pattern as the rest of Home; prices stay as ranges.
 */
const offers = [
  {
    index: '01',
    label: 'Sprint',
    title: 'AI Ops Sprint',
    offer: '$3,500 to $6,000 · 2 to 3 weeks · about 25 to 40 hours',
    body:
      'One painful workflow put into production. Typical targets: invoice ' +
      'triage, support draft-and-approve, a report narrative from a warehouse, ' +
      'or lead cleanup.',
    deliverable:
      'Working pipeline, a short runbook, and before/after metrics.',
  },
  {
    index: '02',
    label: 'Q&A',
    title: 'Internal Docs Q&A (RAG)',
    offer: '$4,000 to $8,000 · 3 to 4 weeks',
    body:
      'Secure chat over your SOPs, contracts, or product docs, as a private ' +
      'app or a Slack bot.',
    deliverable:
      'Working Q&A with source citations, plus an eval set of about 20 golden questions.',
  },
  {
    index: '03',
    label: 'Retainer',
    title: 'Monthly Builder Retainer',
    offer: '$2,000 to $3,500 / month · 8 to 12 hours / month',
    body:
      'After a sprint: monitoring, small improvements, and roughly one new ' +
      'automation per month.',
    deliverable: 'Ongoing ops on what we already shipped, plus one new automation.',
  },
];

const Engagements = () => {
  return (
    <Box
      id="offers"
      sx={{
        paddingY: { xs: 8, md: 12 },
        scrollMarginTop: { xs: 72, md: 88 },
      }}
    >
      {/* Back-compat for older /#engagements links. */}
      <Box id="engagements" sx={{ position: 'relative', top: 0 }} />
      <Box marginBottom={6} sx={{ maxWidth: 740 }}>
        <Typography
          variant="overline"
          component="p"
          sx={{ color: 'secondary.main' }}
          gutterBottom
        >
          Offers
        </Typography>
        <Typography
          variant="h4"
          color="text.primary"
          sx={{ fontWeight: 600, marginBottom: 2 }}
        >
          Three fixed-scope packages.
        </Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.65 }}>
          Most teams have AI ideas and no shipping path. I take one painful
          workflow and put it in production in 2 to 3 weeks, then can maintain
          it on a small retainer. Capacity is about 10 to 15 hours a week, so
          the next slot is limited.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {offers.map((item, i) => (
          <Grid item xs={12} md={4} key={item.index}>
            <Card
              component="a"
              href="/contact-page"
              data-aos="fade-up"
              data-aos-delay={i * 80}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: 'inherit',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background:
                    'linear-gradient(90deg, var(--accent), transparent 78%)',
                },
              }}
            >
              <CardContent
                sx={{
                  padding: 3.5,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'secondary.main',
                    marginBottom: 2,
                  }}
                >
                  {item.index} · {item.label}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1 }}>
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.02em',
                    color: 'text.primary',
                    marginBottom: 1.5,
                  }}
                >
                  {item.offer}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ lineHeight: 1.65, marginBottom: 2 }}
                >
                  {item.body}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.08em',
                    color: 'text.disabled',
                    marginBottom: 0.75,
                    textTransform: 'uppercase',
                  }}
                >
                  Deliverable
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.65 }}>
                  {item.deliverable}
                </Typography>
                <Typography
                  sx={{
                    marginTop: 'auto',
                    paddingTop: 3,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.04em',
                    color: 'text.primary',
                    transition: 'color 0.22s var(--ease)',
                    '.MuiCard-root:hover &': {
                      color: 'var(--accent)',
                    },
                  }}
                >
                  Talk about this offer →
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography
        color="text.secondary"
        sx={{
          marginTop: 3,
          maxWidth: 740,
          lineHeight: 1.65,
          fontSize: '0.95rem',
        }}
      >
        This is production work: data and agent systems on AWS, evals, and a
        human go/no-go on every release. Not slide-deck strategy consulting.
      </Typography>

      <Box marginTop={4}>
        <Button component="a" href="/contact-page" variant="text" size="large">
          Talk about the next slot →
        </Button>
      </Box>
    </Box>
  );
};

export default Engagements;
