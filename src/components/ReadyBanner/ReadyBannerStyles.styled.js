import styled from 'styled-components';

export const ReadyBannerStyles = styled.section`
  .container > div {
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: rgba(150, 150, 150, 0.3);
    border-radius: 20px;
  }

  p {
    color: grey;
  }

  @media screen and (max-width: 767px) {
    margin-top: 40px;

    .container > div {
      padding: 40px;
    }

    h3 {
      margin-bottom: 8px;
    }

    p {
      margin-bottom: 12px;
    }

    .link-btn {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    .container > div {
      padding: 40px;
    }

    h3 {
      margin-bottom: 12px;
    }

    p {
      margin-bottom: 18px;
    }

    .link-btn {
      width: 300px;
      margin-right: auto;
      margin-left: auto;
    }
  }
`;
