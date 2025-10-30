import Container from 'components/Container/Container';
import { LearningScorebarStyles } from './LearningScoreBarStyles.styled';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import { getPercentage } from 'functions/getPercentage';
import { useTranslation } from 'react-i18next';

const LearningScoreBar = ({ currentProgress, total, score, isAnswered }) => {
  const current = isAnswered ? currentProgress + 1 : currentProgress;
  const percentage = getPercentage(total, current);
  const { t } = useTranslation();

  return (
    <LearningScorebarStyles>
      <Container>
        <div>
          <p>
            {t('general.progress')}: {current} / {total}
          </p>
          <p>
            {t('learning-page.score')}: {score} / {current}
          </p>
        </div>

        <ProgressBar percentage={percentage} />
      </Container>
    </LearningScorebarStyles>
  );
};

export default LearningScoreBar;
