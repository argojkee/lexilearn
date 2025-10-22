import styled from 'styled-components';

export const ContainerStyles = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 1199x) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
