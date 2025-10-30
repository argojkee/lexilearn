import { WordMoreInfoStyles } from './WordMoreInfoStyles.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/user/userSelectors';
import { LoaderCircle, Plus } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import operations from '../../redux/user/operations';
import { capitalizeFirstChar } from 'functions/capitalizeFirstChar';
import { useTranslation } from 'react-i18next';

const WordMoreInfo = ({ word, toggleAdding, page }) => {
  const { nativeLang, dictionaries } = useSelector(getCurrentUser);
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useDispatch();
  const { dictId } = useParams();
  const { t } = useTranslation();

  async function onAddPress() {
    setIsAdding(true);
    await dispatch(operations.addWord({ wordId: word._id, tl: dictId }));
    setIsAdding(false);
    toggleAdding(false);
  }

  const isUserWord = dictionaries
    ?.find(dict => dict.lang === dictId)
    .words.some(userWord => userWord._id === word._id);

  return (
    <WordMoreInfoStyles>
      <div>
        <p>
          {capitalizeFirstChar(t('general.word'))} :{' '}
          <span>{capitalizeFirstChar(word[nativeLang]?.text)}</span>
        </p>
        <p>
          {t('word-info.translation')}:{' '}
          <span>{capitalizeFirstChar(word?.text)}</span>
        </p>
      </div>
      <div>
        <p>
          {capitalizeFirstChar(t('word-info.synonyms'))}:{' '}
          <span>{capitalizeFirstChar(word?.synonyms.join(', '))}</span>
        </p>
        <p>
          {capitalizeFirstChar(t('word-info.antonyms'))}:{' '}
          <span>{capitalizeFirstChar(word?.antonyms.join(', '))}</span>
        </p>
      </div>

      <div>
        <p className="examples">
          {capitalizeFirstChar(t('word-info.examples'))}:
        </p>

        <span>{word?.examples.join(' ')} </span>
      </div>
      {page === 'dictionary' && !isUserWord && (
        <button className="add-btn" type="button" onClick={onAddPress}>
          {isAdding ? (
            <LoaderCircle size={20} className="spinner" />
          ) : (
            <Plus size={20} />
          )}
        </button>
      )}
    </WordMoreInfoStyles>
  );
};

export default WordMoreInfo;
