import { WordsSectionStyles } from './WordsSectionStyles.styled';
import Container from 'components/Container/Container';
import WordCard from 'components/WordCard/WordCard';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getCurrentUser } from '../../redux/user/userSelectors';
import { useTranslation } from 'react-i18next';

const WordsSection = ({ settings }) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();
  const { dictionaries, memoryStatus, nativeLang } =
    useSelector(getCurrentUser);
  const { dictId } = useParams();

  // t('words-page.')
  const emptyMessage =
    currentPage === 'in-progress'
      ? t('words-page.empty-list-progress')
      : t('words-page.empty-list-learned');

  const emptyFilterResult = t('words-page.empty-filtered-list');

  const words = dictionaries?.find(dict => dict.lang === dictId)?.words;

  const currentWords = words?.filter(word =>
    currentPage === 'in-progress'
      ? word.repeatCount < memoryStatus
      : word.repeatCount >= memoryStatus
  );

  const filteredWords = !settings.filter
    ? currentWords
    : currentWords?.filter(
        w =>
          w.text.includes(settings.filter.toLowerCase().trim()) ||
          w[nativeLang].text.includes(settings.filter.toLowerCase().trim())
      );

  const sortedWords = filteredWords?.sort((w1, w2) => {
    if (settings.type === 'progress') {
      return settings.order === 'up'
        ? w1.repeatCount - w2.repeatCount
        : w2.repeatCount - w1.repeatCount;
    } else {
      return settings.order === 'up'
        ? w1.text.localeCompare(w2.text)
        : w2.text.localeCompare(w1.text);
    }
  });

  const isEmptyWords = sortedWords?.length === 0;

  useEffect(() => {
    setCurrentPage(location.pathname.split('/')[4]);
  }, [location.pathname]);

  return (
    <WordsSectionStyles>
      <Container>
        {isEmptyWords && (
          <p className="empty-message">
            {settings.filter ? emptyFilterResult : emptyMessage}
          </p>
        )}
        {!isEmptyWords && (
          <ul>
            {sortedWords?.map(w => (
              <WordCard key={w._id} word={w} page={currentPage} />
            ))}
          </ul>
        )}
      </Container>
    </WordsSectionStyles>
  );
};

export default WordsSection;
