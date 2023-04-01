import React, { useState } from 'react'
import { getImg } from '../helpers/getImg'
// Componentes
import { InfoModal } from './sections/InfoModal';
import { Menu } from './sections/Menu';

export const DashboardMedical = () => {

    const [navMedical, setNavMedical] = useState({patients: true});
    const [age, setAge] = useState({a20: true});
    const [male, setMale] = useState({man: true});

    const handleShowNav = (section) => {
        setNavMedical({[section]: true})
    }

    const handleSetAge = (section) => {
        setAge({[section]: true})
    }

    const handleSetMale = (section) => {
        setMale({[section]: true})
    }


    return (
        <body className="bg-dash-med">
            <nav id="dashboard-medical" className="navbar navbar-expand-lg navbar-light dashboard-brand">
                <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={getImg(`logo-nuevoyo.png`)} width="150" className="bg-white p-2 mb-0" alt="saxenda"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav nav-pills ms-auto" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation"
                        onClick={()=>handleShowNav("patients")}
                    >
                        <button className={`nav-link ${navMedical.patients && "active"}`} id="pills-patient-tab" data-bs-toggle="pill" data-bs-target="#pills-patient"
                        type="button" role="tab" aria-controls="pills-patient" aria-selected="true">Mis pacientes</button>
                    </li>
                    <li className="nav-item" role="presentation"
                        onClick={()=>handleShowNav("info")}
                    >
                        <button className={`nav-link ${navMedical.info && "active"}`} id="pills-information-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-information" type="button" role="tab" aria-controls="pills-information"
                        aria-selected="false">Información a paciente</button>
                    </li>
                    <li className="nav-item" role="presentation"
                        onClick={()=>handleShowNav("education")}
                    >
                        <button className={`nav-link ${navMedical.education && "active"}`} id="pills-education-tab" data-bs-toggle="pill" data-bs-target="#pills-education"
                        type="button" role="tab" aria-controls="pills-education" aria-selected="false">Educación médica</button>
                    </li>
                    <li className="nav-item" role="presentation"
                        onClick={()=>handleShowNav("support")}
                    >
                        <button className={`nav-link ${navMedical.support && "active"}`} id="pills-diagnostic-tab" data-bs-toggle="pill" data-bs-target="#pills-diagnostic"
                        type="button" role="tab" aria-controls="pills-diagnostic" aria-selected="false">Apoyo en
                        diagnóstico</button>
                    </li>
                    <li className="nav-item">
                        <Menu />
                    </li>
                    </ul>
                </div>
                </div>
            </nav>

            <main className="tab-content" id="pills-tabContent">
                {navMedical.patients && (
                    <section className="container-fluid" id="pills-patient" role="tabpanel"
                    aria-labelledby="pills-patient-tab">
                    <div className="row" style={{justifyContent: 'center'}}>
                        {/* <aside className="col-12 col-md-3 chart-aside">
                        <div className="accordion" id="accordionMedicine">
                            <div className="accordion-item">
                                <details>
                                    <summary>
                                    <p className="border-0 fw-bold bg-transparent text-dark">
                                        Selecciona el medicamento
                                    </p>
                                    </summary>
                                    <div id="collapseOne" className="accordion-collapse border-0 collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionMedicine">
                                        <div className="accordion-body">
                                        <div className="d-flex flex-column">
                                            <label>
                                            <input type="checkbox" id="" value="norditropin"/> Norditropin®
                                            </label>
                                            <label>
                                            <input type="checkbox" id="" value="ozempic"/> Ozempic®
                                            </label>
                                            <label>
                                            <input type="checkbox" id="" value="ryzodeg"/> Ryzodeg®
                                            </label>
                                            <label>
                                            <input type="checkbox" id="" value="saxenda"/> Saxenda®
                                            </label>
                                            <label>
                                            <input type="checkbox" id="" value="tresiba"/> Tresiba®
                                            </label>
                                            <label>
                                            <input type="checkbox" id="" value="victoza"/> Victoza®
                                            </label>
                                            <label>
                                            <input type="checkbox" id="" value="xultophy"/> Xultophy®
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                </details>
                            </div>
                        </div>
                        </aside> */}

                        <div className="col-12 col-md-9">
                        <div className="container p-3">
                            <p className="metric-patient">Pacientes inscritos: 970</p>
                            <p className="metric-patient mb-4">Pacientes activos: 750</p>
                            <p className="reference-patient">Activos* Actividad transaccional de 30 días en función de la adherencia del
                            paciente</p>

                            <div className="row justify-content-between">
                            <div className="col-10 col-md-5 mx-auto order-md-2">
                                <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                                    <p className="patient-name" style={{marginBottom: '0'}}>PACIENTE:</p>
                                    &nbsp;
                                    <select name="patient" id="patient">
                                        <option selected="selected" value="selected">Seleccione un paciente</option>
                                        <option value="">DAVID CRUZ</option>
                                    </select>
                                </div>

                                <div className="d-flex pb-3">
                                    <p className="text-purple fw-bold me-2">GÉNERO: </p>
                                    <div className="d-flex select-box select-gender">
                                        <button className={male.man ? "button-age active" : "button-age"}
                                            onClick={()=>handleSetMale("man")}
                                        >H</button>
                                        <button className={male.woman ? "button-age active" : "button-age"}
                                            onClick={()=>handleSetMale("woman")}
                                        >M</button>
                                    </div>
                                </div>

                                <div className="d-flex pb-3">
                                <p className="text-purple fw-bold me-2">EDAD:</p>
                                <div className="d-flex select-box select-age">
                                    <button className={age.a20 ? "button-age active" : "button-age"}
                                        onClick={()=>handleSetAge("a20")}
                                    >≤ 20</button>
                                    <button className={age.a21 ? "button-age active" : "button-age"}
                                        onClick={()=>handleSetAge("a21")}
                                    >21-30</button>
                                    <button className={age.a31 ? "button-age active" : "button-age"}
                                        onClick={()=>handleSetAge("a31")}
                                    >31-40</button>
                                    <button className={age.a41 ? "button-age active" : "button-age"}
                                        onClick={()=>handleSetAge("a41")}
                                    >41-50</button>
                                    <button className={age.a51 ? "button-age active" : "button-age"}
                                        onClick={()=>handleSetAge("a51")}
                                    >51-60</button>
                                    <button className={age.a61 ? "button-age active" : "button-age"}
                                        onClick={()=>handleSetAge("a61")}
                                    >61-70</button>
                                    <button className={age.a71 ? "button-age active" : "button-age"}
                                        onClick={()=>handleSetAge("a71")}
                                    >≥ 71</button>
                                </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <p className="text-purple mb-0 fw-bold step-1">Peso Pacientes Activos</p>
                                <img src={getImg(`chart.png`)} alt="Chart" className="img-fluid" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                )}
                {navMedical.info && (
                    <section className="container" id="pills-education" role="tabpanel" aria-labelledby="pills-education-tab">
                        <InfoModal />
                    </section>
                )}
                {navMedical.education && (
                    <section className="container" id="pills-education" role="tabpanel" aria-labelledby="pills-education-tab">
                    <h1 className="text-purple fw-bold py-4">Educación médica</h1>

                    <div className="row">
                        <div className="col-12 col-md-6">
                        <img src={getImg(`rethink-obesity.png`)} alt="" className="img-fluid"/>
                        <ol className="fw-normal step-0">
                            <li>Weight & Health</li>
                            <li>A chronic disease : The health impacts of Obesity</li>
                            <li>Obesity related implications</li>
                            <li>Benefits of 10 15% wieght los on health</li>
                            <li>Obesity & Covid</li>
                            <li>Treat</li>
                            <li>Initiate : Ask Permision</li>
                            <li>Diagnose : BMI and waist circumferences</li>
                            <li>Discuss : Weight story & goals</li>
                            <li>Why don ́ t diets work</li>
                            <li>Resources for you</li>
                        </ol>
                        </div>
                        <div className="col-12 col-md-6">
                        <img src={getImg(`estamos-conectados.png`)} alt="" className="img-fluid"/>
                        <ol className="fw-normal step-0">
                            <li>Educación Médica Digital para médicos Generales</li>
                            <li>Webinars de Actualización Médica</li>
                            <li>La obesidad es una enfermedad</li>
                            <li>Perfil del Paciente y necesidades</li>
                            <li>Ciencia detrás de perdida de peso con GLP1</li>
                            <li>Solución Segura y Eficaz</li>
                        </ol>
                        </div>
                    </div>
                    </section>
                )}
                {navMedical.support && (
                    <section className="container" id="pills-diagnostic" role="tabpanel"
                    aria-labelledby="pills-diagnostic-tab">
                    <div className="row">
                        <h2 className="text-purple text-center fw-bold py-4">Apoyo en el diagnóstico</h2>

                        <div className="col-12 col-md-6 mx-auto">
                        <form className="row g-3 justify-content-center">
                            <div className="col-12 col-md-7">
                            <label htmlFor="inputSearch" className="visually-hidden">Paciente</label>
                            <input type="text" className="form-control form-control-lg bg-gray-50" id="inputSearch"
                                placeholder="Introduce nombre o mail de paciente"/>
                            </div>
                            <div className="col-12 col-md-3 text-center">
                            <button type="submit" className="btn btn-success mb-3">Buscar</button>
                            </div>
                        </form>
                        </div>

                        <div className="col-12"></div>

                        <div className="col-12 col-md-4 text-center">
                        <p className="fw-bold step-0"><span className="text-purple">Paciente:</span> DAVID CRUZ</p>
                        </div>
                        <div className="col-12 col-md-4 text-center">
                        <p className="fw-bold step-0"><span className="text-purple"># Nuevo Yo:</span> 123456789</p>
                        </div>
                        <div className="col-12 col-md-4 text-center">
                        <p className="fw-bold step-0"><span className="text-purple">Tratamiento:</span> SAXENDA</p>
                        </div>

                        <div className="col-12 text-center">
                        <p className="text-purple fw-bold step-0">Aprenda como la obesidad incrementa la mortandad</p>
                        </div>

                        <div className="col-12">
                        <iframe src="https://nn-wlp3.datasparx.io/app-sp.html#" frameborder="0" width="100%" height="800" title="frame"></iframe>
                        </div>
                    </div>
                    </section>
                )}
            </main>

            <footer className="footer-register mb-md-4">
                <p className="t-one">Consulta nuestro aviso de privacidad aquí</p>
                <div className="line-contact t-two">
                <img src={getImg(`telephone.png`)} alt="Telephone"/>
                <p className="mb-0">Línea Contacto<br />800 6968696 (Lada sin Costo)</p>
                </div>
                <p className="t-three">No. de Aviso: 213300C2022922<br />Código Interno: MX21PAT00057<br />Consulte a su médico.</p>
            </footer>
        </body>
    )
}
