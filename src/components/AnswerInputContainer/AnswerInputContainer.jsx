import { useTranslation } from 'react-i18next';
import { AnswerInputContainerStyles } from './AnswerInputContainerStyles.styled';
const AnswerInputContainer = ({ setAnswer, answer, onTranslatePress }) => {
  const { t } = useTranslation();
  return (
    <AnswerInputContainerStyles>
      <input
        type="text"
        name="answer"
        placeholder={t('learning-page.translation-placeholder')}
        onChange={e => setAnswer(e.target.value.trim().toLowerCase())}
        autoComplete="off"
      />
      <button
        className="check-btn"
        type="button"
        disabled={!answer}
        onClick={onTranslatePress}
      >
        {t('learning-page.check-answer-btn')}
      </button>
    </AnswerInputContainerStyles>
  );
};

export default AnswerInputContainer;
