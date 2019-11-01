import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Render from './components/Render'
import personService from './services/persons'
import Notification from './components/Notification'
import './index.css'




const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchword, setSearchword] = useState('')
  const [message, setMessage] = useState('')


  
  
  useEffect(() => {
    personService.getAll().then(response => {
      setPersons(response.data)
    })
      
  }, [])
  console.log('render', persons.length, 'notes')





  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)

  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) =>{
    console.log(event.target.value)
    setSearchword(event.target.value.toLowerCase())

  }





  return (
    <div>

      <h1>Phonebook</h1>

      <Notification message={message} setMessage={setMessage}  />

      <Filter 
      searchword = {searchword}
      handleSearchChange = {handleSearchChange}
      />



      <h2> add a new </h2>

      <PersonForm 
      newName = {newName}
      setNewName = {setNewName}
    
      newNumber = {newNumber}
      setNewNumber = {setNewNumber}

      persons = {persons}
      setPersons = {setPersons}
      
      handleNameChange = {handleNameChange}
      handleNumberChange = {handleNumberChange}

      message={message}
      setMessage={setMessage}
      />



      <h2>Numbers</h2>

      <Render 
      persons = {persons} 
      searchword = {searchword}
      
      
      
      />

    </div>
  )
}



export default App