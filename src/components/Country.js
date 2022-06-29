import React from 'react';
import './Country.css'

const Country = (props) => {
    const{name, capital,flags} = props.country;
    return (
        <div className='country'>
            <h1>{name.common}</h1>
            <h3>Capital: {capital}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;