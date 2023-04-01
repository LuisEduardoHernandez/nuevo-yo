import React, { useState } from 'react'

export const MultiVideo1 = () => {

    const [rutina, setRutina] = useState({r1: true});

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
                            <li className="nav-item" onClick={()=>handelShowVideo("r1")}>
                                <button className={`nav-link ${rutina.r1 && "active"}`}>Rutina 1</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r2")} >
                                <button className={`nav-link ${rutina.r2 && "active"}`}>Rutina 2</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r3")} >
                                <button className={`nav-link ${rutina.r3 && "active"}`}>Rutina 3</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r4")} >
                                <button className={`nav-link ${rutina.r4 && "active"}`}>Rutina 4</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r5")} >
                                <button className={`nav-link ${rutina.r5 && "active"}`}>Rutina 5</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r6")} >
                                <button className={`nav-link ${rutina.r6 && "active"}`}>Rutina 6</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r7")} >
                                <button className={`nav-link ${rutina.r7 && "active"}`}>Rutina 7</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r8")} >
                                <button className={`nav-link ${rutina.r8 && "active"}`}>Rutina 8</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r9")} >
                                <button className={`nav-link ${rutina.r9 && "active"}`}>Rutina 9</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r10")} >
                                <button className={`nav-link ${rutina.r10 && "active"}`}>Rutina 10</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r11")} >
                                <button className={`nav-link ${rutina.r11 && "active"}`}>Rutina 11</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r12")} >
                                <button className={`nav-link ${rutina.r12 && "active"}`}>Rutina 12</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r13")} >
                                <button className={`nav-link ${rutina.r13 && "active"}`}>Rutina 13</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r14")} >
                                <button className={`nav-link ${rutina.r14 && "active"}`}>Rutina 14</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r15")} >
                                <button className={`nav-link ${rutina.r15 && "active"}`}>Rutina 15</button>
                            </li>
                            <li className="nav-item" onClick={()=>handelShowVideo("r16")} >
                                <button className={`nav-link ${rutina.r16 && "active"}`}>Rutina 16</button>
                            </li>
                        </ul>

                        {rutina.r1 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_2.pdf#toolbar=0&amp;navpanes=0&amp;scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_1.mp4"
                            />
                        )}
                        {rutina.r2 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_4.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_3.mp4"
                            />
                        )}
                        {rutina.r3 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_6.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_5.mp4"
                            />
                        )}
                        {rutina.r4 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_9.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_7.mp4"
                                video2="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_8.mp4"
                            />
                        )}
                        {rutina.r5 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_22.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_21.mp4"
                            />
                        )}
                        {rutina.r6 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_24.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_23.mp4"
                            />
                        )}
                        {rutina.r7 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_26.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_25.mp4"
                            />
                        )}
                        {rutina.r8 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_29.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_27.mp4"
                                video2="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_28.mp4"
                            />
                        )}
                        {rutina.r9 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_42.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_41.mp4"
                            />
                        )}
                        {rutina.r10 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_44.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_43.mp4"
                            />
                        )}
                        {rutina.r11 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_46.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_45.mp4"
                            />
                        )}
                        {rutina.r12 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_49.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_47.mp4"
                                video2="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_48.mp4"
                            />
                        )}
                        {rutina.r13 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_62.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_61.mp4"
                            />
                        )}
                        {rutina.r14 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_64.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_63.mp4"
                            />
                        )}
                        {rutina.r15 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_66.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_65.mp4"
                            />
                        )}
                        {rutina.r16 && (
                            <ContentNav
                                pdf="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_69.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                video="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_67.mp4"
                                video2="https://sistemasintegrales.mx/2022/novonordisk/NuevoYo/videos/Recurso_Rutina_1_68.mp4"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
