import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129; /**criando ela pra deixar ela vermelha quando login der erro */
  padding: 16px;
  width: 100%;
  color: #666360;

  /**<Centralizando> */
  display: flex;
  align-items: center;
  /**</Centralizando> */

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1; /** input ocupar todo espaço possível */
    background: transparent;
    border: 0; /** retirar a borda */
    color: #d4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
    /**margin dentro do icon, porque se não houver icon não tem porque a margin existir */
  }
`;
