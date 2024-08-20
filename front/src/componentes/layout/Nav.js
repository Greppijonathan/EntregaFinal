import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../estilos/componentes/layout/nav.css';

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active">Institucional</NavLink></li>
                    <li><NavLink to="/Novedades" activeClassName="active">Novedades</NavLink></li>
                    <li><NavLink to="/Departamentos" activeClassName="active">Departamentos</NavLink></li>
                    <li><NavLink to="/Galeria" activeClassName="active">Galeria</NavLink></li>
                    <li><NavLink to="/Practicasprofesionalizantes" activeClassName="active">Practicas profesionalizantes</NavLink></li>
                    <li><NavLink to="/Aic" activeClassName="active">AIC</NavLink></li>
                    <li><NavLink to="/Pei" activeClassName="active">PEI</NavLink></li>
                    <li><NavLink to="/Contacto" activeClassName="active">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;