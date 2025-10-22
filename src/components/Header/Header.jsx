import { getToken } from '../../redux/user/userSelectors';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import { Link } from 'react-router-dom';
import LogoComponent from 'components/Logo/LogoComponent';
import Container from 'components/Container/Container';
import { HeaderStyles } from './HeaderStyles.styled';
import LinkBtn from 'components/LinkBtn/LinkBtn';
import LanguageSelecter from 'components/LanguageSelecter/LanguageSelecter';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const token = useSelector(getToken);
  const { t } = useTranslation();

  return (
    <HeaderStyles>
      <Container>
        <Link className="logo-link" to="/">
          <LogoComponent size={24} />
          LexiLearn
        </Link>
        <div className="menu-container">
          <LanguageSelecter />
          {token && <UserMenu />}
          {!token && (
            <nav>
              <LinkBtn
                text={t('general.sign-in-btn')}
                bg="white"
                route="/login"
              />
              <LinkBtn
                text={t('general.register-btn')}
                bg="black"
                route="/register"
              />
            </nav>
          )}
        </div>
      </Container>
    </HeaderStyles>
  );
};

export default Header;
