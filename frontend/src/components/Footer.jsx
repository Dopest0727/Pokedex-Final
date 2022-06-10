import { ButtonGroup, Container, Flex, IconButton, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Logo  from '../components/Logo'

export const Footer = () => (
    <Flex wrap="wrap"
    w="100%" bgColor="blue.400" as="footer" role="contentinfo" py={{ base: '6', md: '8' }}>
       <Container>
    <Stack spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">
        <Logo color="white"/>
        <ButtonGroup variant="ghost" color="white">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="white">
        &copy; {new Date().getFullYear()} Maurii &#38; Rijad. All rights reserved.
      </Text>
    </Stack>
    </Container> 
  </Flex>
)
