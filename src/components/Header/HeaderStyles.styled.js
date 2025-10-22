import styled from 'styled-components';

export const HeaderStyles = styled.header`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid grey;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu-container {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }

  .logo-link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    column-gap: 8px;
    color: black;
    font-weight: 600;
    font-size: 24px;
  }

  nav {
    display: flex;
    column-gap: 8px;
  }

  .link-btn {
    padding: 8px 12px;
  }

  @media screen and (max-width: 399px) {
    .menu-container {
      column-gap: 2px;
    }
    nav {
      column-gap: 2px;
    }
    .logo-link,
    .link-btn {
      font-size: 12px;
      padding: 2px;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 767px) {
    .menu-container {
      column-gap: 4px;
    }
    nav {
      column-gap: 4px;
    }
    .logo-link,
    .link-btn {
      font-size: 14px;
      padding: 4px 8px;
    }
  }

  @media screen and (max-width: 767px) {
    .logo-link {
      font-size: 14px;
    }
  }
`;
