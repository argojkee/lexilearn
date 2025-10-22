import styled from 'styled-components';

export const LearningTitleSectionStyles = styled.section`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info-container {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 20px;

    h2 {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 767px) {
    svg {
      width: 24px;
      height: 24px;
    }

    h2 {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;
