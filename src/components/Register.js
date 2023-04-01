import React, {useState} from 'react'
import { API, apiKey } from '../helpers/getAPI';
import { getImg } from '../helpers/getImg'
import { FormRegister } from './sections/FormRegister';
import { FormLogin } from './sections/FormLogin';
import { Footer } from './sections/Footer';

// import face from '../styles/facebook.css'

export const Register = () => {

    //Datos Tarjeta
    const [target, setTarget] = useState("");
    const [card, setCard] = useState("123456");

    // UX/UI
    const [showSection, setShowSection] = useState({});
    const [showNav, setShowNav] = useState(true);

    let selector = {
        sinTarjeta: false,
        conTarjeta: false,
        tActivada: false,
    }
    const handleShowSection = (section) => {
        setShowNav(false)
        selector[section] = true
        setShowSection(selector)
    }

    const handleReturn = () => {
        setShowSection({})
        setShowNav(true)
    }

    //API
    const getTarjet = async () => {
        try {
            const response = await fetch(API("getCardNew"), {
                method: "POST",
                body: JSON.stringify({cardnumber: "",key : apiKey})
            });
            if (response.status === 200) {
                const result = await response.json();
                console.log(result);
                setTarget(result.cardnumber)
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Tarjeta
    const listenTarget = (e) => {
        setCard(e.target.value)
    }

    return (
        <>
        <div className="register-container">
            <div className="container">
                <div className="row">
                        {showNav && (
                            <div className="col-12">
                                <h1>Quiero registrarme para recibir apoyo con mi tratamiento</h1>
                                <h2>UNIRSE A NUEVO YO<sub>®</sub></h2>
                                <section>
                                    <div className="card-container">
                                        <div className="card-content" onClick={() => handleShowSection("sinTarjeta")}>
                                            <h3>Registro<br />Sin Tarjeta</h3>
                                            <img src={getImg(`arrowDown.png`)} alt="Arrow down icon" className="d-block mx-auto" />
                                        </div>
                                        <div className="card-content" onClick={() => handleShowSection("conTarjeta")}>
                                            <h3>Registro<br />Con Tarjeta</h3>
                                            <img src={getImg(`arrowDown.png`)} alt="Arrow down icon" className="d-block mx-auto" />
                                        </div>
                                        <div className="card-content" onClick={() => handleShowSection("tActivada")}>
                                            <h3>Tarjeta<br />Activada </h3>
                                            <img src={getImg(`arrowDown.png`)} alt="Arrow down icon" className="d-block mx-auto" />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )}
                </div>
            </div>

            {showSection.sinTarjeta && (
                <>
                    <h1>Quiero registrarme para recibir apoyo con mi tratamiento</h1>
                    <h2>UNIRSE A NUEVO YO<sub>®</sub></h2>
                    <section className="section-form">
                        <div className="container-form">
                            {/* <img src={getImg(`arrow-left.png`)} alt="icon arrow" className="btn-arrow btn-anterior-form"
                                onClick={() => handleShowSection("tActivada")}
                            />
                            <img src={getImg(`arrow-right.png`)} alt="icon arrow" className="btn-arrow btn-siguiente-form"
                                onClick={() => handleShowSection("conTarjeta")}
                            /> */}
                            <div className="card-form">

                                <FormRegister dataTarget={target} isMedic={false} />

                                <div className="or-container">
                                    <div className="line-text"></div>
                                    <p>o</p>
                                    <div className="line-text"></div>
                                </div>

                            
                                {/* <button type="button" className="btn-c btn-fb">Unirme con Facebook</button> */}
                            </div>
                            <div className="container-without-tarjet">
                                <p className="without-tarjet">No tengo tarjeta y<br/>tengo interés en<br/>el apoyo como paciente</p>
                                <img src={getImg(`gen-tarjet-02.jpg`)} alt="tarjet" />
                                <div className="card-body p-1" style={{display: "flex", alignItems: "center"}}>
                                    <div onClick={getTarjet} className="btn btn-success" style={{flex: "0 0 auto"}}>GENERAR TARJETA</div>
                                    <img src={getImg(`novo-nordisk.jpg`)} alt="Logotipo Novo Nordisk" style={{flex: "0 0 auto"}} />
                                </div>
                                <p className="p-required-fields">*Campos obligatorios</p>
                                {
                                    target && (
                                        <p>N° de tarjeta: <span>{target}</span></p>
                                    )
                                }
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <p className="btn btn-purple" onClick={handleReturn}>Regresar al menu</p>
                        </div>
                    </section>
                </>
            )}

            {showSection.conTarjeta && (
                <>
                    <h1>Quiero registrarme para recibir apoyo con mi tratamiento</h1>
                    <h2>UNIRSE A NUEVO YO<sub>®</sub></h2>
                    <section className="section-form">
                        <div className="container-form">
                            {/* <img src={getImg(`arrow-left.png`)} alt="icon arrow" className="btn-arrow btn-anterior-form"
                                onClick={() => handleShowSection("sinTarjeta")}
                            />
                            <img src={getImg(`arrow-right.png`)} alt="icon arrow" className="btn-arrow btn-siguiente-form"
                                onClick={() => handleShowSection("tActivada")}
                            /> */}
                            <div className="card-form">

                                <FormRegister dataTarget={card} isMedic={false} />

                                <div className="or-container">
                                    <div className="line-text"></div>
                                    <p>o</p>
                                    <div className="line-text"></div>
                                </div>

                                <button type="button" className="btn-c btn-fb">Unirme con Facebook</button>
                                {/* <button type="button" className="btn-c btn-google">Unirme con Google</button> */}
                            </div>
                            <div className="container-without-tarjet">
                                <p className="without-tarjet">Registro con<br/>tarjeta</p>

                                <div className="without-tarjet-img">
                                    <img src={getImg(`gen-tarjet-02.jpg`)} alt="Tarjeta" />
                                    <div className="without-tarjet-img-input">
                                        <input
                                            name='card'
                                            type='text'
                                            placeholder='Ingrese número de tarjeta*'
                                            onChange={listenTarget}
                                            value={card}
                                        />
                                        <img src={getImg(`novo-nordisk.jpg`)} alt="Novo Nordisk" />
                                    </div>
                                </div>

                                <button type="button" className="btn-c btn-validate-email">Verificar mi E-mail</button>

                                <p className="p-required-fields">*Campos obligatorios</p>
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <p className="btn btn-purple" onClick={handleReturn}>Regresar al menu</p>
                        </div>
                    </section>
                </>
            )}

            {showSection.tActivada && (
                <>
                    <h1>Ingrese al portal exclusivo para pacientes registrado</h1>
                    <h2>Bienvenido a Nuevo Yo<sub>®</sub></h2>
                    <section className="section-form">
                        <div className="container-form container-form-login">
                            {/* <img src={getImg(`arrow-left.png`)} alt="icon arrow" className="btn-arrow btn-anterior-form btn-arrow-login"
                                onClick={() => handleShowSection("conTarjeta")}
                            /> */}
                            <div className="card-form card-form-login">
                                <p className="title-form-login">INGRESE SUS<br/>DATOS</p>
                                <FormLogin />
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <p className="btn btn-purple" onClick={handleReturn}>Regresar al menu</p>
                        </div>
                    </section>
                </>
            )}
        </div>
        <Footer />
        </>
    )
}
