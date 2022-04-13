import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Meta, Title, WorkImage } from '../../components/Work'

const Tiendita = () => {
  return (
    <Layout title={'Tiendita'}>
      <Container pt={4}>
        <Title>
          Tiendita <Badge>2019</Badge>
        </Title>
        <p>
          Tiendita is a desktop application that allows you to manage your store
          and your customers. where you can create products, offer discounts and
          view your inventory.
        </p>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java</span>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/SevenPok/Tienda">
              <Badge mr={2}>Demo</Badge>
              Source Code
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/Work/Tiendita01.jpg" alt="tiendita" />
        <WorkImage src="/images/Work/Tiendita02.jpg" alt="tiendita" />
        <WorkImage src="/images/Work/Tiendita03.jpg" alt="tiendita" />
      </Container>
    </Layout>
  )
}

export default Tiendita
