import styled from 'styled-components';

export const MainBannerStyles = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h2 {
    font-weight: 500;
    margin-top: 20px;
  }
  p {
    color: grey;
    margin-top: 12px;
  }

  .btn-container {
    display: flex;
    column-gap: 12px;
  }

  @media screen and (max-width: 767px) {
    .container {
      padding-top: 20px;
    }
    h2 {
      font-size: 26px;
    }

    .btn-container {
      margin-top: 20px;
      width: 100%;
      justify-content: space-between;
    }

    .link-btn {
      width: 50%;
      padding: 8px 12px;
      font-size: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      width: 768px;
      margin-left: auto;
      margin-right: auto;
      padding-top: 40px;
    }

    h2 {
      max-width: 600px;
      font-size: 32px;
    }

    p {
      max-width: 475px;
    }

    .btn-container {
      margin-top: 30px;
    }
  }
`;
