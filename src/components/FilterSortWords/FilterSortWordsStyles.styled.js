import styled from 'styled-components';

export const FilterSortWordsStyles = styled.section`
  .form {
    display: flex;
  }

  input {
    color: grey;
    border: 1px solid grey;
    transition: 250ms linear;
    border-radius: 12px;
    padding: 8px 12px;
    width: 100%;

    &:focus {
      border-color: black;
    }
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

  .custom-select__control {
    cursor: pointer;
    font-size: 14px;
    padding: 0px;
    min-width: 100px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;

    .form {
      column-gap: 4px;
    }

    .custom-select__indicator {
      padding: 0;
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;

    .form {
      column-gap: 12px;
    }

    .custom-select__control {
      cursor: pointer;
      font-size: 14px;
      padding: 0px;
      min-width: 120px;
    }
  }
`;
