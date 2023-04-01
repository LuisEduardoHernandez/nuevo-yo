import React from 'react'
import { getImg } from '../../helpers/getImg';
import {Link} from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="footer-register">
            <p className="t-one">Consulta nuestro aviso de privacidad <Link to="/aviso-privacidad" target="_blank">aquí</Link></p>
            <div className="line-contact t-two">
                <img src={getImg(`telephone.png`)} alt="Telephone" />
                <p>Línea Contacto<br />800 6968696 (Lada sin Costo)</p>
            </div>
            <p className="t-three">
                No. de Aviso: 213300C2022922<br />Código Interno: MX21PAT00057
                <br />
                Consulte a su médico.
            </p>
        </footer>
    )
}
