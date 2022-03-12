import { Container } from "@chakra-ui/react";
import Layout from "../components/layouts/article";

const About = () => {
  return (
    <Layout title={"About"}>
     <Container>
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
          My name is Gerber Colindres, i'm junior developer and create my first
          website in next js
        </p>
     </Container>
    </Layout>
  );
};

export default About;
