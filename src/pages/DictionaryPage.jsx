import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCurrentUser } from '../redux/user/userSelectors';
import { useEffect, useMemo } from 'react';
import DictionaryMenu from 'components/DictionaryMenu/DictionaryMenu';
import AddWordComponent from 'components/AddWordComponent/AddWordComponent';
import DictionaryProgress from 'components/DictionaryProgress/DictionaryProgress';
import DictionaryTitle from 'components/DictionaryTitle/DictionaryTitle';

const DictionaryPage = () => {
  const { dictionaries, memoryStatus } = useSelector(getCurrentUser);
  const navigate = useNavigate();
  const { dictId } = useParams();
  const currentDict = dictionaries?.find(dict => dict.lang === dictId);

  useEffect(() => {
    console.log(dictId);
    if (!dictionaries || dictionaries?.length === 0) return;

    if (!dictionaries.some(dict => dict.lang === dictId)) navigate('/');
  }, [dictId, dictionaries, navigate]);

  const currentWords = currentDict?.words;
  const stats = useMemo(() => {
    if (currentWords?.length === 0)
      return { totalWords: 0, inProgress: 0, isDone: 0 };

    return currentWords?.reduce(
      (acc, word) => {
        word.repeatCount >= memoryStatus
          ? (acc.isDone += 1)
          : (acc.inProgress += 1);
        return acc;
      },
      {
        totalWords: currentWords?.length,
        inProgress: 0,
        isDone: 0,
      }
    );
  }, [currentWords, memoryStatus]);

  return (
    <main>
      <DictionaryTitle dict={currentDict} stats={stats} />
      <DictionaryProgress stats={stats} />
      <DictionaryMenu stats={stats} />
      <AddWordComponent />
    </main>
  );
};

export default DictionaryPage;
