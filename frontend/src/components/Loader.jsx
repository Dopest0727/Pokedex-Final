import React from 'react'
import gif from '../IMG/animation.gif'
import { Img, Center } from '@chakra-ui/react'

const Loader = () => {
  return (
    <Center>
      <Img w="100%" src={gif} alt={'gif'} />
      <Img w="100%" src={gif} alt={'gif'} />
      <Img w="100%" src={gif} alt={'gif'} />
    </Center>
  )
}

export default Loader
