import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

// 3D Data Integration Visualization
export const DataIntegrationChart = ({ size = 200, color = null }) => {
  const theme = useTheme();
  const primaryColor = color || theme.palette.primary.main;
  
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background grid */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke={theme.palette.divider} strokeWidth="0.5" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#grid)" />
      
      {/* 3D Data points */}
      <g transform="translate(30, 50)">
        <circle cx="0" cy="0" r="8" fill={primaryColor} opacity="0.8" />
        <circle cx="40" cy="20" r="6" fill={primaryColor} opacity="0.6" />
        <circle cx="80" cy="10" r="7" fill={primaryColor} opacity="0.7" />
        <circle cx="120" cy="30" r="5" fill={primaryColor} opacity="0.5" />
        <circle cx="160" cy="15" r="9" fill={primaryColor} opacity="0.9" />
      </g>
      
      {/* Connection lines */}
      <g stroke={primaryColor} strokeWidth="2" fill="none" opacity="0.6">
        <path d="M 30 50 L 70 70 L 110 60 L 150 80 L 190 65" strokeDasharray="5,5" />
      </g>
      
      {/* Data flow arrows */}
      <g fill={primaryColor} opacity="0.8">
        <polygon points="60,65 70,70 60,75" />
        <polygon points="100,55 110,60 100,65" />
        <polygon points="140,75 150,80 140,85" />
      </g>
      
      {/* 3D effect lines */}
      <g stroke={primaryColor} strokeWidth="1" opacity="0.4">
        <line x1="30" y1="50" x2="35" y2="45" />
        <line x1="70" y1="70" x2="75" y2="65" />
        <line x1="110" y1="60" x2="115" y2="55" />
        <line x1="150" y1="80" x2="155" y2="75" />
        <line x1="190" y1="65" x2="195" y2="60" />
      </g>
    </svg>
  );
};

// Analytics Dashboard Visualization
export const AnalyticsDashboard = ({ size = 200, color = null }) => {
  const theme = useTheme();
  const primaryColor = color || theme.palette.primary.main;
  
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dashboard background */}
      <rect x="20" y="20" width="160" height="120" rx="8" fill={theme.palette.background.paper} stroke={theme.palette.divider} strokeWidth="1" />
      
      {/* Chart area */}
      <rect x="30" y="30" width="140" height="80" rx="4" fill={theme.palette.alternate.main} />
      
      {/* Bar chart */}
      <g transform="translate(40, 40)">
        <rect x="0" y="40" width="8" height="30" fill={primaryColor} opacity="0.8" />
        <rect x="12" y="25" width="8" height="45" fill={primaryColor} opacity="0.6" />
        <rect x="24" y="35" width="8" height="35" fill={primaryColor} opacity="0.7" />
        <rect x="36" y="20" width="8" height="50" fill={primaryColor} opacity="0.9" />
        <rect x="48" y="30" width="8" height="40" fill={primaryColor} opacity="0.5" />
        <rect x="60" y="15" width="8" height="55" fill={primaryColor} opacity="0.8" />
        <rect x="72" y="25" width="8" height="45" fill={primaryColor} opacity="0.6" />
        <rect x="84" y="35" width="8" height="35" fill={primaryColor} opacity="0.7" />
      </g>
      
      {/* Line chart overlay */}
      <g stroke={primaryColor} strokeWidth="2" fill="none" opacity="0.8">
        <path d="M 40 100 L 60 85 L 80 90 L 100 75 L 120 80 L 140 65 L 160 70" />
      </g>
      
      {/* Data points on line */}
      <g fill={primaryColor}>
        <circle cx="40" cy="100" r="3" />
        <circle cx="60" cy="85" r="3" />
        <circle cx="80" cy="90" r="3" />
        <circle cx="100" cy="75" r="3" />
        <circle cx="120" cy="80" r="3" />
        <circle cx="140" cy="65" r="3" />
        <circle cx="160" cy="70" r="3" />
      </g>
      
      {/* Metrics boxes */}
      <rect x="30" y="120" width="45" height="15" rx="2" fill={primaryColor} opacity="0.1" />
      <rect x="85" y="120" width="45" height="15" rx="2" fill={primaryColor} opacity="0.1" />
      <rect x="140" y="120" width="45" height="15" rx="2" fill={primaryColor} opacity="0.1" />
    </svg>
  );
};

// 3D Point Cloud Visualization
export const PointCloud3D = ({ size = 200, color = null }) => {
  const theme = useTheme();
  const primaryColor = color || theme.palette.primary.main;
  
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 3D perspective grid */}
      <defs>
        <pattern id="perspectiveGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 0 0 L 40 0 M 0 0 L 0 40" fill="none" stroke={theme.palette.divider} strokeWidth="0.5" opacity="0.2"/>
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#perspectiveGrid)" />
      
      {/* 3D coordinate system */}
      <g stroke={theme.palette.text.secondary} strokeWidth="1" opacity="0.6">
        <line x1="20" y1="180" x2="180" y2="180" />
        <line x1="20" y1="180" x2="20" y2="20" />
        <line x1="20" y1="180" x2="40" y2="160" />
      </g>
      
      {/* Point cloud data */}
      <g>
        {/* Front layer */}
        <circle cx="60" cy="120" r="2" fill={primaryColor} opacity="0.9" />
        <circle cx="80" cy="100" r="2" fill={primaryColor} opacity="0.8" />
        <circle cx="100" cy="110" r="2" fill={primaryColor} opacity="0.7" />
        <circle cx="120" cy="90" r="2" fill={primaryColor} opacity="0.6" />
        <circle cx="140" cy="100" r="2" fill={primaryColor} opacity="0.8" />
        
        {/* Middle layer */}
        <circle cx="50" cy="100" r="1.5" fill={primaryColor} opacity="0.6" />
        <circle cx="70" cy="80" r="1.5" fill={primaryColor} opacity="0.5" />
        <circle cx="90" cy="90" r="1.5" fill={primaryColor} opacity="0.7" />
        <circle cx="110" cy="70" r="1.5" fill={primaryColor} opacity="0.4" />
        <circle cx="130" cy="80" r="1.5" fill={primaryColor} opacity="0.6" />
        
        {/* Back layer */}
        <circle cx="40" cy="80" r="1" fill={primaryColor} opacity="0.4" />
        <circle cx="60" cy="60" r="1" fill={primaryColor} opacity="0.3" />
        <circle cx="80" cy="70" r="1" fill={primaryColor} opacity="0.5" />
        <circle cx="100" cy="50" r="1" fill={primaryColor} opacity="0.2" />
        <circle cx="120" cy="60" r="1" fill={primaryColor} opacity="0.4" />
      </g>
      
      {/* Scan lines */}
      <g stroke={primaryColor} strokeWidth="1" opacity="0.3">
        <line x1="30" y1="140" x2="170" y2="140" />
        <line x1="30" y1="130" x2="170" y2="130" />
        <line x1="30" y1="120" x2="170" y2="120" />
        <line x1="30" y1="110" x2="170" y2="110" />
        <line x1="30" y1="100" x2="170" y2="100" />
      </g>
    </svg>
  );
};

// Data Flow Pipeline Visualization
export const DataFlowPipeline = ({ size = 200, color = null }) => {
  const theme = useTheme();
  const primaryColor = color || theme.palette.primary.main;
  
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pipeline stages */}
      <g>
        {/* Stage 1: Data Input */}
        <rect x="20" y="80" width="30" height="40" rx="4" fill={primaryColor} opacity="0.1" stroke={primaryColor} strokeWidth="2" />
        <circle cx="35" cy="100" r="8" fill={primaryColor} opacity="0.8" />
        <text x="35" y="140" textAnchor="middle" fontSize="10" fill={theme.palette.text.secondary}>Input</text>
        
        {/* Arrow 1 */}
        <path d="M 55 100 L 75 100" stroke={primaryColor} strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        
        {/* Stage 2: Processing */}
        <rect x="80" y="80" width="30" height="40" rx="4" fill={primaryColor} opacity="0.1" stroke={primaryColor} strokeWidth="2" />
        <rect x="85" y="85" width="20" height="30" rx="2" fill={primaryColor} opacity="0.6" />
        <text x="95" y="140" textAnchor="middle" fontSize="10" fill={theme.palette.text.secondary}>Process</text>
        
        {/* Arrow 2 */}
        <path d="M 115 100 L 135 100" stroke={primaryColor} strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
        
        {/* Stage 3: Analytics */}
        <rect x="140" y="80" width="30" height="40" rx="4" fill={primaryColor} opacity="0.1" stroke={primaryColor} strokeWidth="2" />
        <g transform="translate(150, 90)">
          <rect x="0" y="0" width="10" height="20" fill={primaryColor} opacity="0.8" />
          <rect x="2" y="2" width="6" height="16" fill={primaryColor} opacity="0.4" />
          <rect x="4" y="4" width="2" height="12" fill={primaryColor} opacity="0.6" />
        </g>
        <text x="155" y="140" textAnchor="middle" fontSize="10" fill={theme.palette.text.secondary}>Analytics</text>
      </g>
      
      {/* Data flow indicators */}
      <g opacity="0.6">
        <circle cx="40" cy="60" r="2" fill={primaryColor} />
        <circle cx="60" cy="60" r="2" fill={primaryColor} />
        <circle cx="80" cy="60" r="2" fill={primaryColor} />
        <circle cx="100" cy="60" r="2" fill={primaryColor} />
        <circle cx="120" cy="60" r="2" fill={primaryColor} />
        <circle cx="140" cy="60" r="2" fill={primaryColor} />
        <circle cx="160" cy="60" r="2" fill={primaryColor} />
      </g>
      
      {/* Arrow marker definition */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill={primaryColor} />
        </marker>
      </defs>
    </svg>
  );
};

// Performance Metrics Visualization
export const PerformanceMetrics = ({ size = 200, color = null }) => {
  const theme = useTheme();
  const primaryColor = color || theme.palette.primary.main;
  
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Circular progress indicators */}
      <g transform="translate(100, 100)">
        {/* Outer ring - 75% */}
        <circle cx="0" cy="0" r="60" fill="none" stroke={theme.palette.divider} strokeWidth="8" />
        <circle cx="0" cy="0" r="60" fill="none" stroke={primaryColor} strokeWidth="8" 
          strokeDasharray="282.7" strokeDashoffset="70.7" strokeLinecap="round" 
          transform="rotate(-90)" opacity="0.8" />
        
        {/* Middle ring - 60% */}
        <circle cx="0" cy="0" r="45" fill="none" stroke={theme.palette.divider} strokeWidth="6" />
        <circle cx="0" cy="0" r="45" fill="none" stroke={primaryColor} strokeWidth="6" 
          strokeDasharray="212" strokeDashoffset="84.8" strokeLinecap="round" 
          transform="rotate(-90)" opacity="0.6" />
        
        {/* Inner ring - 90% */}
        <circle cx="0" cy="0" r="30" fill="none" stroke={theme.palette.divider} strokeWidth="4" />
        <circle cx="0" cy="0" r="30" fill="none" stroke={primaryColor} strokeWidth="4" 
          strokeDasharray="141.4" strokeDashoffset="14.1" strokeLinecap="round" 
          transform="rotate(-90)" opacity="0.9" />
      </g>
      
      {/* Center metrics */}
      <text x="100" y="95" textAnchor="middle" fontSize="16" fontWeight="bold" fill={primaryColor}>85%</text>
      <text x="100" y="110" textAnchor="middle" fontSize="10" fill={theme.palette.text.secondary}>Efficiency</text>
      
      {/* Side metrics */}
      <g transform="translate(20, 50)">
        <rect x="0" y="0" width="60" height="20" rx="2" fill={primaryColor} opacity="0.1" />
        <text x="30" y="13" textAnchor="middle" fontSize="10" fill={theme.palette.text.primary}>Speed: +30%</text>
      </g>
      
      <g transform="translate(120, 50)">
        <rect x="0" y="0" width="60" height="20" rx="2" fill={primaryColor} opacity="0.1" />
        <text x="30" y="13" textAnchor="middle" fontSize="10" fill={theme.palette.text.primary}>Cost: -25%</text>
      </g>
      
      <g transform="translate(20, 130)">
        <rect x="0" y="0" width="60" height="20" rx="2" fill={primaryColor} opacity="0.1" />
        <text x="30" y="13" textAnchor="middle" fontSize="10" fill={theme.palette.text.primary}>Quality: +40%</text>
      </g>
      
      <g transform="translate(120, 130)">
        <rect x="0" y="0" width="60" height="20" rx="2" fill={primaryColor} opacity="0.1" />
        <text x="30" y="13" textAnchor="middle" fontSize="10" fill={theme.palette.text.primary}>Scale: 5x</text>
      </g>
    </svg>
  );
};

// PropTypes for all components
DataIntegrationChart.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

AnalyticsDashboard.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

PointCloud3D.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

DataFlowPipeline.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

PerformanceMetrics.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

