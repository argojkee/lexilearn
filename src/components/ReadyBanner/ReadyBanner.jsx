import LinkBtn from 'components/LinkBtn/LinkBtn';
import { ReadyBannerStyles } from './ReadyBannerStyles.styled';
import Container from 'components/Container/Container';
import { useTranslation } from 'react-i18next';

const ReadyBanner = () => {
  const { t } = useTranslation();
  return (
    <ReadyBannerStyles>
      <Container>
        <div>
          <h3>{t('landing.motivation-title')}</h3>
          <p>{t('landing.motivation-description')}</p>
          <LinkBtn
            text={t('landing.create-btn')}
            bg="black"
            route="/register"
          />
        </div>
      </Container>
    </ReadyBannerStyles>
  );
};

export default ReadyBanner;
