'use client';

import { Box, Button, Grid, Link, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { ReCAPTCHA } from 'react-google-recaptcha';

import { verifyCaptcha } from '../../utils/ServerActions';
import Fields from './Fields';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [renderRecaptcha, setRenderRecaptcha] = useState(false);

  useEffect(() => {
    if (process.env.RECAPTCHA_SITE_KEY && process.env.isRecaptchaEnabled) {
      setRenderRecaptcha(true);
    }
  }, []);

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  async function handleCaptchaSubmission(token: string | null) {
    await verifyCaptcha(token)
      .then(() => setIsVerified(true))
      .catch(() => setIsVerified(false));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      const data = await response.json();
      if (data.message) {
        alert('Email sent successfully!');
      }
    } catch (error) {
      console.error('Failed to send email', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          p: 2, // Added padding
        }}
      >
        <Typography variant="h6" color="white" gutterBottom>
          Let's Connect
        </Typography>
        <Typography variant="body1" color="white" gutterBottom>
          Feel free to reach out to me here, on{' '}
          <Link
            href="https://www.linkedin.com/in/your-profile"
            color="secondary"
          >
            LinkedIn
          </Link>{' '}
          or check out my projects on{' '}
          <Link href="https://github.com/your-username" color="secondary">
            GitHub
          </Link>
          .
        </Typography>
        <Box mt={2}>
          <Typography color="white">
            Are you interested in grabbing my CV?
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            href="/CV_DylanHenderson_SEP23_V2.7.docx"
            download
            sx={{
              mt: 1,
            }}
          >
            Download CV
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <form onSubmit={handleSubmit}>
          <Fields formState={formState} setFormState={setFormState} />
          {renderRecaptcha && (
            <ReCAPTCHA
              sitekey={process.env.RECAPTCHA_SITE_KEY!}
              ref={recaptchaRef}
              onChange={handleCaptchaSubmission}
            />
          )}
          <Button
            type="submit"
            variant="outlined"
            fullWidth
            sx={{
              color: 'secondary.main',
              borderColor: 'secondary.main',
              '&:hover': {
                backgroundColor: 'secondary.main',
                borderColor: 'secondary.main',
              },
              maxWidth: '10vw',
            }}
            disabled={renderRecaptcha ? !isVerified : false}
          >
            Send
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
