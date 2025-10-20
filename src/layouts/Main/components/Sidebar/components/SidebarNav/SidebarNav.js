import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Logo from 'components/Logo';

import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {

  const {
    company: companyPages,
    blog: blogPages,
  } = pages;

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
        <Box>
          <NavItem title={'Company'} items={companyPages} />
        </Box>
        <Box>
          <NavItem title={'Blog'} items={blogPages} />
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
