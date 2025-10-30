import styled from 'styled-components';

export const FeautureCardStyles = styled.li`
  border: 1px solid grey;
  border-radius: 16px;
  padding: 12px;

  .icon-container {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    font-weight: 400px;
    font-size: 18px;
  }

  p {
    color: grey;
    font-style: italic;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 200px;
    .icon-container {
      width: 32px;
      height: 32px;
      margin-bottom: 12px;
    }
    .icon-container > svg {
      width: 24px;
      height: 24px;
    }

    h3 {
      margin-bottom: 8px;
    }
  }

  @media screen and (min-width: 768px) {
    height: 200px;

    .icon-container {
      width: 40px;
      height: 40px;
      margin-bottom: 20px;
    }
    .icon-container > svg {
      width: 24px;
      height: 24px;
    }

    h3 {
      margin-bottom: 12px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1200px) {
    width: calc((100% - 40px) / 3);
  }

  @media screen and (min-width: 1200px) {
    position: relative;
    overflow: hidden;

    .overlay {
      position: absolute;
      left: 12px;
      top: 55%;
      transition: 250ms linear;
    }

    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
    }

    &:hover .overlay {
      top: 12px;
    }
  }
`;
