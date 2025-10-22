import styled from 'styled-components';

export const LearningScorebarStyles = styled.section`
  text-align: center;
  color: grey;
  p {
    margin-bottom: 8px;
    text-transform: capitalize;
  }
  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;
