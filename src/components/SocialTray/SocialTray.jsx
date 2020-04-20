import './SocialTray.css';

import React from 'react';
import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular
} from 'react-icons/ti';

const generateLink = (link, icon) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    {icon}
  </a>
);

export default function SocialTray() {
  return (
    <div>
      {generateLink(
        'https://www.linkedin.com/in/arad-margalit-6a0271a6',
        <TiSocialLinkedinCircular size={48} />
      )}
      {generateLink(
        'https://github.com/aradmargalit',
        <TiSocialGithubCircular size={48} />
      )}
    </div>
  );
}
