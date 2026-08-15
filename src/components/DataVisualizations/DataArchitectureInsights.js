import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/*
 * Monochrome insights panel for the About page. Homebase-styled: near-black
 * surface, hairline borders, white numerals, mono captions. The figures are
 * sourced industry statistics (attributed inline), not client metrics.
 */
const stats = [
  {
    figure: '90%',
    body: 'of industry respondents rate data engineering as critically important.',
    source: 'Matillion',
  },
  {
    figure: '59%',
    body: 'identify GenAI and ML integration as a key area of investment.',
    source: 'Nexla',
  },
  {
    figure: '23x',
    body: 'data-driven organizations are more likely to acquire customers.',
    source: 'Keboola',
  },
  {
    figure: '57%',
    body: 'of professionals cite poor data quality as their predominant issue.',
    source: 'dbt Labs',
  },
];

const DataArchitectureInsights = ({ size = 400 }) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: size,
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        backgroundColor: 'var(--bg-soft)',
        padding: { xs: 2.5, md: 3.5 },
        margin: '0 auto',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: 'text.disabled',
          marginBottom: 3,
        }}
      >
        Why the foundation matters
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 2,
        }}
      >
        {stats.map((item) => (
          <Box
            key={item.source}
            sx={{
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--surface)',
              padding: 2.5,
              transition: 'border-color 0.25s var(--ease), background-color 0.25s var(--ease)',
              '&:hover': {
                borderColor: 'var(--border-strong)',
                backgroundColor: 'var(--surface-2)',
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: 600, color: 'text.primary', fontSize: '2.2rem', marginBottom: 1 }}
            >
              {item.figure}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', lineHeight: 1.5, marginBottom: 1.5 }}
            >
              {item.body}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.06em',
                color: 'text.disabled',
              }}
            >
              {item.source}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

DataArchitectureInsights.propTypes = {
  size: PropTypes.number,
};

export default DataArchitectureInsights;
