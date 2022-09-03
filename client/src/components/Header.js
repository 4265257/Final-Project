import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { LoginButton } from "./SignIn-Up/LoginButton";
import { LogoutButton } from "./SignIn-Up/LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import PicGarden from "../Pics/gardenPic.JPG";
//import { UserContext } from "./UserContext";
const Header = () => {
  // const { currentUser, signOutFunction } = useContext(UserContext);
  //const { isLoading, error } = useAuth0;

  const { isAuthenticated } = useAuth0();
  //const { profile } = useParams();

  return (
    <HeaderArea
    //style={{ backgroundImage:`url(${PicGarden})` }}
    >
      {/* 
 <Img src={PicGarden}/>
 */}
      <LogoArea to={`/`}>
        <h1>Garden Helper</h1>
      </LogoArea>
      <SignInOutArea>
        {isAuthenticated && (
          <ProfileLoginArea to={"/profile"}>Profile</ProfileLoginArea>
        )}
        <ProfileLoginArea to={"/about"}>About</ProfileLoginArea>

        <LoginButton />
        <LogoutButton />
      </SignInOutArea>
    </HeaderArea>
  );
};
const HeaderArea = styled.header`
  display: inline-flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
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
const Img = styled.img`
  // margin-left: 10px;
  width: 100%;
  height: 500px;
`;
const LogoArea = styled(Link)`
  margin: 10px;
`;
const ProfileLoginArea = styled(Link)`
  margin-right: 10px;
  //padding: 2px 6px;
  color: white;
`;
const SignInOutArea = styled.div`
  //margin: 10px 10px;
  display: inline-flex;
  flex-direction: row;
  margin-top: 15px;
  margin-right: 10px;
  float: left;
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
