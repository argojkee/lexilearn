import styled from 'styled-components';

export const HomePageTitleStyles = styled.section`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    background-color: black;
    color: white;
    border-radius: 12px;
    border: 1px solid black;
    cursor: pointer;
    transition: 250ms linear;
    &:hover {
      background-color: white;
      color: black;
    }
  }

  span {
    text-transform: capitalize;
    color: tomato;
  }
  h2 {
    font-size: 28px;
    font-weight: 500;
  }

  .motivation-text {
    color: grey;
    margin-top: 8px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 20px;

    button {
      padding: 6px 4px;
      font-size: 14px;
    }
  }

  @media screen and (min-width: 768px) {
    padding-top: 40px;

    button {
      padding: 8px 12px;
    }
  }
`;
