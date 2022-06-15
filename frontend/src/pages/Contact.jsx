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
            On January 11th we embarced on this journey to become front end developers, almost 6 months later we can say that
            we are well on our way. We still have lots to learn and not enough time to do it, 
            with ever-changing technologies and a hunger for knowledge we decided to make this pokedex as it has a nostalgic
            component. Who does not know Pikachu?
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
