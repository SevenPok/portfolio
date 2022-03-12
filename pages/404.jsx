import { Container } from "@chakra-ui/react";
import Layout from "../components/layouts/article";

const Custom404 = () => {
  return (
    <Layout title={"Not Found"}>
      <Container>
        <h1>404 - Page Not Found</h1>
      </Container>
    </Layout>
  );
};

export default Custom404;
