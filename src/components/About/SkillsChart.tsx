// components/SkillsDisplay.tsx
import { Box, LinearProgress, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { underLineHeaders } from '../../utils/styles';

type Skill = {
  name: string;
  experience: number; // Experience in years
};

//TODO: pull out of strapi
const skills: Skill[] = [
  { name: 'React', experience: 2.5 },
  { name: 'Typescript', experience: 2 },
  { name: 'Node.js', experience: 1.5 },
];

const maxSkillExperience = Math.max(...skills.map((skill) => skill.experience));
const maxExperience = Math.ceil(maxSkillExperience); // Set max slightly above the highest skill experience

const SkillBarContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '10px',
  borderRadius: '5px',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper, // Container background
  flex: 1,
}));

const SkillBarProgress = styled(LinearProgress)(({ theme }) => ({
  height: '100%',
  borderRadius: '5px',
  '& .MuiLinearProgress-bar': {
    backgroundColor: theme.palette.secondary.main, // Bar color
    transition: 'width 2s ease',
  },
}));

const ExperienceMarker = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '2px',
  backgroundColor: theme.palette.primary.contrastText, // Marker color
  zIndex: 1,
}));

const SkillsDisplay: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ color: theme.palette.primary.contrastText, padding: '1rem' }}>
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        sx={underLineHeaders(theme)}
      >
        My Technical Skills
      </Typography>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        sx={{ fontFamily: 'monospace', textAlign: 'center', marginTop: '1rem' }}
      >
        Each marker represents 1 year of experience.
      </Typography>
      {skills.map((skill, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography
            variant="subtitle1"
            sx={{
              width: '100px',
              fontFamily: 'monospace',
              color: theme.palette.secondary.light,
              marginRight: '1rem',
            }}
          >
            {skill.name}
          </Typography>
          <SkillBarContainer>
            {Array.from({ length: Math.floor(maxExperience) }).map((_, i) => (
              <ExperienceMarker
                key={i}
                sx={{
                  left: `${((i + 1) / maxExperience) * 100}%`,
                }}
              />
            ))}
            <SkillBarProgress
              variant="determinate"
              value={(skill.experience / maxExperience) * 100}
            />
          </SkillBarContainer>
        </Box>
      ))}
    </Box>
  );
};

export default SkillsDisplay;
