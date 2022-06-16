import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";



const Profile = () => {
  const username = useSelector(store => store.authenticated.username)
  const authToken = useSelector((state) => state.authenticated.authToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate("/");
    }
  }, [authToken, navigate]);
  return (
    <div>
      <NavBar />
      <Box>
      <h1>Hello {username}</h1>

      </Box>
    </div>
  )
}

export default Profile