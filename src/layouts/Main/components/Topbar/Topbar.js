import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from 'components/Logo';
import { CALENDLY_URL, CALENDLY_LABEL } from 'config/calendly';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { company: companyPages, services } = pages;
  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="ms3dm.tech"
        sx={{ textDecoration: 'none' }}
      >
        <Logo size="medium" colorInvert={colorInvert} />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={4}>
          <Typography
            component={'a'}
            href={services?.href || '/#engagements'}
            color={linkColor}
            sx={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            {services?.title || 'Services'}
          </Typography>
        </Box>
        <Box marginLeft={4}>
          <Typography
            component={'a'}
            href={'/homebase'}
            color={linkColor}
            sx={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            Homebase
          </Typography>
        </Box>
        <Box marginLeft={4}>
          <Typography
            component={'a'}
            href={'/compendium'}
            color={linkColor}
            sx={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            Compendium
          </Typography>
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Company'}
            id={'company-pages'}
            items={companyPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={3}>
          <Button
            component="a"
            href="/contact-page#assessment"
            variant="contained"
            color="primary"
            size="small"
            sx={{ whiteSpace: 'nowrap' }}
          >
            Assessment
          </Button>
        </Box>
        <Box marginLeft={1.5}>
          <Button
            component="a"
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="text"
            color="primary"
            size="small"
            sx={{ whiteSpace: 'nowrap' }}
          >
            {CALENDLY_LABEL}
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
