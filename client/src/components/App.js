//import logo from "./logo.svg";
//import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import Header from "./Header";
import Homepage from "../components/Homepage/Homepage"
import SignInForm from "./SignIn-Up/SignIn";
import SignUpForm from "./SignIn-Up/SignUp";
import { useEffect, useState } from "react";
import { UserProvider } from "./UserContext";
import { IndividualPage } from "./IndividualPage/IndividualPage";

const  App = () => {
  // const [message, setMessage] = useState("No message");
  // useEffect(() => {
  //   fetch("/fetch-message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message))
  //     .catch((e) => console.log("Got error", e));
  // }, []);

  return (
    <div>
    <BrowserRouter>
    <UserProvider>
      <GlobalStyles />
       <Header></Header> 
      <Routes>
        <Route exact path="/" element={<Homepage/>}>
        </Route>
        <Route exact path="/signIn" element={<SignInForm/>}>

        </Route>
        <Route exact path="/signUp" element={<SignUpForm/>}>
        </Route>
        <Route path="/individualPage/:id" element={<IndividualPage/>}>
        </Route>
        <Route path="">404: Oops!</Route> 
      </Routes>
      </UserProvider>
    </BrowserRouter>
  </div>
  );
}

export default App;
/* 
    <div className="App">
      <header className="App-header"> */
  {/*       <img src={logo} className="App-logo" alt="logo" /> */}
       // <p>

{/*  {message} */}
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>