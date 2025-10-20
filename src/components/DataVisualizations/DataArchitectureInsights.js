import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DataArchitectureInsights = ({ size = 400 }) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: size,
        minHeight: size * 1.2,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 4,
        padding: 3,
        position: 'relative',
        overflow: 'auto',
        boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)',
        border: 'none',
        margin: '0 auto',
      }}
    >
      {/* Top Text Section */}
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: 3,
          padding: 3,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          marginBottom: 3,
          backdropFilter: 'blur(10px)',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.primary,
            fontSize: '0.9rem',
            lineHeight: 1.6,
            marginBottom: 2,
            fontWeight: 500,
          }}
        >
          Data architecture not only organizes information effectively but also drives <strong style={{ color: '#667eea' }}>digital transformation</strong>. Embracing innovative strategies allows businesses to harness data&apos;s power, improve efficiency, and stay competitive.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.primary,
            fontSize: '0.9rem',
            lineHeight: 1.6,
            marginBottom: 2,
            fontWeight: 500,
          }}
        >
          In an era where every decision hinges on data, <strong style={{ color: '#667eea' }}>investing in robust architecture</strong> is crucial. By understanding data flows and ensuring quality, organizations can unlock insights that fuel growth.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 700,
            color: '#667eea',
            fontSize: '0.9rem',
            textAlign: 'center',
            marginTop: 2,
            padding: '8px 16px',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            borderRadius: 2,
            display: 'inline-block',
            width: '100%',
          }}
        >
          Learn more today!
        </Typography>
      </Box>

      {/* Middle Section - Statistics Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 2,
          marginBottom: 3,
        }}
      >
        {/* Left Column */}
        <Box>
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: 3,
              padding: 3,
              marginBottom: 2,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              backdropFilter: 'blur(10px)',
              borderLeft: '4px solid #667eea',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: '#667eea',
                marginBottom: 1,
                fontSize: '2.5rem',
              }}
            >
              90%
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.primary,
                fontSize: '0.8rem',
                lineHeight: 1.4,
                fontWeight: 500,
              }}
            >
              Over 90% of industry respondents rate data engineering as critically important - Matillion.
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: 3,
              padding: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              backdropFilter: 'blur(10px)',
              borderLeft: '4px solid #764ba2',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: '#764ba2',
                marginBottom: 1,
                fontSize: '2.5rem',
              }}
            >
              59%
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.primary,
                fontSize: '0.8rem',
                lineHeight: 1.4,
                fontWeight: 500,
              }}
            >
              Respondents identifying GenAI and ML-integration as key areas - Nexla.
            </Typography>
          </Box>
        </Box>

        {/* Right Column */}
        <Box>
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: 3,
              padding: 3,
              marginBottom: 2,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              backdropFilter: 'blur(10px)',
              borderLeft: '4px solid #f093fb',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: '#f093fb',
                marginBottom: 1,
                fontSize: '2.5rem',
              }}
            >
              23x
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.primary,
                fontSize: '0.8rem',
                lineHeight: 1.4,
                fontWeight: 500,
              }}
            >
              Data-driven organizations are 23 times more likely to acquire customers - keboola.com.
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: 3,
              padding: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              backdropFilter: 'blur(10px)',
              borderLeft: '4px solid #4facfe',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: '#4facfe',
                marginBottom: 1,
                fontSize: '2.5rem',
              }}
            >
              57%
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.primary,
                fontSize: '0.8rem',
                lineHeight: 1.4,
                fontWeight: 500,
              }}
            >
              Over 57% of professionals citing poor data quality as predominant issue - dbt labs.
            </Typography>
          </Box>
        </Box>
      </Box>

    </Box>
  );
};

DataArchitectureInsights.propTypes = {
  size: PropTypes.number,
};

export default DataArchitectureInsights;
