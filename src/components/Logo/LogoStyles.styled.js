import styled from 'styled-components';

export const LogoStyles = styled.div`
  background-color: black;
  width: ${props => `${props.$size + props.$size * 0.25}px`};
  height: ${props => `${props.$size + props.$size * 0.25}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
`;
