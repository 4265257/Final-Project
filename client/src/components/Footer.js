import styled from "styled-components";


const Footer = () => (
  <Wrapper>
     <Text> Become a garden expect!</Text>
  </Wrapper>
);

const Wrapper = styled.footer`
  display: flex;
  height: 60px;
`;

const Text = styled.p`
  font-size: 36px;
  text-align: center;
 
`;

export default Footer;
