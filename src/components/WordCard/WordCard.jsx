import { useSelector } from 'react-redux';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { WordCardStyles } from './WordCardStyles.styled';
import { Trash, RotateCcw, LoaderCircle } from 'lucide-react';
import { getCurrentUser } from '../../redux/user/userSelectors';
import { getPercentage } from 'functions/getPercentage';
import { useParams } from 'react-router-dom';
import operations from '../../redux/user/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const WordCard = ({ word, page }) => {
  const { t } = useTranslation();
  const { text, _id, repeatCount } = word;
  const { memoryStatus, nativeLang } = useSelector(getCurrentUser);
  const { dictId } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const percentage = getPercentage(memoryStatus, repeatCount);

  async function onActionPress(e) {
    setIsLoading(true);
    if (word.repeatCount >= memoryStatus) {
      await dispatch(operations.sendToRepeat({ wordId: _id, tl: dictId }));
    } else {
      await dispatch(operations.deleteWord({ wordId: _id, tl: dictId }));
    }
    setIsLoading(false);
  }

  return (
    <WordCardStyles $percentage={percentage} $page={page}>
      <div className="icon-title-container">
        <div className="title-container">
          <h4>{text}</h4>
          <p>{word[nativeLang].text}</p>
        </div>
        <button type="button" onClick={onActionPress}>
          {isLoading ? (
            <LoaderCircle size={24} className="spinner" />
          ) : page === 'in-progress' ? (
            <Trash size={24} />
          ) : (
            <RotateCcw size={24} />
          )}
        </button>
      </div>

      <div className="progress-container">
        <div className="repeat-container">
          <p>{t('general.repetitions')}</p>
          <p className="count">
            {repeatCount}/{memoryStatus}
          </p>
        </div>
        <ProgressBar percentage={percentage} isColored={true} />
        <p className="percentage">{percentage}%</p>
      </div>
    </WordCardStyles>
  );
};

export default WordCard;
