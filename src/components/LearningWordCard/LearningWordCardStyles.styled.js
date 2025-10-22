import styled from 'styled-components';

export const LearningWordCardStyles = styled.section`
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid grey;
    border-radius: 12px;
    padding: 40px;
    row-gap: 12px;
    background-color: ${({ $isCorrectAnswer, $isAnswered }) => {
      if (!$isAnswered) return 'rgba(150,150,150,0.1)';
      return $isCorrectAnswer ? 'rgba(0,255,0,0.1)' : 'rgba(255,0,0,0.2)';
    }};
    border-color: ${({ $isCorrectAnswer, $isAnswered }) => {
      if (!$isAnswered) return 'rgb(150,150,150)';
      return $isCorrectAnswer ? 'rgb(0,255,0)' : 'rgb(255,0,0)';
    }};

    transition: transform 0.6s ease, background-color 0.3s ease,
      border-color 0.3s ease;
  }

  span {
    font-weight: bold;
  }

  h3
  /* span {
    text-transform: capitalize;
  } */

  .btn-container {
    margin-top: 12px;
    display: flex;
  }

  .btn-container > button {
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

  @media screen and (max-width: 767px) {
    margin-top: 20px;

    .card {
      width: 100%;
    }

    .btn-container {
      margin-top: 8px;
      flex-direction: column;
      row-gap: 4px;
    }

    .btn-container > button {
      width: 100%;
    }
  }

  @media screen and (min-width: 767px) {
    margin-top: 40px;

    .card {
      width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .btn-container {
      justify-content: space-between;
    }

    .btn-container > button {
      display: block;
      padding: 8px 24px;
    }
    .next-btn {
      margin-left: auto;
    }
  }
`;
