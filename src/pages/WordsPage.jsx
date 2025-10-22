import FilterSortWords from 'components/FilterSortWords/FilterSortWords';
import WordsSection from 'components/WordsSection/WordsSection';
import WordsSectionTitle from 'components/WordsSectionTitle/WordsSectionTitle';
import { useState } from 'react';

const WordsPage = () => {
  const [settings, setSettings] = useState({
    filter: '',
    order: 'up',
    type: 'progress',
  });

  return (
    <main>
      <WordsSectionTitle />
      <FilterSortWords settings={settings} setSettings={setSettings} />
      <WordsSection settings={settings} />;
    </main>
  );
};

export default WordsPage;
