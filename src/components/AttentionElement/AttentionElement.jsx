import { useSelector } from 'react-redux';
import { AttentionElementStyles } from './AttentionElement.styled';
import { getCurrentUser } from '../../redux/user/userSelectors';
import { betaWords } from 'constants/words';
import { capitalizeFirstChar } from 'functions/capitalizeFirstChar';
import { useTranslation } from 'react-i18next';

const AttentionElement = () => {
  const { nativeLang } = useSelector(getCurrentUser);
  const currentBetaWords = betaWords.find(words => words.lang === nativeLang);
  const { t } = useTranslation();

  const wordsString = currentBetaWords?.words?.join(', ');

  const capitalizedWordsString = capitalizeFirstChar(wordsString);

  return (
    <AttentionElementStyles>
      <h2>{t('dict-page.beta-title')}</h2>
      <p className="subtitle">{t('dict-page.beta-subtitle')}</p>
      <p className="words">{capitalizedWordsString}</p>
    </AttentionElementStyles>
  );
};

export default AttentionElement;
