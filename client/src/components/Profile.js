import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

return (
    <div>
        <ProfileText>Profile of user </ProfileText>

 {

  isAuthenticated &&
  <Wrapper>
<article>
    {user?.picture && <img src={user.picture} alt={user?.name} />}
    <h2>{user?.name}</h2>
    <ul>
        {Object.keys(user).map((ObjKey, i) => {<li>{ObjKey}: {user[ObjKey]}</li>})}
    </ul>
</article>
  

  </Wrapper>
 }  
  {

!isAuthenticated &&
<Wrapper>

Please got to sign in/ sign up page 

</Wrapper>
}  
    </div>
)
};

const Wrapper = styled.div`
  display: flex;
  height: 60px;
`;

const ProfileText = styled.p`
  font-size: 100px;
  text-align: center;
 
`;

export default Profile;
