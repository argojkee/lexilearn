import { Link, useLocation } from 'react-router-dom';
import { LogIn, UserPlus, Eye } from 'lucide-react';
import * as yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import { languages } from 'constants/languages';
import { useDispatch } from 'react-redux';
import authAPI from '../../redux/user/operations';
import { RegistrationLoginFormStyles } from './RegistrationLoginFormStyles.styled';
import { useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
const initialRegisterValues = {
  name: '',
  email: '',
  password: '',
  language: '',
};

const initialLoginValues = {
  email: '',
  password: '',
};

const schemaRegister = yup.object().shape({
  name: yup
    .string()
    .min(6, 'name-min')
    .max(16, 'name-max')
    .required('name-required'),

  email: yup.string().email('email-valid').required('email-required'),
  password: yup
    .string()
    .min(6, 'password-min')
    .max(16, 'password-max')
    .required('password-required'),
  language: yup
    .string()
    .oneOf(
      languages.map(l => l.lang),
      'language-one-of'
    )
    .required('language-required'),
});

const schemaLogin = yup.object().shape({
  email: yup.string().email('email-valid').required('email-required'),

  password: yup
    .string()
    .min(6, 'password-min')
    .max(16, 'password-max')
    .required('password-required'),
});

const RegistrationLoginForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isVisible, setisVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const isLoginPage = location.pathname === '/login';

  const handleSubmit = async (
    { name, password, email, language },
    { resetForm }
  ) => {
    setIsLoading(true);
    if (isLoginPage) {
      await dispatch(authAPI.signIn({ email, password }));
    } else {
      await dispatch(
        await authAPI.signUp({ name, email, password, nativeLang: language })
      );
    }
    resetForm();
    setIsLoading(false);
  };

  const selectPageText = isLoginPage
    ? 'link-to-reg-text'
    : 'link-to-login-text';
  const selectPageLink = isLoginPage ? '/register' : '/login';
  const selectPageLinkText = isLoginPage
    ? 'registration-login-page.link-to-reg'
    : 'general.sign-in-btn';
  const langOptions = languages.map(lang => ({
    value: lang.lang,
    label: lang.name,
  }));

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={isLoginPage ? initialLoginValues : initialRegisterValues}
      validationSchema={isLoginPage ? schemaLogin : schemaRegister}
    >
      <RegistrationLoginFormStyles autoComplete="off">
        {!isLoginPage && (
          <div className="label-container">
            <label htmlFor="name">{t('registration-login-page.name')}</label>
            <Field
              placeholder={t('registration-login-page.name')}
              id="name"
              type="text"
              name="name"
            />
            <ErrorMessage
              name="name"
              component="div"
              render={message => (
                <p className="error-msg">
                  {t(`registration-login-page.errors.${message}`)}
                </p>
              )}
            />
          </div>
        )}
        <div className="label-container">
          <label htmlFor="email">{t('registration-login-page.email')}</label>
          <Field
            placeholder={t('registration-login-page.email')}
            id="email"
            type="email"
            name="email"
          />
          <ErrorMessage
            name="email"
            component="div"
            render={message => (
              <p className="error-msg">
                {t(`registration-login-page.errors.${message}`)}
              </p>
            )}
          />
        </div>
        <div className="label-container">
          <label htmlFor="password">
            {t('registration-login-page.password')}
          </label>
          <div className="wrapper">
            <Field
              placeholder={t('registration-login-page.password')}
              id="password"
              type={isVisible ? 'text' : 'password'}
              name="password"
            />
            <button type="button" onClick={() => setisVisible(!isVisible)}>
              <Eye size={16} />
            </button>
          </div>

          <ErrorMessage
            name="password"
            component="div"
            render={message => (
              <p className="error-msg">
                {t(`registration-login-page.errors.${message}`)}
              </p>
            )}
          />
        </div>
        {!isLoginPage && (
          <div className="label-container">
            <label htmlFor="lang">
              {t('registration-login-page.language')}
            </label>
            <Field name="language">
              {({ field, form }) => (
                <Select
                  placeholder={t(
                    'registration-login-page.language-placeholder'
                  )}
                  classNamePrefix="custom-select"
                  options={langOptions}
                  value={
                    langOptions.find(option => option.value === field.value) ||
                    null
                  }
                  onChange={option =>
                    form.setFieldValue(field.name, option.value)
                  }
                  onBlur={() => form.setFieldTouched(field.name, true)}
                />
              )}
            </Field>
            <ErrorMessage
              name="language"
              component="div"
              render={message => (
                <p className="error-msg">
                  {t(`registration-login-page.errors.${message}`)}
                </p>
              )}
            />
          </div>
        )}
        <button className="sbmt-btn" type="submit" disabled={isLoading}>
          {isLoading ? (
            <LoaderCircle size={20} color="grey" className="spinner" />
          ) : (
            <>
              {isLoginPage ? <LogIn size={20} /> : <UserPlus size={20} />}
              {isLoginPage
                ? t('general.sign-in-btn')
                : t(`registration-login-page.button-reg`)}
            </>
          )}
        </button>

        <p className="select-page">
          {t(`registration-login-page.${selectPageText}`)}
          <Link className="text-link" to={selectPageLink}>
            {' '}
            {t(selectPageLinkText)}
          </Link>
        </p>
      </RegistrationLoginFormStyles>
    </Formik>
  );
};

export default RegistrationLoginForm;
