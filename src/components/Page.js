import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from 'theme';
import AOS from 'aos';

export const useDarkMode = () => {
  // Homebase is a dark-first, near-black instrument. The palette resolves to the
  // same monochrome system in either mode, so we lock the app to dark to keep the
  // aesthetic consistent. themeToggler is retained for API compatibility.
  const [themeMode] = useState('dark');
  const [mountedComponent, setMountedComponent] = useState(false);

  const themeToggler = () => {
    /* Homebase is dark-only; toggling is intentionally a no-op. */
  };

  useEffect(() => {
    try {
      window.localStorage.setItem('themeMode', 'dark');
    } catch {
      /* do nothing */
    }
    setMountedComponent(true);
  }, []);

  return [themeMode, themeToggler, mountedComponent];
};

export default function Page({ children }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 0,
      duration: 800,
      offset: 0,
      easing: 'ease-in-out',
    });
  }, []);

  const [themeMode, themeToggler, mountedComponent] = useDarkMode();

  useEffect(() => {
    AOS.refresh();
  }, [mountedComponent, themeMode]);

  return (
    <ThemeProvider theme={getTheme(themeMode, themeToggler)}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {/* Transparent shell so the body atmosphere (glow + grain) shows through. */}
      <Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
        {children}
      </Paper>
    </ThemeProvider>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
