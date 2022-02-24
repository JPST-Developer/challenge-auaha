import React from 'react'

export default function Footer() {
    return (
        <footer className="footer_area clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ml-auto mr-auto">
                <div className="single_widget_area ">
                    <h5 class="text-uppercase title text-center">Contato</h5>

                    <ul class="list-unstyled mb-0 footer_widget_menu">
                    <li>
                        <a href="#!" class="">Das 9:00 as 17:00</a>
                    </li>
                    <li>
                        <a href="#!" class="">(11) 98751-2918</a>
                    </li>
                    <li>
                        <a href="#!" class="">vendas@surijoias.com.br</a>
                    </li>
                    </ul>
                </div>
              </div>
            
            <div className='col-lg-3 col-md-6 mb-4 mb-md-0 ml-auto mr-auto'>
                <div className="single_widget_area mb-30 ">
                    <h5 class="text-uppercase title text-center">Institucional</h5>

                    <ul class="list-unstyled mb-0 footer_widget_menu">
                    <li>
                        <a href="#!" class="">Sobre nós</a>
                    </li>
                    <li>
                        <a href="#!" class="">Trocas e Devoluções</a>
                    </li>
                    <li>
                        <a href="#!" class="">Entregas e Prazos</a>
                    </li>
                    <li>
                        <a href="#!" class="">Blog</a>
                    </li>
                    </ul>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 mb-4 mb-md-0 ml-auto mr-auto'>
                <div className="single_widget_area mb-30 ">
                    <h5 class="text-uppercase title text-center">Ajuda</h5>

                    <ul class="list-unstyled mb-0 footer_widget_menu">
                    <li>
                        <a href="#!" class="">Contato</a>
                    </li>
                    <li>
                        <a href="#!" class="">Tire suas dúvidas</a>
                    </li>
                    <li>
                        <a href="#!" class="">Garantia e cuidados</a>
                    </li>
                   
                    </ul>
                </div>
              </div>

            </div>

            <div className="row align-items-end">
              <div className="col-12 col-md-6">
                <div className="single_widget_area">
                  <div className="footer_social_area">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Facebook"
                    >
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Instagram"
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Whatsapp"
                    >
                      <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                    
                   
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-12 text-center">
                <p>
                © SURI JOIAS. Proibida reprodução total ou parcial. Preços e estoques sujeitos à alteração sem aviso prévio - CNPJ: 00.680.164.0001/07 - R. Exemplo, 00, Bairro Exemplo, Exemplo – EX
                </p>
              </div>
            </div>
          </div>
        </footer>
    )
}