import styled from 'styled-components';

export const UsersDictionariesStyles = styled.section`
  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .add-dict-modal {
    background-color: black;
    cursor: pointer;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    border-radius: 12px;
    transition: 250ms linear;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 12px;
  }

  .empty-text {
    color: grey;
  }

  .empty-text > button {
    background-color: transparent;
    cursor: pointer;
    color: blue;
    border: none;
    text-decoration: underline;
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;

    h2 {
      font-size: 16px;
    }
    .add-dict-modal {
      font-size: 12px;
      padding: 2px 4px;

      > svg {
        width: 16px;
        height: 16px;
      }
    }
    ul {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;

    .add-dict-modal:hover {
      background-color: rgba(155, 155, 155, 0.4);
      color: black;
    }
  }
`;
