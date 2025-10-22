import {
  lazy,
  useEffect,
  // Suspense
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import PublicRoute from './Routes/PublicRoute/PublicRoute';
import fetchCurrentUser from '../redux/user/operations/fetchCurrentUser';
import { getToken } from '../redux/user/userSelectors';
import { getLang } from '../redux/language/languageSlice';
import { useTranslation } from 'react-i18next';

const RegisterLoginPage = lazy(() => import('../pages/RegisterLoginPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const DictionaryPage = lazy(() => import('../pages/DictionaryPage'));
const WordsPage = lazy(() => import('../pages/WordsPage'));
const LearningPage = lazy(() => import('../pages/LearningPage'));
const MainPage = lazy(() => import('../pages/MainPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const lang = useSelector(getLang);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!token) return;
    dispatch(fetchCurrentUser());
  }, [dispatch, token]);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

  return (
    // <Suspense
    //   fallback={
    //     <div style={{ textAlign: 'center', fontSize: '50px' }}>Загрузка...</div>
    //   }
    // >
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PublicRoute component={MainPage} />} />
        <Route
          path="/login"
          element={<PublicRoute component={RegisterLoginPage} />}
        />
        <Route
          path="/register"
          element={<PublicRoute component={RegisterLoginPage} />}
        />
        <Route path="/home" element={<PrivateRoute component={HomePage} />} />
        <Route
          path={`/dictionary/:dictId/words/in-progress`}
          element={<PrivateRoute component={WordsPage} />}
        />
        <Route
          path={`/dictionary/:dictId/words/learned`}
          element={<PrivateRoute component={WordsPage} />}
        />
        <Route
          path={`/dictionary/:dictId/words/learning`}
          element={<PrivateRoute component={LearningPage} />}
        />
        <Route
          path="/dictionary/:dictId"
          element={<PrivateRoute component={DictionaryPage} />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    // </Suspense>
  );
};
