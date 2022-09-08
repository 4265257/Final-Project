import { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const UserContext = createContext(null);
export const UserProvider = ({ children }) => {
  const [comment, setComment] = useState({ status: "" });
  const [favoriteStatus, setFavoriteStatus] = useState({});
  const [comments, setComments] = useState([]);
  const [getComments, setGetComments] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState("");
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (getComments) {
      fetch("/getPosts")
        .then((res) => res.json())
        .then((data) => {
          setComments(data);
          setGetComments(false);
        });
    }
  }, [getComments]);

  useEffect(() => {
    const getFavoritesFxn = async () => {
      if (isAuthenticated) {
        const accessToken = await getAccessTokenSilently();
        fetch(`/getFavorites/${user.sub}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + accessToken,
          },
        }).then((res) => {
          if (res.status === 200) {
            return res.json().then((data) => {
              setFavorites(data);
            });
          } else {
            setError(res.statusText);
          }
        });
      }
    };
    getFavoritesFxn();
  }, [favoriteStatus, isAuthenticated]);

  useEffect(() => {
    if (favorites?.data?.length) {
            let isSame = true;
      const favoritesObj = {};
      favorites.data.forEach((item) => {
        if (!favoriteStatus[item.idItem]) {
          isSame = false;
        }
        favoritesObj[item.idItem] = true;
      });
      if (!isSame) {
        setFavoriteStatus(favoritesObj);
      }
    }
  }, [favorites]);

  const handleAfterFavorite = async (id) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch("/addFavorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify({
        user: user,
        idItem: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFavoriteStatus((v) => ({ ...v, [id]: true }));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleAfterPost = async (id) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch("/addPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify({
        user: user,
        status: comment,
        idItem: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setGetComments(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  const handleAfterDeletePost = async (id, commentId) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`/deleteComment/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGetComments(true);
      })
      .catch((err) => console.log(err));
  };


  const handleAfterDeleteFavorite = async (id) => {
    const accessToken = await getAccessTokenSilently();
    fetch(`/deleteFavorite/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFavoriteStatus((v) => ({ ...v, [id]: false }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider
      value={{
        handleAfterPost,
        handleAfterFavorite,
        setComment,
        comment,
        comments,
        favorites,
        handleAfterDeletePost,
        handleAfterDeleteFavorite,
        setFavoriteStatus,
        favoriteStatus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
