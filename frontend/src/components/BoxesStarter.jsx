import React from 'react'
import { Box } from '@chakra-ui/react'

const BoxesStarter = ({ children, ...props }) => {
  return (
    <Box
      w="xs"
      bgColor="white"
      borderRadius="lg"
      borderWidth="2px"
      borderColor="blue.200"
      {...props}
    >
      {children}
    </Box>
  )
}

export default BoxesStarter
