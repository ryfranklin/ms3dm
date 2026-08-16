/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import config from 'config/environment';

const OWNER_EMAIL = 'ryan.franklin@ms3dm.tech';

const validationSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid full name')
    .max(50, 'Please enter a valid full name')
    .required('Please specify your full name'),
  message: yup
    .string()
    .trim()
    .required('Please specify your message'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required'),
});

// When no backend endpoint is configured, open the visitor's mail client so the
// form always does something useful.
const mailtoFallback = ({ fullName, email, message }) => {
  const subject = encodeURIComponent(`Contact from ${fullName}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${fullName} (${email})`);
  window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
};

const Form = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  // status: idle | submitting | success | error
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const initialValues = {
    fullName: '',
    message: '',
    email: '',
    // Honeypot: hidden from users; bots that fill it are silently dropped.
    company: '',
  };

  const onSubmit = async (values, { resetForm }) => {
    setErrorMsg('');

    // Bot caught by the honeypot: pretend success, send nothing.
    if (values.company) {
      setStatus('success');
      resetForm();
      return;
    }

    const endpoint = config.contactEndpoint;

    // No backend configured: fall back to a mailto compose.
    if (!endpoint) {
      mailtoFallback(values);
      setStatus('success');
      resetForm();
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          message: values.message,
          company: values.company,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      setStatus('success');
      resetForm();
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        `${err.message} You can also email ${OWNER_EMAIL} directly.`,
      );
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const submitting = status === 'submitting';

  if (status === 'success') {
    return (
      <Box
        sx={{
          maxWidth: 600,
          margin: '0 auto',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          backgroundColor: 'var(--surface)',
          padding: { xs: 4, md: 6 },
          textAlign: 'center',
        }}
        role="status"
      >
        <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1.5 }}>
          Message sent.
        </Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
          Thanks for reaching out. I read every message myself and will reply to
          you personally.
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Box marginBottom={2}>
        <Typography
          variant={'h4'}
          sx={{ fontWeight: 700 }}
          gutterBottom
          align={'center'}
        >
          Tell Me About Your Project
        </Typography>
        <Typography color="text.secondary" align={'center'}>
          Describe your data engineering or AI/ML challenge: lakehouse modernization, pipeline reliability, RAG, or agentic AI. I read every message myself and will reply personally.
        </Typography>
      </Box>
      <Box
        maxWidth={600}
        margin={'0 auto'}
        component={'form'}
        onSubmit={formik.handleSubmit}
        sx={{
          '& .MuiOutlinedInput-root.MuiInputBase-multiline': {
            padding: 0,
          },
          '& .MuiOutlinedInput-input': {
            background: theme.palette.background.paper,
            padding: 2,
          },
        }}
      >
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Full name
            </Typography>
            <TextField
              placeholder="Your full name"
              variant="outlined"
              size="medium"
              name="fullName"
              fullWidth
              type="text"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              E-mail
            </Typography>
            <TextField
              placeholder="Your e-mail address"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              fontWeight={700}
              gutterBottom
            >
              Message
            </Typography>
            <TextField
              placeholder="Tell me about your data platform, pipelines, or AI/ML goals"
              variant="outlined"
              name="message"
              fullWidth
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>

          {/* Honeypot: visually hidden, off the tab order, ignored by humans. */}
          <Box
            aria-hidden="true"
            sx={{ position: 'absolute', left: '-5000px' }}
          >
            <label htmlFor="company-website">Company</label>
            <input
              id="company-website"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formik.values.company}
              onChange={formik.handleChange}
            />
          </Box>

          {status === 'error' && (
            <Grid item xs={12}>
              <Box
                role="alert"
                sx={{
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--surface)',
                  padding: 2,
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {errorMsg}
                </Typography>
              </Box>
            </Grid>
          )}

          <Grid item container justifyContent="center" xs={12}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
              disabled={submitting}
              sx={{
                paddingX: 4,
                paddingY: 1.5,
              }}
            >
              {submitting ? 'Sending…' : 'Send Message'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Form;
