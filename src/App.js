import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import HomeLink from "./Component/HomeLink";
import AboutMe from "./Page/AboutMe/AboutMe";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route index element={<HomeLink></HomeLink>}></Route>
          <Route path="aboutme" element={<AboutMe></AboutMe>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
