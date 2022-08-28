import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";

export const UserContext = createContext(null);
export const UserProvider = ({ children }) => {
  const [comment, setComment] = useState({ status: "" });
  const [error, setError] = useState(false);
  const { user } = useAuth0();
  const [ comments, setComments ] = useState([])
  /// const { id } = useParams();
//console.log("id", id) 
useEffect(() => {
  fetch("/getPosts")
    .then((res) => res.json())
    .then((data) => {
      setComments(data);
    });
}, []);


//console.log("comment", comment) 

  const handleAfterPost = async (id) => {
    // const data = { status: comment };
     //console.log("data",data)
     const response = await fetch("/addPost", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
       body: JSON.stringify({ 
        user:user,
        status: comment,
        idItem: id
      }),
     })
 /*       .then((res) => res.json())
       .then((data) => setComment(data)) */
       .catch((error) => {
         console.error("Error:", error);
       });
 /*     const fetchData = await response.json();
     console.log("fetchData ", fetchData);
     if (fetchData) {
       localStorage.setItem("comment", comment);
     } else {
       setError(true);
     } */
   };
  return (
    <UserContext.Provider
      value={{
        handleAfterPost,
        setComment,
        comment,
        comments
        //id
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