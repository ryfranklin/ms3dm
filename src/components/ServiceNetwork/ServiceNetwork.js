import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

/*
 * ServiceNetwork: the Homebase visual identity.
 *
 * An animated monochrome "service network" node-graph: white node dots, dashed
 * hairline edges with a flowing stroke-dashoffset animation, expanding halos,
 * and a slow-spinning dashed core ring. This replaces stock hero illustration.
 *
 * All motion is CSS keyframe based (defined in src/assets/homebase.css), so the
 * global prefers-reduced-motion rule stills it automatically.
 */

// Node positions on a 400 x 300 canvas. The center node is the "core".
const NODES = [
  { id: 'core', x: 200, y: 150, r: 5, halo: true },
  { id: 'a', x: 74, y: 62, r: 3 },
  { id: 'b', x: 330, y: 74, r: 3, halo: true },
  { id: 'c', x: 348, y: 206, r: 3 },
  { id: 'd', x: 214, y: 262, r: 3, halo: true },
  { id: 'e', x: 58, y: 216, r: 3 },
  { id: 'f', x: 132, y: 140, r: 2.5 },
  { id: 'g', x: 276, y: 132, r: 2.5 },
  { id: 'h', x: 250, y: 220, r: 2.5 },
];

// Edges reference node ids; each gets a staggered dash-flow so data appears to
// move through the graph.
const EDGES = [
  ['core', 'a'],
  ['core', 'b'],
  ['core', 'c'],
  ['core', 'd'],
  ['core', 'e'],
  ['core', 'f'],
  ['core', 'g'],
  ['core', 'h'],
  ['a', 'f'],
  ['b', 'g'],
  ['g', 'c'],
  ['h', 'd'],
  ['e', 'f'],
];

const byId = (id) => NODES.find((n) => n.id === id);

const ServiceNetwork = ({ height = 360 }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      aria-hidden="true"
    >
      <Box
        component="svg"
        viewBox="0 0 400 300"
        role="presentation"
        sx={{
          width: '100%',
          maxWidth: 640,
          height,
          overflow: 'visible',
        }}
      >
        {/* Dashed edges with flowing offset. */}
        <g
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 6"
        >
          {EDGES.map(([from, to], i) => {
            const a = byId(from);
            const b = byId(to);
            return (
              <line
                key={`${from}-${to}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                style={{
                  animation: `hb-dash-flow ${3 + (i % 4) * 0.6}s linear infinite`,
                }}
              />
            );
          })}
        </g>

        {/* Slow-spinning dashed core ring. */}
        <g
          style={{
            transformBox: 'fill-box',
            transformOrigin: 'center',
            animation: 'hb-spin 24s linear infinite',
          }}
        >
          <circle
            cx="200"
            cy="150"
            r="34"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
            strokeDasharray="2 8"
          />
        </g>
        <circle
          cx="200"
          cy="150"
          r="22"
          fill="none"
          stroke="rgba(255,255,255,0.09)"
          strokeWidth="1"
        />

        {/* Expanding halos on selected nodes. */}
        {NODES.filter((n) => n.halo).map((n, i) => (
          <circle
            key={`halo-${n.id}`}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
            style={{
              transformBox: 'fill-box',
              transformOrigin: 'center',
              animation: `hb-halo-scale ${3.2 + i * 0.7}s ${
                i * 0.5
              }s ${'ease-out'} infinite`,
            }}
          />
        ))}

        {/* Node dots. */}
        {NODES.map((n) => (
          <circle
            key={n.id}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.id === 'core' ? '#ffffff' : 'rgba(244,244,245,0.9)'}
          />
        ))}
      </Box>
    </Box>
  );
};

ServiceNetwork.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default ServiceNetwork;
