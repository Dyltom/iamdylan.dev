import { Box, Paper, Tab, Tabs, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { underLineHeaders } from '../../utils/styles';

type Company = {
  name: string;
  title: string;
  startDate: string;
  endDate: string;
  points: string[];
};

const companies: Company[] = [
  {
    name: 'Company A',
    title: 'Software Engineer',
    startDate: 'Jan 2020',
    endDate: 'Present',
    points: [
      'Developed new user-facing features using React.js',
      'Built reusable components and front-end libraries for future use',
    ],
  },
  {
    name: 'Company A',
    title: 'Software Engineer',
    startDate: 'Jan 2020',
    endDate: 'Present',
    points: [
      'Developed new user-facing features using React.js',
      'Built reusable components and front-end libraries for future use',
    ],
  },
];

const WorkExperience: React.FC = () => {
  const theme = useTheme();
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
    setSelectedCompanyIndex(newIndex);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.contrastText,
        borderRadius: theme.shape.borderRadius,
        boxShadow: `inset 0 0 10px ${theme.palette.primary.dark}`,
        overflow: 'hidden', // To ensure the boxShadow doesn't leak
        maxWidth: '1000px', // Max width for the entire component
        mx: 'auto', // Center the component horizontally
        marginTop: 8,
        marginBottom: 4,
      }}
    >
      <Typography
        variant="h5"
        color="primary.contrastText"
        gutterBottom
        sx={underLineHeaders(theme)}
      >
        Work Experience
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexGrow: 1,
          p: theme.spacing(2),
        }}
      >
        <Tabs
          orientation="vertical"
          value={selectedCompanyIndex}
          onChange={handleChange}
          variant="scrollable"
          sx={{
            borderRight: `1px solid ${theme.palette.divider}`,
            '& .MuiTabs-indicator': {
              backgroundColor: theme.palette.secondary.main,
            },
            '& .MuiTab-root': {
              justifyContent: 'flex-start',
              textTransform: 'none',
              fontFamily: 'monospace',
              color: theme.palette.primary.contrastText,
              '&.Mui-selected': {
                color: theme.palette.secondary.main,
                backgroundColor: theme.palette.primary.light,
              },
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            },
            minWidth: '200px', // Minimum width for tabs
            pr: theme.spacing(2), // Padding right
          }}
        >
          {companies.map((company, index) => (
            <Tab label={company.name} key={index} />
          ))}
        </Tabs>

        <Paper
          elevation={0}
          sx={{
            flex: 1, // Paper will fill the remaining space
            backgroundColor: 'transparent',
            color: theme.palette.primary.contrastText,
            fontFamily: 'monospace',
            p: theme.spacing(2),
          }}
        >
          {companies.map((company, index) => (
            <Box
              key={index}
              role="tabpanel"
              hidden={selectedCompanyIndex !== index}
            >
              {selectedCompanyIndex === index && (
                <Box sx={{}}>
                  <Typography variant="h6" color="secondary" gutterBottom>
                    {company.title} at {company.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.secondary.light }}
                  >
                    {company.startDate} - {company.endDate}
                  </Typography>
                  {company.points.map((point, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      sx={{ color: theme.palette.secondary.light }}
                    >
                      - {point}
                    </Typography>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Paper>
      </Box>
    </Box>
  );
};

export default WorkExperience;
