import Container from 'components/Container/Container';
import { LearningWordCardStyles } from './LearningWordCardStyles.styled';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '../../redux/user/userSelectors';
import { languages } from 'constants/languages';
import { useNavigate, useParams } from 'react-router-dom';
import RepetitionsProgressWord from 'components/RepetitionsProgressWord/RepetitionsProgressWord';
import operations from '../../redux/user/operations';
import AnswerInputContainer from 'components/AnswerInputContainer/AnswerInputContainer';
import AnsweredWordCard from 'components/AnsweredWordCard/AnsweredWordCard';
import WordMoreInfo from 'components/WordMoreInfo/WordMoreInfo';
import { capitalizeFirstChar } from 'functions/capitalizeFirstChar';
import { useTranslation } from 'react-i18next';

const LearningWordCard = ({
  word,
  currentWordCount,
  toNextWord,
  isAnswered,
  setIsAnswered,
  score,
  setScore,
  settings,
}) => {
  const { nativeLang, dictionaries } = useSelector(getCurrentUser);
  const { dictId } = useParams();
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState(0);
  const [isShowMoreInfo, setIsShowMoreInfo] = useState(false);
  const { t } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nativeLangName = languages.find(lang => lang.lang === nativeLang)?.name;
  const translateLangName = languages.find(lang => lang.lang === dictId)?.name;

  const currentMode =
    settings.tl === nativeLang
      ? `${nativeLangName} => ${translateLangName}`
      : `${translateLangName} => ${nativeLangName}`;

  const isCorrectAnswer =
    settings.tl === nativeLang
      ? word?.text === answer
      : word[nativeLang]?.text === answer;

  const isLastWord = currentWordCount + 1 === Number(settings.count);
  const userWords = dictionaries?.find(dict => dict.lang === dictId).words;
  const isUserWord = userWords.some(w => w._id === word._id);

  async function onTranslatePress() {
    if (isUserWord) {
      dispatch(
        operations.changeStatus({
          tl: dictId,
          wordId: word._id,
          result: isCorrectAnswer ? 'correct' : 'incorrect',
        })
      );
    }
    setResult(isCorrectAnswer ? result + 1 : result);
    setAnswer(answer);
    setIsAnswered(true);
    isCorrectAnswer && setScore(score + 1);
  }

  function onNextPress() {
    if (isLastWord) {
      navigate(`/dictionaries/${dictId}`);
    } else {
      toNextWord(currentWordCount + 1);
      setIsAnswered(false);
      setAnswer('');
      isShowMoreInfo && setIsShowMoreInfo(false);
    }
  }

  return (
    <LearningWordCardStyles
      $isCorrectAnswer={isCorrectAnswer}
      $isAnswered={isAnswered}
    >
      <Container>
        <div className="card">
          <h4>{currentMode}</h4>
          <h3>
            {settings.tl === nativeLang
              ? capitalizeFirstChar(word[nativeLang]?.text)
              : capitalizeFirstChar(word?.text)}
          </h3>
          {!isAnswered && (
            <AnswerInputContainer
              setAnswer={setAnswer}
              answer={answer}
              onTranslatePress={onTranslatePress}
            />
          )}

          {isAnswered && (
            <AnsweredWordCard
              answer={answer}
              word={word}
              currentLang={settings.tl}
              isCorrectAnswer={isCorrectAnswer}
              isUserWord={isUserWord}
              userWords={userWords}
            />
          )}
        </div>
        {isAnswered && (
          <div className="btn-container">
            {!isShowMoreInfo && (
              <button
                type="button"
                onClick={() => setIsShowMoreInfo(!isShowMoreInfo)}
              >
                {t('learning-page.more-info-btn')}
              </button>
            )}

            <button type="button" className="next-btn" onClick={onNextPress}>
              {isLastWord
                ? t('learning-page.end-btn')
                : t('learning-page.next-btn')}
            </button>
          </div>
        )}

        {isShowMoreInfo && <WordMoreInfo word={word} />}

        {isUserWord && <RepetitionsProgressWord id={word._id} />}
      </Container>
    </LearningWordCardStyles>
  );
};

export default LearningWordCard;
