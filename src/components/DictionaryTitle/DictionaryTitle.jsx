import Container from 'components/Container/Container';
import { DictionaryTitleStyles } from './DictionaryTitleStyles.styled';
import BackLink from 'components/BackLink/BackLink';
import { languages } from 'constants/languages';
import { getPercentage } from 'functions/getPercentage';
import { useTranslation } from 'react-i18next';

const DictionaryTitle = ({ dict, stats }) => {
  const percentage = getPercentage(dict?.words?.length, stats?.isDone);
  const { t } = useTranslation();

  const lang = languages.find(lang => lang.lang === dict?.lang);

  return (
    <DictionaryTitleStyles>
      <Container>
        <div className="info">
          <BackLink to="/dictionaries" />
          <div className="language-title">
            <img src={lang?.icon} alt="flag" />
            <h2>{lang?.name}</h2>
          </div>
        </div>
        <p>
          {dict?.words.length}{' '}
          {dict?.words.length === 1 ? t('general.word') : t('general.words')} /{' '}
          {percentage}% {t('dict-page.completed')}
        </p>
      </Container>
    </DictionaryTitleStyles>
  );
};

export default DictionaryTitle;
