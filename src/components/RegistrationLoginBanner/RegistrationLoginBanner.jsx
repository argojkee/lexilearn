import { RegistrationLoginBannerStyles } from './RegistrationLoginBannerStyles.styled';
import LogoComponent from 'components/Logo/LogoComponent';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const RegistrationLoginBanner = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const isLoginPage = pathname === '/login';

  const title = isLoginPage ? 'login-title' : 'reg-title';
  const description = isLoginPage ? 'login-description' : 'reg-description';
  return (
    <RegistrationLoginBannerStyles>
      <LogoComponent size={40} />
      <h1>{t(`registration-login-page.${title}`)}</h1>
      <p>{t(`registration-login-page.${description}`)}</p>
      {!isLoginPage && (
        <p className="attention">{t('registration-login-page.attention')}</p>
      )}
    </RegistrationLoginBannerStyles>
  );
};

export default RegistrationLoginBanner;
