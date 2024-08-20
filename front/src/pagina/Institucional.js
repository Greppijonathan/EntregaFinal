import React from "react";
import '../estilos/componentes/pagina/Institucional.css';

const Institucional = (props) => {
    return (
        <main className="holder">
            <div>
                <section className="presentacion">
                    <h2 className="titulo-presentacion">Presentacion Institucional</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum ipsam iure qui alias eveniet
                        est incidunt excepturi optio. Blanditiis sapiente itaque id enim commodi ut assumenda numquam
                        repellat corporis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum ipsam iure qui alias eveniet
                        est incidunt excepturi optio. Blanditiis sapiente itaque id enim commodi ut assumenda numquam
                        repellat corporis?</p>
                </section>
            </div>
            <div>
                <img
                    className="foto-escuela"
                    src="EscuelaFoto.png"
                    alt="escuela"
                />
            </div>
            <div className="columnas">
                <section className="novedad">
                    <h2>Novedad 1</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum ipsam iure qui alias eveniet
                        est incidunt excepturi optio. Blanditiis sapiente itaque id enim commodi ut assumenda numquam
                        repellat corporis?</p>
                </section>
                <section className="novedad">
                    <h2>Novedad 2</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum ipsam iure qui alias eveniet
                        est incidunt excepturi optio. Blanditiis sapiente itaque id enim commodi ut assumenda numquam
                        repellat corporis?</p>
                </section>
                <section className="novedad">
                    <h2>Novedad 3</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum ipsam iure qui alias eveniet
                        est incidunt excepturi optio. Blanditiis sapiente itaque id enim commodi ut assumenda numquam
                        repellat corporis?</p>
                </section>
            </div>
        </main>
    );
}

export default Institucional;
