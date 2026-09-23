import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

/*
 * ServiceNetwork: the site visual identity — a live agent / neural graph.
 *
 * CSS handles idle motion (hub glow, opposite ring spin, node flicker,
 * hairline dash-flow). A small rAF loop drives occasional packets along
 * edges and a brief receive flash when a pulse arrives. No extra deps.
 *
 * prefers-reduced-motion: CSS stills keyframes; the rAF loop never starts.
 */

const NODES = [
  { id: 'core', x: 200, y: 150, r: 5, halo: true },
  { id: 'a', x: 74, y: 62, r: 3 },
  { id: 'b', x: 330, y: 74, r: 3 },
  { id: 'c', x: 348, y: 206, r: 3 },
  { id: 'd', x: 214, y: 262, r: 3 },
  { id: 'e', x: 58, y: 216, r: 3 },
  { id: 'f', x: 132, y: 140, r: 2.5 },
  { id: 'g', x: 276, y: 132, r: 2.5 },
  { id: 'h', x: 250, y: 220, r: 2.5 },
];

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

const EDGE_META = EDGES.map(([from, to], i) => {
  const a = byId(from);
  const b = byId(to);
  return {
    i,
    from,
    to,
    ax: a.x,
    ay: a.y,
    bx: b.x,
    by: b.y,
    len: Math.hypot(b.x - a.x, b.y - a.y),
  };
});

const PACKET_SLOTS = 4;
const MAX_ACTIVE = 3;
const ACCENT = '#4DA3FF';
let gradientSeq = 0;

const smoothstep = (t) => t * t * (3 - 2 * t);

const ServiceNetwork = ({ height = 360 }) => {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)', {
    defaultMatches: false,
    noSsr: true,
  });
  const gradientIdRef = useRef(`hb-hub-fill-${(gradientSeq += 1)}`);
  const rootRef = useRef(null);
  const edgeRefs = useRef([]);
  const receiveRefs = useRef({});
  const packetRefs = useRef([]);

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const visible = { current: true };
    const hidden = { current: typeof document !== 'undefined' && document.hidden };
    const pulses = [];
    const flashes = [];
    let lastSpawn = 0;
    let nextId = 1;
    let raf = 0;

    const root = rootRef.current;
    const io =
      root && typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
          ([entry]) => {
            visible.current = entry.isIntersecting;
          },
          { threshold: 0.08 },
        )
        : null;
    if (io && root) {
      io.observe(root);
    }

    const onVis = () => {
      hidden.current = document.hidden;
    };
    document.addEventListener('visibilitychange', onVis);

    const spawn = (now) => {
      if (pulses.length >= MAX_ACTIVE) {
        return;
      }
      const gap = 700 + Math.random() * 900;
      if (now - lastSpawn < gap) {
        return;
      }
      const busy = new Set(pulses.map((p) => p.edge.i));
      const free = EDGE_META.filter((edge) => !busy.has(edge.i));
      const edge = free[Math.floor(Math.random() * free.length)] || EDGE_META[0];
      const reverse = nextId % 3 !== 0;
      pulses.push({
        id: nextId,
        edge,
        reverse,
        start: now,
        duration: 1600 + edge.len * 7,
      });
      nextId += 1;
      lastSpawn = now;
    };

    const setPacket = (slot, x, y, opacity) => {
      const node = packetRefs.current[slot];
      if (!node) {
        return;
      }
      node.setAttribute('transform', `translate(${x} ${y})`);
      node.setAttribute('opacity', String(opacity));
    };

    const tick = (now) => {
      if (!visible.current || hidden.current) {
        raf = requestAnimationFrame(tick);
        return;
      }

      spawn(now);

      const litEdges = new Set();
      let slot = 0;

      for (let i = pulses.length - 1; i >= 0; i -= 1) {
        const pulse = pulses[i];
        const raw = (now - pulse.start) / pulse.duration;
        if (raw >= 1) {
          const dest = pulse.reverse ? pulse.edge.from : pulse.edge.to;
          flashes.push({ id: dest, until: now + 420 });
          pulses.splice(i, 1);
        } else {
          litEdges.add(pulse.edge.i);
          const t = smoothstep(Math.min(1, Math.max(0, raw)));
          const { ax, ay, bx, by } = pulse.edge;
          const x = pulse.reverse ? bx + (ax - bx) * t : ax + (bx - ax) * t;
          const y = pulse.reverse ? by + (ay - by) * t : ay + (by - ay) * t;
          let opacity = 1;
          if (raw < 0.1) {
            opacity = raw / 0.1;
          } else if (raw > 0.82) {
            opacity = (1 - raw) / 0.18;
          }
          if (slot < PACKET_SLOTS) {
            setPacket(slot, x, y, opacity);
            slot += 1;
          }
        }
      }

      while (slot < PACKET_SLOTS) {
        setPacket(slot, 0, 0, 0);
        slot += 1;
      }

      EDGE_META.forEach((edge, i) => {
        const el = edgeRefs.current[i];
        if (!el) {
          return;
        }
        el.style.stroke = litEdges.has(edge.i)
          ? 'rgba(77,163,255,0.72)'
          : 'rgba(77,163,255,0.28)';
      });

      for (let i = flashes.length - 1; i >= 0; i -= 1) {
        if (now > flashes[i].until) {
          flashes.splice(i, 1);
        }
      }
      NODES.forEach((n) => {
        const el = receiveRefs.current[n.id];
        if (!el) {
          return;
        }
        const flash = flashes.find((f) => f.id === n.id);
        if (!flash) {
          el.setAttribute('opacity', '0');
          return;
        }
        const life = 1 - (flash.until - now) / 420;
        const opacity = life < 0.35 ? life / 0.35 : 1 - (life - 0.35) / 0.65;
        el.setAttribute('opacity', String(Math.max(0, opacity) * 0.7));
        el.setAttribute('r', String(n.r + 3 + life * 7));
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('visibilitychange', onVis);
      if (io) {
        io.disconnect();
      }
    };
  }, [reduceMotion]);

  const motion = !reduceMotion;

  return (
    <Box
      ref={rootRef}
      className="hb-network"
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
        <defs>
          <radialGradient id={gradientIdRef.current} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={ACCENT} stopOpacity="0.45" />
            <stop offset="70%" stopColor={ACCENT} stopOpacity="0.12" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
          </radialGradient>
        </defs>

        <g
          stroke="rgba(77,163,255,0.28)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 6"
        >
          {EDGE_META.map((edge) => (
            <line
              key={`${edge.from}-${edge.to}`}
              ref={(el) => {
                edgeRefs.current[edge.i] = el;
              }}
              x1={edge.ax}
              y1={edge.ay}
              x2={edge.bx}
              y2={edge.by}
              className={motion ? 'hb-network-edge' : undefined}
              style={
                motion
                  ? {
                    animation: `hb-dash-flow ${4.2 + (edge.i % 4) * 0.7}s linear infinite`,
                  }
                  : undefined
              }
            />
          ))}
        </g>

        <g
          style={
            motion
              ? {
                transformBox: 'fill-box',
                transformOrigin: 'center',
                animation: 'hb-spin 28s linear infinite',
              }
              : undefined
          }
        >
          <circle
            cx="200"
            cy="150"
            r="34"
            fill="none"
            stroke="rgba(77,163,255,0.35)"
            strokeWidth="1"
            strokeDasharray="2 8"
          />
        </g>
        <g
          style={
            motion
              ? {
                transformBox: 'fill-box',
                transformOrigin: 'center',
                animation: 'hb-spin-reverse 40s linear infinite',
              }
              : undefined
          }
        >
          <circle
            cx="200"
            cy="150"
            r="22"
            fill="none"
            stroke="rgba(77,163,255,0.22)"
            strokeWidth="1"
            strokeDasharray="1.5 6"
          />
        </g>

        {motion && (
          <circle
            cx="200"
            cy="150"
            r="16"
            fill={`url(#${gradientIdRef.current})`}
            className="hb-hub-glow"
          />
        )}

        {NODES.map((n) => (
          <circle
            key={`recv-${n.id}`}
            ref={(el) => {
              receiveRefs.current[n.id] = el;
            }}
            cx={n.x}
            cy={n.y}
            r={n.r + 3}
            fill="none"
            stroke={n.id === 'core' ? ACCENT : 'rgba(244,246,250,0.85)'}
            strokeWidth="1"
            opacity="0"
          />
        ))}

        {NODES.map((n, i) => (
          <circle
            key={n.id}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.id === 'core' ? ACCENT : 'rgba(244,246,250,0.92)'}
            className={
              motion
                ? n.id === 'core'
                  ? 'hb-hub-core'
                  : 'hb-node-idle'
                : undefined
            }
            style={
              motion && n.id !== 'core'
                ? { animationDelay: `${(i * 0.37).toFixed(2)}s` }
                : undefined
            }
          />
        ))}

        {motion &&
          Array.from({ length: PACKET_SLOTS }).map((_, i) => (
            <g
              key={`pkt-${i}`}
              ref={(el) => {
                packetRefs.current[i] = el;
              }}
              opacity="0"
              transform="translate(0 0)"
            >
              <circle r="4.2" fill={ACCENT} opacity="0.22" />
              <circle r="1.55" fill={ACCENT} />
            </g>
          ))}
      </Box>
    </Box>
  );
};

ServiceNetwork.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default ServiceNetwork;
