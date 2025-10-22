import { GeneralProgressStyles } from './GeneralProgressStyles';
import Container from 'components/Container/Container';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/user/userSelectors';
import { BookOpen, Target, Trophy, Clock } from 'lucide-react';
import { useMemo } from 'react';
import ProgressList from 'components/ProgressList/ProgressList';
import { useTranslation } from 'react-i18next';

const GeneralProgress = () => {
  const { dictionaries, memoryStatus } = useSelector(getCurrentUser);
  const { t } = useTranslation();
  const stats = useMemo(() => {
    if (!dictionaries || dictionaries.length === 0)
      return { totalWords: 0, inProgress: 0, learned: 0 };

    return dictionaries?.reduce(
      (acc, dict) => {
        acc.totalWords += dict.words?.length;

        dict.words.forEach(w => {
          w.repeatCount >= memoryStatus
            ? (acc.learned += 1)
            : (acc.inProgress += 1);
        });

        return acc;
      },
      {
        totalWords: 0,
        inProgress: 0,
        learned: 0,
      }
    );
  }, [dictionaries, memoryStatus]);

  const progressData = [
    {
      icon: BookOpen,
      color: 'black',
      count: dictionaries?.length,
      text: t('home-page.dictionaries'),
    },
    {
      icon: Target,
      color: 'blue',
      count: stats?.totalWords,
      text: `${t('general.total')} ${t('general.words')}`,
    },
    {
      icon: Trophy,
      color: 'green',
      count: stats?.learned,
      text: t('general.learned'),
    },
    {
      icon: Clock,
      color: 'tomato',
      count: stats?.inProgress,
      text: t('general.in-progress'),
    },
  ];

  return (
    <GeneralProgressStyles>
      <Container>
        {progressData && <ProgressList data={progressData} />}
      </Container>
    </GeneralProgressStyles>
  );
};

export default GeneralProgress;
