import styled from 'styled-components';

export const ProgressListStyles = styled.ul`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    gap: 8px;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;
