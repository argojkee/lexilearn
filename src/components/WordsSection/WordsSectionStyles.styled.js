import styled from 'styled-components';

export const WordsSectionStyles = styled.section`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .empty-message {
    font-size: 28px;
    color: grey;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;
