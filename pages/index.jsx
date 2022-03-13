import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const homePage = () => {
  return (
    <Layout title={"Homepage"}>
      <Container maxW="100%">
        <Box
          borderRadius="lg"
          mb={5}
          p={2.5}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          Hello world, I am a junior developer from Guatemala!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Gerber Colindres
            </Heading>
          </Box>
        </Box>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Biography
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Villa Canales, Guatemala.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>I entered the University of San Carlos de
            Guatemala in 2018 in systems engineering, and I am currently
            studying the 8th semester.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            I started to works as a freelance
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/SevenPok" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @SevenPok
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://linkedin.com/in/gerber-colindres"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @Gerber-Colindres
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default homePage;
