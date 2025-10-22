import styled from 'styled-components';

export const AboutUsStyles = styled.section`
  .container > ul {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 767px) {
    margin-top: 40px;

    .container > ul {
      row-gap: 12px;
    }
  }

  @media screen and (min-width: 767px) {
    margin-top: 60px;

    .container > ul {
      gap: 20px 16px;
    }
  }
`;
