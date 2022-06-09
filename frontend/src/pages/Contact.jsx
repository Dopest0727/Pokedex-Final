import {
  Heading,
  Box,
  Container,
  Text,
  Flex,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'
import React from 'react'
import NavBar from '../components/NavBar'
import { FaGithubSquare, FaLinkedin, FaStackOverflow } from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Box>
          <Heading>About Us</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
      </Container>
      <Container>
        <Heading>Contact</Heading>
        <Flex direction="row">
          <Box>
            <Text>Maurii</Text>
            <Flex direction="row">
            <LinkBox>
                <LinkOverlay href="https://github.com/Dopest0727" isExternal>
                  <FaGithubSquare />
                </LinkOverlay>
              </LinkBox>
              <LinkBox>
                <LinkOverlay href="https://stackoverflow.com/users/14403128/mauricio-urra" isExternal>
                  <FaStackOverflow />
                </LinkOverlay>
              </LinkBox>
              <LinkBox>
                <LinkOverlay href="https://www.linkedin.com/in/maurii/" isExternal>
                  <FaLinkedin />
                </LinkOverlay>
              </LinkBox>
            </Flex>
          </Box>
          <Box>
            <Text>Rijad</Text>
            <Flex direction="row">
              <LinkBox>
                <LinkOverlay href="https://github.com/rijad90" isExternal>
                  <FaGithubSquare />
                </LinkOverlay>
              </LinkBox>
              <LinkBox>
                <LinkOverlay href="https://stackoverflow.com/users/17900772/rijad" isExternal>
                  <FaStackOverflow />
                </LinkOverlay>
              </LinkBox>
              <LinkBox>
                <LinkOverlay href="https://www.linkedin.com/in/rijad-ilijazagic-72b303a8/" isExternal>
                  <FaLinkedin />
                </LinkOverlay>
              </LinkBox>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </div>
  )
}

export default Contact
