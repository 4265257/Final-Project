import { useAuth0 } from "@auth0/auth0-react";
//import { link } from "fs";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated && (
        <Logout onClick={() => logout()}>Logout</Logout>
      )}
    </div>
  );
};

const Logout = styled.a`
//font-size: 20px;
//background-color: var(--primary-color);
`