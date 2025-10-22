import styled from 'styled-components';

export const DeleteDictionaryModalStyles = styled.div`
  h2 {
    text-align: center;
    font-size: 16px;
    padding: 30px;
  }

  > div {
    display: flex;
    align-items: center;
  }

  button {
    border-radius: 12px;
    cursor: pointer;
    transition: 250ms linear;
  }

  .cancel-btn {
    background-color: black;
    color: white;
    border: 1px solid black;

    &:hover {
      background-color: rgba(150, 150, 150, 0.2);
      color: black;
    }
  }

  .accept-btn {
    color: red;
    border-color: red;
    background-color: white;
    border: 1px solid red;

    &:hover {
      background-color: red;
      color: white;
    }
  }

  @media screen and (max-width: 767px) {
    > div {
      column-gap: 12px;
    }
    button {
      flex: 1 1 calc((50% - 12px) / 2);
      padding: 12px;
    }
  }

  @media screen and (min-width: 768px) {
    > div {
      justify-content: space-between;
    }
    button {
      padding: 8px 40px;
    }
  }
`;
