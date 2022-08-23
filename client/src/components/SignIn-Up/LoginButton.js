import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";


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

const Login = styled.button`
font-size: 20px;
`