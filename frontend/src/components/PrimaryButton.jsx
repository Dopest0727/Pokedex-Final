import React from 'react'
import { Button } from '@chakra-ui/react'

const PrimaryButton = ({ children, ...props }) => {
    return (
        <Button
        bgColor="white"
        borderWidth="2px"
        borderColor="blue.200"
        w="100%"
        color="blue.300"
        variant="solid"
        _hover={{
          background: 'blue.500',
          color: 'white',
        }}
        {...props}
        >
          {children}
      </Button>
    )
}

export default PrimaryButton
