import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Meta, Title, WorkImage } from '../../components/work'

const Alquifiestas = () => {
  return (
    <Layout title={'Alquifiestas'}>
      <Container pt={4}>
        <Title>Alquifiestas</Title>
        <p>
          Alquifiestas is a website that allows you to manage your store and
          your customers. where you can create products, offer discounts and
          view your inventory.
        </p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span></span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NEXTJS - TAILWINDCSS - NESTJS - POSTGRESQL</span>
          </ListItem>
          <ListItem>
            <Link href="https://alquifiestas-demo-olkli4m89-sevenpoks-projects.vercel.app/en">
              <Badge mr={2}>Demo</Badge>
              Website
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/Work/Alquifiestas01.jpeg" alt="alquifiestas" />
        <p>
          Puede colocar cualquier usuario y contraseña para ingresar a la demo.
        </p>
        <WorkImage
          src="/images/Work/Alquifiestas02.jpeg"
          alt="alquifiestas-login"
        />
        <WorkImage
          src="/images/Work/Alquifiestas03.jpeg"
          alt="alquifiestas-dashboard"
        />
      </Container>
    </Layout>
  )
}

export default Alquifiestas
