import { languages } from '../../constants/languages';
import { getCurrentUser } from '../../redux/user/userSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { AddDictionaryFormStyles } from './AddDictionaryFormStyles.styled';
import { useState } from 'react';
import createDictionary from '../../redux/user/operations/createDisctionary';
import Select from 'react-select';
import { LoaderCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AddDictionaryForm = ({ toggleModal }) => {
  const { nativeLang, dictionaries } = useSelector(getCurrentUser);
  const [selectedLang, setSelectedLang] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const languagesToAdd = languages.filter(
    lang =>
      lang.lang !== nativeLang &&
      !dictionaries.some(language => language.lang === lang.lang)
  );

  async function onSubmitPress(e) {
    e.preventDefault();
    setIsLoading(true);
    await dispatch(createDictionary({ tl: selectedLang }));
    setIsLoading(false);

    toggleModal(false);
  }

  const options = languagesToAdd.map(lang => ({
    value: lang.lang,
    label: lang.name,
  }));

  return (
    <AddDictionaryFormStyles>
      <h2>{t('modals.add-dict.title')}</h2>
      <p>{t('modals.add-dict.description')}</p>
      <form onSubmit={onSubmitPress} autoComplete="off">
        <label htmlFor="target-language">
          {t('modals.add-dict.lang-label')}
        </label>
        <Select
          placeholder={t('modals.add-dict.lang-placeholder')}
          name="language"
          id="target-language"
          options={options}
          onChange={option => setSelectedLang(option.value)}
          classNamePrefix="custom-select"
        ></Select>
        <button type="submit" disabled={!selectedLang}>
          {isLoading ? (
            <LoaderCircle size={16} className="spinner" />
          ) : (
            t('modals.add-dict.create-btn')
          )}
        </button>
      </form>
    </AddDictionaryFormStyles>
  );
};

export default AddDictionaryForm;
