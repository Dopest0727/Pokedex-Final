import {
  Heading,
  Box,
  Container,
  Text,
  Flex,
  LinkBox,
  LinkOverlay,
  Image,
} from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/Footer'
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
            On January 11th we embarced on this journey to become front end
            developers, almost 6 months later we can say that we are well on our
            way. We still have lots to learn and not enough time to do it, with
            ever-changing technologies and a hunger for knowledge we decided to
            make this pokedex as it has a nostalgic component. Who does not know
            Pikachu?
          </Text>
        </Box>
      </Container>
      <Container paddingBottom='25%'>
        <Heading>Contact</Heading>
        <Flex direction="row" width="100%" textAlign="center" gap="10%">
          <Box
            width="50%"
            alignContent="center"
            textAlign="-webkit-center"
            border="solid 3px black"
          >
            <Image
              src="https://avatars.githubusercontent.com/u/74298827?v=4"
              alt="Maurii"
              width="100%"
              height="auto"
              filter="grayscale(100%)"
            />
            <Box paddingTop="10%" paddingBottom="10%">
              <Text> name@domain.com</Text>
              <Text> 0701 234 567</Text>
            </Box>
            <Flex direction="row" justifyContent="space-evenly">
              <LinkBox>
                <LinkOverlay href="https://github.com/Dopest0727" isExternal>
                  <FaGithubSquare />
                </LinkOverlay>
              </LinkBox>
              <LinkBox>
                <LinkOverlay
                  href="https://stackoverflow.com/users/14403128/mauricio-urra"
                  isExternal
                >
                  <FaStackOverflow />
                </LinkOverlay>
              </LinkBox>
              <LinkBox>
                <LinkOverlay
                  href="https://www.linkedin.com/in/maurii/"
                  isExternal
                >
                  <FaLinkedin />
                </LinkOverlay>
              </LinkBox>
            </Flex>
          </Box>
          <Box
            width="50%"
            alignContent="center"
            textAlign="-webkit-center"
            border="solid 3px black"
          >
            <Image
              src="https://avatars.githubusercontent.com/u/91568892?v=4"
              alt="Rijad"
              width="100%"
              height="auto"
            />
            <Box paddingTop="10%" paddingBottom="10%">
              <Text> alternativt att vi skriver lite text om oss själva </Text>
            </Box>
            <Flex direction="row" justifyContent="space-evenly">
              <LinkBox>
                <LinkOverlay href="https://github.com/rijad90" isExternal>
                  <FaGithubSquare />
                </LinkOverlay>
              </LinkBox>
              <LinkBox>
                <LinkOverlay
                  href="https://stackoverflow.com/users/17900772/rijad"
                  isExternal
                >
                  <FaStackOverflow />
                </LinkOverlay>
              </LinkBox>
              <LinkBox>
                <LinkOverlay
                  href="https://www.linkedin.com/in/rijad-ilijazagic-72b303a8/"
                  isExternal
                >
                  <FaLinkedin />
                </LinkOverlay>
              </LinkBox>
            </Flex>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </div>
  )
}
export default Contact
