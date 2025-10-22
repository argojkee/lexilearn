import styled from 'styled-components';
import { Form } from 'formik';

export const RegistrationLoginFormStyles = styled(Form)`
  padding: 16px;
  border: 1px solid grey;
  border-radius: 16px;

  .label-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
  }

  label {
    margin-bottom: 4px;
  }

  input {
    width: 100%;
    background-color: rgba(155, 155, 155, 0.2);
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 4px 8px;
    outline: none;
    color: grey;
    font-size: 14px;
    transition: 250ms linear;

    &:focus {
      border-color: black;
    }
  }

  .custom-select__control {
    cursor: pointer;
    background-color: rgba(155, 155, 155, 0.2);
    font-size: 14px;
    padding: 0px;
    border-radius: 12px;
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

  .wrapper {
    position: relative;
  }

  .wrapper > button {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .error-msg {
    font-size: 12px;
    color: red;
    margin-top: 2px;
  }

  .sbmt-btn {
    cursor: pointer;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    width: 100%;
    border-radius: 12px;
    margin-top: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    transition: 250ms linear;

    &:hover {
      background-color: rgba(150, 150, 150, 0.2);
      color: black;
    }
  }

  .select-page {
    text-align: center;
    color: grey;
    margin-top: 8px;
  }

  .text-link {
    color: black;
    text-decoration: none;
    transition: 250ms linear;

    &:hover {
      color: blue;
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 399px) {
    width: 100%;
  }

  @media screen and (min-width: 400px) {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`;
