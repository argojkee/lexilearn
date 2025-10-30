import styled from 'styled-components';

export const WordCardStyles = styled.li`
  border: 1px solid grey;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);

  .icon-title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .title-container {
    text-transform: capitalize;
  }

  .title-container {
    font-size: 24px;
  }

  .title-container > p {
    color: grey;
    font-size: 18px;
  }

  button {
    background-color: transparent;
    border: 1px solid black;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    transition: 250ms linear;
    cursor: pointer;
  }

  .repeat-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .count {
    background-color: rgba(150, 150, 150, 0.8);
    color: white;
    padding: 4px;
    border-radius: 4px;
    font-size: 12px;
  }

  .progress-bar {
    margin-bottom: 12px;
  }

  .progress-bar > div {
    background-color: ${({ $percentage }) => {
      if ($percentage < 25) return 'red';
      if ($percentage < 50) return 'orange';
      if ($percentage < 75) return 'yellow';
      if ($percentage < 100) return 'green';
    }};
  }

  .percentage {
    text-align: center;
  }

  @media screen and (max-width: 449px) {
    width: 100%;
  }

  @media screen and (min-width: 450px) and (max-width: 767px) {
    width: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: calc((100% - 40px) / 3);
  }

  @media screen and (min-width: 768px) {
    button:hover {
      background-color: white;
      transform: scale(1.2);
      color: ${({ $page }) => ($page === 'in-progress' ? 'red' : 'orange')};
      border-color: ${({ $page }) =>
        $page === 'in-progress' ? 'red' : 'orange'};
    }
  }

  @media screen and (min-width: 1199px) {
    width: calc((100% - 60px) / 4);
  }
`;
