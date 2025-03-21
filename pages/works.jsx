import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Works = () => {
  return (
    <Layout title="Works">
      <Container maxW="container.md">
        <Heading as="h3" fontSize={20} mt={4} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="tiendita"
              title="Tiendita"
              thumbnail={'/images/Work/TienditaLogin.jpg'}
            >
              It&apos;s a simple app to buy and sell products made with Java
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="alquifiestas"
              title="Alquifiestas"
              thumbnail={'/images/Work/Alquifiestas01.jpeg'}
            >
              Alquifiestas is a desktop application that allows you to manage
              your store and your customers. where you can create products,
              offer discounts and view your inventory.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
