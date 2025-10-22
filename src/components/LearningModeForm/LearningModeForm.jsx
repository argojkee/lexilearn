import Container from 'components/Container/Container';
import { LearningModeFormStyles } from './LearningModeFormStyles.styled';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/user/userSelectors';
import { LoaderCircle, Play } from 'lucide-react';
import { getRandomElements } from 'functions/getRandomElements';
import { axios } from '../../services/axios';
import { toastError } from 'services/toastNotification';
import SelectLangMode from 'components/SelectLangMode/SelectLangMode';
import { useState } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

const LearningModeForm = ({
  settings,
  startLearning,
  setWords,
  setSettings,
}) => {
  const { dictId } = useParams();
  const { nativeLang, dictionaries, memoryStatus } =
    useSelector(getCurrentUser);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const currentDict = dictionaries?.find(dict => dict.lang === dictId) || {
    words: [],
  };

  const currentProgress = currentDict?.words?.filter(
    w => w.repeatCount < memoryStatus
  ).length;

  function onSelectChange(name, value) {
    setSettings({ ...settings, [name]: value });
  }

  async function getWords() {
    if (settings.mode === 'dictionary') {
      setWords([...getRandomElements(currentDict.words, 10)]);
      startLearning(true);
    } else {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `/words/get-random?tl=${dictId}&count=10`
        );

        setWords(data);
        startLearning(true);
      } catch (error) {
        toastError(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    }
  }

  const options = [
    { value: 'random', label: t('learning-page.random-words') },
    { value: 'dictionary', label: t('learning-page.dict-words') },
  ];

  return (
    <LearningModeFormStyles>
      <Container>
        <div className="wrapper">
          <form>
            <div className="label-container">
              <SelectLangMode
                settings={settings}
                setSettings={setSettings}
                lang={dictId}
              />
              <SelectLangMode
                settings={settings}
                setSettings={setSettings}
                lang={nativeLang}
              />
            </div>

            <div className="label-container">
              <label htmlFor="mode">{t('learning-page.select-mode')}</label>
              <Select
                placeholder={t('learning-page.select-mode')}
                classNamePrefix="custom-select"
                options={options}
                onChange={option => onSelectChange('mode', option.value)}
                isOptionDisabled={option =>
                  option.value === 'dictionary' && currentProgress < 10
                }
              />
            </div>

            <button
              type="button"
              onClick={getWords}
              disabled={!settings.mode || !settings.tl}
            >
              {isLoading ? (
                <LoaderCircle size={24} color="grey" className="spinner" />
              ) : (
                <>
                  <Play size={24} />
                  {t('learning-page.start-btn')}
                </>
              )}
            </button>
          </form>
          <p className="attention">{t('learning-page.attention')}</p>
        </div>
      </Container>
    </LearningModeFormStyles>
  );
};

export default LearningModeForm;
