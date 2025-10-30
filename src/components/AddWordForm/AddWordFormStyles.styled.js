import styled from 'styled-components';

export const AddWordFormStyles = styled.form`
  margin-top: 20px;
  border: 1px solid grey;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  justify-content: space-between;

  .label-container {
    display: flex;
  }

  input {
    padding: 8px 12px;
    border: 1px solid grey;
    outline: none;
    border-radius: 12px;
    transition: 250ms linear;
    background-color: rgba(155, 155, 155, 0.2);
    color: grey;

    &:focus {
      border-color: black;
    }
  }

  .custom-select__control {
    cursor: pointer;
    padding: 0px;
    border-radius: 12px;
    background-color: rgba(155, 155, 155, 0.2);
  }

  .custom-select__option {
    cursor: pointer;
  }

 

  .custom-select__menu-list {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .custom-select__option--is-selected {
    background-color: rgba(155, 155, 155, 0.8);
    color: white;
  }

  button {
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
      background-color: rgba(150, 150, 150, 0.6);
      color: black;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    row-gap: 12px;

    input,
    .custom-select__control {
      width: 100%;
    }

    label {
      white-space: nowrap;
    }
    .label-container {
      flex-direction: column;
      gap: 2px;
    }
  }

  @media screen and (min-width: 768px) {
    align-items: center;

    .label-container {
      align-items: center;
      gap: 8px;
    }

    .custom-select__control {
      min-width: 200px;
    }

    button:not(:disabled):hover {
      background-color: rgba(150, 150, 150, 0.4);
      color: black;
    }

     .custom-select__option:hover:not(.custom-select__option--is-selected) {
    background-color: rgba(155, 155, 155, 0.4);
  }
  }
`;
