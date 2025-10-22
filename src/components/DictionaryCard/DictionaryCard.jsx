import { Link } from 'react-router-dom';
import { DictionaryCardStyles } from './DictionaryCardStyles.styled';
import { languages } from 'constants/languages';
import { Trophy, Clock, BookOpen, Trash } from 'lucide-react';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import { getPercentage } from 'functions/getPercentage';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/user/userSelectors';
import GeneralModal from 'components/GeneralModal/GeneralModal';
import { useState } from 'react';
import DeleteDictionaryModal from 'components/DeleteDictionaryModal/DeleteDictionaryModal';
import { useTranslation } from 'react-i18next';

const DictionaryCard = ({ dictionary }) => {
  const { memoryStatus } = useSelector(getCurrentUser);
  const [isDeleting, setIsDeleting] = useState(false);
  const { name, icon } = languages.find(lang => lang.lang === dictionary.lang);
  const { t } = useTranslation();

  const stats = dictionary.words.reduce(
    (acc, word) => {
      word.repeatCount >= memoryStatus
        ? (acc.isDone += 1)
        : (acc.inProgress += 1);
      return acc;
    },
    { inProgress: 0, isDone: 0 }
  );

  const percentage = getPercentage(stats?.inProgress, stats?.isDone);

  async function onDeleteClick(e) {
    e.stopPropagation();
    e.preventDefault();
    setIsDeleting(true);
  }

  return (
    <DictionaryCardStyles>
      <Link to={`/dictionary/${dictionary.lang}`}>
        <div className="lang-title-container">
          <div className="lang-title">
            <img src={icon} alt="flag" width="40px" height="30px" />
            <h3>{name}</h3>
          </div>
          <BookOpen color="grey" size={28} />
        </div>
        <div className="progress-container">
          <div className="progress-info">
            <p className="progress-text">{t('general.progress')}</p>
            <p>{percentage}%</p>
          </div>
          <ProgressBar height="6px" percentage={percentage} />
        </div>
        <div className="info-container">
          <div>
            <Trophy size={16} color="green" />
            <p>
              {stats.isDone} {t('general.learned')}
            </p>
          </div>
          <div>
            <Clock size={16} color="tomato" />
            <p>
              {stats.inProgress} {t('general.in-progress')}
            </p>
          </div>
        </div>
        <div className="total">
          <p>
            {dictionary.words.length}{' '}
            {`${t('general.total')} ${t('general.words')}`}
          </p>
          <button type="button" onClick={onDeleteClick}>
            <Trash size={28} color="red" />
          </button>
        </div>
      </Link>
      {isDeleting && (
        <GeneralModal
          toggleModal={setIsDeleting}
          children={
            <DeleteDictionaryModal
              toggleModal={setIsDeleting}
              tl={dictionary.lang}
            />
          }
        />
      )}
    </DictionaryCardStyles>
  );
};

export default DictionaryCard;
