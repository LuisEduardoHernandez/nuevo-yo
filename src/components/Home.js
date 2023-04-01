import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { getImg } from '../helpers/getImg'
import { Modal } from './UI/Modal'
import { FormRegister } from './sections/FormRegister'
import { API } from '../helpers/getAPI'
import useModal from '../hooks/useModal'

export const Home = () => {

    const history = useHistory();

    const [isOpenModal, openModal, closeModal] = useModal(true);
    const [cookies, setCookies] = useState(true);
    const [choose, setChoose] = useState(false);
    const [registerP, setRegisterP] = useState(false);
    const [outURL, setOutURL] = useState(false);
    const [URL, setURL] = useState("");
    const [responsabilityM, setResponsabilityM] = useState(false);
    const [background, setBackground] = useState("");
    const [showSection, setShowSection] = useState({whatIs: true});
    const [showList, setShowList] = useState({
        education: false,
        pacient: false,
        discuounts: false
    });
    const [showForm, setShowForm] = useState({
        registerPacient: false,
        diagnosticMedic: false
    });
    const [showUserIO, setShowUserIO] = useState({
        pacient: false,
        medic: false
    });

    let selector = {
        whatIs: false,
        benefits: false,
        function: false,
        pharmacy: false,
        discounts: false
    }

    const handleShowSection = (section) => {
        selector[section] = true
        setShowSection(selector)
        setBackground(section)
    }

    const handleShowBenefits = (section) => {
        setShowList(({
            ...showList,
            [section]: !showList[section]
        }))
    }
    const handleShowForm = (section) => {
        setShowForm(({
            ...showForm,
            [section]: !showForm[section]
        }))
    }

    const closeCookies = () => {
        setCookies(false)
        setChoose(true)
    }

    const handleUserIO = (section) => {
        setChoose(false)
        if (section === "medic") {
            closeModal()
        }
        setShowUserIO(({
            ...showUserIO,
            [section]: true
        }))
    }

    const ShowUserIORegister = () => {
        if (showUserIO.pacient) {
            history.replace('/register');
        } else {
            setShowUserIO({
                pacient: false,
                medic: true
            })
            handleShowSection("whatIs")
            handleShowForm("diagnosticMedic")
        }
    }

    const handleOutURL = (url) => {
        setShowUserIO({
            pacient: false,
            medic: false
        })
        setCookies(false)
        setResponsabilityM(false)
        setRegisterP(false)
        setOutURL(true)
        setURL(url)
        openModal()
    }

    const handleShowRegisterP = () => {
        openModal()
        setOutURL(false)
        setResponsabilityM(false)
        setRegisterP(true)
    }
    const handleShowResponsabilityM = () => {
        openModal()
        setRegisterP(false)
        setOutURL(false)
        setResponsabilityM(true)
    }

    //API

    return (
        <div className={`bg-home ${background}`}>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent pb-0">
                    <div className="container-fluid px-2 px-md-5">
                        <Link className="navbar-brand" to="/">
                            <img src={getImg(`logo-nuevoyo.png`)} className="logo-nuevoyo" alt="Logo Nuevo Yo" />
                        </Link>
                        <button
                            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mb-3 mb-md-auto" id="navbarNavDropdown">
                        <ul className="navbar-nav menu-home ms-auto pt-3">
                            <li className="nav-item" onClick={() => handleShowSection("whatIs")}>
                                <p className={`nav-link fw-bold step--1 ${showSection.whatIs && "active quees"}`} data-id="quees">
                                    ¿Que es?
                                </p>
                            </li>
                            <li className="nav-item" onClick={() => handleShowSection("benefits")}>
                                <p className={`nav-link fw-bold step--1 ${showSection.benefits && "active"}`} data-id="beneficios">
                                    Beneficios
                                </p>
                            </li>
                            <li className="nav-item" onClick={() => handleShowSection("function")}>
                                <p className={`nav-link fw-bold step--1 ${showSection.function && "active"}`} data-id="funciona">
                                    ¿Cómo funciona?
                                </p>
                            </li>
                            <li className="nav-item" onClick={() => handleShowSection("pharmacy")}>
                                <p className={`nav-link fw-bold step--1 ${showSection.pharmacy && "active"}`} data-id="farmacias">
                                    Farmacias participantes
                                </p>
                            </li>
                            <li className="nav-item" onClick={() => handleShowSection("discounts")}>
                                <p className={`nav-link fw-bold step--1 ${showSection.discounts && "active discount"}`} data-id="descuentos">
                                    Descuentos
                                </p>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container-fluid bg-main" id="bgMain">

                {
                    showSection.whatIs && (
                        <section className="row align-content-center" id="rowQueEs">
                            <div className="col-11 col-md-6 ms-md-auto text-center pe-sm-5">
                                <h2 className="welcome-text fw-black text-purple">Bienvenido a</h2>
                                <img src={getImg(`logo-nuevoyo.png`)} alt="Logo Nuevo yo" className="logo-nuevoyo-home" />
                                    {showUserIO.pacient ? (
                                        <p className="step-1">
                                            Programa de soporte al paciente
                                            <br/>
                                            enfocado en el autocuidado,
                                            <br/>
                                            educación y adherencia al tratamiento
                                        </p>
                                    ) : (
                                        <p class="step-1 paragraph-text">
                                            Informar, educar, sensibilizar al paciente del padecimiento
                                            <br/>
                                            Cobertura y Beneficios al paciente
                                            <br/>
                                            Atención al paciente por Profesional de la Salud
                                        </p>
                                    )}
                                <img src={getImg(`arrow-right.png`)} alt="icon arrow" className="btn-siguiente d-md-block"
                                    onClick={() => handleShowSection("benefits")}
                                />
                            </div>
                        </section>
                    )
                }

                {
                    showSection.benefits && (
                        <section className="beneficios bg-blue-gradient p-5 mx-5" id="rowMenu">
                            <article className="row justify-content-around " id="beneficios">
                                <div className="col-8 mx-auto text-center">
                                <h2 className="step-3 text-white fw-bold">Conozca los múltiples beneficios que Nuevo Yo® ofrece para usted:</h2>
                                </div>
                                <div className="col-12"></div>
                                <div className="col-12 col-md-3">
                                    <h3 className="d-flex text-white fw-bold step-1">
                                        <img style={{maxWidth: '100px', height: '100px'}} src={getImg(`program.png`)} alt="Program icon" className="me-3" />
                                        Programa de
                                        educación
                                    </h3>
                                    <div className="options">
                                        <button
                                            onClick={() => handleShowBenefits("education")}
                                            type="button" id="education"
                                            className="mx-auto bg-transparent border-0 d-block step-0 text-white">
                                            Ver más
                                            <img src={getImg(`arrowDown.png`)} alt="Arrow down icon" className="d-block mx-auto" />
                                        </button>
                                        {
                                            showList.education && (
                                                <ul className=" text-white" data-id="education">
                                                    <li>Capacitación en el uso de la pluma</li>
                                                    <li>Orientación nutricional</li>
                                                    <li>Educación para la salud</li>
                                                </ul>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="col-12 col-md-3">
                                    <h3 className="d-flex text-white fw-bold step-1">
                                    <img style={{maxWidth: '100px', height: '100px'}} src={getImg(`benefic.png`)} alt="Beneficios icon" className="me-3" />
                                        Beneficios para el paciente</h3>
                                    <div className="options">
                                        <button
                                            onClick={() => handleShowBenefits("discuounts")}
                                            type="button"
                                            id="beneficiosPaciente"
                                            className="mx-auto bg-transparent border-0 d-block step-0 text-white">
                                            Ver más
                                            <img src={getImg(`arrowDown.png`)} alt="Arrow down icon" className="d-block mx-auto" />
                                        </button>
                                        {
                                            showList.discuounts && (
                                                <ul className=" text-white" data-id="beneficiosPaciente">
                                                    <li>Glucómetro para pacientes que viven con diabetes</li>
                                                    <li>Guía de orientación nutricional</li>
                                                    <li>Soporte psicológico para pacientes que viven con obesidad</li>
                                                    <li>Guía de lectura de etiquetas</li>
                                                    <li>Muestra de crema</li>
                                                </ul>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="col-12 col-md-3">
                                    <h3 className="d-flex text-white fw-bold step-1">
                                        <img style={{maxWidth: '100px', height: '100px'}} src={getImg(`promo.png`)} alt="Promociones icon" className="me-3" />
                                            Descuentos y promociones
                                    </h3>
                                    <div className="options">
                                        <button
                                            onClick={() => handleShowBenefits("pacient")}
                                            type="button"
                                            id="DescountPromo"
                                            className="mx-auto bg-transparent border-0 d-block step-0 text-white">
                                            Ver más
                                            <img src={getImg(`arrowDown.png`)} alt="Arrow down icon" className="d-block mx-auto" />
                                        </button>
                                        {
                                            showList.pacient && (
                                                <ul className=" text-white" data-id="DescountPromo">
                                                    <li>Oftalmología</li>
                                                    <li>Análisis clínicos</li>
                                                    <li>Educación para la salud</li>
                                                </ul>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="col-12 text-center mt-3">
                                    <button
                                        className="btn btn-rosa"
                                        onClick={() => ShowUserIORegister()}
                                    >Registrarme, soy {showUserIO.pacient ? `paciente` : `profesional de la salud`}
                                    </button>
                                </div>
                                <img src={getImg(`arrow-left.png`)}  alt="icon arrow" className="btn-anterior d-md-block" data-id="quees"
                                    onClick={() => handleShowSection("whatIs")}
                                />
                                <img src={getImg(`arrow-right.png`)} alt="icon arrow" className="btn-siguiente d-md-block"
                                    onClick={() => handleShowSection("function")} data-id="funciona"
                                />
                            </article>
                        </section>
                    )
                }

                {
                    showSection.function && (
                        <section className="beneficios bg-blue-gradient p-5 mx-5" id="rowMenu">
                            <article className="row " id="funciona">
                                <div className="col-10 mx-auto text-center">
                                    <h2 className="step-3 text-white fw-bold">¿Cómo funciona?</h2>
                                </div>
                                <div className="col-12 col-md-6">
                                    <h2 className="step-3 text-white fw-bold">Pasos a seguir</h2>
                                    <ol>
                                        <li>Diagnóstico del profesional de<br/> la salud</li>
                                        <li>Registro</li>
                                        <li>Apoyo con terápia para mantenerse<br/> adherido</li>
                                        <li>Mejora de salud y<br/> calidad de vida</li>
                                    </ol>
                                </div>
                                <div className="col-12 text-center">
                                    <button
                                        className="btn btn-rosa"
                                        onClick={() => ShowUserIORegister()}
                                    >Registrarme, soy {showUserIO.pacient ? `paciente` : `profesional de la salud`}
                                    </button>
                                </div>
                                <img src={getImg(`arrow-left.png`)} alt="icon arrow" className="btn-anterior d-md-block"
                                    onClick={() => handleShowSection("benefits")} data-id="beneficios"
                                />
                                <img src={getImg(`arrow-right.png`)} alt="icon arrow" className="btn-siguiente d-md-block"
                                    onClick={() => handleShowSection("pharmacy")} data-id="farmacias"
                                />
                            </article>
                        </section>
                    )
                }

                {
                    showSection.pharmacy && (
                        <section className="beneficios bg-blue-gradient p-5 mx-5" id="rowMenu">
                            <article className="row " id="farmacias">
                                <div className="col-10 mx-auto text-center">
                                    <h2 className="step-3 text-white fw-bold">Algunas farmacias participantes</h2>
                                </div>
                                <div className="col-12 col-md-4">
                                    <ul className="list-farm">
                                        <li>
                                            <div className="container-i">
                                                <a href="tel:+8181260000">
                                                    <i class="bi bi-telephone-outbound-fill"></i>
                                                </a>
                                                <i class="bi bi-globe2"
                                                    onClick={() => handleOutURL("https://www.benavides.com.mx/")}
                                                ></i>
                                            </div>
                                            <img src={getImg(`benavides.png`)} className="img-fluid img-bg" alt="Logo Benavides"
                                                onClick={() => handleOutURL("https://www.benavides.com.mx/")}
                                            />
                                        </li>
                                        <li>
                                            <div className="container-i">
                                                <a href="tel:+5556113154">
                                                    <i class="bi bi-telephone-outbound-fill"></i>
                                                </a>
                                                <i class="bi bi-globe2"
                                                    onClick={() => handleOutURL("http://www.med-deuten.com/shop?search=saxenda")}
                                                ></i>
                                            </div>
                                            <img src={getImg(`med.png`)} className="img-fluid" alt="Logo Benavides"
                                                onClick={() => handleOutURL("http://www.med-deuten.com/shop?search=saxenda")}
                                            />
                                        </li>
                                        <li>
                                            <div className="container-i">
                                                <a href="tel:+8183708008">
                                                    <i class="bi bi-telephone-outbound-fill"></i>
                                                </a>
                                                <i class="bi bi-globe2"
                                                    onClick={() => handleOutURL("https://www.drogasyenseres.com/")}
                                                ></i>
                                            </div>
                                            <img src={getImg(`enseres.png`)} className="img-fluid" alt="drogasyenseres"
                                                onClick={() => handleOutURL("https://www.drogasyenseres.com")}
                                            />
                                        </li>
                                        <li>
                                            <div className="container-i">
                                                <a href="tel:+8332762242">
                                                    <i class="bi bi-telephone-outbound-fill"></i>
                                                </a>
                                                <i class="bi bi-globe2"
                                                    onClick={() => handleOutURL("https://www.farmaciasguadalajara.com/es/farmaciasguadalajara/saxenda-tm-6mg-ml-sol-c-3-j-plum-1236644")}
                                                ></i>
                                            </div>
                                            <img src={getImg(`superfarm.png`)} className="img-fluid" alt="drogasyenseres"
                                                onClick={() => handleOutURL("https://www.farmaciasguadalajara.com/es/farmaciasguadalajara/saxenda-tm-6mg-ml-sol-c-3-j-plum-1236644")}
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-4">
                                    <ul className="list-farm ms-3">
                                        <li>
                                            <div className="container-i">
                                                <a href="tel:+8000726722">
                                                    <i class="bi bi-telephone-outbound-fill"></i>
                                                </a>
                                                <i class="bi bi-globe2"
                                                    onClick={() => handleOutURL("https://www.farmaciasanpablo.com.mx/search/saxenda")}
                                                ></i>
                                            </div>
                                            <img src={getImg(`sanpablo.png`)} className="img-fluid img-bg" alt="farmaciasanpablo"
                                                onClick={() => handleOutURL("https://www.farmaciasanpablo.com.mx/search/saxenda")}
                                            />
                                        </li>
                                        <li>
                                            <div className="container-i">
                                                <a href="tel:+5553368660">
                                                    <i class="bi bi-telephone-outbound-fill"></i>
                                                </a>
                                                <i class="bi bi-globe2"
                                                    onClick={() => handleOutURL("https://www.sfe.com.mx/productos/")}
                                                ></i>
                                            </div>
                                            <img src={getImg(`sfe.png`)} className="img-fluid" alt="sfe"
                                                onClick={() => handleOutURL("https://www.sfe.com.mx/productos/")}
                                            />
                                        </li>
                                        <li>
                                            <div className="container-i">
                                                <a href="tel:+5552766400">
                                                    <i class="bi bi-telephone-outbound-fill"></i>
                                                </a>
                                                <i class="bi bi-globe2"
                                                    onClick={() => handleOutURL("https://farmaciasignufarma.com")}
                                                ></i>
                                            </div>
                                            <img src={getImg(`signufarma.png`)} className="img-fluid" alt="sfe"
                                                onClick={() => handleOutURL("https://farmaciasignufarma.com")}
                                            />
                                        </li>
                                    </ul>
                                    <p className="fw-bold step-1 text-green">Más de 30 farmacias en todo México</p>
                                </div>
                                <div className="col-12 text-center">
                                    <button
                                        className="btn btn-rosa"
                                        onClick={() => ShowUserIORegister()}
                                    >Registrarme, soy {showUserIO.pacient ? `paciente` : `profesional de la salud`}
                                    </button>
                                </div>
                                <img src={getImg(`arrow-left.png`)} alt="icon arrow" className="btn-anterior d-md-block"
                                    onClick={() => handleShowSection("function")} data-id="beneficios"
                                />
                                <img src={getImg(`arrow-right.png`)} alt="icon arrow" className="btn-siguiente d-md-block"
                                    onClick={() => handleShowSection("discounts")} data-id="farmacias"
                                />
                            </article>
                        </section>
                    )
                }

                {
                    showSection.discounts && (
                        <section className="beneficios bg-blue-gradient p-5 mx-5" id="rowMenu">
                            <article className="row " id="descuentos">
                                <div className="col-12 col-md-6">
                                    <img src={getImg(`saxenda.png`)} className="img-fluid" alt="PS de Saxenda" />
                                </div>
                                <div className="col-12 col-md-6 d-flex align-items-center flex-column justify-content-center receta">
                                    <img src={getImg(`receta.png`)} alt="Lettering" />
                                    <img src={getImg(`handclic.png`)} className="handleclic" alt="Icon hand click" />
                                </div>
                                {/* <div className="col-12 col-md-6 d-flex align-items-center medicamentos">
                                    <section className="row justify-content-center">
                                        <div className="col-4 mb-3"><img src={getImg(`tresiba.png`)} alt="Logo Tresiba" className="img-fluid" /></div>
                                        <div className="col-4 mb-3"><img src={getImg(`ryzodeg.png`)} alt="Logo Ryzodeg" className="img-fluid" /></div>
                                        <div className="col-4 mb-3"><img src={getImg(`xultophy.png`)} alt="Logo Xultophy" className="img-fluid" /></div>
                                        <div className="col-4 mb-3"><img src={getImg(`ozempic.png`)} alt="Logo Ozempic" className="img-fluid" /></div>
                                        <div className="col-4 mb-3"><img src={getImg(`victoza.png`)} alt="Logo Victoza" className="img-fluid" /></div>
                                        <div className="col-4 mb-3"><img src={getImg(`rybelsus.png`)} alt="Logo Victoza" className="img-fluid" /></div>
                                    </section>
                                </div> */}
                                <div className="col-12 text-center">
                                    <button
                                        className="btn btn-rosa"
                                        onClick={() => ShowUserIORegister()}
                                    >Registrarme, soy {showUserIO.pacient ? `paciente` : `profesional de la salud`}
                                    </button>
                                </div>
                                <img src={getImg(`arrow-left.png`)} alt="icon arrow" className="btn-anterior d-md-block"
                                    onClick={() => handleShowSection("pharmacy")} data-id="beneficios"
                                />
                            </article>
                        </section>
                    )
                }
            </main>

            <footer className="home-footer">
                <img src={getImg(`bg-footer.png`)} alt="Pie de página" />
            </footer>

            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                {cookies && (
                    <div id="cookies">
                        <div>
                            <div>
                                <div className="modal-body text-end pt-4 ps-4 fw-light">
                                <p className="text-start mb-0">Utilizamos cookies para mejorar aspectos de la experiencia de usuario, como:</p>
                                <ul className="text-start ps-3">
                                    <li>Ahorro tiempo: Carga rápida del website</li>
                                    <li>Experiencia personalizada: Recordar sin<br/> registro y ofrecer contenido por navegación</li>
                                    <li>Mantener sesión activa</li>
                                </ul>
                                <p className="text-start">Para más información revisa nuestra&nbsp;
                                    <a
                                        href="/"
                                        rel="noopener noreferrer"
                                        className="text-purple text-decoration-none">
                                        Política de Cookies.
                                    </a>
                                </p>
                                <button
                                    type="button"
                                    className="btn btn-purple"
                                    data-bs-dismiss="modal"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalDoc"
                                    onClick={closeCookies}
                                >   Aceptar
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {choose && (
                    <div id="choose">
                        <div>
                            <div>
                                <div className="modal-body text-center">
                                <h2 className="text-white fw-bold pb-3 title-user">Selecciona tipo de usuario:</h2>
                                <div className="container">
                                    <div className="content-switch">
                                        <div className="bg-patient" onClick={()=>handleUserIO("pacient")}>
                                            <p className="step-2 text-green fw-bold lh-sm">PACIENTE CON PRESCRIPCIÓN</p>
                                            <div>
                                                <img src={getImg(`pacienteSelect.png`)} className="paciente" alt="paciente" />
                                            </div>
                                        </div>
                                        <div className="bg-medic" onClick={()=>handleUserIO("medic")}>
                                            <p className="step-2 text-naranja fw-bold lh-sm ff-apis">PROFESIONAL DE LA SALUD</p>
                                            <div>
                                                <img src={getImg(`medicoSelect.png`)} className="medico" alt="medico" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {showUserIO.pacient && (
                    <div id="modal-pacient-home">
                        <div className="modal-body text-center">
                            <h2 className="text-white step-3 pb-3 title-user">
                                Selecciona el medicamento
                                <br/>
                                que tu médico te prescribió:
                            </h2>
                            <div className="container">
                                <div className="row justify-content-between">
                                    <div className="col-6 mx-auto bg-white rounded-3">
                                        <form className="row row-cols-lg-auto g-3 align-items-center position-relative">
                                            <label className="visually-hidden" for="inlineFormInputGroupUsername">Busqueda</label>
                                            <div className="container-search">
                                                <input type="text"
                                                    className="form-control border bg-gray-50 search"
                                                    id="inlineFormInputGroupUsername"
                                                />
                                                <div className="input-group-text bg-transparent border-0">
                                                    <i className="bi bi-search"></i>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-purple" data-bs-dismiss="modal">Aceptar</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {registerP && (
                    <div id="modalRegisterPatient" data-bs-backdrop="static" data-bs-keyboard="false"
                        aria-labelledby="modalRegisterPatientLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header border-0 pt-3 justify-content-center">
                            <h5 className="modal-title text-purple step-2 fw-bold" id="modalRegisterPatientLabel">
                                Registro y generacion de tarjeta para paciente
                            </h5>
                            </div>
                            <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row justify-content-around">
                                    <div className="home-form card-form col-12 col-md-5">
                                        <FormRegister
                                            isMedic={true}
                                            dataTarget={""}
                                        />
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {responsabilityM && (
                    <div id="medicResponseModal" data-bs-backdrop="static" data-bs-keyboard="false"
                    aria-labelledby="medicResponseModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header justify-content-center pt-3 border-0">
                            <h5 className="modal-title step-0 text-purple fw-bold" id="medicResponseModalLabel">Responsabilidad Medica</h5>
                            </div>
                            <div className="modal-body text-center">
                            <p>Como condición expresa del uso de este sitio web debe aceptar lo
                                siguiente: Su uso de este sitio web y cualquier participación de las
                                actividades mencionadas en este sitio web significan su aceptación y
                                sometimiento legal a lo siguiente:</p>
                            <p>• Es un profesional de la salud que cuenta con una certificación emitida
                                por alguna institución de educación superior pública o privada,
                                haciendo referencia a cédula profesional o de especialidad otorgada
                                por la secretaría de Educación Pública la cual le acredita como
                                profesional de la salud capacitado para ejercer su profesión.</p>
                            <div className="form-check mt-4">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label text-purple fw-bold" for="flexCheckDefault">
                                Sí Acepto. Soy un profesional de la salud
                                </label>
                            </div>
                            <button href="dashboard-medical.html" className="btn btn-lg btn-purple fw-bold my-4">Aceptar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {outURL && (
                    <div id="outUrl">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">
                                <div className="modal-body text-end pt-4 ps-4" id="bodyVenta">
                                    <p className="text-start fw-bold step--1">
                                        Usted está saliendo del sitio web https://nuevoyo.com/ .
                                        Este enlace le llevará a un sitio web en el que
                                        no se aplica nuestra Política de Privacidad
                                    </p>
                                    <a className="btn bg-purple"
                                        href={URL} rel="noreferrer"
                                        target="_blank"
                                    >Aceptar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
            {
                showUserIO.medic && (
                    <div id="choose-medic-container">
                        <div className="col-12 col-md-3">
                            <div className="accordion" id="accordionRegister">
                            <div className="accordion-item">
                                <h2
                                    className="accordion-header" id="headingOne"
                                    onClick={()=>handleShowForm("registerPacient")}
                                >
                                <button
                                    className="accordion-button medic-accodion fw-bold text-center" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    Necesito registrar a mi paciente
                                </button>
                                </h2>
                                {showForm.registerPacient && (
                                <div id="collapseOne" className="accordion-collapse bg-white" aria-labelledby="headingOne"
                                data-bs-parent="#accordionRegister">
                                <div className="accordion-body">
                                    <p className="text-center step-0">Registrar y proporcionar tarjeta a mi paciente</p>
                                    <button data-bs-toggle="modal"
                                        className="btn d-block btn-success"
                                        onClick={handleShowRegisterP}
                                        style={{width: '100%'}}
                                    >Registrar paciente</button>
                                </div>
                                </div>
                                )}
                            </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="accordion" id="accordionHelper">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo"
                                    onClick={()=>handleShowForm("diagnosticMedic")}
                                >
                                <button className="accordion-button medic-accodion fw-bold text-center" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true"
                                    aria-controls="collapseTwo">
                                    Necesito apoyo con mi diagnóstico como Profesional de la Salud
                                </button>
                                </h2>
                                {showForm.diagnosticMedic && (
                                    <div id="collapseTwo" className="accordion-collapse bg-white" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionHelper">
                                    <div className="accordion-body">
                                        <p className="text-center fw-bold step-0">Contenido visible solo para médicos suscriptores</p>
                                        <p className="text-center mb-0">Registrese para poder acceder al contenido.</p>
                                        <p className="text-center">Todas las casillas son requeridas</p>
                                        <p className="text-center">¿Ya tienes una cuenta? Ingresa <a href="/register">aqui</a></p>

                                        <form className="row g-3">
                                        <div className="col-12">
                                            <input type="text" className="form-control bg-gray-50" id="nameMedic" placeholder="Nombre" />
                                        </div>
                                        <div className="col-12">
                                            <input type="email" className="form-control bg-gray-50" id="emailMedic" placeholder="Email" />
                                        </div>
                                        <div className="col-12">
                                            <input type="tel" className="form-control bg-gray-50" id="telMedic" placeholder="Teléfono" />
                                        </div>
                                        <div className="col-12">
                                            <input type="number" className="form-control bg-gray-50" id="cedulaMedic"
                                            placeholder="Cédula profesional" />
                                        </div>
                                        <div className="col-12">
                                            <input type="email" className="form-control bg-gray-50" id="emailDosMedic" placeholder="Email" />
                                        </div>
                                        <div className="col-12">
                                            <select id="specialMedic" className="form-select bg-gray-50" defaultValue={'DEFAULT'}>
                                            <option selected value="DEFAULT">Especialidad</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <select id="countryMedic" className="form-select bg-gray-50" defaultValue={'DEFAULT'}>
                                            <option selected value="DEFAULT">Pais</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <select id="cityMedic" className="form-select bg-gray-50" defaultValue={'DEFAULT'}>
                                            <option selected value="DEFAULT">Ciudad (solo si reside en México)</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <select id="practicMedic" className="form-select bg-gray-50" defaultValue={'DEFAULT'}>
                                            <option selected value="DEFAULT">Tipo de práctica</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <p
                                                className="btn w-100 btn-success"
                                                onClick={handleShowResponsabilityM}
                                            >Registrarme</p>
                                        </div>
                                        </form>
                                    </div>
                                    </div>
                                )}
                            </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}