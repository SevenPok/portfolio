import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text
} from '@chakra-ui/react'
import NextLink from 'next/link'

const Custom404 = props => {
  const { path } = props
  return (
    <Container maxW="100%">
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref={path}>
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default Custom404
