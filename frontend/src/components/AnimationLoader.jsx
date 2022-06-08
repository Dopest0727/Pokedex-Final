import React from 'react'

import { useSelector } from 'react-redux'

//import Animation from '../IMG/animation.gif'

export const AnimationLoader = () => {
  const isLoading = useSelector((state) => state.Loader.isLoading)

  return ( 
    <div>
      {/* {isLoading && <div> AHHHHHHHHHHHHHHHHHHH </div>} */}
    </div>
    )
}