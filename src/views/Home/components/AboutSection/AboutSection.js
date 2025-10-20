import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { PointCloud3D } from 'components/DataVisualizations';

const AboutSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        paddingY: 8,
        backgroundColor: theme.palette.alternate.main,
      }}
    >
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 200,
              backgroundColor: alpha(theme.palette.primary.main, 0.05),
              borderRadius: 2,
              marginBottom: 3,
            }}
          >
            <PointCloud3D size={180} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{
                fontWeight: 700,
                marginBottom: 3,
              }}
            >
              Why ms3dm.tech?
            </Typography>
            <Typography
              variant="h5"
              component="p"
              color="text.primary"
              sx={{
                fontWeight: 500,
                marginBottom: 3,
                lineHeight: 1.6,
              }}
            >
              We combine deep data analytics expertise with modern engineering to help enterprises transform how they capture, analyze, and leverage data for strategic advantage.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                marginBottom: 3,
                lineHeight: 1.8,
              }}
            >
              In today&apos;s fast-paced business environment, the ability to make informed decisions quickly is the difference between leading and following. Yet many organizations struggle with disconnected data sources, complex legacy systems, and insights that arrive too late to matter. Our team brings together decades of experience in data engineering, business intelligence, and advanced analytics to solve these challenges.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                marginBottom: 3,
                lineHeight: 1.8,
              }}
            >
              We understand that successful data transformation requires more than just technology—it requires deep domain expertise, proven methodologies, and solutions that seamlessly integrate with your existing workflows. That&apos;s why industry leaders across retail, finance, healthcare, and manufacturing trust us to accelerate their journey to becoming truly data-driven organizations.
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              gap={2}
              marginTop={3}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: 1,
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  borderRadius: 1,
                }}
              >
                <Avatar
                  sx={{
                    width: 24,
                    height: 24,
                    backgroundColor: theme.palette.primary.main,
                    marginRight: 1,
                  }}
                >
                  <Typography variant="caption" color="white" sx={{ fontWeight: 600 }}>
                    📊
                  </Typography>
                </Avatar>
                <Typography variant="body2" color="text.primary" sx={{ fontWeight: 500 }}>
                  Data Analytics Expertise
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: 1,
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  borderRadius: 1,
                }}
              >
                <Avatar
                  sx={{
                    width: 24,
                    height: 24,
                    backgroundColor: theme.palette.primary.main,
                    marginRight: 1,
                  }}
                >
                  <Typography variant="caption" color="white" sx={{ fontWeight: 600 }}>
                    🤖
                  </Typography>
                </Avatar>
                <Typography variant="body2" color="text.primary" sx={{ fontWeight: 500 }}>
                  AI & Machine Learning
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: 1,
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  borderRadius: 1,
                }}
              >
                <Avatar
                  sx={{
                    width: 24,
                    height: 24,
                    backgroundColor: theme.palette.primary.main,
                    marginRight: 1,
                  }}
                >
                  <Typography variant="caption" color="white" sx={{ fontWeight: 600 }}>
                    ⚡
                  </Typography>
                </Avatar>
                <Typography variant="body2" color="text.primary" sx={{ fontWeight: 500 }}>
                  Enterprise Scale
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
