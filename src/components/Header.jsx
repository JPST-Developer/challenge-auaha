import React from "react";

import logoImg from "../assets/logo.jpg";
import NavbarMenu from "./NavbarMenu";

export default function Header(props) {
  return (
    <header className="header_area">
      <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-center">
        
        <div className="search-area ">
                <form action="#" method="post">
                <input
                    type="search"
                    name="search"
                    id="headerSearch"
                    placeholder="Procurar"
                />
                <button type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
                </form>
            </div>   
               
            

        <div className="header-meta d-flex clearfix justify-content-end">
          
        <a className="navbar-brand single-brands-logo ml-auto mr-auto" href="#">
            {" "}
            <img src={logoImg} style={{ maxWidth: "130px" }} />{" "}
          </a>
          

          <div className="favourite-area">
            <a href="#">
              <img src="assets/img/core-img/heart.svg" alt="" />
            </a>
          </div>

          <div className="user-login-info">
            <a href="#">
              <img src="assets/img/core-img/user.svg" alt="" />
            </a>
          </div>

          <div className="cart-area">
            <a href="#" id="essenceCartBtn">
              <img src="assets/img/core-img/bag.svg" alt="" /> <span></span>
            </a>
          </div>
        </div>
      </div>
      <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-center">
        <nav className="classy-navbar justify-content-center" id="essenceNav">
          
          <div className="classy-menu">
            <div className="classycloseIcon">
              <div className="cross-wrap">
                <span className="top"></span>
                <span className="bottom"></span>
              </div>
            </div>

            <div className="d-flex">
              <NavbarMenu nome="Anéis" />
              <NavbarMenu nome="Brincos" />
              <NavbarMenu nome="Colares" />
              <NavbarMenu nome="Pingentes" />
              <NavbarMenu nome="Pulseiras" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
