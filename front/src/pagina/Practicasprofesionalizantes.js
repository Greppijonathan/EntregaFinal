import React from "react";
import '../estilos/componentes/pagina/Practicasprofesionalizantes.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel

const Practicasprofesionalizantes = (props) => {
    return (
        <main className="holder-main">
            <div className="fotos-practicas">
                <div className="container">
                    <h2 className="titulo-practicas">Formacion para el trabajo...</h2>
                    <Carousel>
                        <div>
                            <img src="Galeria1.jpg" alt="" />
                        </div>
                        <div>
                            <img src="Galeria2.jpg" alt="" />
                        </div>
                        <div>
                            <img src="Galeria3.png" alt="" />
                        </div>
                        <div>
                            <img src="Galeria4.jpg" alt="" />
                        </div>
                        <div>
                            <img src="Galeria5.png" alt="" />
                        </div>
                        <div>
                            <img src="Galeria6.png" alt="" />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="info-practicas">
                <h2 className="subtitulo-practicas">Informacion sobre las practicas</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum ipsam iure qui alias eveniet
                    est incidunt excepturi optio. Blanditiis sapiente itaque id enim commodi ut assumenda numquam
                    repellat corporis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt porro, quia repellat dolorum
                    modi laborum, quo ea ducimus ullam consectetur iusto, cumque natus possimus? Nulla ipsam voluptatem
                    laudantium expedita?</p>
            </div>
            <div className="info-empresas">
                <h2 className="subtitulo-practicas">Convenio con empresas...</h2>
                <ul>
                    <li>
                        <img src="AceroLatina.png" alt="Logo Empresa 1" /> Acero Latina
                    </li>
                    <li>
                        <img src="bimbo.png" alt="Logo Empresa 2" /> Bimbo
                    </li>
                    <li>
                        <img src="serenisima.png" alt="Logo Empresa 3" /> La serenisima
                    </li>
                    <li>
                        <img src="Farmesa.png" alt="Logo Empresa 4" /> Farmesa
                    </li>
                    <li>
                        <img src="Vetanco.png" alt="Logo Empresa 5" /> Vetanco
                    </li>
                    <li>
                        <img src="premec.png" alt="Logo Empresa 6" /> Premec
                    </li>
                </ul>
                <h2>¡y muchas más!</h2>
            </div>
        </main>
    );
}

export default Practicasprofesionalizantes;
