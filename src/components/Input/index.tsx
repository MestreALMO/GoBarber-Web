import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
/** IconBaseProps são as propriedades que um icon pode ter */

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  /** Por padrão name não é obrigatório no HTML, mas fazendo isso ele se torna obrigatório */
  icon?: React.ComponentType<IconBaseProps>;
  /**
   * React.ComponentType; = Receber icon como uma propriedade do React
   * <IconBaseProps> = garante que as propriedades do icon serão passadas pra cá, sem isso o icon seria passado sem suas propriedades.
   * ?: = o icone é opcional.
   */
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  /** "icon: Icon" = se passar com o i minusculo o React não entendi que é um componente, em outras palavras:
   * um <icon /> não funcionaria, mas um <Icon /> funciona */
  <Container>
    {Icon && <Icon size={20} />}
    {/* Se o Icon existir, entâo codar "<Icon size={20}" */}
    <input {...rest} />
    {/* props está pegando todas as propriedades e passando pra dentro do input */}
  </Container>
);

export default Input;
