import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "./UserContext";
import { useState, useContext, useEffect } from "react";
import PicUser from "../Pics/blank-profile-picture.png";
import { ItemContext } from "./ItemContext";
import { Image } from "cloudinary-react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const { favorites, handleAfterDeleteFavorite, favoriteStatus } =
    useContext(UserContext);
  const { veggiesInfo, fruitsInfo, fineHerbesInfo } = useContext(ItemContext);
  const favoritesArray = favorites.data;
  const { id } = useParams();

  // if (!favorites?.data?.length) {
  //   return null;
  // }

  //console.log("user", user.sub)
  //console.log("favorites", favorites.data);

  const filteredFavoritesArray = favoritesArray
  // ?.filter((favorite) => {
  //   if (favorite.user?.sub == user?.sub) {
  //     // console.log(comment.status);
  //     return favorite;
  //   }
  // });

 // console.log("favoriteStatus",favoriteStatus)

  return (
    <Wrapper>
      <ProfileArea>
        <h2>Profile of user </h2>
        <ProfileSection>
          {user?.picture && <ImageUser src={user.picture} alt={user?.name} />}
          {!user.picture && <ImageUser src={PicUser} alt={user?.name} />}
          <h3
            style={{
              padding: 10,
              margin: 20,
              backgroundColor:"white",
              borderRadius:"5px"
            }}
          >
            {user?.name}
          </h3>
        </ProfileSection>
        {filteredFavoritesArray?.length !== 0 && (
          <h2
          style={{
            padding: 10,
            margin: 10,
          }}>
            Favorites
          </h2>
        )}
        <FavoriteArea>
          {filteredFavoritesArray?.map((favorite, i) => {
            const veggieItems = veggiesInfo?.find(
              (veggie) => veggie.id == favorite.idItem
              );
              return (
                
              <RemoveImageArea key={i}>
                <ImageArea to={`/${veggieItems.id}`}>
                  <Image
                    style={{
                      height: 200,
                    }}
                    cloudName="yarabrek"
                    publicId={veggieItems.avatarPic}
                    />
                  <Label>{veggieItems.name}</Label>
                </ImageArea>
                <RemoveButton
                  onClick={() => {
                    console.log("veggieItems.id",veggieItems.id)
                    //  setFavoriteStatus(true)??
                    handleAfterDeleteFavorite(veggieItems.id);
                  }}
                  disabled={!favoriteStatus[veggieItems.id]}
                  >
                  Remove from favorite
                </RemoveButton>
              </RemoveImageArea>
            );
          })}
        </FavoriteArea>
      </ProfileArea>
    </Wrapper>
  );
};

// const ProfileArea = styled.div`
// margin-top: 80px;
// //height: fit-content;
// `;
const ProfileSection = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  align-content: center;
  //margin-top: 80px;
  //height: fit-content;
  `;
const ImageUser = styled.img`
  width: auto;
  height: 80px;
  border-radius: 10px;
  `;
const ProfileArea = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 80px;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  // margin-bottom: 20px;
  //margin-left: auto;
  // margin-right: auto;
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
const ImageArea = styled(Link)`
  width: fit-content;
  position: relative;
  // border: solid black 2px;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  `;

const Wrapper = styled.div`

min-height: 100vh;


  // display: flex;
  // height: 860px;
  `;
const FavoriteArea = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  //border: solid white 10px;
  background-color: white;
  border-radius:5px;
  `;
const RemoveImageArea = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px;
`;
const ProfileText = styled.p`
  font-size: 100px;
  text-align: center;
  `;

export default Profile;

// const veggieItems = veggiesInfo.filter((veggie) => veggie.id == filteredFavoritesArray.idItem);
// const fruitItems = fruitsInfo.filter((fruit) => fruit.id == filteredFavoritesArray.idItem);
// const fineHerbeItems = fineHerbesInfo.filter((fineHerbe) => fineHerbe.id == filteredFavoritesArray.idItem);
// console.log("veggieItems", veggieItems)

{/*             <ul>
    {Object.keys(user).map((ObjKey, i) => {
      <li>
        {ObjKey}: {user[ObjKey]}
      </li>;
    })}
  </ul> */}


    //console.log("filteredFavoritesArrayS", filteredFavoritesArray)

  // const FavoriteIdItemVeggies = filteredFavoritesArray.map((favorite)=>{
  // const veggieItems = veggiesInfo.find((veggie) => veggie.id == favorite.idItem);

  // return veggieItems
  // })