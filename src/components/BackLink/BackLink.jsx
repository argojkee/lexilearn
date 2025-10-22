import { ArrowLeft } from 'lucide-react';
import { BackLinkStyles } from './BackLinkStyles.styled';
import { useTranslation } from 'react-i18next';

const BackLink = ({ to }) => {
  const { t } = useTranslation();

  return (
    <BackLinkStyles to={to}>
      <ArrowLeft color="black" />
      {t('general.back-link')}
    </BackLinkStyles>
  );
};

export default BackLink;
