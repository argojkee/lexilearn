import styled from 'styled-components';

export const SelectLangModeStyles = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid grey;
  border-radius: 12px;
  padding: 8px 12px 8px 32px;
  column-gap: 8px;
  cursor: pointer;
  transition: 250 linear;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }
  }

  .description {
    color: grey;
    font-style: italic;
    font-size: 14px;
  }

  .marker {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: black;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    transition: 250ms linear;
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    column-gap: 4px;
    padding: 4px 8px 4px 18px;

    .description {
      font-size: 10px;
    }

    svg {
      width: 12px;
      height: 12px;
    }

    .marker {
      width: 6px;
      height: 6px;
      left: 8px;
    }
  }
`;
