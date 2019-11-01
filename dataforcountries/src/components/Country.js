import React from 'react'
import Weather from './Weather'


const Country = ( {country} ) => {
    


    const languages = () => country.languages.map(language =>
        <li key={language.name} > {language.name} </li>
        )

    


    return(
        <div>
            <h1> {country.name} </h1>
            <div>capital {country.capital} </div>
            <div> population {country.population} </div>

            <h2> languages </h2>
            <ul> {languages()} </ul>
            <img src={country.flag} alt='flag' width='150' />
            <Weather capital={country.capital} />
            
        </div>
    )
}

export default Country


