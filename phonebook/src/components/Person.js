import React from 'react'
import Remove from './Remove'


const Person = ({ person } ) => {


    return (
      <div> {person.name} {person.number} <Remove person={person}  />   </div>
    )
  }

  export default Person