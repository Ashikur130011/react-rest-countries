import React, { useEffect, useState } from 'react';
import Country from '../Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect( ()=> {

        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])
    return (
        <div>
            <h1>About {countries.length} Counrties are here !!</h1>
            <div className='countryContainer'>
                {
                    countries.map(country => <Country key={country.car.cca2} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;