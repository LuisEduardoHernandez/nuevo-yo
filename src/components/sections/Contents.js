import React, { useState } from 'react'
import { getImg } from '../../helpers/getImg'

export const Contents = () => {

    const [rutina, setRutina] = useState({c1: true});

    const handleContent = (rutina) => {
        setRutina({[rutina]: true})
    }

    return (
        <div className="modal-body">
            <div className="container-fluid">
                <div className="row px-lg-5">
                    <div className="col-12 mx-auto text-center">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" onClick={()=>handleContent("c1")}>
                                <button className={`nav-link ${rutina.c1 && "active"}`}>Sabemos la diferencia</button>
                            </li>
                            <li className="nav-item" onClick={()=>handleContent("c2")} >
                                <button className={`nav-link ${rutina.c2 && "active"}`}>Hambre, apetito</button>
                            </li>
                            <li className="nav-item" onClick={()=>handleContent("c3")} >
                                <button className={`nav-link ${rutina.c3 && "active"}`}>Hambre</button>
                            </li>
                            <li className="nav-item" onClick={()=>handleContent("c4")} >
                                <button className={`nav-link ${rutina.c4 && "active"}`}>Factores sensoriales</button>
                            </li>
                            <li className="nav-item" onClick={()=>handleContent("c5")} >
                                <button className={`nav-link ${rutina.c5 && "active"}`}>Alimentacion consciente</button>
                            </li>
                            <li className="nav-item" onClick={()=>handleContent("c6")} >
                                <button className={`nav-link ${rutina.c6 && "active"}`}>Cual es el grado</button>
                            </li>
                            <li className="nav-item" onClick={()=>handleContent("c7")} >
                                <button className={`nav-link ${rutina.c7 && "active"}`}>Ser receptivo</button>
                            </li>
                            <li className="nav-item" onClick={()=>handleContent("c8")} >
                                <button className={`nav-link ${rutina.c8 && "active"}`}>Apetito</button>
                            </li>
                        </ul>

                        {rutina.c1 && (
                            <>
                                <img src={getImg(`contenido-modal1.png`)} alt="Datos de bienestar" className="img-fluid mb-4"/>
                                <img src={getImg(`contenido-modal2.png`)} alt="Datos de bienestar" className="img-fluid mb-4"/>
                            </>
                        )}
                        {rutina.c2 && (
                            <img src={getImg(`contenido-modal3.png`)} alt="Datos de bienestar" className="img-fluid mb-4"/>
                            )}
                        {rutina.c3 && (
                            <img src={getImg(`contenido-modal4.png`)} alt="Datos de bienestar" className="img-fluid mb-4"/>
                            )}
                        {rutina.c4 && (
                            <img src={getImg(`contenido-modal5.png`)} alt="Datos de bienestar" className="img-fluid mb-4"/>
                            )}
                        {rutina.c5 && (
                            <img src={getImg(`contenido-modal6.png`)} alt="Datos de bienestar" className="img-fluid mb-4"/>
                            )}
                        {rutina.c6 && (
                            <img src={getImg(`contenido-modal6.png`)} alt="Datos de bienestar" className="img-fluid mb-4"/>
                        )}
                        {rutina.c7 && (
                            <img src={getImg(`contenido-modal7.png`)} alt="Datos de bienestar" className="img-fluid mb-4"/>
                            )}
                        {rutina.c8 && (
                            <img src={getImg(`contenido-modal8.png`)} alt="Datos de bienestar" className="img-fluid mb-4"/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}