import { AddWordComponentStyles } from './AddWordComponentStyles.styled';
import { Plus, ArrowUp } from 'lucide-react';
import Container from 'components/Container/Container';
import AddWordForm from 'components/AddWordForm/AddWordForm';
import { useState } from 'react';
import WordMoreInfo from 'components/WordMoreInfo/WordMoreInfo';
import AttentionElement from 'components/AttentionElement/AttentionElement';
import { useTranslation } from 'react-i18next';

const AddWordComponent = () => {
  const [isShowAddWord, setIsShowAddWord] = useState(false);
  const [currentWord, setCurrentWord] = useState(null);
  const [formData, setFormData] = useState({ tl: '', word: '' });
  const { t } = useTranslation();

  const onChangeInput = (name, value) => {
    setFormData({
      ...formData,
      [name]: value.trim().toLowerCase(),
    });
  };

  function toggleAdding() {
    setCurrentWord(null);
    setFormData({ tl: '', word: '' });
    setIsShowAddWord(!isShowAddWord);
  }

  return (
    <AddWordComponentStyles>
      <Container>
        <div className="add-container">
          <div className="title-container">
            <div className="info-container">
              <h2>{t('dict-page.add-title')}</h2>
              <p className="description">{t('dict-page.add-subtitle')}</p>
            </div>
            <button
              type="button"
              className="open-form-btn"
              onClick={toggleAdding}
            >
              {isShowAddWord ? <ArrowUp size={16} /> : <Plus size={16} />}

              {isShowAddWord
                ? t('dict-page.cancel-btn')
                : t('dict-page.add-btn')}
            </button>
          </div>
          <p className="description">{t('dict-page.add-description')}</p>
        </div>

        {isShowAddWord && (
          <>
            <AddWordForm
              toggleForm={toggleAdding}
              onChangeInput={onChangeInput}
              formData={formData}
              setCurrentWord={setCurrentWord}
            />
          </>
        )}
        {currentWord && (
          <WordMoreInfo
            word={currentWord}
            page="dictionary"
            toggleAdding={toggleAdding}
          />
        )}

        {isShowAddWord && <AttentionElement />}
      </Container>
    </AddWordComponentStyles>
  );
};

export default AddWordComponent;
