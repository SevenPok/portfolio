import { Container } from "@chakra-ui/react";
import Layout from "../components/layouts/article";

const homePage = () => {
  return (
    <Layout title={"Home"}>
      <Container>
        <h1>Welcome to my api</h1>
      </Container>
    </Layout>
  );
};

export default homePage;
