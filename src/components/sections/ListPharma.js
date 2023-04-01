import React, { useState } from 'react'
import { getImg } from '../../helpers/getImg'
import {Modal} from '../UI/Modal'
import useModal from '../../hooks/useModal';

export const ListPharma = () => {

    const [isOpenModal, openModal, closeModal] = useModal(false);
    const [multiModal, setMultiModal] = useState({});

    const handleShowModal = (section) => {
        setMultiModal({[section]: true})
        openModal()
    }

    return (
        <div className="dashboard-content-disponibility">
            <div>
                <img src={getImg(`saxenda-50-off.png`)} alt="saxenda"
                style={{maxWidth: '200px', marginRight: '2rem', marginTop: '5rem'}} className="d-none d-md-block"/>
            </div>

            <ul className="list-pharma">
                <li data-id="sfe" onClick={()=>handleShowModal("sfe")}>SFE</li>
                <li data-id="deuten" onClick={()=>handleShowModal("deuten")}>Deuten</li>
                <li data-id="signufarma" onClick={()=>handleShowModal("signufarma")} >Signufarma</li>
                <li data-id="drogas" onClick={()=>handleShowModal("drogasenseres")} >Drogas&Enseres</li>
                <li data-id="metabolica" onClick={()=>handleShowModal("cmm")} >Clínica de medicina metabólica</li>
                <li data-id="pablo" onClick={()=>handleShowModal("sp")} >San Pablo</li>
                <li data-id="fesa" onClick={()=>handleShowModal("especializadas")} >Especializadas</li>
                <li data-id="plenia" onClick={()=>handleShowModal("plenia")} >Farmacias Plenia</li>
                <li data-id="farmavalue" onClick={()=>handleShowModal("farmavalue")} >Farmavalue</li>
                <li data-id="union" onClick={()=>handleShowModal("union")} >Unión</li>
                <li data-id="francisco" onClick={()=>handleShowModal("sfa")} >San Francisco de Asis</li>
                <li data-id="farmatodo" onClick={()=>handleShowModal("farmatodo")} >Farmatodo</li>
                <li data-id="farmalisto" onClick={()=>handleShowModal("farmalisto")} >Farmalisto</li>
                <li data-id="heb" onClick={()=>handleShowModal("heb")} >HEB</li>
                <li data-id="farmapronto" onClick={()=>handleShowModal("farmapronto")} >Farmapronto</li>
                <li data-id="zamora" onClick={()=>handleShowModal("zamora")} >Zamora</li>
            </ul>

            <ul className="list-pharma">
                <li data-id="miniatura" onClick={()=>handleShowModal("miniatura")}>La miniatura</li>
                <li data-id="benavides" onClick={()=>handleShowModal("benavides")}>Benavides</li>
                <li data-id="klyns" onClick={()=>handleShowModal("klyns")}>Klyns</li>
                <li data-id="ahorro" onClick={()=>handleShowModal("ahorro")}>Farmacias del Ahorro</li>
                <li data-id="santacruz" onClick={()=>handleShowModal("cruz")}>Santa Cruz</li>
                <li data-id="zapotlan" onClick={()=>handleShowModal("capotlan")}>Zapotlan</li>
                <li data-id="yza" onClick={()=>handleShowModal("yza")}>YZA</li>
                <li data-id="roma" onClick={()=>handleShowModal("roma")}>Roma</li>
                <li data-id="bazar" onClick={()=>handleShowModal("bazar")}>Bazar</li>
                <li data-id="farmacentro" onClick={()=>handleShowModal("farmacentro")}>Farmacentro</li>
                <li data-id="gym" onClick={()=>handleShowModal("gym")}>GYM</li>
                <li data-id="soriana" onClick={()=>handleShowModal("soriana")}>Soriana</li>
                <li data-id="superfarmacia" onClick={()=>handleShowModal("guadalajara")}>Farmacias Guadalajara</li>
                <li data-id="azucar" onClick={()=>handleShowModal("azucar")}>Clínicas del Azúcar</li>
            </ul>

            <div style={{maxWidth: '250px', textAlign: 'center', fontSize: '8px', lineHeight: '1'}}>
                <img src={getImg(`saxenda-50-pharma.png`)} alt="saxenda" style={{maxWidth: '250px'}}
                className="d-none d-md-block"/>
                <p className="d-none d-md-block">Precios, descripciones y detalles de los productos se encuentran
                sujetos a cambio y sin previo
                aviso.</p>
                <p className="d-none d-md-block">Banner Ilustrativo. Solo de referencia y con ajustes mensuales de
                acuerdo a la promoción vigente.
                </p>
            </div>

            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                {multiModal.sfe && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`logoSFE.png`)} alt="" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">CDMX</p>
                                <a className="text-purple text-decoration-none" href="tel:+525553368660">55 5336 8660</a>
                                <br/><br/>
                                <p className="text-center mb-0">Del interior</p>
                                <a className="text-purple text-decoration-none" href="tel:8005070770">800 507 0770</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                                <br/>
                                <a className="text-purple text-decoration-none" href="http://www.sfe.com.mx" target="_blank" rel="noopener noreferrer">www.sfe.com.mx</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.deuten && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`deuten.png`)} alt="deuten" className="logo-pharma w-100" />
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">CDMX</p>
                                <a className="text-purple text-decoration-none" href="tel:+525556113154">(55) 5611-3154</a>
                                <br/><br/>
                                <p className="text-center mb-0">Del interior</p>
                                <a className="text-purple text-decoration-none" href="tel:8006969352">800 6969 352</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                                <br/>
                                <a className="text-purple text-decoration-none" href="http://www.med-deuten.com/" target="_blank" rel="noopener noreferrer">www.med-deuten.com</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.signufarma && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`signufarma2.png`)} alt="signufarma2" className="logo-pharma w-100" />
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+525552766400">(55) 5276-6400</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                                <br/>
                                <a className="text-purple text-decoration-none" href="https://farmaciasignufarma.com/" target="_blank" rel="noopener noreferrer">farmaciasignufarma.com</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.drogasenseres && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`drogas-enseres.jpg`)} alt="enseres" className="logo-pharma w-100" />
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+528183708008">(81) 8370-8008</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                                <br/>
                                <a className="text-purple text-decoration-none" href="http://www.drogasyenseres.com/" target="_blank" rel="noopener noreferrer">www.drogasyenseres.com</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.cmm && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`medicina-metabolica.jpg`)} alt="metabolica" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+525518210733">55-1821-0733</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                                <br/>
                                <a className="text-purple text-decoration-none" href="http://www.medicinametabolica.com/" target="_blank" rel="noopener noreferrer">www.medicinametabolica.com</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.sp && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`sanpablo.png`)} alt="sanpablo" className="logo-pharma w-100" />
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+528000726722">800-0726-722</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                                <br/>
                                <a className="text-purple text-decoration-none" href="https://www.farmaciasanpablo.com.mx/" target="_blank" rel="noopener noreferrer">www.farmaciasanpablo.com.mx</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.especializadas && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`fesa.png`)} alt="fesa" className="logo-pharma w-100" />
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+525555883372">(55) 5588-3372</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                                <br/>
                                <a className="text-purple text-decoration-none" href="http://www.farmaciasespecializadas.com/" target="_blank" rel="noopener noreferrer">www.farmaciasespecializadas.com</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.plenia && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`plenia.jpeg`)} alt="plenia" className="logo-pharma w-100" />
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+525511055220">(55) 1105-5220</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.farmavalue && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`farmavalue.webp`)} alt="farmavalue" className="logo-pharma w-100" />
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+529999262275">999 926 2275</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                                <br/>
                                <a className="text-purple text-decoration-none" href="http://www.farmavalue.biz/mexico/" target="_blank" rel="noopener noreferrer">www.farmavalue.biz</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.union && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`union.png`)} alt="" className="logo-pharma w-100" />
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+528000186466">800-0186-466</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                                <br/>
                                <a className="text-purple text-decoration-none" href="http://www.farmaciasunion.com/" target="_blank" rel="noopener noreferrer">www.farmaciasunion.com</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.sfa && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`francisco-asis.png`)} alt="francisco-asis" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+525557989054">(55) 5798-9054</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                                <br/>
                                <a className="text-purple text-decoration-none" href="www.fsanfrancisco.com.mx" target="_blank" rel="noopener noreferrer">www.fsanfrancisco.com.mx</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.farmatodo && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`farmatodo.png`)} alt="farmatodo" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+525557989054">(55) 5798-9054</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                                <br/>
                                <a className="text-purple text-decoration-none" href="http://www.farmatodo.com.mx/" target="_blank" rel="noopener noreferrer">www.farmatodo.com.mx</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.farmalisto && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`farmalisto.png`)} alt="farmalisto" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+525567321100">(55) 6732-1100</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                                <br/>
                                <a className="text-purple text-decoration-none" href="http://www.farmalisto.com.mx/" target="_blank" rel="noopener noreferrer">www.farmalisto.com.mx</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.heb && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`heb.png`)} alt="heb" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+528112775320">81-1277-5320</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                                <br/>
                                <a className="text-purple text-decoration-none" href="http://www.heb.com.mx/farmacia" target="_blank" rel="noopener noreferrer">www.heb.com.mx</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.farmapronto && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`farmapronto.png`)} alt="farmapronto" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+525558443319">(55) 5844-3319</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                                <br/>
                                <a className="text-purple text-decoration-none" href="http://www.grupofarmapronto.com/" target="_blank" rel="noopener noreferrer">www.grupofarmapronto.com</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.zamora && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`zamora.webp`)} alt="zamora" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+523516906500">351-690-6500</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                                <br/>
                                <a className="text-purple text-decoration-none" href="http://www.farmaciazamora.com.mx/" target="_blank" rel="noopener noreferrer">www.farmaciazamora.com.mx</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.miniatura && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`miniatura-click.png`)} alt="miniatura" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+526188250210">618-825-0210</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                                <br/>
                                <a className="text-purple text-decoration-none" href="http://www.farmacialaminiatura.com/" target="_blank" rel="noopener noreferrer">www.farmacialaminiatura.com</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.benavides && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`benavides.png`)} alt="benavides" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+528181260000">81-8126-0000</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                                <br/>
                                <a className="text-purple text-decoration-none" href="http://www.benavides.com.mx/" target="_blank" rel="noopener noreferrer">www.benavides.com.mx</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.klyns && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`klyns.png`)} alt="klyns" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+528712291111">(871) 229-11-11</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p>
                                <br/>
                                <a className="text-purple text-decoration-none" href="http://www.klyns.mx/" target="_blank" rel="noopener noreferrer">www.klyns.mx</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.ahorro && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`farmacias-ahorro.png`)} alt="farmacias-ahorro" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+528007112222">(800) 711-2222</a>
                                <br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p><br/>
                                <a className="text-purple text-decoration-none" href="http://www.fahorro.com/" target="_blank" rel="noopener noreferrer">www.fahorro.com</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.cruz && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`santa-cruz.png`)} alt="santa-cruz" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+524433147001">443-314-7001</a><br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p><br/>
                                <a className="text-purple text-decoration-none" href="http://www.fsantacruz.com.mx/" target="_blank" rel="noopener noreferrer">www.fsantacruz.com.mx</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.capotlan && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`zapotlan.png`)} alt="zapotlan" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+524433147001">443-314-7001</a><br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p><br/>
                                <a className="text-purple text-decoration-none" href="http://www.sfzapotlan.com.mx/" target="_blank" rel="noopener noreferrer">www.sfzapotlan.com.mx</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.yza && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`yza.svg`)} alt="yza" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+52479151 4369">479-151-4369</a><br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p><br/>
                                <a className="text-purple text-decoration-none" href="https://www.yza.mx/" target="_blank" rel="noopener noreferrer">www.yza.mx</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.roma && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`roma.png`)} alt="roma" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+52479151 4369">479-151-4369</a><br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p><br/>
                                <a className="text-purple text-decoration-none" href="https://farmaciasroma.com/es_mx/" target="_blank" rel="noopener noreferrer">www.farmaciasroma.com</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.bazar && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`bazar.jpg`)} alt="bazar" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+529999208045">999-920-8045</a><br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p><br/>
                                <a className="text-purple text-decoration-none" href="http://www.farmaciasbazar.com/" target="_blank" rel="noopener noreferrer">www.farmaciasbazar.com</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.farmacentro && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`farmacentro.png`)} alt="farmacentro" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+525557989054">55-5798-9054</a><br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p><br/>
                                <a className="text-purple text-decoration-none" href="http://www.ffarmacentro.com.mx/" target="_blank" rel="noopener noreferrer">www.ffarmacentro.com.mx</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.gym && (
                    <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <img src={getImg(`gym.png`)} alt="gym" className="logo-pharma w-100"/>
                        </div>
                        <div className="col-12 col-md-6 text-center text-purple box-description">
                            <p className="text-center mb-0">Teléfono</p>
                            <a className="text-purple text-decoration-none" href="tel:+524525191463">452-519-1463</a><br/><br/>
                            <p className="text-center mb-0">Lunes a viernes</p>
                            <p className="text-center mb-0">9 a 19 hrs.</p><br/>
                            <a className="text-purple text-decoration-none" href="http://www.farmaciasgym.com.mx/" target="_blank" rel="noopener noreferrer">www.farmaciasgym.com.mx</a>
                        </div>
                    </div>
                    </div>
                )}
                {multiModal.soriana && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`soriana.png`)} alt="soriana" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+525550628019">(55) 5062-8019</a><br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p><br/>
                                <a className="text-purple text-decoration-none" href="http://www.soriana.com/farmacia/medicamentos/" target="_blank" rel="noopener noreferrer">www.soriana.com</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.guadalajara && (
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <img src={getImg(`super-farmacia.png`)} alt="super-farmacia" className="logo-pharma w-100"/>
                            </div>
                            <div className="col-12 col-md-6 text-center text-purple box-description">
                                <p className="text-center mb-0">Teléfono</p>
                                <a className="text-purple text-decoration-none" href="tel:+528332762242">(83) 3276-2242</a><br/><br/>
                                <p className="text-center mb-0">Lunes a viernes</p>
                                <p className="text-center mb-0">9 a 19 hrs.</p><br/>
                                <a className="text-purple text-decoration-none" href="https://www.farmaciasguadalajara.com/ProductDisplay?urlRequestType=Base&amp;productId=3074457345616697740&amp;catalogId=10052&amp;categoryId=&amp;errorViewName=ProductDisplayErrorView&amp;urlLangId=-24&amp;langId=-24&amp;top_category=&amp;parent_category_rn=&amp;storeId=10151" target="_blank" rel="noopener noreferrer">www.farmaciasguadalajara.com</a>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.azucar && (
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-6">
                                <img src={getImg(`azucar.png`)} alt="azucar" class="logo-pharma w-100"/>
                            </div>
                            <div class="col-12 col-md-6 text-center text-purple box-description">
                                <p class="text-center mb-0">Teléfono</p>
                                <a class="text-purple text-decoration-none" href="tel:+528123145000">81-2314-5000</a><br/><br/>
                                <p class="text-center mb-0">Lunes a viernes</p>
                                <p class="text-center mb-0">9 a 19 hrs.</p><br/>
                                <a class="text-purple text-decoration-none" href="http://www.clinicasdelazucar.com/" target="_blank" rel="noopener noreferrer">www.clinicasdelazucar.com</a>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    )
}
