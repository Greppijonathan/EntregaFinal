import React from "react";


const Novedades = (props) => {
    return (
        <section className="holder">
            <h2>Novedades</h2>
            <div className="novedades">
                <h1>{props.titulo}</h1>
                <h2>{props.subtitulo}</h2>
                <p>{props.cuerpo}</p>
                <hr />
            </div>
        </section>
    );
}

export default Novedades;




