import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";

export const UserContext = createContext(null);
export const UserProvider = ({ children }) => {
  const [comment, setComment] = useState({ status: "" });
  //const [error, setError] = useState(false);
  const { user } = useAuth0();
  const [comments, setComments] = useState([]);
  const [favorites, setFavorites] = useState(false);
  const [favoriteStatus, setFavoriteStatus] = useState(false);

  /// const { id } = useParams();
  //console.log("id", id)
  useEffect(() => {
    fetch("/getPosts")
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, [comment]);

  useEffect(() => {
    fetch("/getFavorites")
      .then((res) => res.json())
      .then((data) => {
        setFavorites(data);
      });
  }, [favoriteStatus]);

  const handleAfterFavorite = async (id) => {
    const response = await fetch("/addFavorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: user,
        favorite: true,
        idItem: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFavoriteStatus(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleAfterPost = async (id) => {
    const response = await fetch("/addPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: user,
        status: comment,
        idItem: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("user", user);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  //console.log("favorites", favorites)

  const handleAfterDeletePost = async (id) => {
    const response = await fetch("/deleteComment", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: user,
        status: comment,
        idItem: id,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  //   useEffect(() => {
  //     fetch('/deleteComment', { method: 'DELETE' })
  //         .then(() => setStatus('Delete successful'));
  // }, []);

  const handleAfterDeleteFavorite = async (id) => {
    fetch("/deleteFavorite", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setFavoriteStatus(false);
        console.log(data);
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

// currentUser,
// setCurrentUser,
// userAfterSubmit,
// currentData,
// setCurrentData,
//  signOutFunction
// const [currentUser, setCurrentUser] = useState(null);
// const [currentData, setCurrentData] = useState(null);
//let navigate = useNavigate();

// useEffect(() => {
//   fetch("/api/users")
//     .then((res) => res.json())
//     .then((data) => {
//       setCurrentData(data);
//     });
// }, []);

// useEffect(() => {
//   const user = localStorage.getItem("user");
//   if (user) {
//     setCurrentUser(user);
//   }
// }, []);

// const userAfterSubmit = (input) => {
//   localStorage.setItem("user", input);
//   navigate.push("/");
// };
// const signOutFunction = () => {
//   localStorage.removeItem("user");
//   setCurrentUser(null);
// };
/*     const fetchData = await response.json();
                console.log("fetchData ", fetchData);
                if (fetchData) {
                  localStorage.setItem("comment", comment);
                } else {
                  setError(true);
                } */
