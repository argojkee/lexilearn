import styled from 'styled-components';

export const GeneralModalStyles = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(113, 113, 113, 0.7);
  z-index: 999;
  overflow: hidden;

  .modal {
    position: absolute;
    overflow: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: white;
    border-radius: 12px;
  }

  .exit-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    > svg {
      transition: 250ms linear;
    }
  }

  @media screen and (max-width: 399px) {
    .modal {
      width: 100%;
    }
  }
  @media screen and (min-width: 400px) {
    .modal {
      width: 400px;
    }
  }

  @media screen and (min-width: 768px) {
    .exit-btn:hover {
      > svg {
        color: grey;
        transform: scale(1.2);
      }
    }
  }
`;
