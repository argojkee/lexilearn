import Container from 'components/Container/Container';
import { HomePageTitleStyles } from './HomePageTitleStyles.styled';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/user/userSelectors';
import { useState } from 'react';
import GeneralModal from 'components/GeneralModal/GeneralModal';
import SuggestionModal from 'components/SuggestionModal/SuggestionModal';
import { useTranslation } from 'react-i18next';

const HomePageTitle = () => {
  const { name } = useSelector(getCurrentUser);
  const [isShowModal, setIsShowModal] = useState(false);
  const { t } = useTranslation();

  return (
    <HomePageTitleStyles>
      <Container>
        <div>
          <h2>
            {t('home-page.greet')} <span>{name}!</span>
          </h2>
          <p className="motivation-text">{t('home-page.sub-title')}</p>
        </div>
        <button type="button" onClick={() => setIsShowModal(true)}>
          {t('home-page.suggestions-btn')}
        </button>

        {isShowModal && (
          <GeneralModal
            toggleModal={setIsShowModal}
            children={<SuggestionModal toggleModal={setIsShowModal} />}
          />
        )}
      </Container>
    </HomePageTitleStyles>
  );
};

export default HomePageTitle;
