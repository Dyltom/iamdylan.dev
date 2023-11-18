import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, IconButton, Stack } from '@mui/material';
import React from 'react';

const SocialMediaShare: React.FC = () => {
  const url = encodeURIComponent(document.location.href);
  const title = encodeURIComponent(document.title);

  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      'facebook-share-dialog',
      'width=800,height=600'
    );
  };

  const handleTwitterShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      'twitter-share-dialog',
      'width=800,height=600'
    );
  };

  const handleLinkedInShare = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      'linkedin-share-dialog',
      'width=800,height=600'
    );
  };

  const handleRedditShare = () => {
    window.open(
      `https://reddit.com/submit?url=${url}&title=${title}`,
      'reddit-share-dialog',
      'width=800,height=600'
    );
  };

  const handleEmailShare = () => {
    window.location.href = `mailto:?subject=${title}&body=${url}`;
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Stack direction="row" spacing={1}>
        <IconButton
          aria-label="Share on Facebook"
          onClick={handleFacebookShare}
        >
          <FacebookIcon sx={{ color: 'secondary.main' }} />
        </IconButton>
        <IconButton aria-label="Share on Twitter" onClick={handleTwitterShare}>
          <TwitterIcon sx={{ color: 'secondary.main' }} />
        </IconButton>
        <IconButton
          aria-label="Share on LinkedIn"
          onClick={handleLinkedInShare}
        >
          <LinkedInIcon sx={{ color: 'secondary.main' }} />
        </IconButton>
        <IconButton aria-label="Share on Reddit" onClick={handleRedditShare}>
          <RedditIcon sx={{ color: 'secondary.main' }} />
        </IconButton>
        <IconButton aria-label="Share via Email" onClick={handleEmailShare}>
          <EmailIcon sx={{ color: 'secondary.main' }} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default SocialMediaShare;
