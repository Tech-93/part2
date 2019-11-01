import React from 'react'
import Country from './Country'

const Render = (props) => {



    const Countries = ({ country }) => {
      return (
          <div> {country.name} 
          <button onClick={()=> props.setSearchword(country.name.toLowerCase())} > show </button>
          </div>
        )
      }




    const displayCountries = props.countries.filter(country => country.name.toLowerCase().includes(props.searchword))
    console.log(displayCountries.length)


    



    const renderCountries = () => displayCountries.map(country =>
        <Countries key={country.name} country={country} />
        )

    const countryRender = () => displayCountries.map(country => 
      <Country key={country.name} country={country} />
      )




      
    
    if(displayCountries.length > 10 && displayCountries.length < 250){
      return(
        <div> Too many matches, specify another filter</div>
        )


    } else if (displayCountries.length === 250) {
      return(
        <div> </div>
      )


    } else if (displayCountries.length === 1) {
      return(
        <div> 
        <div>{countryRender()}</div>
        </div>

      )

    }
    else {
      return(
      <div> {renderCountries()} </div>
        )
    }
}



export default Render