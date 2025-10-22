import { useSelector } from 'react-redux';
import { AddWordFormStyles } from './AddWordFormStyles.styled';
import { getCurrentUser } from '../../redux/user/userSelectors';
import { useParams } from 'react-router-dom';
import { axios } from '../../services/axios';
import Select from 'react-select';

import { languages } from 'constants/languages';
import { useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import { toastError } from 'services/toastNotification';
import { useTranslation } from 'react-i18next';
import { capitalizeFirstChar } from 'functions/capitalizeFirstChar';

const AddWordForm = ({ setCurrentWord, onChangeInput, formData }) => {
  const { nativeLang } = useSelector(getCurrentUser);
  const { dictId } = useParams();
  const [isTranslating, setIsTranslating] = useState(false);
  const { t } = useTranslation();

  async function onTranslatePress(e) {
    e.preventDefault();
    setIsTranslating(true);
    try {
      const { data } = await axios.get(
        `/words/get-word?lang=${formData.tl}&text=${formData.word}`
      );
      setCurrentWord({
        _id: data._id,
        [nativeLang]: data[nativeLang],
        text: data[dictId].text,
        synonyms: data[dictId].synonyms,
        antonyms: data[dictId].antonyms,
        examples: data[dictId].examples,
      });
    } catch (error) {
      toastError(error.response.data.message);
    } finally {
      setIsTranslating(false);
    }
  }

  const options = [
    {
      value: nativeLang,
      label: languages.find(lang => lang.lang === nativeLang).name,
    },
    { value: dictId, label: languages.find(lang => lang.lang === dictId).name },
  ];

  return (
    <AddWordFormStyles onSubmit={onTranslatePress} autoComplete="off">
      <div className="label-container">
        <label htmlFor="tl">{t('dict-page.select-lang')}</label>
        <Select
          options={options}
          onChange={option => onChangeInput('tl', option.value)}
          classNamePrefix="custom-select"
          placeholder={t('dict-page.select-lang')}
        />
      </div>

      <div className="label-container">
        <label htmlFor="word">{capitalizeFirstChar(t('general.word'))}</label>
        <input
          type="text"
          id="word"
          name="word"
          onChange={e => onChangeInput('word', e.target.value)}
        />
      </div>
      <button type="submit" disabled={!formData.tl || !formData.word}>
        {isTranslating ? (
          <LoaderCircle size={16} color="white" className="spinner" />
        ) : (
          t('dict-page.translate-btn')
        )}
      </button>
    </AddWordFormStyles>
  );
};

export default AddWordForm;
