import React, { useEffect, useState } from 'react'
import { getImg } from '../../helpers/getImg'
import { API, apiKey } from '../../helpers/getAPI';

export const MyShops = () => {

    const [shops, setShops] = useState([]);

    const getShops = async () => {
        try {
            const response = await fetch(API("getCardRecord"), {
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    cardnumber: "6601004280838",
                    key: apiKey,
                })
            });
            if (response.status === 200) {
                const result = await response.json();
                setShops(result.balance)
            }
        } catch (error) {
            console.log(error);
        }
    }
    console.log(shops);

    useEffect(() => {
        getShops()
    }, []);

    return (
        <div id="nav-shopping" role="tabpanel" aria-labelledby="nav-shopping-tab">
            <div className="dashboard-shop">
            <p style={{color: '#443280', fontSize: '28px', fontWeight: '300'}}>Historial</p>
            <div className="dashboard-shop-discounts">
                <p style={{color: '#443280', fontSize: '33px', fontWeight: '800', textAlign: 'right', marginBottom: '0'}}>
                Has ahorrado
                en tus compras $480</p>
                <p style={{color: '#443280', fontSize: '13px', textAlign: 'center'}}>Precio promedio * % descuento</p>
            </div>

            <div className="dashboard-shop-table">
                <div>
                <img src={getImg(`saxenda-50-off.png`)} alt="saxenda" style={{maxWidth: '200px', marginRight: '2rem'}}
                    className="d-none d-md-block"/>
                </div>

                <div className="table-responsive mb-4">
                <table>
                    <thead className="border-1">
                    <tr>
                        <th>Ubicación</th>
                        <th>Ticket</th>
                        <th>Fecha</th>
                        <th>Artículo</th>
                        <th>Cantidad</th>
                    </tr>
                    </thead>
                    <tbody className="border-1">
                        {shops.map((item, index) => (
                            <tr index={index}>
                                <td>
                                    <p>Servicios farmaceúticos especializados</p>
                                    <p>Sucursal 1</p>
                                </td>
                                <td>4423363</td>
                                <td>{item.InvoiceDate}</td>
                                <td>{item.ItemName}</td>
                                <td>
                                    {item.Units === 1 ? (
                                        <p>{item.Units} caja</p>
                                    ) : (
                                        <p>{item.Units} cajas</p>
                                    )}
                                    <p>{item.Discount}% descuento</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
    )
}
