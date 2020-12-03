import styled from 'styled-components';

export const Container = styled.div`
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
