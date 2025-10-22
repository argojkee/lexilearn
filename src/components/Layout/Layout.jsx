import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Suspense } from 'react';
import MainSpinner from 'components/MainSpinner/MainSpinner';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<MainSpinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
