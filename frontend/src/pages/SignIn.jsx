import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { 
  Container, 
  Button, 
  Input, 
  Stack, 
  Text 
} from "@chakra-ui/react"

import { API_URL } from "../utils/utils";

import user from "../reducers/user";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("sign up")
  const [validationError, setValidationError] = useState(null);
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);

  useEffect(() => {
    if (accessToken) {
      navigate("/");
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
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setUserId(data.userId));
            dispatch(user.actions.setAccessToken(data.accessToken));
            dispatch(user.actions.setUserName(data.username));
            dispatch(user.actions.setError(null));
            setValidationError(null);
          });
        } else {
          batch(() => {
            dispatch(user.actions.setError(data.response));
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setUserName(null));
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
        {mode === "sign up" ? "Sign Up" : "Sign In"}
      </Button>
      <Button type="button"
        onClick={() => setMode(mode === "sign up" ? "sign in" : "sign up")}>
        {mode === "sign up"
          ?
          "Sign In"
          :
          "Sign Up"
        }
      </Button>
    </form>
    </Container>
  )
}

export default Login