/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

const Features = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid
        container
        spacing={4}
        flexDirection={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box maxWidth={450} width={1}>
            <Box
              component={'img'}
              src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration2.svg"
              alt="Image Description"
              sx={{
                width: 1,
                height: 1,
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          container
          alignItems={'center'}
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Box>
            <Box marginBottom={2}>
              <Typography
                variant={'h4'}
                sx={{ fontWeight: 700, color: 'common.white' }}
                gutterBottom
              >
                Monitor and analyze usage patterns.
              </Typography>
              <Typography sx={{ color: 'common.white' }} variant={'h6'}>
                Advanced analytics and monitoring solutions that provide real-time
                insights into your applications, user behavior, and system performance.
              </Typography>
            </Box>
            <Grid container spacing={1}>
              {[
                'Real-time application monitoring and performance tracking.',
                'User behavior analytics and conversion optimization.',
                'Custom dashboards and automated reporting systems.',
                'Scalable infrastructure monitoring and alerting.',
              ].map((item, i) => (
                <Grid item xs={12} key={i}>
                  <Box
                    component={ListItem}
                    disableGutters
                    width={'auto'}
                    padding={0}
                  >
                    <Box
                      component={ListItemAvatar}
                      minWidth={'auto !important'}
                      marginRight={2}
                    >
                      <Box
                        component={Avatar}
                        bgcolor={theme.palette.secondary.main}
                        width={20}
                        height={20}
                      >
                        <svg
                          width={12}
                          height={12}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Box>
                    </Box>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ color: 'common.white' }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
