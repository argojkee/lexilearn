import { LearningTitleSectionStyles } from './LearningTitleSectionStyles.styled';
import Container from 'components/Container/Container';
import BackLink from 'components/BackLink/BackLink';
import { useParams } from 'react-router-dom';
import { Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LearningTitleSection = () => {
  const { dictId } = useParams();
  const { t } = useTranslation();

  return (
    <LearningTitleSectionStyles>
      <Container>
        <BackLink to={`/dictionary/${dictId}`} />
        <div className="info-container">
          <Play size={40} />
          <h2>{t('learning-page.title')}</h2>
        </div>
      </Container>
    </LearningTitleSectionStyles>
  );
};

export default LearningTitleSection;
