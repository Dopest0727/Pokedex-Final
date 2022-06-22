import { Container, Flex, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import Logo from '../components/Logo'

const Footer = () => (
  <Flex
    wrap="wrap"
    w="100%"
    bgColor="blue.400"
    as="footer"
    role="contentinfo"
    py={{ base: '6', md: '8' }}
  >
    <Container>
      <Stack spacing={{ base: '4', md: '5' }}>
        <Text fontSize="sm" color="white">
          &copy; {new Date().getFullYear()} Maurii &#38; Rijad. All rights
          reserved.
        </Text>
        <Stack justify="space-between" direction="row" align="center">
          <Logo color="white" />
        </Stack>
      </Stack>
    </Container>
  </Flex>
)

export default Footer
