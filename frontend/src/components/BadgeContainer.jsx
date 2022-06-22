import React from 'react'
import { Badge } from '@chakra-ui/react'

const BadgeContainer = ({ children, ...props }) => {
  return (
    <Badge
      color="white"
      variant="solid"
      borderRadius="md"
      textAlign="left"
      p="2"
      {...props}
    >
      {children}
    </Badge>
  )
}

export default BadgeContainer
