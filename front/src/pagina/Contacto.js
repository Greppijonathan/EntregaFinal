import React, { useState } from "react";
import '../estilos/componentes/pagina/Contacto.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaSkype } from 'react-icons/fa';
import axios from 'axios';

const Contacto = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    };

    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);
    const [sending, setSending] = useState(false);

    const handleDataChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);

        try {
            const response = await axios.post('http://localhost:3000/api/contacto', formData);
            setSending(false);
            setMsg(response.data.message);

            if (response.data.error === false) {
                setFormData(initialForm);
            }
        } catch (error) {
            setSending(false);
            setMsg('Error al enviar el mensaje');
        }
    };

    return (
        <main className="holder-contacto">
            <div className="contactorapido">
                <h2>Dejanos tu consulta</h2>
                <form className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleDataChange} />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleDataChange} />
                    </p>
                    <p>
                        <label>Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleDataChange} />
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleDataChange}></textarea>
                    </p>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                    <p className="centrar">
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras formas de contacto</h2>
                <p>Nos puede contactar por los siguientes medios:</p>
                <ul>
                    <li><FaPhone /> Teléfono: 0237 488 888</li>
                    <li><FaEnvelope /> Email: uncorreo@abc.gob.ar</li>
                    <li><FaMapMarkerAlt /> Dirección: unaDireccion</li>
                </ul>
            </div>
            <div className="Nuestras-Redes">
                <h2>Nuestras Redes</h2>
                <p>Encontranos en las siguientes redes sociales:</p>
                <ul>
                    <li><FaFacebook /> Facebook: unFacebook</li>
                    <li><FaTwitter /> Twitter: unTwiter</li>
                    <li><FaInstagram /> Instagram: unInstagram</li>
                    <li><FaSkype /> Skype: unSkype</li>
                </ul>
            </div>
        </main>
    );
}

export default Contacto;
