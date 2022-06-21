import React from "react"
import gif from '../IMG/animation.gif'
import { Img, Center, Container } from "@chakra-ui/react"


const Loader = () => {
    return (
        <Container w="100%">
            <Center>
                <Img w="100%" src={gif} alt={'gif'} />
            </Center> 
        </Container>
    )
}

export default Loader