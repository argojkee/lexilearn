import styled from 'styled-components';

export const DictionaryCardStyles = styled.li`
  border: 1px solid grey;
  border-radius: 16px;
  padding: 12px;
  transition: 250ms linear;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);

  a {
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .progress-text {
    text-transform: capitalize;
  }

  .lang-title,
  .lang-title-container,
  .progress-info,
  .info-container,
  .info-container > div,
  .total {
    display: flex;
    align-items: center;
  }

  .lang-title,
  .info-container > div {
    column-gap: 8px;
  }

  .lang-title-container,
  .progress-info,
  .info-container,
  .total {
    justify-content: space-between;
  }

  .progress-info > p:first-child {
    color: grey;
  }

  .progress-info {
    margin-bottom: 4px;
  }

  .total > p {
    background-color: rgba(150, 150, 150, 0.4);
    padding: 6px;
    font-size: 12px;
    border-radius: 12px;
  }

  .lang-title-container,
  .progress-container,
  .info-container {
    margin-bottom: 12px;
  }

  button {
    background-color: transparent;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 250ms linear;
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
    }
    button:hover {
      transform: scale(1.2);
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1200px) {
    width: calc((100% - 40px) / 3);
  }
`;
