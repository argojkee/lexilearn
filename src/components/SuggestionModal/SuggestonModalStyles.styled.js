import styled from 'styled-components';

export const SuggestionModalStyles = styled.div`
  padding-top: 20px;
  h3 {
    text-align: center;
    font-size: 18px;
    color: grey;
  }

  label {
    margin-bottom: 4px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 12px;
  }

  .label-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
  }

  input,
  textarea {
    border: 1px solid grey;
    border-radius: 12px;
    padding: 8px 12px;
    font-size: 14px;
    color: grey;
    margin-bottom: 4px;
  }

  textarea {
    width: 100% !important;
    resize: none;
    min-height: 100px;
  }

  .error-msg {
    color: red;
    font-size: 10px;
  }

  button {
    padding: 8px 12px;
    border-radius: 12px;
    border: 1px solid black;
    background-color: black;
    color: white;
    cursor: pointer;
    transition: 250ms linear;
    margin-top: 8px;

    &:hover {
      background-color: white;
      color: black;
    }
  }
`;
