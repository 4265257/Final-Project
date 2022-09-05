import styled from "styled-components";
import Harvest from "../Pics/gardenHarvest.jpg"

const About = () => (
    <Page>
  <Wrapper>
    <Img src={Harvest}/>
    <DescriptionSection>
     <Title> About</Title>
     <br/>
     <Text>Garden helper is a website were users can leave comments under speficiques veggies, fines herbes or frutis. They can also "add to favorites" the items when they are logged in. The favorites can be seen on their profile page. </Text>

    </DescriptionSection>
  </Wrapper>
    </Page>
);

const Wrapper = styled.div`
 // display: flex;
 background-color: white;
 margin-left: auto;
 margin-right: auto;
 display: flex;
 flex-direction: row;
 width: 40%;
 margin-top: 180px;
 margin-bottom: 60px;
 padding: 10px;
 `;
const DescriptionSection = styled.div`
 display: flex;
 flex-direction: column;
 padding: 10%;
 
 `
const Page = styled.div`
min-height: 100vh;

`
const Title = styled.div`
 margin-left: auto;
 margin-right: auto;
 // font-size: 36px;
 text-align: center;
 
`;
const Text = styled.div`
 margin-left: auto;
 margin-right: auto;
 // font-size: 36px;
 text-align: center;
`
const Img = styled.img`
    //background-image: 
  //url(../Pics/gardenPic.JPG)
   /// url(${Harvest});
  // height: 40%;
   width: 50%;
`

export default About;
