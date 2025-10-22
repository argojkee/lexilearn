import GeneralProgress from 'components/GeneralProgress/GeneralProgress';
import UsersDictionaries from 'components/UsersDictionaries/UsersDictionaries';
import HomePageTitle from 'components/HomePageTitle/HomePageTitle';

const HomePage = () => {
  return (
    <main>
      <h1 hidden>User page</h1>
      <HomePageTitle />
      <GeneralProgress />
      <UsersDictionaries />
    </main>
  );
};

export default HomePage;
