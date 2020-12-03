import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form initialData={{ name: 'Diego' }} onSubmit={handleSubmit}>
          <h1>Sign-up</h1>

          <Input name="name" icon={FiUser} placeholder="name" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Ok</Button>
        </Form>

        <a href="signup">
          <FiArrowLeft />
          Back to log-in
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
