import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Logo from 'components/Logo';
import { CALENDLY_URL, CALENDLY_LABEL } from 'config/calendly';

import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
  const { company: companyPages, services } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="ms3dm.tech"
          sx={{ textDecoration: 'none' }}
        >
          <Logo size="medium" />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box marginBottom={1}>
          <Typography
            component={'a'}
            href={services?.href || '/#engagements'}
            fontWeight={400}
            color={'text.primary'}
            sx={{ textDecoration: 'none' }}
          >
            {services?.title || 'Services'}
          </Typography>
        </Box>
        <Box marginBottom={1}>
          <Typography
            component={'a'}
            href={'/homebase'}
            fontWeight={400}
            color={'text.primary'}
            sx={{ textDecoration: 'none' }}
          >
            Homebase
          </Typography>
        </Box>
        <Box marginBottom={1}>
          <Typography
            component={'a'}
            href={'/compendium'}
            fontWeight={400}
            color={'text.primary'}
            sx={{ textDecoration: 'none' }}
          >
            Compendium
          </Typography>
        </Box>
        <Box>
          <NavItem title={'Company'} items={companyPages} />
        </Box>
        <Box marginTop={3} display="flex" flexDirection="column" gap={1.5}>
          <Button
            component="a"
            href="/contact-page#assessment"
            variant="contained"
            color="primary"
            fullWidth
          >
            Start with a readiness assessment
          </Button>
          <Button
            component="a"
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            color="primary"
            fullWidth
          >
            {CALENDLY_LABEL}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
