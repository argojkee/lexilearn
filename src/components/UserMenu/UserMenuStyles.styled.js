import styled from 'styled-components';

export const UserMenuStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;

  .user-info {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 4px;
    text-transform: capitalize;
    color: black;
    text-decoration: none;
    transition: 250ms linear;
    padding: 4px 8px;
    border-radius: 12px;
  }

  button {
    background-color: black;
    border: none;
    padding: 4px 8px;
    border-radius: 12px;
    color: white;
    font-family: 'Roboto';
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 4px;
    cursor: pointer;
    transition: 250ms linear;
  }

  @media screen and (max-width: 400px) {
    .user-info {
      display: none;
    }
  }

  @media screen and (max-width: 767px) {
    column-gap: 4px;
    button,
    .user-info {
      font-size: 12px;
      column-gap: 2px;
    }

    button > svg,
    .user-info > svg {
      width: 16px;
      height: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    button:hover {
      background-color: rgba(150, 150, 150, 0.4);
      color: black;
    }
  }
`;
