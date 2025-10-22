import styled from 'styled-components';

export const AnswerInputContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  input {
    padding: 8px 16px;
    border: 2px solid grey;
    outline: none;
    border-radius: 12px;
    transition: 250ms linear;

    &:focus {
      border-color: black;
    }
  }

  .check-btn {
    border: 1px solid black;
    background-color: black;
    color: white;
    padding: 8px 12px;
    border-radius: 12px;
    transition: 250ms linear;
    cursor: pointer;

    &:not(:disabled):hover {
      background-color: rgba(150, 150, 150, 0.3);
      color: black;
    }

    &:disabled {
      background-color: grey;
    }
  }
`;
