import React from 'react'
import Person from './Person'



const Render = (props) => {
  


  const displayPersons = props.persons.filter(person => person.name.toLowerCase().includes(props.searchword))
    
  const renderPersons = () => displayPersons.map(person =>
    <Person key={person.name} person={person}  />
  )

  
    return(
        <div> {renderPersons()} </div>
    )
}

  export default Render