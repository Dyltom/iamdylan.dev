import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { underLineHeaders } from '../../utils/styles';

// Mock data for testimonials
const testimonialsData = [
  {
    quote:
      "Dylan's work on our React project was outstanding. He delivered high-quality code on time and exceeded our expectations.",
    author: 'Alex Johnson',
    role: 'CTO at TechCorp',
  },
  {
    quote:
      'The Node.js API developed by Dylan has been robust and scalable, serving as a solid backbone for our services.',
    author: 'Samantha Smith',
    role: 'Lead Developer at DevStudio',
  },
  // ...add more testimonials as needed
];

const Testimonials: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: theme.spacing(2),
        padding: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        sx={underLineHeaders(theme)}
      >
        What People Say About Me
      </Typography>
      {testimonialsData.map((testimonial, index) => (
        <Box
          key={index}
          sx={{
            padding: theme.spacing(2),
            borderLeft: `2px solid ${theme.palette.secondary.main}`,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            fontFamily: 'monospace',
          }}
        >
          <Typography
            variant="body1"
            sx={{ mb: 1, color: theme.palette.secondary.light }}
          >
            "{testimonial.quote}"
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            {testimonial.author}
          </Typography>
          <Typography variant="caption">{testimonial.role}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Testimonials;
