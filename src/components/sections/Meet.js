import React, {useState} from 'react'
import { useForm } from '../../hooks/useForm';
import { API, apiKey } from '../../helpers/getAPI';

export const Meet = () => {

    const [calendarId, setCalendarId] = useState("");
    const [isCheck, setIsCheck] = useState(false);
    const [formValues, handleInputChange] = useForm({})
    const { celular, celular2 } = formValues

    const states = [
        {state: 'Aguascalientes', value: 97},
        // {state: 'Asistencia Psicológica 2', value: 184},
        {state: 'Baja California', value: 87},
        {state: 'Baja California Sur', value: 88},
        {state: 'Campeche', value: 112},
        {state: 'CDMX', value: 123},
        {state: 'Chiapas', value: 111},
        {state: 'Chihuahua', value: 90},
        {state: 'Coahuila', value: 91},
        {state: 'Colima', value: 99},
        {state: 'Durango', value: 94},
        {state: 'Estado de Mexico', value: 118},
        // {state: 'GOB 5', value: 174},
        // {state: 'GOB 6', value: 175},
        // {state: 'GOB 7', value: 183},
        // {state: 'GOB 8', value: 189},
        {state: 'Guanajuato', value: 103},
        {state: 'Guerrero', value: 101},
        {state: 'Hidalgo', value: 105},
        {state: 'Jalisco', value: 115},
        {state: 'Michoacán', value: 100},
        {state: 'Morelos', value: 102},
        {state: 'Nayarit', value: 98},
        {state: 'Nuevo León', value: 128},
        {state: 'Oaxaca', value: 108},
        // {state: 'Obesidad Norte', value: 176},
        // {state: 'Obesidad Sur', value: 177},
        {state: 'Puebla', value: 107},
        {state: 'Querétaro', value: 104},
        {state: 'Quintana Roo', value: 114},
        {state: 'San Luis Potosi', value: 96},
        {state: 'Sinaloa', value: 93},
        {state: 'Sonora', value: 89},
        {state: 'Tabasco', value: 110},
        {state: 'Tamaulipas', value: 92},
        {state: 'Tlaxcala', value: 106},
        {state: 'Veracruz', value: 109},
        {state: 'Yucatán', value: 113},
        {state: 'Zacatecas', value: 95},
    ]

    const handleCheck = () => {
        setIsCheck(!isCheck);
    }

    const handleSelectState  = (e) => {
        const option = e.target.value;
        setCalendarId(option);
    }

    const validateForm = () => {
        const cReplace = celular.replace(/\s+/g, '')
        const cReplace2 = celular2.replace(/\s+/g, '')
        if (cReplace !== cReplace2) {
            return false;
        } else if (cReplace.length && cReplace2.length !== 10) {
            return false;
        } else if (calendarId.length === 0) {
            return false;
        } else if (!isCheck) {
            return false;
        }
        return true
    }

    const submitMeet = async () => {
        if (validateForm()) {
            try {
                const response = await fetch(API("setAffiliationEventRequest"), {
                    'headers': {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({
                        cardnumber: "6601004438277",
                        key: apiKey,
                        calendarid: parseInt(calendarId),
                        cellphone: celular,
                    })
                });
                if (response.status === 200) {
                    const result = await response.json();
                    console.log(result);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div id="citaNueva" tabindex="-1" aria-labelledby="citaNuevaLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header flex-column border-0 pt-1">
                <h1 className="modal-title" id="citaNuevaLabel">Nueva solicitud de cita</h1>
                </div>
                <div className="modal-body">
                <div className="container-fluid">
                    <div className="row px-1">
                    <h3 className="text-center text-black">¿Por qué medio te interesa tu sesión?</h3>

                    <div className="col-12 col-md-8 mb-4 mb-md-1">
                        <label for="basic-url" className="form-label">Lugar</label>
                        <div className="input-group mb-3">
                        <select name="placeCita" className="btn-gray" onChange={handleSelectState}>
                            <option selected="selected" value="selected">Seleccione el lugar</option>
                            {states.map((option, index) => (
                                <option key={index} value={option.value}>{option.state}</option>
                            ))}
                        </select>
                        </div>
                    </div>

                    {/* <div className="col-12 col-md-4 mb-4 mb-md-1">
                        <p href="#id" className="btn bg-purple">Whatsapp</p>
                    </div> */}

                    <div>
                        <p>Para poder optimizar el servicio con un especialist, es necesario nos permita contactarlo, asñi como
                        confirmar su número teléfonico y/o celular.</p>
                        <p>*Permiso Contacto</p>
                        <div className="form-check">
                        {/* <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            checked={isCheck}
                            onChange={handleCheck}
                        /> */}
                        {/* <label className="form-check-label" for="flexCheckDefault">
                            Acepto ser contactado
                        </label> */}
                        </div>
                    </div>

                    <div className="col-12 col-md-8 mb-4 mb-md-1">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label text-purple">Celular (+521)</label>
                            <input
                                type="text"
                                className="form-control btn-gray text-start text-purple"
                                id="exampleFormControlInput1"
                                value={celular}
                                name="celular"
                                onChange={handleInputChange}
                                placeholder="55 2367 1965"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label text-purple">Confirme Celular (+521)</label>
                            <input
                                type="text"
                                className="form-control btn-gray text-start text-purple"
                                id="exampleFormControlInput1"
                                name="celular2"
                                value={celular2}
                                onChange={handleInputChange}
                                placeholder="55 2367 1965"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <p className="text-purple fw-bold">¿No encuentras tu estado?</p>
                        <p>comunicate con nosotros al 800-6968-696</p>
                        <p className="btn btn-success" onClick={submitMeet}>Guardar</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
