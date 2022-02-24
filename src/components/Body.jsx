import React from 'react'

import "./Body.css"

export default function Body() {
    return (
        <><div className="cart-bg-overlay"></div><div className="right-side-cart-area">
            <div className="cart-button">
                <a href="#" id="rightSideCart">
                    <img src="assets/img/core-img/bag.svg" alt="" /> <span>3</span>
                </a>
            </div>

            <div className="cart-content d-flex">
                <div className="cart-list">
                    <div className="single-cart-item">
                        <a href="#" className="product-image">
                            <img
                                src="assets/img/product-img/produto-1.jpg"
                                className="cart-thumb"
                                alt="" />

                            <div className="cart-item-desc">
                                <span className="product-remove">
                                    <i className="fa fa-close" aria-hidden="true"></i>
                                </span>
                                <span className="badge">Brinco</span>
                                <h6>Brinco de ouro</h6>
                                <p className="size">Tamanho: 14</p>
                                <p className="price">R$45,00</p>
                            </div>
                        </a>
                    </div>

                    <div className="single-cart-item">
                        <a href="#" className="product-image">
                            <img
                                src="assets/img/product-img/produto-2.jpg"
                                className="cart-thumb"
                                alt="" />

                            <div className="cart-item-desc">
                                <span className="product-remove">
                                    <i className="fa fa-close" aria-hidden="true"></i>
                                </span>
                                <span className="badge">Colar</span>
                                <h6>Colar de ouro</h6>
                                <p className="size">Tamanho: p</p>
                                <p className="price">R$45,00</p>
                            </div>
                        </a>
                    </div>

                    <div className="single-cart-item">
                        <a href="#" className="product-image">
                            <img
                                src="assets/img/product-img/produto-3.jpg"
                                className="cart-thumb"
                                alt="" />

                            <div className="cart-item-desc">
                                <span className="product-remove">
                                    <i className="fa fa-close" aria-hidden="true"></i>
                                </span>
                                <span className="badge">Brinco</span>
                                <h6>Brinco de prata cravejado</h6>
                                <p className="size">Tamanho: P</p>
                                <p className="price">R$45,00</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="cart-amount-summary">
                    <h2>Resumo</h2>
                    <ul className="summary-table">
                        <li>
                            <span>subtotal:</span> <span>R$274.00</span>
                        </li>
                        <li>
                            <span>Frete:</span> <span>Grátis</span>
                        </li>
                        <li>
                            <span>Desconto:</span> <span>-15%</span>
                        </li>
                        <li>
                            <span>total:</span> <span>$232.00</span>
                        </li>
                    </ul>
                    <div className="checkout-btn mt-100">
                        <a href="#" className="btn essence-btn">
                            Comprar
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <section
            className="welcome_area bg-img background-overlay"
            style={{
                backgroundImage: "url(assets/img/bg-img/fullbanner-image.png)",
                transform: "scaleX(-1)",
            }}
        >
                <div className="container h-100" style={{ transform: "scaleX(-1)" }}>
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="hero-content">
                                <h6>Verão</h6>
                                <h2>Nova coleção de verão</h2>
                                <a href="#" className="btn essence-btn">
                                    ver coleção
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="top_catagory_area section-padding-80 clearfix">
                <div className='freteContainer d-flex align-items-center justify-content-center'>
                    <span className='ml-auto mr-auto'><strong>Frete grátis</strong> nas compras acima de R$ 299,00</span>
                    <span className='ml-auto mr-auto'><strong>6 vezes sem juros</strong> no cartão de crédito</span>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-6 col-md-4">
                            <div
                                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                                style={{ backgroundImage: "url(assets/img/bg-img/Banner-1.jpg)" }}
                            >
                                <div className="catagory-content">
                                    <a href="#">Anéis</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4">
                            <div
                                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                                style={{ backgroundImage: "url(assets/img/bg-img/Banner-2.jpg)" }}
                            >
                                <div className="catagory-content">
                                    <a href="#">Brincos</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4">
                            <div
                                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                                style={{ backgroundImage: "url(assets/img/bg-img/Banner-3.jpg)" }}
                            >
                                <div className="catagory-content">
                                    <a href="#">Colares</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4">
                            <div
                                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                                style={{ backgroundImage: "url(assets/img/bg-img/Banner-4.jpg)" }}
                            >
                                <div className="catagory-content">
                                    <a href="#">Pingentes</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4">
                            <div
                                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                                style={{ backgroundImage: "url(assets/img/bg-img/Banner-5.jpg)" }}
                            >
                                <div className="catagory-content">
                                    <a href="#">Pulseiras</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <section className="new_arrivals_area section-padding-80 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading text-center">
                                <h2>Promoções</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="popular-products-slides owl-carousel">
                                <div className="single-product-wrapper">
                                    <div className="product-img">
                                        <img src="assets/img/product-img/produto-1.jpg" alt="" />

                                        <div className="product-badge offer-badge">
                                            <span>-15%</span>
                                        </div>


                                        <div className="product-favourite">
                                            <a href="#" className="favme fa fa-heart"></a>
                                        </div>
                                    </div>

                                    <div className="product-description">
                                        <span>Brinco</span>
                                        <a href="#">
                                            <h6>Brinco de ouro</h6>
                                        </a>
                                        <p className="product-price">
                                            <span className="old-price">R$80.00</span> R$ 75.00
                                        </p>

                                        <div className="hover-content">
                                            <div className="add-to-cart-btn ">
                                                <a href="#" className="btn essence-btn ">
                                                    Comprar
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-product-wrapper">
                                    <div className="product-img">
                                        <img src="assets/img/product-img/produto-2.jpg" alt="" />

                                        <div className="product-badge offer-badge">
                                            <span>-25%</span>
                                        </div>

                                        <div className="product-favourite">
                                            <a href="#" className="favme fa fa-heart"></a>
                                        </div>
                                    </div>

                                    <div className="product-description">
                                        <span>Colar</span>
                                        <a href="#">
                                            <h6>Colar de ouro</h6>
                                        </a>

                                        <p className="product-price">
                                            <span className="old-price">R$80.00</span> R$ 70.00
                                        </p>

                                        <div className="hover-content">
                                            <div className="add-to-cart-btn">
                                                <a href="#" className="btn essence-btn">
                                                    Comprar
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-product-wrapper">
                                    <div className="product-img">
                                        <img src="assets/img/product-img/produto-3.jpg" alt="" />

                                      

                                        <div className="product-badge offer-badge">
                                            <span>-30%</span>
                                        </div>

                                        <div className="product-favourite">
                                            <a href="#" className="favme fa fa-heart"></a>
                                        </div>
                                    </div>

                                    <div className="product-description">
                                        <span>Brinco</span>
                                        <a href="#">
                                            <h6>Brinco de prata cravejado</h6>
                                        </a>
                                        <p className="product-price">
                                            <span className="old-price">R$75.00</span> R$ 55.00
                                        </p>

                                        <div className="hover-content">
                                            <div className="add-to-cart-btn">
                                                <a href="#" className="btn essence-btn">
                                                    Comprar
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-product-wrapper">
                                    <div className="product-img">
                                        <img src="assets/img/product-img/produto-4.jpg" alt="" />

                                        <div className="product-badge new-badge">
                                            <span>Novo</span>
                                        </div>

                                        <div className="product-favourite">
                                            <a href="#" className="favme fa fa-heart"></a>
                                        </div>
                                    </div>

                                    <div className="product-description">
                                        <span>Anel</span>
                                        <a href="#">
                                            <h6>Anel de ouro com zircônia</h6>
                                        </a>
                                        <p className="product-price">R$ 80,00</p>

                                        <div className="hover-content">
                                            <div className="add-to-cart-btn">
                                                <a href="#" className="btn essence-btn">
                                                    Comprar
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="brands-area d-flex align-items-center justify-content-between">
                <div className='minibannerContainer d-flex align-items-center justify-content-center' >
                    <div className='minibanner' >
                        <img src="assets/img/core-img/minibanner1.jpg" alt="" />
                    </div>

                    <div className='minibanner'>
                        <img src="assets/img/core-img/minibanner2.jpg" alt="" />
                    </div>
                </div>

            </div>

            <div className="top_catagory_area section-padding-80 clearfix">
                <div className=' teste d-flex mb-5 align-items-center justify-content-center'>
                    <h5>O QUE OS CLIENTES DIZEM</h5>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div class="row ">
                            <div class="col-sm-6 ">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">NOME DO CLIENTE</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi eros, interdum in purus vitae, semper porttitor ligula. Sed egestas odio ut pretium aliquet.</p>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">NOME DO CLIENTE</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi eros, interdum in purus vitae, semper porttitor ligula. Sed egestas odio ut pretium aliquet.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-padding-80 ">
                <div className=' teste4 mb-5 text-center'>
                    <h5>RECEBA OFERTAS E NOVIDADES</h5> 
                    <p>Cadastre-se e receba nossas novidades e promoções</p>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div class="d-flex ">
                            <div className='col-sm-6 flex-column d-flex'>
                                <input className='form-control ' type="text" placeholder='Seu nome' style={{  }} />
                            </div>

                            <div className='col-sm-6 flex-column d-flex'>
                                <input className='form-control ' type="email" name="email" id="email" placeholder='Seu e-mail' />
                            </div>

                            <div className='col-sm-6 flex-column d-flex'>
                                <button className='btn btn-dark' type="submit">ENVIAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </>
    )
}