import React from "react";
import { Link, Outlet } from "react-router-dom";
import user from "./../../Img/user.jpg";
import ficon from "./../../Icon/f.png";
import iicon from "./../../Icon/i.png";
import inicon from "./../../Icon/in.png";
import twicon from "./../../Icon/tw.png";
const Home = () => {
  return (
    <section>
      <div className="home-content">
        <div className="home-flex">
          <div className="home-user">
            <div className="name">
              <h2><Link to='/'>Crafta</Link></h2>
            </div>
            <img src={user} alt="" />
            <div className="info">
              <h3>Joniba Smith</h3>
              <p>Senior Product Designer</p>
              <a href="#">
                <img src={ficon} alt="" />
              </a>
              <a href="#">
                <img src={iicon} alt="" />
              </a>
              <a href="#">
                <img src={inicon} alt="" />
              </a>
              <a href="#">
                <img src={twicon} alt="" />
              </a>
            </div>
          </div>
          <div className="container-outlet">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
