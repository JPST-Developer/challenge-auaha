import React from "react";

export default function Navbar(props) {
  return (
    <div className="classynav">
      <ul>
        <li>
          <a href="#">{props.nome}</a>
          <div className="megamenu">
            <ul className="single-mega cn-col-4">
              <li className="title">Folheado</li>
              <li>
                <a href="#">Anel</a>
              </li>
              <li>
                <a href="#">Solitária</a>
              </li>
              <li>
                <a href="#">Cristal</a>
              </li>
              <li>
                <a href="#">Pérola</a>
              </li>
              <li>
                <a href="#">Zircônia</a>
              </li>
            </ul>
            <ul className="single-mega cn-col-4">
              <li className="title">Prata</li>
              <li>
                <a href="#">Anel</a>
              </li>
              <li>
                <a href="#">Solitária</a>
              </li>
              <li>
                <a href="#">Cristal</a>
              </li>
              <li>
                <a href="#">Pérola</a>
              </li>
              <li>
                <a href="#">Zircônia</a>
              </li>
            </ul>
            <ul className="single-mega cn-col-4">
              <li className="title">Ouro</li>
              <li>
                <a href="#">Anel</a>
              </li>
              <li>
                <a href="#">Solitária</a>
              </li>
              <li>
                <a href="#">Cristal</a>
              </li>
              <li>
                <a href="#">Pérola</a>
              </li>
              <li>
                <a href="#">Zircônia</a>
              </li>
            </ul>
            <div className="single-mega cn-col-4">
              <img src="assets/img/bg-img/anel.png" alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
