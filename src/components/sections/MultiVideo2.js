import React, { useState } from 'react'

export const MultiVideo2 = () => {

    const [rutina, setRutina] = useState({r17: true});

    const handelShowVideo = (rutina) => {
        setRutina({[rutina]: true})
    }

    const ContentNav = ({pdf, video, video2}) => {

        const [nav, setNav] = useState({pdf: true});

        const handelShowNav = (nav) => {
            setNav({[nav]: true})
        }

        return (
            <div className="col-12 col-lg-6 mb-3 mx-auto">
                <ul className="nav nav-tabs">
                    <li className="nav-item" onClick={()=>handelShowNav("pdf")}>
                        <button className={`nav-link ${nav.pdf && "active"}`}>Guía</button>
                    </li>
                    <li className="nav-item" onClick={()=>handelShowNav("video")}>
                        <button className={`nav-link ${nav.video && "active"}`}>Ver video</button>
                    </li>
                </ul>
                {nav.pdf && (
                    <iframe
                        title="guia-pdf"
                        src={pdf}
                        type="application/pdf"
                        width="100%"
                        height="100%"
                        style={{minHeight: '75vh'}}
                    ></iframe>
                )}
                {nav.video && (
                    <>
                        <video
                            controls
                            width="100%"
                            preload="none"
                            poster=""
                            ><source src={video} type="video/mp4" />
                        </video>
                        {video2 && (
                                <video
                                    controls
                                    width="100%"
                                    preload="none"
                                    poster=""
                                ><source src={video2} type="video/mp4" />
                                </video>
                            )
                        }
                    </>
                )}
            </div>
        )
    }

    return (
        <div className="modal-body">
            <div className="container-fluid">
                <div className="row px-lg-5">
                    <div className="col-12 mx-auto text-center">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" onClick={()=>handelShowVideo("r17")}>
                                <button className={`nav-link ${rutina.r17 && "active"}`}>Rutina 17</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r18")} >
                                <button className={`nav-link ${rutina.r18 && "active"}`}>Rutina 18</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r19")} >
                                <button className={`nav-link ${rutina.r19 && "active"}`}>Rutina 19</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r20")} >
                                <button className={`nav-link ${rutina.r20 && "active"}`}>Rutina 20</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r21")} >
                                <button className={`nav-link ${rutina.r21 && "active"}`}>Rutina 21</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r22")} >
                                <button className={`nav-link ${rutina.r22 && "active"}`}>Rutina 22</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r23")} >
                                <button className={`nav-link ${rutina.r23 && "active"}`}>Rutina 23</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r24")} >
                                <button className={`nav-link ${rutina.r24 && "active"}`}>Rutina 24</button>
                            </li>
                        </ul>

                        {rutina.r17 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_2_82.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_2_81.mp4"
                            />
                        )}
                        {rutina.r18 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_2_84.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_3.mp4"
                            />
                        )}
                        {rutina.r19 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_6.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_2_101.mp4"
                            />
                        )}
                        {rutina.r20 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_2_104.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_2_103.mp4"
                            />
                        )}
                        {rutina.r21 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_2_122.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_2_121.mp4"
                            />
                        )}
                        {rutina.r22 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_2_124.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_2_123.mp4"
                            />
                        )}
                        {rutina.r23 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_2_142.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_2_141.mp4"
                            />
                        )}
                        {rutina.r24 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_2_144.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_2_143.mp4"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
