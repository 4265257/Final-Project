import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";
import { ItemContext } from "../ItemContext";
const Homepage = () => {
  const { veggiesInfo, fruitsInfo, fineHerbesInfo } = useContext(ItemContext);
  return (
    <HomeArea>
      <h2 style={{ textAlign: "center" }}>Vegetables</h2>
      <Layout>
        {veggiesInfo?.map((veggie) => {
          return (
            <ImageArea key={veggie.id} to={`/${veggie.id}`}>
              <Image
                style={{
                  height: 200,
                }}
                cloudName="yarabrek"
                publicId={veggie.avatarPic}
              />
              <Label>{veggie.name}</Label>
            </ImageArea>
          );
        })}
      </Layout>
      <h2 style={{ textAlign: "center" }}>Fines Herbes</h2>
      <Layout>
        {fineHerbesInfo?.map((fineHerbe) => {
          return (
            <ImageArea key={fineHerbe.id} to={`/${fineHerbe.id}`}>
              <Image
                style={{
                  height: 200,
                }}
                cloudName="yarabrek"
                publicId={fineHerbe.avatarPic}
              />
              <Label>{fineHerbe.name}</Label>
            </ImageArea>
          );
        })}
      </Layout>
      <h2 style={{ textAlign: "center" }}>Fruits</h2>
      <Layout>
        {fruitsInfo?.map((fruit) => {
          return (
            <ImageArea key={fruit.id} to={`/${fruit.id}`}>
              <Image
                style={{
                  height: 200,
                }}
                cloudName="yarabrek"
                publicId={fruit.avatarPic}
              />
              <Label>{fruit.name}</Label>
            </ImageArea>
          );
        })}
      </Layout>
    </HomeArea>
  );
};

const HomeArea = styled.div`
  margin-top: 40px;
  height: fit-content;
`;
const Layout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: fit-content;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
`;
const Label = styled.div`
  text-align: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
  font-size: 25px;
  background: rgb(72, 72, 72, 0.6);
  color: White;
`;
const ImageArea = styled(Link)`
  align-content: center;
  position: relative;
  border: solid white 10px;
  border-radius: 5px;
  margin: 20px;
`;

export default Homepage;
