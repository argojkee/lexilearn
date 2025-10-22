import styled from 'styled-components';

export const ProgressCardStyles = styled.li`
  border: 1px solid grey;
  border-radius: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  h4 {
    color: grey;
    font-size: 16px;
    font-weight: 400;
  }

  p {
    margin-bottom: 4px;
  }

  @media screen and (max-width: 767px) {
    padding: 6px;
  }

  @media screen and (max-width: 1199px) {
    width: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 768px) {
    padding: 12px;
  }
  @media screen and (min-width: 1199px) {
    width: calc((100% - 60px) / 4);
  }
`;
