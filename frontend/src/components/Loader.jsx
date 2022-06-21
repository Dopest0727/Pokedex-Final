import React from "react"
import gif from '../IMG/animation.gif'
import { Box, Img, Center } from "@chakra-ui/react"


const Loader = () => {
    return (
        <Box w="100wv">
            <Center>
                <Img src={gif} alt={'gif'} />
            </Center> 
        </Box>
    )
}

export default Loader