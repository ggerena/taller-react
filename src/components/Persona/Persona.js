import React from 'react';

import './Persona.css'

const Persona = (props) => {
    return (
        <div className="Persona">
            <p>Hola, soy {props.humano.name}</p>
            <p>Tengo {props.humano.age} años</p>
            <button 
                onClick={props.click}>Accion</button>
        </div>
    );
}

export default Persona;

