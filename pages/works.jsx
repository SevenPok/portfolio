import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import tiendita from "../public/images/Work/TienditaLogin.jpg";

const Works = () => {
  return (
    <Layout title="Works">
      <Container maxW="100%">
        <Heading as="h3" fontSize={20} mt={4} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="tiendita" title="Tiendita" thumbnail={tiendita}>
              It&apos;s a simple app to buy and sell products made with Java
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
