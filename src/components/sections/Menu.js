import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { Context } from '../../context/Context';
import { types } from '../../types/types';

export const Menu = () => {

    const {dispatch}  = useContext( Context );
    const history = useHistory();

    const [select, setSelect] = useState({sa: true});

    const handleSelect = (section) => {
        setSelect({[section]: true})
    }

    const handleLogout = () => {
        dispatch({
            type: types.login,
            payload: {}
        });
        history.replace('/');
    }

    return (
        <details>
            <summary>Menú</summary>
            <ol>
                <li className={`item ${select.sa && "current"}`}
                    onClick={()=>handleSelect("sa")}
                >Saxenda®</li>
                <li className={`item ${select.oz && "current"}`}
                    onClick={()=>handleSelect("oz")}
                >Ozempic®</li>
                <li className={`item ${select.ry && "current"}`}
                    onClick={()=>handleSelect("ry")}
                >Rybelsus®</li>
                <li className={`item ${select.xu && "current"}`}
                    onClick={()=>handleSelect("xu")}
                >Xultophy®</li>
                <hr />
                <li onClick={handleLogout}>Cerrar sesión</li>
            </ol>
        </details>
    )
}
