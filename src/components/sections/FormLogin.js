import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { Context } from '../../context/Context';
import { types } from '../../types/types';
import { API } from '../../helpers/getAPI';
import { useForm } from '../../hooks/useForm'
import { Modal } from '../UI/Modal'
import useModal from '../../hooks/useModal';

const decoder = new TextDecoder('utf-8')

export const FormLogin = () => {

    const {dispatch}  = useContext( Context );
    const history = useHistory();

    // Modal
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const [sendData, setSendData] = useState(false);
    const [errors, setErrors] = useState("");
    const [multiModal, setMultiModal] = useState({});

    // Lógica formulario
    const [formValues, handleInputChange] = useForm({})
    const { correo, password } = formValues

    const allInputs = () => {
        if (correo && password) {
            setSendData(true);
        } else {
            setSendData(false);
        }
    }

    const handleShowModal = (section) => {
        openModal()
        setMultiModal({[section]: true})
    }

    useEffect(() => {
        allInputs()
    }, [formValues]);

    const handleLogin = async (e) => {
        e.preventDefault()
        // if (correo !== dataLogin?.correo) {
        //     setErrors("El usuario no existe")
        //     handleShowModal("errors")
        // } else if (password !== dataLogin?.password) {
        //     setErrors("La constraseña es incorrecta")
        //     handleShowModal("errors")
        // } else {
        //     setErrors("")
        //     handleShowModal("login")
        //     setTimeout(() => {
        //         history.replace('/dashboard?origin=login');
        //     }, 3000);
        // }
        try {
            let formData = new FormData();
            formData.append('email', correo);
            formData.append('password', password);
            const response = await fetch(API("GetLead"), {
                // 'headers': {
                //     'Access-Control-Allow-Origin': '*'
                // },
                method: "POST",
                body: formData
            });
            console.log(response);
            if (response.status === 200) {
                response.body
                    .getReader()
                    .read()
                    .then(({value, done}) => {
                        const data = decoder.decode(value)
                        console.log(data);
                        if (data.includes('"id":')) {
                            console.log("login");
                            dispatch({
                                type: types.login,
                                payload: {login: true, name: 'Aaron'}
                            });
                            history.replace('/dashboard?origin=login');
                        }
                    })
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="form-login">
            <form onSubmit={handleLogin} id="form-login">
                <input
                    name='correo'
                    type='text'
                    placeholder='Email'
                    value={correo}
                    onChange={handleInputChange}
                    />
                <input
                    name='password'
                    value={password}
                    type='password'
                    placeholder='Contraseña'
                    onChange={handleInputChange}
                />
                <button
                    type='submit'
                    id='contact-submit'
                    className="btn-c btn-validate-email"
                    disabled={!sendData}
                >Enviar</button>
            </form>

            <p className="text-ref" onClick={() => handleShowModal("forgetPW")}>¿Olvidaste tu contraseña?</p>

            <div className="or-container">
                <div className="line-text"></div>
                <p>o</p>
                <div className="line-text"></div>
            </div>

            <button type="button" className="btn-c btn-fb">Unirme con Facebook</button>

            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                {multiModal.errors && (
                    <p>{errors}</p>
                )}
                {multiModal.login && (
                    <>
                        <p>Ingreso exitoso</p>
                        <p>Correo: {correo}</p>
                        <button
                            onClick={()=>closeModal()}
                            className="close-modal-r"
                            >Aceptar
                        </button>
                    </>
                )}
                {multiModal.forgetPW && (
                    <div className="">
                        <h5 className="modal-title" id="exampleModalLabel">¿Olvidaste tu contraseña?</h5>
                        <div className="modal-body">
                            <p className="text-morado">Ingresa tu correo, para enviarte un enlace y restablece tu contraseña</p>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Correo</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                <label className="form-check-label" for="flexCheckChecked">
                                Acepto ser contactado via correo electrónico
                                </label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                style={{maxWidth: '300px'}}
                                onClick={() =>closeModal()}
                            >Restablecer</button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    )
}
