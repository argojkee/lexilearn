import FeautureCard from 'components/FeatureCard/FeautureCard';
import { AboutUsStyles } from './AboutUsStyles.styled';
import Container from 'components/Container/Container';
import { feautures } from 'constants/feautures';
import { nanoid } from 'nanoid';

const AboutUs = () => {
  return (
    <AboutUsStyles>
      <Container>
        <h2 hidden>Features</h2>
        <ul>
          {feautures.map(feat => (
            <FeautureCard key={nanoid()} {...feat} />
          ))}
        </ul>
      </Container>
    </AboutUsStyles>
  );
};

export default AboutUs;
