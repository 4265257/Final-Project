import React from "react";
import { ItemContext } from "../ItemContext";
import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export const IndividualPage = () => {
  const { veggiesInfo, fruitsInfo, fineHerbesInfo } = useContext(ItemContext);
  const { id } = useParams();
  // const idOfItem =  { id }
  const veggieItem = veggiesInfo.find((veggie) => veggie.id == id);
  const fruitItem = fruitsInfo.find((fruit) => fruit.id == id);
  const fineHerbeItem = fineHerbesInfo.find((fineHerbe) => fineHerbe.id == id);

  return (
    <Wrapper>
      {veggieItem && (
        <ItemPage>
          <ImageFruit src={veggieItem.avatarPic}></ImageFruit>
          <DescriptionSection>
            <div>
              <h1>{veggieItem.name}</h1>
              <Description>{veggieItem.description}</Description>
            </div>
          </DescriptionSection>
        </ItemPage>
      )}
      {fruitItem && (
        <ItemPage>
          <ImageFruit src={fruitItem.avatarPic}></ImageFruit>
          <DescriptionSection>
            <div>
              <h1>{fruitItem.name}</h1>
              <Description>{fruitItem.description}</Description>
            </div>
          </DescriptionSection>
        </ItemPage>
      )}
      {fineHerbeItem && (
        <ItemPage>
          <ImageFruit src={fineHerbeItem.avatarPic}></ImageFruit>
          <DescriptionSection>
            <div>
              <h1>{fineHerbeItem.name}</h1>
              <Description>{fineHerbeItem.description}</Description>
            </div>
          </DescriptionSection>
        </ItemPage>
      )}
    </Wrapper>
  );
};

const ImageFruit = styled.img`
  width: auto;
  height: 350px;
  border-radius: 10px;
`;

const ItemPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;

`;
const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: left;
  align-items: center;
  text-align: left;
  margin-left: 40px;
  overflow-wrap: break-word;
  width: 400px;
`;

const Wrapper = styled.div`
  height: 60px;
  margin-top: 150px;
  margin-left: auto;
  margin-left: auto;
`;
const Description = styled.p`
  width: 50%;
`;
