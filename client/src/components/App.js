import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import Header from "./Header";
import Homepage from "../components/Homepage/Homepage";
import { ItemProvider } from "./ItemContext";
import { UserProvider } from "./UserContext";
import { IndividualPage } from "./IndividualPage/IndividualPage";
import Footer from "./Footer";
import Profile from "./Profile";
import About from "./About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ItemProvider>
          <UserProvider>
            <GlobalStyles />
            <Header></Header>
            <Routes>
              <Route exact path="/" element={<Homepage />}></Route>
              <Route exact path="/profile" element={<Profile />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route excat path="/:id" element={<IndividualPage />}></Route>
              <Route path="">404: Oops!</Route>
            </Routes>
          </UserProvider>
        </ItemProvider>
      </BrowserRouter>
     <Footer />
    </div>
  );
};

export default App;
