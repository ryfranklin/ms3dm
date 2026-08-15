import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { loadMermaid } from '../../utils/mermaidLoader';

/*
 * Renders a single Mermaid diagram. mermaid is lazy loaded on first render.
 * Each instance owns its error boundary: if one diagram fails to parse or
 * render, only that card shows a fallback, the rest of the page stays intact.
 */

// Module counter for stable, unique render ids (mermaid needs a valid id).
let renderSeq = 0;

const MermaidDiagram = ({ code, index }) => {
  const containerRef = useRef(null);
  const [status, setStatus] = useState('rendering'); // rendering | done | error

  useEffect(() => {
    let active = true;
    renderSeq += 1;
    const id = `hb-mermaid-${index}-${renderSeq}`;

    loadMermaid()
      .then((mermaid) => mermaid.render(id, code))
      .then(({ svg }) => {
        if (!active || !containerRef.current) {
          return;
        }
        containerRef.current.innerHTML = svg;
        setStatus('done');
      })
      .catch(() => {
        if (active) {
          setStatus('error');
        }
      });

    return () => {
      active = false;
    };
  }, [code, index]);

  if (status === 'error') {
    return (
      <Typography
        variant="body2"
        sx={{ fontFamily: 'var(--font-mono)', color: 'text.disabled' }}
      >
        This diagram could not be rendered. See the source on GitHub.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        // Horizontally scrollable on small screens so wide diagrams never clip.
        overflowX: 'auto',
        minHeight: status === 'rendering' ? 120 : 'auto',
        '& svg': {
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
          margin: '0 auto',
        },
      }}
    >
      {status === 'rendering' && (
        <Typography
          variant="body2"
          sx={{ fontFamily: 'var(--font-mono)', color: 'text.disabled' }}
        >
          Rendering diagram…
        </Typography>
      )}
      <Box ref={containerRef} aria-hidden={status !== 'done'} />
    </Box>
  );
};

MermaidDiagram.propTypes = {
  code: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default MermaidDiagram;
