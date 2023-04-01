import React from 'react'
import { getImg } from '../../helpers/getImg'
import { FormLogin } from './FormLogin'
import { Footer } from './Footer';

export const LoginMedical = () => {

    return (
        <body className="register-container">
            <header>
                <nav className="navbar navbar-light">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="/"> */}
                    <img src={getImg(`nuevo-yo-isologo.png`)} className="img-fluid" alt="Nuevo Yo" />
                    {/* </a> */}
                </div>
                </nav>
            </header>

            <main className="text-center my-3">
                <h1>Ingrese al portal exclusivo para medicos registrados</h1>
                <h2>INGRESE A NUEVO YO<sub>®</sub></h2>

                <section className="section-form">
                <div className="container-form container-form-login">
                    <div className="card-form card-form-login">
                        <p className="title-form-login">INGRESE SUS<br />DATOS</p>
                        <FormLogin />
                    </div>
                </div>
                </section>
            </main>
            <Footer />
        </body>
    )
}
