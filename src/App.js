import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import HomeLink from "./Component/HomeLink";
import AboutMe from "./Page/AboutMe/AboutMe";
import MyServices from "./Page/MyServices/MyServices";
import MyFolio from "./Page/MyFolio/MyFolio";
import MyClients from "./Page/MyClients/MyClients";
import Contact from "./Page/Contact/Contact";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route index element={<HomeLink></HomeLink>}></Route>
          <Route path="aboutme" element={<AboutMe></AboutMe>}></Route>
          <Route path="/myservices" element={<MyServices></MyServices>}></Route>
          <Route path="/myfolio" element={<MyFolio></MyFolio>}></Route>
          <Route path="/myclients" element={<MyClients></MyClients>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
