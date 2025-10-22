import { useDispatch, useSelector } from 'react-redux';
import { AnsweredWordCardStyles } from './AnsweredWordCardStyles.styled';
import { getCurrentUser } from '../../redux/user/userSelectors';
import { Plus, Check, X, RotateCcw, Trash, LoaderCircle } from 'lucide-react';
import operations from '../../redux/user/operations';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { capitalizeFirstChar } from 'functions/capitalizeFirstChar';
import { useTranslation } from 'react-i18next';
const AnsweredWordCard = ({
  answer,
  word,
  currentLang,
  isCorrectAnswer,
  isUserWord,
  userWords,
}) => {
  const { nativeLang, memoryStatus } = useSelector(getCurrentUser);
  const dispatch = useDispatch();
  const { dictId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  async function onActionPress() {
    setIsLoading(true);
    if (getRepetitionsCount() >= memoryStatus) {
      await dispatch(operations.sendToRepeat({ wordId: word._id, tl: dictId }));
    } else {
      await dispatch(operations.deleteWord({ wordId: word._id, tl: dictId }));
    }

    setIsLoading(false);
  }

  function getRepetitionsCount() {
    const currentWord = userWords.find(w => w._id === word._id);
    return currentWord.repeatCount;
  }

  async function onAddPress() {
    setIsLoading(true);
    await dispatch(operations.addWord({ wordId: word._id, tl: dictId }));
    setIsLoading(false);
  }

  return (
    <AnsweredWordCardStyles $isCorrectAnswer={isCorrectAnswer}>
      <p>
        {t('learning-page.user-answer')}:{' '}
        <span className="answer">{capitalizeFirstChar(answer)}</span>
      </p>
      <p>
        {t('learning-page.correct-answer')}:{' '}
        <span className="correct-answer">
          {currentLang === nativeLang
            ? capitalizeFirstChar(word?.text)
            : capitalizeFirstChar(word[nativeLang]?.text)}
        </span>
      </p>
      <p className="result">
        {isCorrectAnswer ? (
          <>
            {' '}
            <Check size={16} color="green" />
            {t('learning-page.correct')}
          </>
        ) : (
          <>
            <X size={16} color="red" /> {t('learning-page.incorrect')}
          </>
        )}
      </p>
      {isUserWord && (
        <button type="button" className="action-btn" onClick={onActionPress}>
          {isLoading ? (
            <LoaderCircle size={20} className="spinner" />
          ) : getRepetitionsCount() >= memoryStatus ? (
            <RotateCcw size={20} />
          ) : (
            <Trash size={20} />
          )}
        </button>
      )}
      {!isUserWord && (
        <button type="button" className="action-btn" onClick={onAddPress}>
          {isLoading ? (
            <LoaderCircle size={20} className="spinner" />
          ) : (
            <Plus size={20} />
          )}
        </button>
      )}
    </AnsweredWordCardStyles>
  );
};

export default AnsweredWordCard;
