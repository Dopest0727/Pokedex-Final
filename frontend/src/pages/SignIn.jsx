import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { 
  Container, 
  Button, 
  Input
} from "@chakra-ui/react"

import { API_URL } from "../utils/utils";

import user from "../reducers/user";

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("signup")
  const [validationError, setValidationError] = useState(null);
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);

  useEffect(() => {
    if (accessToken) {
      navigate("/main");
    }
  }, [accessToken]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };
    fetch(API_URL(mode), options)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.success) {
          batch(() => {
            dispatch(user.actions.setUserId(data.userId));
            dispatch(user.actions.setAccessToken(data.accessToken));
            dispatch(user.actions.setUsername(data.username));
            dispatch(user.actions.setError(null));
            setValidationError(null);
          });
        } else {
          batch(() => {
            dispatch(user.actions.setError(data.response));
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setUsername(null));
            setValidationError(data.response);
          });
        }
      });
  };
  return (
    <Container>
    <form onSubmit={onFormSubmit}>
      <label htmlFor="username">Username</label>
      <Input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} />

      <label htmlFor="password">Password</label>
      <Input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />

      <Button type="submit">
        {mode === "signup" ? "Sign Up" : "Sign In"}
      </Button>
      
      <Button type="button"
        onClick={() => setMode(mode === "sign up" ? "sign in" : "sign up")}>
        {mode === "signup"
          ?
          "You have an account? Click here to log in"
          :
          "Don't have an account? Click here to register"
        }
      </Button>
    </form>
    </Container>
  )
}

export default SignIn