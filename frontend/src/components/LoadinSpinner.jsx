import React from 'react'
import { Spinner, Badge, Flex, Box, Center } from '@chakra-ui/react'

const LoadinSpinner = () => {
  return (
    <>
      <Center h="100vh" w="100%">
        <Box display="flex" alignItems="center">
          <Flex justifyContent="center" direction="column">
            <Center>
              <Spinner
                thickness="5px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.400"
                size="xl"
              />
              <Spinner
                thickness="5px"
                speed="0.5s"
                emptyColor="gray.200"
                color="green.400"
                size="xl"
                mx="5"
              />
              <Spinner
                thickness="5px"
                speed="0.6s"
                emptyColor="gray.200"
                color="red.400"
                size="xl"
              />
            </Center>
            <Center my="5">
              <Spinner
                thickness="5px"
                speed="0.6s"
                emptyColor="gray.200"
                color="red.400"
                size="xl"
              />
              <Spinner
                thickness="5px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.400"
                size="xl"
                mx="5"
              />
              <Spinner
                thickness="5px"
                speed="0.5s"
                emptyColor="gray.200"
                color="green.400"
                size="xl"
              />
            </Center>
            <Center>
              <Spinner
                thickness="5px"
                speed="0.5s"
                emptyColor="gray.200"
                color="green.400"
                size="xl"
              />
              <Spinner
                thickness="5px"
                speed="0.6s"
                emptyColor="gray.200"
                color="red.400"
                size="xl"
                mx="5"
              />
              <Spinner
                thickness="5px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.400"
                size="xl"
              />
            </Center>
            <Badge
              mt="10"
              color="white"
              py="2"
              px="4"
              borderRadius="md"
              bgColor="blue.400"
            >
              Have some patience will you?
            </Badge>
          </Flex>
        </Box>
      </Center>
    </>
  )
}

export default LoadinSpinner
