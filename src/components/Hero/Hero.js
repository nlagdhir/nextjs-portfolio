import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Looking for Next JS and React JS Developer, You are at right place. 
      </SectionText>
      <Button onClick={() => window.location = 'https"//nlagdhir.in'}>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;