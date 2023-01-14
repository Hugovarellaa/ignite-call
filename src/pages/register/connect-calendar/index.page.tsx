import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ArrowRight, Check } from 'phosphor-react'
import { RegisterContainer, RegisterHeader } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from './styles'

export default function Register() {
  // async function handleRegister(data) {}
  const session = useSession()
  console.log({ session })
  const router = useRouter()

  const hasAuthError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  function handleSignedInGoogle() {
    signIn('google')
  }

  return (
    <RegisterContainer>
      <RegisterHeader>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </RegisterHeader>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          {isSignedIn ? (
            <Button size="sm" disabled>
              Conectado
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleSignedInGoogle}
            >
              Conectar
              <ArrowRight />
            </Button>
          )}
        </ConnectItem>
        {hasAuthError && (
          <AuthError size="sm">
            Falha ao conectar ao Google, verifique se voce habilitou as
            permissões de acesso ao Google Calendar
          </AuthError>
        )}
        <Button type="submit" disabled={!isSignedIn}>
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </RegisterContainer>
  )
}
