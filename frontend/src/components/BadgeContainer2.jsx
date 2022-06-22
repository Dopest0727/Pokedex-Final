import React from 'react'
import { Badge } from '@chakra-ui/react'

const BadgeContainer2 = ({ children, ...props }) => {
  return (
    <Badge
      color="white"
      variant="solid"
      borderRadius="md"
      w="100%"
      textAlign="center"
      p="3"
      mb="2"
      {...props}
    >
      {children}
    </Badge>
  )
}

export default BadgeContainer2
