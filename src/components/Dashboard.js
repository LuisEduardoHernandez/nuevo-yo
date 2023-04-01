import React, {useEffect, useState} from 'react'
import { getImg } from '../helpers/getImg'
import { getPDF } from '../helpers/getPDF';
import useModal from '../hooks/useModal'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';
// Componentes
import { Modal } from './UI/Modal'
import { InfoModal } from './sections/InfoModal'
import { MyShops } from './sections/MyShops'
import { ListPharma } from './sections/ListPharma'
import { Footer } from './sections/Footer'
import { MultiVideo1 } from './sections/MultiVideo1';
import { MultiVideo2 } from './sections/MultiVideo2';
import { GridVideo } from './sections/GridVideo';
import { Meet } from './sections/Meet';
import { Contents } from './sections/Contents';
import { Menu } from './sections/Menu';

SwiperCore.use([Navigation, Pagination]);

export const Dashboard = () => {

    const [isOpenModal, openModal, closeModal] = useModal(false);
    const [multiModal, setMultiModal] = useState({});

    const [showProduct, setShowProduct] = useState({disponibility: true});
    const [showSection, setShowSection] = useState({products: true});
    const [showTreatment, setShowTreatment] = useState({profile: true});
    const [myProfile, setMyProfile] = useState({one: true});

    let selector = {
        disponibility: false,
        store: false,
        cart: false,
    }
    let selectorSection = {
        products: false,
        treatment: false
    }
    let selectorTreatment = {
        profile: false,
        progress: false,
        suffering: false,
        support: false,
        rewards: false
    }

    const handleShowProduct = (section) => {
        setShowProduct(false)
        selector[section] = true
        setShowProduct(selector)
    }
    const handleShowSection = (section) => {
        setShowSection(false)
        selectorSection[section] = true
        setShowSection(selectorSection)
    }
    const handleShowTreatment = (section) => {
        setShowTreatment(false)
        selectorTreatment[section] = true
        setShowTreatment(selectorTreatment)
    }
    const handleShowModal = (section) => {
        openModal()
        setMultiModal({[section]: true})
    }
    const handleProgress = (section) => {
        setMyProfile({[section]: true})
    }
    // Mostrar seccion si viene de login
    useEffect(() => {
        const url = window.location.href
        if (url.includes('origin=login')) {
            handleShowSection("treatment")
            handleShowTreatment("support")
        }
    }, []);

    return (
        <body className="dashboard-container">
            <nav id="dashboard-medical" className="navbar navbar-expand-lg navbar-light dashboard-brand">
                <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={getImg(`nuevo-yo-isologo.png`)} width="150" className="p-2 mb-0" alt="saxenda"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        {/* <a className="nav-link text-white" href="/">
                            <img src={getImg(`logout-icon.png`)} className="me-1" alt="saxenda"/>
                            Cerrar sesión
                        </a> */}
                        <Menu />
                    </li>
                    </ul>
                </div>
                </div>
            </nav>

            <main className="container">
                <div className="row">
                <section className="col-12">
                    <nav>
                        <div className="nav nav-tabs justify-content-around" id="nav-tabMain" role="tablist">
                            <button className={`nav-link ${showSection.products && "active"}`} id="nav-product-tab" data-bs-toggle="tab" data-bs-target="#nav-product"
                                type="button" role="tab" aria-controls="nav-product" aria-selected="true"
                                onClick={()=>handleShowSection("products")}
                            >Mi Producto</button>
                            <button className={`nav-link ${showSection.treatment && "active"}`} id="nav-treatment-tab" data-bs-toggle="tab" data-bs-target="#nav-treatment"
                                type="button" role="tab" aria-controls="nav-treatment" aria-selected="false"
                                onClick={()=>handleShowSection("treatment")}
                            >Mi Tratamiento</button>
                        </div>
                    </nav>

                    <div className="tab-content pt-2" id="nav-tabContent">
                    {showSection.products && (
                        <div className="tab-pane fade show active" id="nav-product" role="tabpanel" aria-labelledby="nav-product-tab">
                        <nav>
                            <div className="nav nav-tabs justify-content-around" id="nav-tabProd" role="tablist">
                                <button className={`nav-link btn-submenu ${showProduct.disponibility && "active"}`} id="nav-availability-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-availability" type="button" role="tab" aria-controls="nav-availability"
                                    aria-selected="true"
                                    onClick={()=>handleShowProduct("disponibility")}
                                >Disponibilidad</button>
                                <button className={`nav-link btn-submenu ${showProduct.store && "active"}`} id="nav-locate-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-locate" type="button" role="tab" aria-controls="nav-locate"
                                    aria-selected="false"
                                    onClick={()=>handleShowProduct("store")}
                                >Localizador de
                                tienda</button>
                                <button className={`nav-link btn-submenu ${showProduct.cart && "active"}`} id="nav-shopping-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-shopping" type="button" role="tab" aria-controls="nav-shopping"
                                    aria-selected="false"
                                    onClick={()=>handleShowProduct("cart")}
                                >Mis compras</button>
                            </div>
                        </nav>

                        {showSection.products && (
                            <div className="tab-content" id="nav-tabProduct">
                                {showProduct.disponibility && (
                                    <div className="tab-pane fade show active" id="nav-availability" role="tabpanel"
                                        aria-labelledby="nav-availability-tab">
                                        <ListPharma />
                                    </div>
                                )}

                                {showProduct.store && (
                                    <div id="nav-locate" role="tabpanel" aria-labelledby="nav-locate-tab">
                                        <div className="dashboard-locate">
                                        <p>Introduce tu Código postal para mostrarte la farmacia con disponibilidad más cerca de ti</p>

                                        <form onSubmit="">
                                            <input name='c-postal' type='text' placeholder='Código postal' onChange="" />
                                            <button type="button" className="btn-c btn-map">Buscar</button>
                                        </form>

                                        <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '1rem'}}>
                                            <div>
                                            <img src={getImg(`saxenda-50-off.png`)} alt="saxenda" style={{maxWidth: '200px', marginRight: '2rem'}}
                                                className="d-none d-md-block"/>
                                            </div>

                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15049.821636501189!2d-99.22251836044923!3d19.4359224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2021b8b055555%3A0x6064c2ad3b06d0cf!2sNUEVO%20YO!5e0!3m2!1ses-419!2smx!4v1653403992699!5m2!1ses-419!2smx"
                                                width="800" height="450" style={{border: '0'}} loading="lazy"
                                                referrerpolicy="no-referrer-when-downgrade"
                                                title="maps"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                                )}

                                {showProduct.cart && (
                                    <MyShops />
                                )}
                            </div>
                        )}
                        </div>
                    )}

                    {showSection.treatment && (
                        <div id="nav-treatment" role="tabpanel" aria-labelledby="nav-treatment-tab">
                            <nav>
                            <div className="nav nav-tabs justify-content-around" id="nav-tabTreat" role="tablist">
                                <button className={`nav-link btn-submenu ${showTreatment.profile && "active"}`}  id="nav-profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                                    aria-selected="true"
                                    onClick={()=>handleShowTreatment("profile")}
                                >Mi perfil</button>
                                <button className={`nav-link btn-submenu ${showTreatment.progress && "active"}`} id="nav-progress-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-progress" type="button" role="tab" aria-controls="nav-progress"
                                    aria-selected="false"
                                    onClick={()=>handleShowTreatment("progress")}
                                >Mi progreso</button>
                                <button className={`nav-link btn-submenu ${showTreatment.suffering && "active"}`} id="nav-suffering-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-suffering" type="button" role="tab" aria-controls="nav-suffering"
                                    aria-selected="false"
                                    onClick={()=>handleShowTreatment("suffering")}
                                >Mi padecimiento</button>
                                <button className={`nav-link btn-submenu ${showTreatment.support && "active"}`} id="nav-support-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-support" type="button" role="tab" aria-controls="nav-support"
                                    aria-selected="false"
                                    onClick={()=>handleShowTreatment("support")}
                                >Apoyo profesional</button>
                                <button className={`nav-link btn-submenu ${showTreatment.rewards && "active"}`} id="nav-rewards-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-rewards" type="button" role="tab" aria-controls="nav-rewards"
                                    aria-selected="false"
                                    onClick={()=>handleShowTreatment("rewards")}
                                >Mi recompensas</button>
                            </div>
                            </nav>

                            <div className="tab-content" id="nav-tabTreatment">
                                {showTreatment.profile && (
                                    <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                        <div className="container pt-5">
                                        <div className="row">
                                            <div className="col-4 d-flex justify-content-center align-items-center">
                                            <img src={getImg(`saxenda-50-off.png`)} alt="saxenda" style={{maxWidth: '200px', marginRight: '2rem'}}
                                                className="d-none d-md-block"/>
                                            </div>
                                            <div className="col-12 col-md-8">
                                            {myProfile.one && (
                                                <div className="test test1">
                                                    <h3>Objetivo</h3>
                                                    <div className="btn-nav-container">
                                                        <span className="is-active"></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                    <p style={{margin: '1rem'}}>¿Cuál es tu objetivo?</p>
                                                    <div className="btn-profile-objec">
                                                        <p onClick={() => handleProgress('two')}>Perder peso</p>
                                                        <p onClick={() => handleProgress('two')}>Mantener el peso</p>
                                                        <p onClick={() => handleProgress('two')}>Ganar peso</p>
                                                    </div>
                                                </div>
                                            )}

                                            {myProfile.two && (
                                                <div className="test test2">
                                                    <h3>Nivel de Actividad</h3>
                                                    <div className="btn-nav-container">
                                                        <span className="is-active"></span>
                                                        <span className="is-active"></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                    <p style={{margin: '1rem'}}>¿Qué tan activo eres?</p>
                                                    <div className="btn-profile-objec">
                                                    <p onClick={() => handleProgress('three')}>No muy activo
                                                        <br />
                                                        <span>Pasas la mayor parte del tiempo sentado</span>
                                                    </p>
                                                    <p onClick={() => handleProgress('three')}>Ligeramente activo
                                                        <br />
                                                        <span>Pasas buena parte del día de pie</span>
                                                    </p>
                                                    <p onClick={() => handleProgress('three')}>Activo
                                                        <br />
                                                        <span>Pasas buena parte del día haciendo una actividad física</span>
                                                    </p>
                                                    <p onClick={() => handleProgress('three')}>Muy activo
                                                        <br />
                                                        <span>Pasas la mayor parte del día haciendo actividad física intensa</span>
                                                    </p>
                                                    </div>
                                                    <button className="btn bg-purple" onClick={() => handleProgress('one')}>Regresar</button>
                                                </div>
                                            )}
                                            {myProfile.three && (
                                                <div className="test test3">
                                                    <h3>Género, Edad</h3>
                                                    <div className="btn-nav-container">
                                                        <span className="is-active"></span>
                                                        <span className="is-active"></span>
                                                        <span className="is-active"></span>
                                                        <span></span>
                                                    </div>
                                                    <p style={{margin: '1rem'}}>Género</p>
                                                    <div className="btn-profile-objec object-two-c" style={{width: '19rem'}}>
                                                    <div className="d-flex select-box select-gender" style={{maxWidth: '19rem'}}>
                                                        <div className="form-check chk-patient ps-0">
                                                        <input className="form-check-input d-none" type="radio" name="flexRadioGender"
                                                            id="flexRadioMale" checked/>
                                                        <label className="form-check-label py-2" for="flexRadioMale">H</label>
                                                        </div>
                                                        <div className="form-check chk-patient ps-0">
                                                        <input className="form-check-input d-none" type="radio" name="flexRadioGender"
                                                            id="flexRadioFemale"/>
                                                        <label className="form-check-label py-2" for="flexRadioFemale">M</label>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <p style={{margin: '1rem'}}>¿Cuándo naciste?</p>
                                                    <div className="btn-profile-objec object-two-c">
                                                    <div className="objec-two">
                                                        <p>25</p>
                                                        <p>02</p>
                                                        <p>1985</p>
                                                    </div>
                                                    </div>
                                                    <p style={{margin: '1rem', maxWidth: '300px', color: '#6B6B6B'}}>
                                                        Usamos esto para calcular un objetivo de
                                                        calorías preciso para ti.
                                                    </p>

                                                    <button onClick={() => handleProgress('four')} className="btn bg-purple">Siguente</button>
                                                </div>
                                            )}
                                            {myProfile.four && (
                                                <div className="test test4">
                                                    <h3>Talla</h3>
                                                    <div className="btn-nav-container">
                                                        <span className="is-active"></span>
                                                        <span className="is-active"></span>
                                                        <span className="is-active"></span>
                                                        <span className="is-active"></span>
                                                    </div>
                                                    <p style={{margin: '1rem'}}>¿Cuánto mides?</p>
                                                    <div className="btn-profile-objec object-two-c">
                                                    <div className="objec-two">
                                                        <p>1</p>
                                                        <p>60</p>
                                                    </div>
                                                    </div>
                                                    <p style={{margin: '1rem'}}>¿Cuánto pesas?</p>
                                                    <div className="btn-profile-objec object-two-c">
                                                    <div className="objec-two">
                                                        <p>81</p>
                                                    </div>
                                                    </div>
                                                    <p style={{margin: '1rem', maxWidth: '300px', color: '#6B6B6B'}}>
                                                    Esta bien estimar, puedes cambiar esto después.
                                                    </p>

                                                    <p style={{margin: '1rem'}}>¿Cuál es tu peso deseado?</p>
                                                    <div className="btn-profile-objec object-two-c">
                                                    <div className="objec-two">
                                                        <p>73</p>
                                                    </div>
                                                    </div>
                                                    <p style={{margin: '1rem', maxWidth: '300px', color: '#6B6B6B'}}>
                                                    No te preocupes esto no afecta a tu objetivo de calorías diarias y puedes siempre cambiarlo
                                                    luego
                                                    </p>
                                                    <div style={{display: 'flex', width: '240px', justifyContent: 'space-between'}}>
                                                        <button className="btn bg-purple" onClick={() => handleProgress('three')}>Regresar</button>
                                                        <button className="btn bg-purple">Guardar</button>
                                                    </div>
                                                </div>
                                            )}
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                )}
                                {showTreatment.progress && (
                                    <div id="nav-progress" role="tabpanel" aria-labelledby="nav-progress-tab">
                                        <div className="container">
                                        <div className="row">
                                            <div className="col-12 col-md-6 text-center">
                                            <h3 className="text-purple">Registro</h3>
                                            <div className="progress-row">
                                                <p style={{color: '#6B6B6B'}}>Introduce el peso de hoy</p>
                                                <input className="btn-gray" name='c-postal' type='text' placeholder='Kilos' onChange=""
                                                style={{maxWidth: '250px'}} />
                                            </div>
                                            <p style={{fontSize: '16px', margin: '1rem 0', textAlign: 'center'}}>
                                                Último peso registrado: 81 kg. el 24/08/2022
                                            </p>

                                            <div className="table-responsive">
                                                <table className="table-progress">
                                                <thead>
                                                    <tr>
                                                    <th style={{marginRight: '15px'}}>Otras medidas</th>
                                                    <th>Última entrada</th>
                                                    <th>Entrada de hoy</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td>
                                                        Cuello
                                                    </td>
                                                    <td>
                                                        Ninguno
                                                    </td>
                                                    <td>
                                                        <input name='' type='text' placeholder='' onChange="" />
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <td>
                                                        <p>Cintura</p>
                                                    </td>
                                                    <td>
                                                        <p>Ninguno</p>
                                                    </td>
                                                    <td>
                                                        <input name='' type='text' placeholder='' onChange="" />
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <td>
                                                        <p>Caderas</p>
                                                    </td>
                                                    <td>
                                                        <p>Ninguno</p>
                                                    </td>
                                                    <td>
                                                        <input name='' type='text' placeholder='' onChange="" />
                                                    </td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </div>

                                            <button type="button" className="btn btn-success mt-2">Guardar cambios</button>
                                            <div style={{marginTop: '1rem'}}>
                                                <img src={getImg(`saxenda-50-off.png`)} alt="saxenda"
                                                style={{maxWidth: '200px', marginRight: '2rem', float: 'left'}} className="d-none d-md-block"/>
                                            </div>
                                            </div>

                                            <div className="col-12 col-md-6 progress-col">
                                            <div className="row-two">
                                                <h3>Progreso</h3>
                                                <select name="select">
                                                <option value="value1" selected>Peso</option>
                                                <option value="value2">Cuello</option>
                                                <option value="value2">Cintura</option>
                                                <option value="value2">Caderas</option>
                                                </select>
                                            </div>
                                            <div className="row-three">
                                                <div>
                                                <p>Inicio</p>
                                                <p>81kg</p>
                                                </div>
                                                <div>
                                                <p>Actual</p>
                                                <p>75kg</p>
                                                </div>
                                                <div>
                                                <p>Cambia (0%)</p>
                                                <p>Cambia (0%)</p>
                                                </div>
                                            </div>
                                            <p style={{marginTop: '2.5rem', color: '#443280', fontSize: '22px', fontWeight: '200'}}>Periodo del
                                                informe
                                            </p>
                                            <select name="select" className="select-chart">
                                                <option value="value1" selected>Últimos 7 días</option>
                                                <option value="value2">Últimos 30 días</option>
                                                <option value="value2">Últimos 90 días</option>
                                                <option value="value2">Últimos 180 días</option>
                                                <option value="value2">El año pasado</option>
                                            </select>
                                            <div style={{marginTop: '1rem'}}>
                                                <img src={getImg(`chart-dashboard.jpeg`)} alt="chart" style={{width: '100%'}}/>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                )}
                                {showTreatment.suffering && (
                                    <InfoModal />
                                )}
                                {showTreatment.support && (
                                    <div id="nav-support" role="tabpanel" aria-labelledby="nav-support-tab">
                                        <div className="container py-5">
                                            <h2 className="text-center fw-light text-purple pb-3">Recibe apoyo en tu tratamiento</h2>
                                            <div className="row justify-content-around text-center">
                                                <div
                                                    className="col-12 col-md-4 mb-4 mb-md-0"
                                                    onClick={()=>handleShowModal("ma1")}
                                                >
                                                    <img src={getImg(`citaEducate.png`)} alt="" className="d-block mx-auto pb-3" style={{height: '10rem'}} />
                                                    <h3 className="fw-bold text-purple">AGENDA TU CITA CON EL EDUCADOR AQUI</h3>
                                                    <p className="fw-light text-black">
                                                        Recuerda que puedes agendar una sesión educativa con un especialista en nutrición y obesidad
                                                        de forma gratuita
                                                    </p>
                                                </div>
                                                <div className="col-12 col-md-4" data-bs-toggle="modal" data-bs-target="#citaPsico"
                                                    onClick={()=>handleShowModal("ma2")}
                                                >
                                                    <img src={getImg(`citaPsico.png`)} className="d-block mx-auto pb-3" style={{height: '10rem'}} alt="cita" />
                                                    <h3 className="fw-bold text-purple">AGENDA TU CITA PSICOLÓGICA</h3>
                                                    <p className="fw-light text-black">
                                                        Recuerda que puedes agendar una sesión educativa con un especialista en atención psicológica.
                                                        <a href="#id">Evaluación necesaria</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {showTreatment.rewards && (
                                    <div id="nav-rewards" role="tabpanel" aria-labelledby="nav-rewards-tab">
                                        <div className="suffering-content border-bottom py-3">
                                            <h2 className="text-purple fw-bold pb-3">Mi dieta</h2>
                                            <div className="suffering-item-container">
                                                <div
                                                    className="suffering-item"
                                                    onClick={()=>handleShowModal("md1")}
                                                >
                                                    <img src={getImg(`dieta.png`)} alt="saxenda"/>
                                                    <p>1.- Mi dieta</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="suffering-content border-bottom py-3">
                                            <h2 className="text-purple fw-bold pb-3">Actividad Física</h2>
                                            <div className="suffering-item-container">

                                                <Swiper
                                                    spaceBetween={0}
                                                    slidesPerView={4}
                                                    navigation
                                                    pagination
                                                >
                                                    <SwiperSlide>
                                                        <div className="suffering-item" onClick={()=>handleShowModal("mf1")}>
                                                            <img src={getImg(`actividad-fisica.png`)} alt="saxenda"/>
                                                            <p>1. Rutinas Nivel 1</p>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="suffering-item" onClick={()=>handleShowModal("mf2")}>
                                                            <img src={getImg(`actividad-fisica.png`)} alt="saxenda"/>
                                                            <p>2. Rutinas Nivel 2</p>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="suffering-item" onClick={()=>handleShowModal("mf3")}>
                                                            <img src={getImg(`actividad-fisica.png`)} alt="saxenda"/>
                                                            <p>3. Pectorales</p>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="suffering-item" onClick={()=>handleShowModal("mf4")}>
                                                            <img src={getImg(`actividad-fisica.png`)} alt="saxenda"/>
                                                            <p>4. Espalda alta (Dorsales)</p>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="suffering-item" onClick={()=>handleShowModal("mf5")}>
                                                            <img src={getImg(`actividad-fisica.png`)} alt="saxenda"/>
                                                            <p>5. Muslo/Glúteo</p>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="suffering-item" onClick={()=>handleShowModal("mf6")}>
                                                            <img src={getImg(`actividad-fisica.png`)} alt="saxenda"/>
                                                            <p>6. Pantorrilla</p>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="suffering-item" onClick={()=>handleShowModal("mf7")}>
                                                            <img src={getImg(`actividad-fisica.png`)} alt="saxenda"/>
                                                            <p>7. Espalda baja (Lumbar)</p>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="suffering-item" onClick={()=>handleShowModal("mf8")}>
                                                            <img src={getImg(`actividad-fisica.png`)} alt="saxenda"/>
                                                            <p>8. Abdomen</p>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="suffering-item" onClick={()=>handleShowModal("mf9")}>
                                                            <img src={getImg(`actividad-fisica.png`)} alt="saxenda"/>
                                                            <p>9. Hombros</p>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="suffering-item" onClick={()=>handleShowModal("mf10")}>
                                                            <img src={getImg(`actividad-fisica.png`)} alt="saxenda"/>
                                                            <p>10. Bíceps</p>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="suffering-item" onClick={()=>handleShowModal("mf11")}>
                                                            <img src={getImg(`actividad-fisica.png`)} alt="saxenda"/>
                                                            <p>11. Tríceps</p>
                                                        </div>
                                                    </SwiperSlide>
                                                </Swiper>

                                            </div>
                                        </div>

                                        <div className="suffering-content border-bottom py-3">
                                            <h2 className="text-purple fw-bold pb-3">Recompensa de Adherencia</h2>
                                            <div className="suffering-item-container">
                                                <div className="suffering-item" data-bs-toggle="modal" data-bs-target="#adherenciaModal"
                                                    onClick={()=>handleShowModal("mra1")}
                                                >
                                                    <img src={getImg(`adherencia.png`)} alt="saxenda"/>
                                                    <p>1. Recompensa de Adherencia</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="suffering-content py-3">
                                        <h2 className="text-purple fw-bold pb-3">Encuesta & Webinars</h2>
                                        <div className="suffering-item-container">
                                            <div className="suffering-item" data-bs-toggle="modal" data-bs-target="#encuesta"
                                                onClick={()=>handleShowModal("me1")}
                                            >
                                                <img src={getImg(`encuesta.png`)} alt="saxenda"/>
                                                <p>1. Encuesta a pacientes</p>
                                            </div>
                                            <div className="suffering-item" data-bs-toggle="modal" data-bs-target="#webinars"
                                                onClick={()=>handleShowModal("me2")}
                                            >
                                                <img src={getImg(`webinar.png`)} alt="saxenda"/>
                                                <p>2. Invitación a webinar</p>
                                            </div>
                                            <div className="suffering-item" data-bs-toggle="modal" data-bs-target="#contenidoModal"
                                                onClick={()=>handleShowModal("me3")}
                                            >
                                                <img src={getImg(`webinar.png`)} alt="saxenda"/>
                                                <p>3. Contenido</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    </div>
                </section>
                </div>
            </main>

            <Footer />

            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                {multiModal.ma1 && (
                    <Meet />
                )}
                {multiModal.ma2 && (
                    <div id="citaPsico" tabindex="-1" aria-labelledby="citaPsicoLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row px-md-5">
                                <div className="-col-12 col-md-8 order-md-2">
                                    {/* <h2 className="modal-title text-center text-md-start" id="citaPsicoLabel">ESCALA HAD</h2> */}
                                </div>
                                <div className="-col-12 col-md-4">
                                    <input className="form-control btn-gray mb-3" type="text" value="Francisco González"/>
                                    <input className="form-control btn-gray mb-3" type="text" value="25/02/1985"/>
                                    <input className="form-control btn-gray mb-3" type="text" value="6937465838"/>
                                </div>
                                <div className="col-12">
                                    <p className="mb-0">
                                    Los profesionales de la salud conocen la importancia de los factores emocionales en la mayoría de las
                                    enfermedades. Si se sabe el estado emocional del paciente, puede pretarle entonces mejor ayuda.
                                    </p>
                                    <p className="mb-0">
                                    Este cuestionario ha sido diseñado para ayudar a que su profesional de la salud sepa cómo se siente
                                    usted afectiva y emocionalmente.
                                    </p>
                                    <p className="mb-0">
                                    Lee cada pregunta y marque la respuesta que usted considere que coincide con su propio estado
                                    emocional en la última semana.
                                    </p>
                                    <p className="mb-0">
                                    No es necesario que piense mucho tiempo cada respuesta; en este cuestionario las respuestas
                                    espontáneas tienen mayor valor que las que se piensan mucho.
                                    </p>

                                    <p className="mb-0 mt-3">1. Me siento tenso(a) o nervioso(a):</p>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionOne" id="questionOne1" value="option1"/>
                                    <label className="form-check-label" for="questionOne1">3 Todo el día</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionOne" id="questionOne2" value="option2"/>
                                    <label className="form-check-label" for="questionOne2">2 Casi todo el día</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionOne" id="questionOne3" value="option3"/>
                                    <label className="form-check-label" for="questionOne3">1 De vez en cuando</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionOne" id="questionOne4" value="option3"/>
                                    <label className="form-check-label" for="questionOne4">0 Nunca</label>
                                    </div>

                                    <p className="mb-0 mt-3">2. Sigo disfrutando con las mismas cosas de siempre:</p>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionTwo" id="questionTwo1" value="option1"/>
                                    <label className="form-check-label" for="questionTwo1">0 Casi siempre</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionTwo" id="questionTwo2" value="option2"/>
                                    <label className="form-check-label" for="questionTwo2">1 Frecuentemente</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionTwo" id="questionTwo3" value="option3"/>
                                    <label className="form-check-label" for="questionTwo3">2 Rara vez</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionTwo" id="questionTwo4" value="option3"/>
                                    <label className="form-check-label" for="questionTwo4">3 No, en absoluto</label>
                                    </div>

                                    <p className="mb-0 mt-3">3. Siento una especie de temor, como si algo me fuera a suceder:</p>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionThree" id="questionThree1" value="option1"/>
                                    <label className="form-check-label" for="questionThree1">3 Todo el día</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionThree" id="questionThree2" value="option2"/>
                                    <label className="form-check-label" for="questionThree2">2 Casi todo el día</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionThree" id="questionThree3" value="option3"/>
                                    <label className="form-check-label" for="questionThree3">1 De vez en cuando</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionThree" id="questionThree4" value="option3"/>
                                    <label className="form-check-label" for="questionThree4">0 Nunca</label>
                                    </div>

                                    <p className="mb-0 mt-3">4. Soy capaz de reírme y ver el lado gracioso de las cosas:</p>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionFour" id="questionFour1" value="option1"/>
                                    <label className="form-check-label" for="questionFour1">3 Todo el día</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionFour" id="questionFour2" value="option2"/>
                                    <label className="form-check-label" for="questionFour2">2 Casi todo el día</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionFour" id="questionFour3" value="option3"/>
                                    <label className="form-check-label" for="questionFour3">1 De vez en cuando</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionFour" id="questionFour4" value="option3"/>
                                    <label className="form-check-label" for="questionFour4">0 Nunca</label>
                                    </div>

                                    <p className="mb-0 mt-3">5. Tengo la cabeza llena de preocupaciones:</p>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionFive" id="questionFive1" value="option1"/>
                                    <label className="form-check-label" for="questionFive1">3 Todo el día</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionFive" id="questionFive2" value="option2"/>
                                    <label className="form-check-label" for="questionFive2">2 Casi todo el día</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionFive" id="questionFive3" value="option3"/>
                                    <label className="form-check-label" for="questionFive3">1 De vez en cuando</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionFive" id="questionFive4" value="option3"/>
                                    <label className="form-check-label" for="questionFive4">0 Nunca</label>
                                    </div>

                                    <p className="mb-0 mt-3">6. Me siento alegre:</p>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionSix" id="questionSix1" value="option1"/>
                                    <label className="form-check-label" for="questionSix1">3 Todo el día</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionSix" id="questionSix2" value="option2"/>
                                    <label className="form-check-label" for="questionSix2">2 Casi todo el día</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionSix" id="questionSix3" value="option3"/>
                                    <label className="form-check-label" for="questionSix3">1 De vez en cuando</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionSix" id="questionSix4" value="option3"/>
                                    <label className="form-check-label" for="questionSix4">0 Nunca</label>
                                    </div>

                                    <p className="mb-0 mt-3">7. Soy capaz de permanecer sentado(a) tranquila y relajadamente:</p>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionSeven" id="questionSeven1" value="option1"/>
                                    <label className="form-check-label" for="questionSeven1">3 Todo el día</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionSeven" id="questionSeven2" value="option2"/>
                                    <label className="form-check-label" for="questionSeven2">2 Casi todo el día</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionSeven" id="questionSeven3" value="option3"/>
                                    <label className="form-check-label" for="questionSeven3">1 De vez en cuando</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionSeven" id="questionSeven4" value="option3"/>
                                    <label className="form-check-label" for="questionSeven4">0 Nunca</label>
                                    </div>

                                    <p className="mb-0 mt-3">8. Me siento lento(a) y torpe:</p>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionEight" id="questionEight1" value="option1"/>
                                    <label className="form-check-label" for="questionEight1">3 Todo el día</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionEight" id="questionEight2" value="option2"/>
                                    <label className="form-check-label" for="questionEight2">2 Casi todo el día</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionEight" id="questionEight3" value="option3"/>
                                    <label className="form-check-label" for="questionEight3">1 De vez en cuando</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionEight" id="questionEight4" value="option3"/>
                                    <label className="form-check-label" for="questionEight4">0 Nunca</label>
                                    </div>

                                    <p className="mb-0 mt-3">9. Experimento una desagradable sensación de nervios y vacío en el estómago:</p>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionNine" id="questionNine1" value="option1"/>
                                    <label className="form-check-label" for="questionNine1">3 Todo el día</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionNine" id="questionNine2" value="option2"/>
                                    <label className="form-check-label" for="questionNine2">2 Casi todo el día</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionNine" id="questionNine3" value="option3"/>
                                    <label className="form-check-label" for="questionNine3">1 De vez en cuando</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionNine" id="questionNine4" value="option3"/>
                                    <label className="form-check-label" for="questionNine4">0 Nunca</label>
                                    </div>

                                    <p className="mb-0 mt-3">10. He perdido el interés por mi aspecto personal:</p>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionTen" id="questionTen1" value="option1"/>
                                    <label className="form-check-label" for="questionTen1">3 Todo el día</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionTen" id="questionTen2" value="option2"/>
                                    <label className="form-check-label" for="questionTen2">2 Casi todo el día</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionTen" id="questionTen3" value="option3"/>
                                    <label className="form-check-label" for="questionTen3">1 De vez en cuando</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="questionTen" id="questionTen4" value="option3"/>
                                    <label className="form-check-label" for="questionTen4">0 Nunca</label>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center px-5">
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal"
                                onClick={()=>closeModal()}
                            >Guardar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {multiModal.md1 && (
                    <div id="miDieta" tabindex="-1" aria-labelledby="miDietaLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header flex-column border-0 bg-modal-dieta">
                            <h1 className="modal-title" id="miDietaLabel">Mi dieta</h1>
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="row px-5">
                                    <div className="col-12 col-md-9 mx-auto">
                                        <img src={getImg(`dieta-modal1.jpg`)} alt="Datos de bienestar" className="img-fluid mb-4"/>
                                        <img src={getImg(`dieta-modal2.jpg`)} alt="Datos de plato del buen comer" className="img-fluid"/>
                                        <img src={getImg(`dieta-modal3.jpg`)} alt="Datos de plato del buen comer" className="img-fluid"/>
                                    </div>

                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center px-5">
                                <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                    onClick={()=>closeModal()}
                                >Cerrar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {multiModal.mf1 && (
                    <div id="actividadFisica" tabindex="-1" aria-labelledby="actividadFisicaLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header flex-column border-0 bg-modal-dieta">
                                    <h1 className="modal-title" id="actividadFisicaLabel">Rutina Nivel 1</h1>
                                </div>

                                <MultiVideo1/>

                                <div className="modal-footer border-0 justify-content-center px-5">
                                    <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                        onClick={()=>closeModal()}
                                    >Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.mf2 && (
                    <div id="actividadFisica" tabindex="-1" aria-labelledby="actividadFisicaLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header flex-column border-0 bg-modal-dieta">
                                    <h1 className="modal-title" id="actividadFisicaLabel">Rutina Nivel 2</h1>
                                </div>

                                <MultiVideo2/>

                                <div className="modal-footer border-0 justify-content-center px-5">
                                    <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                        onClick={()=>closeModal()}
                                    >Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.mf3 && (
                    <div id="actividadFisica" tabindex="-1" aria-labelledby="actividadFisicaLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header flex-column border-0 bg-modal-dieta">
                                    <h1 className="modal-title" id="actividadFisicaLabel">Pectoral</h1>
                                </div>

                                <GridVideo
                                    videos={[
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_1_161.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_1_162.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_1_163.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_1_164.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_1_165.mp4"
                                    ]}
                                />

                                <div className="modal-footer border-0 justify-content-center px-5">
                                    <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                        onClick={()=>closeModal()}
                                    >Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.mf4 && (
                    <div id="actividadFisica" tabindex="-1" aria-labelledby="actividadFisicaLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header flex-column border-0 bg-modal-dieta">
                                    <h1 className="modal-title" id="actividadFisicaLabel">Espalda alta (Dorsales)</h1>
                                </div>

                                <GridVideo
                                    videos={[
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_2_181.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_2_182.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_2_183.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_2_184.mp4"
                                    ]}
                                />

                                <div className="modal-footer border-0 justify-content-center px-5">
                                    <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                        onClick={()=>closeModal()}
                                    >Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.mf5 && (
                    <div id="actividadFisica" tabindex="-1" aria-labelledby="actividadFisicaLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header flex-column border-0 bg-modal-dieta">
                                    <h1 className="modal-title" id="actividadFisicaLabel">Muslo/Glúteos</h1>
                                </div>

                                <GridVideo
                                    videos={[
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_3_201.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_3_202.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_3_203.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_3_204.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_3_205.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_3_206.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_3_207.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_3_208.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_3_208.mp4",
                                    ]}
                                />

                                <div className="modal-footer border-0 justify-content-center px-5">
                                    <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                        onClick={()=>closeModal()}
                                    >Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.mf6 && (
                    <div id="actividadFisica" tabindex="-1" aria-labelledby="actividadFisicaLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header flex-column border-0 bg-modal-dieta">
                                    <h1 className="modal-title" id="actividadFisicaLabel">Pantorrilla</h1>
                                </div>

                                <GridVideo
                                    videos={[
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_4_221.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_4_222.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_4_223.mp4",
                                    ]}
                                />

                                <div className="modal-footer border-0 justify-content-center px-5">
                                    <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                        onClick={()=>closeModal()}
                                    >Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.mf7 && (
                    <div id="actividadFisica" tabindex="-1" aria-labelledby="actividadFisicaLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header flex-column border-0 bg-modal-dieta">
                                    <h1 className="modal-title" id="actividadFisicaLabel">Espalda baja (lumbar)</h1>
                                </div>

                                <GridVideo
                                    videos={[
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_5_241.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_5_242.mp4",
                                    ]}
                                />

                                <div className="modal-footer border-0 justify-content-center px-5">
                                    <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                        onClick={()=>closeModal()}
                                    >Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.mf8 && (
                    <div id="actividadFisica" tabindex="-1" aria-labelledby="actividadFisicaLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header flex-column border-0 bg-modal-dieta">
                                    <h1 className="modal-title" id="actividadFisicaLabel">Abdomen</h1>
                                </div>

                                <GridVideo
                                    videos={[
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_6_261.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_6_262.mp4",
                                    ]}
                                />

                                <div className="modal-footer border-0 justify-content-center px-5">
                                    <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                        onClick={()=>closeModal()}
                                    >Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.mf9 && (
                    <div id="actividadFisica" tabindex="-1" aria-labelledby="actividadFisicaLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header flex-column border-0 bg-modal-dieta">
                                    <h1 className="modal-title" id="actividadFisicaLabel">Hombros</h1>
                                </div>

                                <GridVideo
                                    videos={[
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_7_281.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_7_282.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_7_283.mp4"
                                    ]}
                                />

                                <div className="modal-footer border-0 justify-content-center px-5">
                                    <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                        onClick={()=>closeModal()}
                                    >Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.mf10 && (
                    <div id="actividadFisica" tabindex="-1" aria-labelledby="actividadFisicaLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header flex-column border-0 bg-modal-dieta">
                                    <h1 className="modal-title" id="actividadFisicaLabel">Bíceps</h1>
                                </div>

                                <GridVideo
                                    videos={[
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_8_301.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_8_302.mp4",
                                    ]}
                                />

                                <div className="modal-footer border-0 justify-content-center px-5">
                                    <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                        onClick={()=>closeModal()}
                                    >Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.mf11 && (
                    <div id="actividadFisica" tabindex="-1" aria-labelledby="actividadFisicaLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header flex-column border-0 bg-modal-dieta">
                                    <h1 className="modal-title" id="actividadFisicaLabel">Tríceps</h1>
                                </div>

                                <GridVideo
                                    videos={[
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_9_321.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_9_322.mp4",
                                        "https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Ejercicio_9_323.mp4",
                                    ]}
                                    />

                                <div className="modal-footer border-0 justify-content-center px-5">
                                    <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                        onClick={()=>closeModal()}
                                    >Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {multiModal.mra1 && (
                    <div id="adherenciaModal" tabindex="-1" aria-labelledby="adherenciaModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header flex-column border-0 bg-modal-dieta">
                            <h1 className="modal-title" id="adherenciaModalLabel">Actividad Física</h1>
                            </div>
                            <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row px-5">
                                <h2 className="step-1 text-success text-center fw-bold">¡OBTÉN ADITAMENTOS!</h2>
                                    <div className="col-12 col-md-9 mx-auto py-5">
                                        <iframe
                                            title="ADITAMENTOS"
                                            src={getPDF("168_bascula_huawei-FINAL_PM.pdf")}
                                            type="application/pdf"
                                            width="100%" height="100%"
                                            style={{minHeight: '75vh'}}
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center px-5">
                            <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                onClick={()=>closeModal()}
                            >Cerrar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {multiModal.me1 && (
                    <div id="encuesta" tabindex="-1" aria-labelledby="encuestaLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header flex-column border-0 bg-modal-dieta">
                            <h1 className="modal-title" id="encuestaLabel">Encuestas</h1>
                            </div>
                            <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row px-5">
                                    <div className="col-12 col-md-9 mx-auto">
                                        <iframe
                                            title="Encuestas"
                                            src={getPDF("09_mail_nuevoyo_pacientes.pdf")}
                                            type="application/pdf"
                                            width="100%" height="100%"
                                            style={{minHeight: '75vh'}}
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center px-5">
                            <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                onClick={()=>closeModal()}
                            >Cerrar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {multiModal.me2 && (
                    <div id="webinars" tabindex="-1" aria-labelledby="webinarsLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header flex-column border-0 bg-modal-dieta">
                            <h1 className="modal-title" id="webinarsLabel">Webinars</h1>
                            </div>
                            <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row px-5">
                                    <div className="col-12 col-md-9 mx-auto">
                                    <iframe
                                        title="Encuestas"
                                        src={getPDF("alimentación_consciente.pdf")}
                                        type="application/pdf"
                                        width="100%" height="100%"
                                        style={{minHeight: '75vh'}}
                                    ></iframe>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center px-5">
                            <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                onClick={()=>closeModal()}
                            >Cerrar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                {multiModal.me3 && (
                    <div id="contenidoModal" tabindex="-1" aria-labelledby="contenidoModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header flex-column border-0 bg-modal-dieta">
                                    <h1 className="modal-title" id="contenidoModalLabel">Contenido</h1>
                                </div>

                                <Contents />

                                <div className="modal-footer border-0 justify-content-center px-5">
                                    <button type="button" className="btn bg-purple" data-bs-dismiss="modal"
                                        onClick={()=>closeModal()}
                                    >Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </body>
    )
}
