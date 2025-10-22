import Container from 'components/Container/Container';
import { DictionaryProgressStyles } from './DictionaryProgressStyles.styled';
import ProgressList from 'components/ProgressList/ProgressList';
import { Target, Trophy, Clock, ChartNoAxesCombined } from 'lucide-react';
import { getPercentage } from 'functions/getPercentage';
import { useTranslation } from 'react-i18next';

const DictionaryProgress = ({ stats }) => {
  const percentage = getPercentage(stats?.totalWords, stats?.isDone);
  const { t } = useTranslation();

  const dataProgress = [
    {
      icon: Target,
      text: `${t('general.total')} ${t('general.words')}`,
      count: stats?.totalWords,
      color: 'blue',
    },
    {
      icon: Trophy,
      text: t('general.learned'),
      count: stats?.isDone,
      color: 'green',
    },
    {
      icon: Clock,
      text: t('general.in-progress'),
      count: stats?.inProgress,
      color: 'tomato',
    },
    {
      icon: ChartNoAxesCombined,
      text: t('dict-page.completed'),
      count: `${percentage}%`,
      color: 'orange',
    },
  ];

  return (
    <DictionaryProgressStyles>
      <Container>
        <ProgressList data={dataProgress} />
      </Container>
    </DictionaryProgressStyles>
  );
};

export default DictionaryProgress;
