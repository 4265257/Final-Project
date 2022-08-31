import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { LoginButton } from "./SignIn-Up/LoginButton";
import { LogoutButton } from "./SignIn-Up/LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
//import { UserContext } from "./UserContext";
const Header = () => {
  // const { currentUser, signOutFunction } = useContext(UserContext);
  //const { isLoading, error } = useAuth0;

  const { isAuthenticated } = useAuth0();

  return (
    <HeaderArea>
      <LogoArea to={`/`}>
        <h1>Garden Helper</h1>
      </LogoArea>
      <SignInOutArea>
        {isAuthenticated &&
        <ProfileLoginArea to={"/profile"}>
          <p>Profile</p>
        </ProfileLoginArea>
        }
        <LoginButton />
        <LogoutButton />
      </SignInOutArea>
    </HeaderArea>
  );
};
const HeaderArea = styled.header`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  //position: fixed;
  //margin:0 ;
  //top:0;
  height: 60px;
`;
const Button = styled.button`
  background-color: var(--primary-color);
  //font-family: var(--heading-font-family);
  color: black;
  margin-top: 10px;
  margin-right: 10px;
  border-radius: 5px;
  font-size: 20px;
`;
const ButtonsArea = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin-top: 15px;
  margin-right: 10px;
`;
const CartArea = styled(Link)`
  margin-left: 10px;
`;
const LogoArea = styled(Link)`
  margin: 10px;
`;
const ProfileLoginArea = styled(Link)`
  margin-right: 10px;
  padding: 2px 6px;
  color: white;
`;
const SignInOutArea = styled.div`
  //margin: 10px 10px;
  display: inline-flex;
  flex-direction: row;
  margin-top: 15px;
  margin-right: 10px;
`;

export default Header;

{
  /*         {error && <p>Authentication Error</p>}
        {!error &&  isLoading && <p>Loading</p>}
        {!error && !isLoading && (
          <> */
}
{
  /*           </>
        )} */
}
{
  /*   {currentUser && (
    <div>
    <h1 style={{ color: "white", marginTop: 10, marginLeft: 10 }}>
          {currentUser}
        </h1>
        <Button style={{fontSize:15,  marginRight: 15}}onClick={signOutFunction}>sign out</Button>
      </div>
    )}
    {!currentUser && (
      <Link to={`/signIn`}>
        <Button>sign in</Button>
      </Link>
    )} */
}
