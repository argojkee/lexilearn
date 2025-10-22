import styled from 'styled-components';

export const DictionaryActionCardStyles = styled.li`
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: 250ms linear;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
  }
  .title-container {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }

  .title-container {
    margin-bottom: 12px;
  }

  .icon-container {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background-color: ${({ $color }) => `rgba(${$color}, 0.2)`};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info-container > p {
    color: grey;
    font-size: 16px;
  }

  .description {
    color: grey;
    font-style: italic;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 40px) / 3);
  }
`;
