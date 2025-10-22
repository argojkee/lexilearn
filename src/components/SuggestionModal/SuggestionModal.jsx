import { SuggestionModalStyles } from './SuggestonModalStyles.styled';
import * as yup from 'yup';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import { useState } from 'react';
import { axios } from '../../services/axios';
import { toastError, toastSuccess } from 'services/toastNotification';
import { LoaderCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const initialValues = {
  title: '',
  description: '',
};

const schemaFeedback = yup.object().shape({
  title: yup
    .string()
    .min(6, 'modals.suggestion.errors.title-min')
    .max(24, 'modals.suggestion.errors.title-max')
    .required('modals.suggestion.errors.title-req'),

  description: yup
    .string()
    .min(12, 'modals.suggestion.errors.description-min')
    .max(200, 'modals.suggestion.errors.description-max')
    .required('modals.suggestion.errors.description-req'),
});

const SuggestionModal = ({ toggleModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  async function onSubmitPress({ title, description }) {
    setIsLoading(true);
    try {
      const data = await axios.post('/feedback', { title, description });
      console.log(data);
      toastSuccess(t('modals.suggestion.errors.feedback-thx'));
      toggleModal(false);
    } catch (error) {
      toastError(t('modals.suggestion.errors.oops'));
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <SuggestionModalStyles>
      <h3>{t('modals.suggestion.title')}</h3>
      <Formik
        onSubmit={onSubmitPress}
        initialValues={initialValues}
        validationSchema={schemaFeedback}
        form
      >
        <Form autoComplete="off">
          <div className="label-container">
            <label htmlFor="title">{t('modals.suggestion.title-input')}</label>
            <Field
              placeholder={t('modals.suggestion.title-input')}
              id="title"
              type="title"
              name="title"
            />
            <ErrorMessage
              name="title"
              component="div"
              render={message => <p className="error-msg">{t(message)}</p>}
            />
          </div>
          <div className="label-container">
            <label htmlFor="description">
              {t('modals.suggestion.description')}
            </label>
            <Field
              as="textarea"
              placeholder={t('modals.suggestion.description')}
              id="description"
              type="description"
              name="description"
            />
            <ErrorMessage
              name="description"
              component="div"
              render={message => <p className="error-msg">{t(message)}</p>}
            />
          </div>
          <button type="submit">
            {isLoading ? (
              <LoaderCircle size={20} className="spinner" />
            ) : (
              t('modals.suggestion.send-btn')
            )}
          </button>
        </Form>
      </Formik>
    </SuggestionModalStyles>
  );
};

export default SuggestionModal;
