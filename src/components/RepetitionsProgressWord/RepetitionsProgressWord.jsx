import ProgressBar from 'components/ProgressBar/ProgressBar';
import { RepetitionsProgressWordStyles } from './RepetitionProgressWordStyles.styled';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/user/userSelectors';
import { getPercentage } from 'functions/getPercentage';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const RepetitionsProgressWord = ({ id }) => {
  const { memoryStatus, dictionaries } = useSelector(getCurrentUser);
  const { dictId } = useParams();
  const { t } = useTranslation();

  const currentWord = dictionaries
    ?.find(dict => dict.lang === dictId)
    ?.words?.find(w => w._id === id);

  const percentage = getPercentage(memoryStatus, currentWord.repeatCount);
  return (
    <RepetitionsProgressWordStyles $percentage={percentage}>
      <div className="progress-text">
        <p>
          {t('general.repetitions')}: {currentWord.repeatCount}
        </p>
        <p>
          {t('general.progress')}: {percentage}%
        </p>
      </div>
      <ProgressBar percentage={percentage} isColored={true} />
    </RepetitionsProgressWordStyles>
  );
};

export default RepetitionsProgressWord;
