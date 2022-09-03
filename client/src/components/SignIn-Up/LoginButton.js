import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


export const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div>
      {!isAuthenticated && (
        <Login onClick={() => loginWithRedirect()}>Login</Login>
      )}
    </div>
  );
};

const Login = styled.a`
//font-size: 20px;
//background-color: var(--primary-color);
`