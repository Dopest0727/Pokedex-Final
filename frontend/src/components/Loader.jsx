import React from "react"
import gif from '../IMG/animation.gif'
import { Box } from "@chakra-ui/react"


const Loader = () => {
    return (
        <Box>
            <img src={gif} alt={'gif'}></img>
        </Box>
    )
}

export default Loader