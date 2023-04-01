import React, {useState, useEffect, useContext} from 'react'
import { useHistory } from 'react-router-dom';
import { Context } from '../../context/Context';
import { types } from '../../types/types';
import { API } from '../../helpers/getAPI';
import { getImg } from '../../helpers/getImg';
import { useForm } from '../../hooks/useForm'
import useModal from '../../hooks/useModal';
import { Modal } from '../UI/Modal'
import FacebookLogin from 'react-facebook-login';
const decoder = new TextDecoder('utf-8')

export const FormRegister = ({dataTarget, isMedic }) => {

    const {dispatch}  = useContext( Context );
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleResponse = (response) => {
      setName(response.name);
      setEmail(response.email);
    };

    // Modal
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const [sendData, setSendData] = useState(false);
    const [card, setCard] = useState("");

    // Lógica formulario
    const [formValues, handleInputChange] = useForm({
        name1: [name],
        meCedula1: '33',
        celular1: '66',
        email1: [email],
        password1: '8888',
    })
    const [yesEmail, setYesEmail] = useState("");
    const { name1, ape1, nacimiento1, curp1, meNombre1, meCedula1,
        farmaco1, telefono1, celular1, email1, password1, estado1,
        cp1, permission1, gender, email2
    } = formValues

    const allInputs = () => {
        if (name1 && nacimiento1
            && email1 && password1
            && dataTarget) {
            setSendData(true);
        } else {
            setSendData(false);
        }
    }

    useEffect(() => {
        allInputs()
    }, [formValues, dataTarget]);

    useEffect(() => {
        if (email1?.length === 0) {
            setYesEmail("El Email es obligatorio");
        } else {
            setYesEmail("");
        }
    }, [email1]);

    useEffect(() => {
        getTarjet()
    }, []);

    const getTarjet = async () => {
        try {
            const response = await fetch(API("getCardNew"), {method: "GET"});
            if (response.status === 200) {
                const {cardnumber} = await response.json();
                setCard(cardnumber);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleOutTarjet = async (e) => {
        e.preventDefault()
        // const dateArray = nacimiento1.split('-')
        // const nacimiento = `${dateArray[0]}${dateArray[1]}${dateArray[2]}`
        if (!email1?.includes('@')) {
            setYesEmail("El correo no es válido")
        } else {
            setYesEmail("")
            openModal()
        }
        try {
            const response = await fetch(API("SyncLeads"), {
                // 'headers': {
                //     'Access-Control-Allow-Origin': '*',
                //     'Content-Type': 'application/json'
                // },
                method: "POST",
                body: JSON.stringify({
                    email: email1,
                    name: name1,
                    lastname: "apellido",
                    gender: "male",
                    cardnumber: dataTarget.length > 0 ? dataTarget : card,
                    password: "33"
                })
            });
            if (response.status === 200) {
                response.body
                    .getReader()
                    .read()
                    .then(({value, done}) => {
                        const data = decoder.decode(value)
                        console.log(data);
                        if (data.includes('"status":"created"')) {
                            console.log("created");
                            if (isMedic) {
                                alert("Datos enviados al paciente")
                            } else {
                                dispatch({
                                    type: types.login,
                                    payload: {login: true, name: 'Aaron'}
                                });
                                history.replace('/dashboard?origin=register');
                            }
                        }
                        if (data.includes('"status":"updated"')) {
                            console.log("updated");
                        }
                    })
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>


            <form onSubmit={handleOutTarjet}>
                <input
                    name='name1'
                    value={name}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Nombre Completo*'
                />
                {/* <input
                    name='ape1'
                    value={ape1}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Apellidos*'
                /> */}
                {/* <div onChange={handleInputChange} style={{
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '10px 0 12px'
                    }}
                    className="aling-text"
                >
                    <input type="radio" value="1" name="gender" />
                    <p style={{
                        margin:'0',
                        padding: '0 5px'
                    }} >Masculino</p>
                    <input type="radio" value="2" name="gender" />
                    <p style={{
                        margin:'0',
                        padding: '0 5px'
                    }} >Femenino</p>
                </div> */}
                {/* <div style={{
                        display: 'flex',
                        fontSize: '16px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: '300px'
                    }}
                    className="aling-text"
                > */}
                    {/* <label style={{marginRight: '5px'}}>*Fecha de nacimiento</label> */}
                    <input
                        name='nacimiento1'
                        value={nacimiento1}
                        onChange={handleInputChange}
                        type='date'
                        placeholder='Fecha de nacimiento*'
                    />
                {/* </div> */}
                {/* <input
                    name='curp1'
                    value={curp1}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='CURP*'
                /> */}
                {/* <p style={{
                        fontSize: '16px',
                        textAlign: 'center',
                        margin: '0',
                        width: '100%'
                    }}
                    className="aling-text"
                >Datos médicos</p>
                <input
                    name='meNombre1'
                    value={meNombre1}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Médico Nombre*'
                /> */}
                <input
                    name='meCedula1'
                    value={meCedula1}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Cédula médico*'
                />
                {/* <input
                    name='farmaco1'
                    value={farmaco1}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Fármaco/producto prescrito*'
                /> */}
                {/* <input
                    name='telefono1'
                    value={telefono1}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Teléfono*'
                /> */}
                <input
                    name='email1'
                    value={email}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Email*'
                />
                <input
                    name='email2'
                    value={email2}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Repite tu email*'
                />
                {yesEmail.length > 0 && (
                    <p>{yesEmail}</p>
                )}
                <input
                    name='celular1'
                    value={celular1}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Celular*'
                />
                {!isMedic && (
                    <input
                        name='password1'
                        value={password1}
                        onChange={handleInputChange}
                        type='password'
                        placeholder='Crear contraseña*'
                    />
                )}


                {/* <p style={{fontSize: '16px', margin: '0'}}>Permiso Contacto</p>
                <div onChange={handleInputChange} style={{
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '10px 0 12px',
                        textAlign: 'center',
                        width: '100%'
                    }}
                    className="aling-text"
                >
                    <input type="radio" value="1" name="permission1" />
                    <p style={{
                        margin:'0',
                        padding: '0 5px'
                    }} >Sí</p>
                    <input type="radio" value="2" name="permission1" />
                    <p style={{
                        margin:'0',
                        padding: '0 5px'
                    }} >No</p>
                </div> */}
                {/* <input
                    name='estado1'
                    value={estado1}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Estado'
                />
                <input
                    name='cp1'
                    value={cp1}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Código Postal'
                /> */}


<FacebookLogin
        appId="1497912747302346"
        autoLoad={true}
        fields="name,email"
        callback={handleResponse}
      />
                {!isMedic && (
                    <button
                        type='submit'
                        id='contact-submit'
                        className="btn-c btn-validate-email"
                        disabled={!sendData}
                    >Enviar</button>
                )}
            </form>
            {isMedic && (
                <div className="col-12 col-md-5 text-center">
                    <p className="text-green fw-bold step--1">Se generará y enviará la tarjeta vía email o celular a su paciente
                    </p>
                    <img src={getImg(`gen-tarjet.jpeg`)} alt="tarjet" />
                    <p className="p-required-fields">*Campos obligatorios</p>
                    <button onClick={handleOutTarjet} className="btn btn-lg btn-success fw-bold">Enviar a su paciente</button>
                    <br/>
                    <small>*Campos obligatorios</small>
                </div>
            )}
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                <p>Se envío un correo de verificación a su e-mail/SMS</p>
                <p>Correo: {email1}</p>
                <button
                    onClick={()=>closeModal()}
                    className="close-modal-r"
                >Aceptar
                </button>
            </Modal>
        </>
    )
}
