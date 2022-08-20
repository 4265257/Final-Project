import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";

const Header = () => {

  return (
    <HeaderArea>
      <LogoArea to={`/`}>
        <h1>GardenHelper</h1>
      </LogoArea>
     
    </HeaderArea>
  );
};
const HeaderArea = styled.header`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  margin:0 ;
  top:0;

  height:50px;
  
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
const SignIn = styled(Link)``;

export default Header;
