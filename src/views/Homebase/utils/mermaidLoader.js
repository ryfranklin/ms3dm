/*
 * Lazy mermaid loader.
 *
 * mermaid is a large dependency, so it is dynamically imported and only pulled
 * in on the /homebase route (never in the main bundle). It is initialized once
 * with a dark theme whose variables match the Homebase tokens.
 */

const MONO_FONT =
  '"Geist Mono Variable", "Geist Mono", ui-monospace, "SF Mono", Menlo, monospace';

let mermaidPromise = null;

export const loadMermaid = () => {
  if (!mermaidPromise) {
    mermaidPromise = import('mermaid').then((mod) => {
      const mermaid = mod.default;
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'strict',
        theme: 'dark',
        fontFamily: MONO_FONT,
        themeVariables: {
          darkMode: true,
          background: '#0a0a0a',
          fontFamily: MONO_FONT,
          // Nodes / surfaces on near-black.
          primaryColor: '#0f0f10',
          primaryTextColor: '#f4f4f5',
          primaryBorderColor: 'rgba(255,255,255,0.18)',
          secondaryColor: '#141416',
          secondaryTextColor: '#f4f4f5',
          secondaryBorderColor: 'rgba(255,255,255,0.18)',
          tertiaryColor: '#0f0f10',
          tertiaryTextColor: '#f4f4f5',
          tertiaryBorderColor: 'rgba(255,255,255,0.09)',
          mainBkg: '#0f0f10',
          nodeBorder: 'rgba(255,255,255,0.18)',
          nodeTextColor: '#f4f4f5',
          // Edges and labels: bright enough to read on near-black.
          lineColor: 'rgba(255,255,255,0.4)',
          textColor: '#f4f4f5',
          // Clusters / subgraphs.
          clusterBkg: '#0a0a0a',
          clusterBorder: 'rgba(255,255,255,0.09)',
          // Sequence diagrams.
          actorBkg: '#0f0f10',
          actorBorder: 'rgba(255,255,255,0.18)',
          actorTextColor: '#f4f4f5',
          signalColor: '#f4f4f5',
          signalTextColor: '#f4f4f5',
          labelBoxBkgColor: '#0f0f10',
          labelBoxBorderColor: 'rgba(255,255,255,0.18)',
          labelTextColor: '#f4f4f5',
          loopTextColor: '#f4f4f5',
          noteBkgColor: '#141416',
          noteBorderColor: 'rgba(255,255,255,0.18)',
          noteTextColor: '#f4f4f5',
          // Class / ER diagrams.
          classText: '#f4f4f5',
          attributeBackgroundColorOdd: '#0f0f10',
          attributeBackgroundColorEven: '#0a0a0a',
        },
      });
      return mermaid;
    });
  }
  return mermaidPromise;
};
