import React from 'react'
import { FaGithubSquare, FaLinkedin, FaStackOverflow } from 'react-icons/fa'
import {
  Heading,
  Box,
  Badge,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Tabs,
  Center,
  useBreakpointValue,
  Container,
  Text,
  Flex,
  LinkBox,
  LinkOverlay,
  Image,
} from '@chakra-ui/react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import pokebg from '../IMG/pokebg.jpg'

const Contact = () => {
  const pokecard = {
    imageAlt: 'Picture of Pokeball',
    welcome: 'Welcome back',
    phrase: "Ready to catch 'em all?",
  }

  const h = useBreakpointValue({
    base: 'column',
    md: 'column',
    lg: 'row',
  })

  return (
    <>
      <NavBar />
      <Container minH="80vh">
        <Tabs size="md" w="100%">
          <Center w="100%">
            <TabList>
              <Tab>About</Tab>
              <Tab>Contact</Tab>
              <Tab isDisabled>Secrets</Tab>
            </TabList>
          </Center>
          <TabPanels>
            <TabPanel>
              <Box>
                <Badge
                  borderRadius="md"
                  w="100%"
                  textAlign="center"
                  colorScheme="twitter"
                  py="3"
                  px="6"
                  my="4"
                >
                  <Heading fontSize="xl">Hope you liked it!</Heading>
                </Badge>
                <Text my="4">
                  On January 11th we embarced on this journey to become front
                  end developers, almost 6 months later we can say that we are
                  well on our way. We still have lots to learn and not enough
                  time to do it, with ever-changing technologies and a hunger
                  for knowledge we decided to make this pokedex as it has a
                  nostalgic component. Who does not know Pikachu? We truly hope
                  you have as much fun using it as we did developing it! <br />
                  GO CATCH 'EM ALL SON!
                </Text>
                <Image borderRadius="md" src={pokebg} alt={pokecard.imageAlt} mb="4"/>
              </Box>
            </TabPanel>
            <TabPanel>
              <Flex direction={h} gap="5">
              <Box w="100%" borderRadius="md" my="5">
                <Image
                  src="https://avatars.githubusercontent.com/u/74298827?v=4"
                  alt="Maurii"
                  borderRadius="full"
                  filter="grayscale(100%)"
                />
                <Box mt="5">
                  <Text>Maurii Aka "The Creator"</Text>
                  <Text>+46760533266</Text>
                  <Text>maurii@treunkter.com</Text>
                </Box>
                <Flex direction="row" mt="5">
                  <LinkBox>
                    <LinkOverlay
                      href="https://github.com/Dopest0727"
                      isExternal
                    >
                      <FaGithubSquare size={36} />
                    </LinkOverlay>
                  </LinkBox>
                  <LinkBox mx="1">
                    <LinkOverlay
                      href="https://stackoverflow.com/users/14403128/mauricio-urra"
                      isExternal
                    >
                      <FaStackOverflow size={36} />
                    </LinkOverlay>
                  </LinkBox>
                  <LinkBox>
                    <LinkOverlay
                      href="https://www.linkedin.com/in/maurii/"
                      isExternal
                    >
                      <FaLinkedin size={36} />
                    </LinkOverlay>
                  </LinkBox>
                </Flex>
              </Box>
              <Box w="100%" borderRadius="md" my="5">
                <Image
                  src="https://avatars.githubusercontent.com/u/91568892?v=4"
                  alt="Rijad"
                  borderRadius="full"
                  filter="grayscale(100%)"
                />
                <Box mt="5">
                  <Text>Rijad Aka "Balkan Boy"</Text>
                  <Text>+46721410119</Text>
                  <Text>riri90@jebotemail.com</Text>
                </Box>
                <Flex direction="row" mt="5">
                  <LinkBox>
                    <LinkOverlay href="https://github.com/rijad90" isExternal>
                      <FaGithubSquare size={36} />
                    </LinkOverlay>
                  </LinkBox>
                  <LinkBox mx="1">
                    <LinkOverlay
                      href="https://stackoverflow.com/users/17900772/rijad"
                      isExternal
                    >
                      <FaStackOverflow size={36} />
                    </LinkOverlay>
                  </LinkBox>
                  <LinkBox>
                    <LinkOverlay
                      href="https://www.linkedin.com/in/rijad-ilijazagic-72b303a8/"
                      isExternal
                    >
                      <FaLinkedin size={36} />
                    </LinkOverlay>
                  </LinkBox>
                </Flex>
              </Box>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Footer />
    </>
  )
}
export default Contact
