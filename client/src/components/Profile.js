import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import { ItemContext } from "./ItemContext";
import { Image } from "cloudinary-react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth0();
  const { favorites, handleAfterDeleteFavorite, favoriteStatus } =
    useContext(UserContext);
  const { veggiesInfo, fruitsInfo, fineHerbesInfo } = useContext(ItemContext);
  const favoritesArray = favorites.data;
  const { id } = useParams();
  const filteredFavoritesArray = favoritesArray;
  return (
    <Wrapper>
      <ProfileArea>
        <h2>Profile of user </h2>
        <ProfileSection>
          {user?.picture && <ImageUser src={user.picture} alt={user?.name} />}
          <h3
            style={{
              padding: 10,
              margin: 20,
              backgroundColor: "white",
              borderRadius: "5px",
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
            }}
          >
            Favorites
          </h2>
        )}
        <FavoriteArea>
          {filteredFavoritesArray?.map((favorite, i) => {
            const veggieItems = veggiesInfo?.find(
              (veggie) => veggie.id == favorite.idItem
            );
            const fruitItems = fruitsInfo?.find(
              (fruit) => fruit.id == favorite.idItem
            );
            const fineHerbeItems = fineHerbesInfo?.find(
              (fineHerbe) => fineHerbe.id == favorite.idItem
            );
            return (
              <div key={favorite.idItem}>
                {veggieItems && (
                  <RemoveImageArea>
                    <ImageArea to={`/${veggieItems?.id}`}>
                      <Image
                        style={{
                          height: 200,
                        }}
                        cloudName="yarabrek"
                        publicId={veggieItems?.avatarPic}
                      />
                      <Label>{veggieItems?.name}</Label>
                    </ImageArea>
                    <RemoveButton
                      onClick={() => {
                        handleAfterDeleteFavorite(veggieItems?.id);
                      }}
                      disabled={!favoriteStatus[veggieItems?.id]}
                    >
                      Remove from favorite
                    </RemoveButton>
                  </RemoveImageArea>
                )}
                {fruitItems && (
                  <RemoveImageArea>
                    <ImageArea to={`/${fruitItems?.id}`}>
                      <Image
                        style={{
                          height: 200,
                        }}
                        cloudName="yarabrek"
                        publicId={fruitItems?.avatarPic}
                      />
                      <Label>{fruitItems?.name}</Label>
                    </ImageArea>
                    <RemoveButton
                      onClick={() => {
                        handleAfterDeleteFavorite(fruitItems?.id);
                      }}
                      disabled={!favoriteStatus[fruitItems?.id]}
                    >
                      Remove from favorite
                    </RemoveButton>
                  </RemoveImageArea>
                )}
                {fineHerbeItems && (
                  <RemoveImageArea>
                    <ImageArea to={`/${fineHerbeItems?.id}`}>
                      <Image
                        style={{
                          height: 200,
                        }}
                        cloudName="yarabrek"
                        publicId={fineHerbeItems?.avatarPic}
                      />
                      <Label>{fineHerbeItems?.name}</Label>
                    </ImageArea>
                    <RemoveButton
                      onClick={() => {
                        handleAfterDeleteFavorite(fineHerbeItems?.id);
                      }}
                      disabled={!favoriteStatus[fineHerbeItems?.id]}
                    >
                      Remove from favorite
                    </RemoveButton>
                  </RemoveImageArea>
                )}
              </div>
            );
          })}
        </FavoriteArea>
      </ProfileArea>
    </Wrapper>
  );
};

const ProfileSection = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  align-content: center;
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
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
`;

const Wrapper = styled.div`
  min-height: 100vh;
`;
const FavoriteArea = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const RemoveImageArea = styled.div`
  border-radius: 5px;
  background-color: white;
  padding: 10px;
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px;
`;

export default Profile;
