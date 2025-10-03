import React, { useState } from 'react';
import '../styles/country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    const [visited,setVisited] = useState(false)

   const handleVisited = () => {
  setVisited(!visited)
  handleVisitedCountries(country)
   }


   
    return (
        <div className= {`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt="" />
            <h1> Name: {country.name.common}</h1>
             <h3>Population: {country.population.population}</h3>
             <h3>Area: {country.area.area}
                { country.area.area > 30000 ? " Big Country" : " Small Country"}
             </h3>
             <button onClick={handleVisited}>
                { visited ? 'Visited' : 'Not Visited'}
             </button>
             <button onClick={() => {handleVisitedFlag(country.flags.flags.png)}}>Add Visited Flags</button>
        </div>
    );
};

export default Country;