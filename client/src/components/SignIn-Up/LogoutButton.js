import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";

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
`