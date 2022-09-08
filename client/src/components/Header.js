import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoginButton } from "./SignIn-Up/LoginButton";
import { LogoutButton } from "./SignIn-Up/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <HeaderArea>
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
const LogoArea = styled(Link)`
  margin: 10px;
`;
const ProfileLoginArea = styled(Link)`
  margin-right: 10px;
  color: white;
`;
const SignInOutArea = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin-top: 15px;
  margin-right: 10px;
  float: left;
`;

export default Header;
