import styled from 'styled-components';

export const AnsweredWordCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
  .result {
    color: ${({ $isCorrectAnswer }) => ($isCorrectAnswer ? 'green' : 'red')};
    display: flex;
    align-items: center;
    column-gap: 4px;
  }

  .action-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid grey;
    border-radius: 12px;
    background-color: transparent;
    cursor: pointer;
    transition: 250ms linear;

    &:hover {
      transform: scale(1.25);
    }
  }
`;
