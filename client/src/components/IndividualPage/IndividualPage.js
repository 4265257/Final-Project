import React from "react";
import { ItemContext } from "../ItemContext";
import { UserContext } from "../UserContext";
import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { CommentSection } from "./CommentSection";
import { useAuth0 } from "@auth0/auth0-react";

export const IndividualPage = () => {
  const { veggiesInfo, fruitsInfo, fineHerbesInfo } = useContext(ItemContext);
  const {
    handleAfterFavorite,
    favoriteStatus,
    setFavoriteStatus,
    handleAfterDeleteFavorite,
  } = useContext(UserContext);
  const { id } = useParams();
  // const idOfItem =  { id }
  const veggieItem = veggiesInfo.find((veggie) => veggie.id == id);
  const fruitItem = fruitsInfo.find((fruit) => fruit.id == id);
  const fineHerbeItem = fineHerbesInfo.find((fineHerbe) => fineHerbe.id == id);
  const { user, isAuthenticated } = useAuth0();

  return (
    <Wrapper>
      {veggieItem && (
        <FullSection>
          <ItemPage>
            <ImageFruit src={veggieItem.avatarPic}></ImageFruit>
            <DescriptionSection>
              <TitleFavoriteSection>
                <h3
                //style={{ width: "250px"}}
                style={{ padding: "5px"}}

                >{veggieItem.name}</h3>
                {/* {favoriteStatus == true &&

                } */}
                {isAuthenticated && (
                  !favoriteStatus[id] &&
                  <FavoriteButton
                    onClick={() => handleAfterFavorite(id)}
                    disabled={favoriteStatus[id]}
                  >
                    Add to favorite
                  </FavoriteButton>
                )}
                 {isAuthenticated && 
                favoriteStatus[id] &&
                <FavoriteButton
                onClick={() => {
                  //  setFavoriteStatus(true)??
                  handleAfterDeleteFavorite(id);
                }}
                disabled={!favoriteStatus[id]}
              >
                Remove from favorite
              </FavoriteButton>
                } 
              </TitleFavoriteSection>
              <Description>{veggieItem.description}</Description>
            </DescriptionSection>
          </ItemPage>
          <CommentSection />
        </FullSection>
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
  margin-bottom: 20px;
  background-color: white;
  border-radius:5px;
  padding: 20px;
`;
const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: left;
  align-items: center;
  text-align: left;
  // margin-left: 40px;
  overflow-wrap: break-word;
  width: 400px;
`;

const Wrapper = styled.div`
  height: auto;
  margin-top: 100px;
  /*
  margin-left: auto;
  margin-left: auto;  */
`;
const Description = styled.p`
  width: 60%;
  text-align: center;
`;
const FullSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: left;
  align-items: center;
  text-align: left;
`;
const Textarea = styled.textarea`
  margin-top: 30px;
  width: 420px;
  height: 100px;
`;
const RemoveButton = styled.button`
  margin-bottom: 10px;
  width: 200px;
  height: 10%;
  color: white;
  background-color: var(--secondary-color);
  border-radius: 5px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
`;
const FavoriteButton = styled.button`
  width: 100%;
  height: 10%;
  color: white;
  background-color: var(--secondary-color);
  border-radius: 5px;
  margin-left: 10px;
  padding: 5px;
`;

const TitleFavoriteSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
 `;

const Input = styled.input`
  margin-left: 5px;
  margin-top: 10px;
  font-size: 20px;
  background-color: var(--secondary-color);
  border-radius: 5px;
  display: block;
`;
