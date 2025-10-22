import styled from 'styled-components';

export const AddDictionaryFormStyles = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  h2 {
    font-size: 16px;
    font-weight: 500;
  }

  p {
    font-size: 12px;
    color: grey;
    margin-top: 8px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 18px;
  }
  .custom-select__control {
    cursor: pointer;
    margin-top: 8px;
  }

  .custom-select__option {
    cursor: pointer;
  }

  .custom-select__option:hover:not(.custom-select__option--is-selected) {
    background-color: rgba(155, 155, 155, 0.4);
  }

  .custom-select__menu-list {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .custom-select__option--is-selected {
    background-color: rgba(155, 155, 155, 0.8);
    color: white;
  }

  label {
    font-size: 14px;
    margin-bottom: 4px;
  }

  button {
    background-color: black;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 12px;
    color: white;
    border: 1px solid black;
    cursor: pointer;
    transition: 250ms linear;
    margin-top: 12px;

    &[disabled] {
      background-color: grey;
      border-color: grey;
    }
    &:not(:disabled):hover {
      background-color: white;
      color: black;
    }
  }
`;
