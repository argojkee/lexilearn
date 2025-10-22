import Container from 'components/Container/Container';
import { WordsSectionTitleStyles } from './WordsSectionTitleStyles.styled';
import BackLink from 'components/BackLink/BackLink';
import { Clock, Trophy } from 'lucide-react';
import { useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const WordsSectionTitle = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const page = location.pathname.split('/')[4];
  const { dictId } = useParams();
  return (
    <WordsSectionTitleStyles>
      <Container>
        <div>
          <BackLink to={`/dictionary/${dictId}`} />
          <div className="info">
            {page === 'in-progress' ? (
              <Clock size={40} color="tomato" />
            ) : (
              <Trophy size={40} color="green" />
            )}
            <h1>
              {page === 'in-progress'
                ? t('words-page.words-progress-title')
                : t('words-page.words-learned-title')}
            </h1>
          </div>
        </div>
      </Container>
    </WordsSectionTitleStyles>
  );
};

export default WordsSectionTitle;
