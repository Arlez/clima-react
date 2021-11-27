import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

    //extraer datos 
    const {name, main} = resultado;

    if(!name)return null;

    const kelvin = 273.15;
    const temperatura = main.temp - kelvin;
    const temperaturaMaxima = main.temp_max - kelvin;
    const temperaturaMinima = main.temp_max - kelvin;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El Clima en: {name} </h2>
                <p className="temperatura">
                    {temperatura.toFixed(0)} <span>&#x2103;</span>
                </p>
                <p>
                    Temperatura máxima: {temperaturaMaxima.toFixed(0)} <span>&#x2103;</span>
                </p>
                <p>
                    Temperatura mínima: {temperaturaMinima.toFixed(0)} <span>&#x2103;</span>
                </p>
                <p>
                    Humedad del Ambiente: {main.humidity} <span>&#x2103;</span>
                </p>
            </div>
        </div>
     );
}
 
Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;