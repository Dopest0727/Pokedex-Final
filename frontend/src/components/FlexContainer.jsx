import React from 'react'
import { Flex } from '@chakra-ui/react'

const FlexContainer = ({ children, ...props }) => {
  return (
    <Flex w="100%" display="flex" px="2" {...props}>
      {children}{' '}
    </Flex>
  )
}

export default FlexContainer
