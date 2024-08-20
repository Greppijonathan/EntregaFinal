import React from "react";
import '../estilos/componentes/pagina/Galeria.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel

const Galeria = (props) => {
    return (
        <main className="holder-main">
            <h2 className="titulo-galeria">Mira nuestras fotos!</h2>

            <div className="galeria">
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
        </main>
    );
};

export default Galeria;
