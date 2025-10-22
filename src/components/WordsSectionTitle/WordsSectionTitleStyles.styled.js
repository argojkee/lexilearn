import styled from 'styled-components';

export const WordsSectionTitleStyles = styled.section`
  .container > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .info {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;

    h1 {
      font-size: 18px;
    }

    .info {
      column-gap: 4px;
    }

    svg {
      width: 28px;
      height: 28px;
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;
