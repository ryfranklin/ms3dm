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
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{
                fontWeight: 400,
                marginBottom: 3,
                lineHeight: 1.6,
              }}
            >
              We combine deep 3D data expertise with modern software engineering to help enterprises transform how they manage, analyze, and use spatial data.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                marginBottom: 3,
                lineHeight: 1.6,
              }}
            >
              Our team brings together decades of experience in 3D data processing, enterprise software development, and data analytics. We understand the unique challenges of working with complex 3D datasets and have built solutions that seamlessly integrate with your existing workflows.
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
                    3D
                  </Typography>
                </Avatar>
                <Typography variant="body2" color="text.primary" sx={{ fontWeight: 500 }}>
                  Data Expertise
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
                    AI
                  </Typography>
                </Avatar>
                <Typography variant="body2" color="text.primary" sx={{ fontWeight: 500 }}>
                  AI & Automation
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
