import { FeautureCardStyles } from './FeautureCardStyles.styled';
import { useTranslation } from 'react-i18next';

const FeautureCard = ({ icon: Icon, title, description }) => {
  const { t } = useTranslation();
  return (
    <FeautureCardStyles>
      <div className="overlay">
        <div className="icon-container">
          <Icon />
        </div>
        <h3>{t(title)}</h3>
        <p>{t(description)}</p>
      </div>
    </FeautureCardStyles>
  );
};

export default FeautureCard;
