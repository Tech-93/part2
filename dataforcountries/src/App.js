import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Render from './components/Render'



const App = () => {
  const [searchword, setSearchword] = useState('')
  const { 0: countries, 1: setCountries } = useState([])



  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [setCountries])
  




  const handleSearchChange = (event) =>{
    console.log(event.target.value)
    setSearchword(event.target.value.toLowerCase())

  }

  


  return (
    <div>
      <form>
        <div> find countries <input value={searchword} onChange={handleSearchChange} /> </div>
      </form>

      <Render 
      countries={countries} 
      
      searchword={searchword} 
      setSearchword={setSearchword} 
      />
      


    </div>
  )
}

export default App
