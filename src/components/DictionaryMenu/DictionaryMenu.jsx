import { DictionaryMenuStyles } from './DictionaryMenuStyles.styled';
import DictionaryActionCard from 'components/DictionaryActionCard/DictionaryActionCard';
import Container from 'components/Container/Container';
import { Play, Trophy, Clock } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { capitalizeFirstChar } from 'functions/capitalizeFirstChar';

const DictionaryMenu = ({ stats }) => {
  const { dictId } = useParams();
  const { t } = useTranslation();
  const dataAction = [
    {
      icon: Play,
      title: capitalizeFirstChar(t('dict-page.start-title')),
      text: t('dict-page.start-sub-title'),
      description: t('dict-page.start-description'),
      color: '0,0,0',
      to: `/dictionary/${dictId}/words/learning`,
    },
    {
      icon: Trophy,
      title: `${capitalizeFirstChar(t('general.learned'))} ${t(
        'general.words'
      )}`,
      text: `${stats?.isDone} ${
        stats?.isDone === 1 ? t('general.word') : t('general.words')
      }`,
      description: t('dict-page.learned-description'),
      color: '0, 255, 0',
      to: `/dictionary/${dictId}/words/learned`,
    },
    {
      icon: Clock,
      title: capitalizeFirstChar(t('general.in-progress')),
      text: `${stats?.inProgress} ${
        stats?.inProgress === 1 ? t('general.word') : t('general.words')
      }`,
      description: t('dict-page.progress-description'),
      color: '255,0,0',
      to: `/dictionary/${dictId}/words/in-progress`,
    },
  ];
  return (
    <section>
      <Container>
        <DictionaryMenuStyles>
          {dataAction.map((dict, i) => (
            <DictionaryActionCard key={nanoid()} {...dict} />
          ))}
        </DictionaryMenuStyles>
      </Container>
    </section>
  );
};

export default DictionaryMenu;
