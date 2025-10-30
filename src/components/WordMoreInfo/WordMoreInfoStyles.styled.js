import styled from 'styled-components';

export const WordMoreInfoStyles = styled.div`
  border: 1px solid grey;
  padding: 16px;
  border-radius: 12px;

  display: flex;

  p {
    margin-bottom: 8px;
  }

  span {
    color: grey;
  }
  button {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    cursor: pointer;
    transition: 250ms linear;
  }

  @media screen and (min-width: 768px) {
    .add-btn {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button:hover {
      transform: scale(1.2);
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    position: relative;

    .add-btn {
      position: absolute;
      top: 16px;
      right: 16px;
    }
  }

  @media screen and (max-width: 1199px) {
    margin-top: 20px;
    flex-direction: column;
    row-gap: 8px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 40px;
    justify-content: space-between;
  }
`;
