import Container from 'components/Container/Container';
import { UsersDictionariesStyles } from './UsersDictionariesStyles.styled';
import { Plus } from 'lucide-react';
import { getCurrentUser } from '../../redux/user/userSelectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import GeneralModal from 'components/GeneralModal/GeneralModal';
import AddDictionaryForm from 'components/AddDictionaryForm/AddDictionaryForm';
import DictionaryCard from 'components/DictionaryCard/DictionaryCard';
import { languages } from 'constants/languages';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';

const UsersDictionaries = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { dictionaries } = useSelector(getCurrentUser);
  const { t } = useTranslation();
  return (
    <UsersDictionariesStyles>
      <Container>
        <div className="title-container">
          <h2>{t('home-page.your-dicts')}</h2>
          {dictionaries.length + 1 < languages.length && (
            <button
              type="button"
              className="add-dict-modal"
              onClick={() => setIsOpenModal(true)}
            >
              <Plus size={24} />
              {t('home-page.add-dict-btn')}
            </button>
          )}
        </div>
        {dictionaries?.length === 0 && (
          <p className="empty-text">
            {t('home-page.empty-list-first-part')}{' '}
            <button type="button" onClick={() => setIsOpenModal(true)}>
              {t('home-page.add')}
            </button>{' '}
            {t('home-page.empty-list-second-part')}
          </p>
        )}
        {dictionaries?.length > 0 && (
          <ul>
            {dictionaries.map(dict => (
              <DictionaryCard key={nanoid()} dictionary={dict} />
            ))}
          </ul>
        )}

        {isOpenModal && (
          <GeneralModal
            toggleModal={setIsOpenModal}
            children={<AddDictionaryForm toggleModal={setIsOpenModal} />}
          />
        )}
      </Container>
    </UsersDictionariesStyles>
  );
};

export default UsersDictionaries;
