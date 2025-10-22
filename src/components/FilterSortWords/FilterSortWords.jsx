import Container from 'components/Container/Container';
import { FilterSortWordsStyles } from './FilterSortWordsStyles.styled';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

const FilterSortWords = ({ setSettings, settings }) => {
  const { t } = useTranslation();
  const typeOptions = [
    { value: 'alphabet', label: t('words-page.sort-alphabet') },
    { value: 'progress', label: t('words-page.sort-progress') },
  ];
  const orderOptions = [
    { value: 'up', label: t('words-page.sort-up') },
    { value: 'down', label: t('words-page.sort-down') },
  ];

  function onInputChange(e) {
    setSettings({ ...settings, filter: e.target.value.trim().toLowerCase() });
  }
  return (
    <FilterSortWordsStyles>
      <Container>
        <div className="form">
          <input
            placeholder={t('words-page.filter')}
            autoComplete="off"
            type="text"
            name="filter"
            value={settings.filter}
            onChange={onInputChange}
          />

          <Select
            classNamePrefix="custom-select"
            options={typeOptions}
            placeholder={t('words-page.sort-progress')}
            onChange={option =>
              setSettings({ ...settings, type: option.value })
            }
          />
          <Select
            className="gg"
            classNamePrefix="custom-select"
            options={orderOptions}
            placeholder={t('words-page.sort-up')}
            onChange={option =>
              setSettings({ ...settings, order: option.value })
            }
          />
        </div>
      </Container>
    </FilterSortWordsStyles>
  );
};

export default FilterSortWords;
