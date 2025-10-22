import Container from 'components/Container/Container';
import RegistrationLoginForm from 'components/RegisterLoginForm/RegisterLoginForm';
import RegistrationLoginBanner from 'components/RegistrationLoginBanner/RegistrationLoginBanner';

const RegisterLoginPage = () => {
  return (
    <main>
      <Container>
        <RegistrationLoginBanner />
        <RegistrationLoginForm />
      </Container>
    </main>
  );
};

export default RegisterLoginPage;
