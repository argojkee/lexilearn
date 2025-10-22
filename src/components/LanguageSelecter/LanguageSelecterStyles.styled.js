import styled from 'styled-components';
import Select from 'react-select';

export const LanguageSelecterStyles = styled(Select)`
  .custom-select__control {
    border-radius: 50%;
    padding: 0;
    border: 2px solid #ccc;

    cursor: pointer;
    box-shadow: none;
    transition: all 0.2s ease;
    background-color: transparent;

    &:hover {
      border-color: #888;
    }
  }

  .custom-select__value-container {
    justify-content: center;
    padding: 0;
  }

  .custom-select__single-value {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .custom-select__menu {
    border-radius: 12px;
    overflow: hidden;
    min-width: auto;
  }

  .custom-select__menu-list {
    padding: 0;
    margin: 0;
    max-height: none;
  }

  .custom-select__menu-list::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .custom-select__option {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    cursor: pointer;

    &:hover {
      background-color: #f3f3f3;
    }
  }

  .custom-select__option--is-selected {
    background-color: grey;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
  }

  .custom-select__indicator-separator,
  .custom-select__dropdown-indicator {
    display: none;
  }

  @media screen and (max-width: 400px) {
    width: 32px;
    height: 32px;

    .custom-select__control {
      width: 32px;
      height: 32px;
    }

    .custom-select__menu {
      width: 32px;
    }
  }

  @media screen and (min-width: 401px) {
    width: 48px;
    height: 48px;

    .custom-select__control {
      width: 48px;
      height: 48px;
    }

    .custom-select__menu {
      width: 48px;
    }
  }
`;
