import LogoComponent from 'components/Logo/LogoComponent';
import { MainBannerStyles } from './MainBannerStyles.styles';
import LinkBtn from 'components/LinkBtn/LinkBtn';
import Container from 'components/Container/Container';
import { useTranslation } from 'react-i18next';

const MainBanner = () => {
  const { t } = useTranslation();
  return (
    <MainBannerStyles>
      <Container>
        <h1 hidden>LexiLearn</h1>
        <LogoComponent size={36} />
        <h2>{t('landing.title')}</h2>
        <p>{t('landing.title-description')}</p>
        <div className="btn-container">
          <LinkBtn route="/register" bg="black" text={t('landing.free-btn')} />
          <LinkBtn route="/login" bg="white" text={t('general.sign-in-btn')} />
        </div>
      </Container>
    </MainBannerStyles>
  );
};

export default MainBanner;
