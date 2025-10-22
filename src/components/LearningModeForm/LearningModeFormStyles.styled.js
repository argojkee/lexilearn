import styled from 'styled-components';

export const LearningModeFormStyles = styled.section`
  .wrapper {
    border: 1px solid grey;
    border-radius: 12px;
    padding: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }

  .label-container {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }

  label {
    font-weight: bold;
  }

  .custom-select__control {
    cursor: pointer;
    border: 1px solid grey;
    padding: 2px 8px;
    color: grey;
    border-radius: 12px;
  }

  .custom-select__option {
    cursor: pointer;
  }
  .custom-select__menu-list {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .custom-select__option:hover:not(.custom-select__option--is-selected):not(
      .custom-select__option--is-disabled
    ) {
    background-color: rgba(155, 155, 155, 0.4);
  }

  .custom-select__option--is-selected {
    background-color: rgba(155, 155, 155, 0.8);
    color: white;
  }

  .custom-select__option:hover:not(.custom-select__option--is-disabled) {
    background-color: rgba(155, 155, 155, 0.4);
    color: white;
  }

  .custom-select__option--is-disabled {
    background-color: rgba(155, 155, 155, 0.6);
    color: black;
  }

  button {
    padding: 8px 12px;
    background-color: black;
    color: white;
    border: 1px solid black;
    border-radius: 12px;
    transition: 250ms linear;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;

    &:disabled {
      background-color: rgba(150, 150, 150, 0.7);
    }

    &:not(:disabled):hover {
      background-color: white;
      color: black;
    }
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    .wrapper {
      width: 100%;
    }
  }

  .attention {
    margin-top: 12px;
    color: grey;
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 40px;

    .wrapper {
      width: 768px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
