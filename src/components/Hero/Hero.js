import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! I'm Shashank <br />
        Welcome to My Portfolio
      </SectionTitle>
      <SectionText>
        I'm an aspiring Software developer who can put efforts and knowledge to reach company's goals and objectives
      </SectionText>
      <Button onClick={() => window.location = '#projects'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;