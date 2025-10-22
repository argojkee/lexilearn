import { LanguageSelecterStyles } from './LanguageSelecterStyles.styled';
import { languages } from 'constants/languages';
import { changeLang } from '../../redux/language/languageSlice';
import { useDispatch } from 'react-redux';
import { getLang } from '../../redux/language/languageSlice';
import { useSelector } from 'react-redux';

const LanguageSelecter = () => {
  const dispatch = useDispatch();
  const lang = useSelector(getLang);

  const options = languages.map(lang => ({
    value: lang.lang,
    label: <img src={lang.icon} alt={lang.name} />,
  }));

  const handleChange = selected => {
    dispatch(changeLang(selected.value));
  };

  const defaultLang = options.find(opt => opt.value === lang) || options[0];

  return (
    <div>
      <LanguageSelecterStyles
        classNamePrefix="custom-select"
        options={options}
        defaultValue={defaultLang}
        onChange={handleChange}
        isSearchable={false}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => null,
        }}
      ></LanguageSelecterStyles>
    </div>
  );
};

export default LanguageSelecter;
