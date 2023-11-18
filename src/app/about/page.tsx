'use client';

import { Box } from '@mui/material';
import AboutMeSection from '../../components/About/AboutMeSection';
import PersonalSection from '../../components/About/PersonalSection';
import SkillsChart from '../../components/About/SkillsChart';
import Testimonials from '../../components/About/Testimonials';
import WorkExperience from '../../components/About/WorkExperience';

export default function AboutPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <AboutMeSection />
      <WorkExperience />
      <SkillsChart />
      <Testimonials />
      <PersonalSection />
    </Box>
  );
}
