import React, { use, useState } from 'react';
import Country from './Country';
import '../styles/countries.css'

const Countries = ({countryPromise}) => {
    const[visitedCountry,setVisitedCountry] = useState([])
    const[visitedFlags,setVisitedFlags] = useState([])

    const handleVisitedCountries =(country) => {
      const newVisited =[...visitedCountry, country]
      setVisitedCountry(newVisited)
    }
    const handleVisitedFlag =(flag) => {
    const newVisitedFlag = [...visitedFlags,flag]
    setVisitedFlags(newVisitedFlag)
}
     const countryData = use(countryPromise)
        const countries = countryData.countries
    return (
        <div>
            <h1>Total : {countries.length}</h1>
            <h3>Visited Countries:{visitedCountry.length} </h3>
            <ol>
                {
                    visitedCountry.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags'>
{
    visitedFlags.map(flag => <img src={flag}></img>)
}
            </div>
           <div className='countries'>
             {
                countries.map(country => <Country key={country.cca3.cca3} country = {country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;