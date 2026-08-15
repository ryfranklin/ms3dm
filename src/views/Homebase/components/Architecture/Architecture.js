import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Container from 'components/Container';
import MermaidDiagram from './MermaidDiagram';
import { useDiagrams, DIAGRAMS_SOURCE_URL } from '../../utils/diagrams';

const ARCHITECTURE_HTML_URL =
  'https://github.com/ryfranklin/Homebase/blob/main/architecture.html';

// Hairline card shell reused for each state.
const cardSx = {
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius)',
  backgroundColor: 'var(--surface)',
  padding: { xs: 2.5, md: 3.5 },
};

const LoadingState = () => (
  <Box sx={cardSx}>
    <Typography
      sx={{ fontFamily: 'var(--font-mono)', color: 'text.disabled', fontSize: '0.85rem' }}
    >
      Fetching architecture diagrams live from the Homebase repo…
    </Typography>
  </Box>
);

const FallbackState = () => (
  <Box sx={{ ...cardSx, textAlign: 'center', paddingY: { xs: 5, md: 7 } }}>
    <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 1.5 }}>
      Diagrams are rendered live from the Homebase repo.
    </Typography>
    <Typography color="text.secondary" sx={{ maxWidth: 560, margin: '0 auto 24px', lineHeight: 1.7 }}>
      They could not be loaded right now. They render straight from the Mermaid
      source on GitHub, so they always track the latest architecture.
    </Typography>
    <Button
      component="a"
      href={DIAGRAMS_SOURCE_URL}
      target="_blank"
      rel="noopener noreferrer"
      variant="outlined"
      color="primary"
    >
      View the diagrams on GitHub
    </Button>
  </Box>
);

const Architecture = () => {
  const { status, diagrams } = useDiagrams();

  return (
    <Box
      sx={{
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--bg-soft)',
      }}
    >
      <Container paddingY={{ xs: 8, md: 12 }}>
        <Box sx={{ maxWidth: 740, marginBottom: 5 }}>
          <Typography variant="overline" component="p" color="text.secondary" gutterBottom>
            Architecture
          </Typography>
          <Typography variant="h4" color="text.primary" sx={{ fontWeight: 600, marginBottom: 2 }}>
            Rendered live from the source repo.
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.65 }}>
            These diagrams are fetched at runtime from the Homebase repository and
            rendered from their real Mermaid source, so they stay faithful to the
            system as it evolves.
          </Typography>
        </Box>

        {status === 'loading' && <LoadingState />}
        {status === 'error' && <FallbackState />}

        {status === 'ready' && (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 3,
            }}
          >
            {diagrams.map((diagram, index) => (
              <Box key={`${diagram.title}-${index}`} sx={cardSx}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'text.disabled',
                    marginBottom: 2,
                  }}
                >
                  {`${String(index + 1).padStart(2, '0')} / ${diagram.title}`}
                </Typography>
                <MermaidDiagram code={diagram.code} index={index} />
              </Box>
            ))}
          </Box>
        )}

        <Box sx={{ marginTop: 4 }}>
          <Link
            href={ARCHITECTURE_HTML_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              color: 'text.secondary',
              '&:hover': { color: 'text.primary' },
            }}
          >
            Open the full self-contained architecture view →
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Architecture;
