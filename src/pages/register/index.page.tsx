import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { RegisterContainer, RegisterForm, RegisterHeader } from './styles'

export default function Register() {
  return (
    <RegisterContainer>
      <RegisterHeader>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>
        <MultiStep size={4} currentStep={1} />
      </RegisterHeader>

      <RegisterForm as="form">
        <label>
          <Text size="sm">Nome de usuário</Text>
          <TextInput prefix="ignite.com/" placeholder="seu-usuário" />
        </label>
        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput placeholder="Seu nome" />
        </label>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </RegisterForm>
    </RegisterContainer>
  )
}
