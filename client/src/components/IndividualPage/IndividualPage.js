import React from "react";
import { ItemContext } from "../ItemContext";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { CommentSection } from "./CommentSection";
import { useAuth0 } from "@auth0/auth0-react";

export const IndividualPage = () => {
  const { veggiesInfo, fruitsInfo, fineHerbesInfo } = useContext(ItemContext);
  const {
    handleAfterFavorite,
    favoriteStatus,
    handleAfterDeleteFavorite,
  } = useContext(UserContext);
  const { id } = useParams();
  const veggieItem = veggiesInfo.find((veggie) => veggie.id == id);
  const fruitItem = fruitsInfo.find((fruit) => fruit.id == id);
  const fineHerbeItem = fineHerbesInfo.find((fineHerbe) => fineHerbe.id == id);
  const { isAuthenticated } = useAuth0();

  return (
    <Wrapper>
      {veggieItem && (
        <FullSection>
          <ItemPage>
            <ImageFruit src={veggieItem.avatarPic}></ImageFruit>
            <DescriptionSection>
              <TitleFavoriteSection>
                <h3
                style={{ padding: "5px"}}
                >{veggieItem.name}</h3>
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
        <FullSection>
          <ItemPage>
            <ImageFruit src={fruitItem.avatarPic}></ImageFruit>
            <DescriptionSection>
              <TitleFavoriteSection>
                <h3
                style={{ padding: "5px"}}
                >{fruitItem.name}</h3>
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
                  handleAfterDeleteFavorite(id);
                }}
                disabled={!favoriteStatus[id]}
              >
                Remove from favorite
              </FavoriteButton>
                } 
              </TitleFavoriteSection>
              <Description>{fruitItem.description}</Description>
            </DescriptionSection>
          </ItemPage>
          <CommentSection />
        </FullSection>
      )}
       {fineHerbeItem && (
        <FullSection>
          <ItemPage>
            <ImageFruit src={fineHerbeItem.avatarPic}></ImageFruit>
            <DescriptionSection>
              <TitleFavoriteSection>
                <h3
                style={{ padding: "5px"}}
                >{fineHerbeItem.name}</h3>
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
                  handleAfterDeleteFavorite(id);
                }}
                disabled={!favoriteStatus[id]}
              >
                Remove from favorite
              </FavoriteButton>
                } 
              </TitleFavoriteSection>
              <Description>{fineHerbeItem.description}</Description>
            </DescriptionSection>
          </ItemPage>
          <CommentSection />
        </FullSection>
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
  overflow-wrap: break-word;
  width: 400px;
`;
const Wrapper = styled.div`
  min-height: 100vh;
  margin-top: 100px;
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

