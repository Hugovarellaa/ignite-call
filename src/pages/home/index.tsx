import { Heading, Text } from '@ignite-ui/react'
import { HomeContainer, HomeHero, HomePreview } from './styles'

import Image from 'next/image'
import previewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <HomeContainer>
      <HomeHero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text>
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
      </HomeHero>
      <HomePreview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando a aplicação em funcionamento"
        />
      </HomePreview>
    </HomeContainer>
  )
}
