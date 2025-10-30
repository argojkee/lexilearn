import styled from 'styled-components';

export const AddWordComponentStyles = styled.section`
  margin-top: 20px;
  .add-container {
    border-radius: 12px;
    border: 1px solid grey;
    padding: 16px;
  }
  .title-container {
    display: flex;
  }

  .description {
    color: grey;
  }

  .description {
    font-size: 14px;
  }

  .open-form-btn {
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 4px;
    cursor: pointer;
    border: 1px solid black;
    transition: 250ms linear;
    border-radius: 12px;
    padding: 8px 12px;

    &:disabled {
      background-color: grey;
      color: black;
    }
  }

  @media screen and (max-width: 767px) {
    .title-container {
      flex-direction: column;
      margin-bottom: 12px;
    }

    .info-container {
      margin-bottom: 12px;
    }

    h2 {
      margin-bottom: 8px;
    }
  }

  @media screen and (min-width: 768px) {
    .title-container {
      justify-content: space-between;
    }

    .open-form-btn:hover {
      background-color: rgba(150, 150, 150, 0.4);
      color: black;
    }
  }
`;
