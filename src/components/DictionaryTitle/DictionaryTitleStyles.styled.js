import styled from 'styled-components';

export const DictionaryTitleStyles = styled.section`
  .info {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    justify-content: space-between;
  }

  .language-title {
    display: flex;
    align-items: center;
    column-gap: 4px;
  }

  img {
    width: 60px;
    height: 40px;
  }

  p {
    text-align: end;
  }
  @media screen and (max-width: 767px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`;
