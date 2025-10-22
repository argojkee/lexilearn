import styled from 'styled-components';

export const RegistrationLoginBannerStyles = styled.div`
  text-align: center;

  .logo {
    margin-bottom: 12px;
  }

  h1 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  p {
    color: grey;
    margin-bottom: 8px;
  }

  .attention {
    color: tomato;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
  }

  @media screen and (min-width: 1199px) {
    width: 900px;
  }
`;
