import { useParams } from 'react-router-dom';
import { SelectLangModeStyles } from './SelectLangModeStyles.styled';
import { languages } from 'constants/languages';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/user/userSelectors';
import { Target, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SelectLangMode = ({ settings, setSettings, lang }) => {
  const { dictId } = useParams();
  const { nativeLang } = useSelector(getCurrentUser);
  const { t } = useTranslation();

  const nativeLangName = languages.find(lang => lang.lang === nativeLang)?.name;
  const dictLangName = languages.find(lang => lang.lang === dictId)?.name;

  const isNativeMode = lang === nativeLang;

  function onModeClick() {
    setSettings({ ...settings, tl: lang });
  }

  return (
    <SelectLangModeStyles onClick={onModeClick}>
      {settings.tl === lang && <div className="marker"></div>}
      {isNativeMode ? <Globe size={20} /> : <Target size={20} />}
      <div>
        <p>
          {isNativeMode
            ? `${nativeLangName} => ${dictLangName}`
            : `${dictLangName} => ${nativeLangName}`}
        </p>
        <p className="description">
          {t('learning-page.see')}{' '}
          {isNativeMode ? nativeLangName : dictLangName}{' '}
          {t('learning-page.word-type')}{' '}
          {isNativeMode ? dictLangName : nativeLangName}{' '}
          {t('learning-page.translation')}
        </p>
      </div>
    </SelectLangModeStyles>
  );
};

export default SelectLangMode;
