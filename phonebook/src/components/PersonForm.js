import React from 'react'
import personService from '../services/persons'


const PersonForm = (props) => {

  


    const addPerson = (event) => {
        event.preventDefault()
    
        const nameObject = {
          name: props.newName,
          number: props.newNumber
        }
    
        var names = props.persons.map((person) => person.name.toLowerCase())


        if(names.includes(props.newName.toLowerCase()) === false) {
          personService.create(nameObject).then(response => {
            props.setPersons(props.persons.concat(response.data))
            props.setNewName('')
            props.setNewNumber('')

            props.setMessage(
              'Added ' + props.newName
            )

            setTimeout(() => {
              props.setMessage('')
            }, 5000)

          })


      } else {
        var conf = window.confirm(`${props.newName} is already added to phonebook, replace the old number with a new one?`)

        if(conf) {
          const person = props.persons.find(p => p.name === props.newName)
          person.number = props.newNumber

          personService.replace(person.id, person).then(response => {
            console.log('done')
            props.setPersons(props.persons)
            props.setNewName('')
            props.setNewNumber('')
          })
          .catch(error => {
            props.setMessage('Information on ' + props.newName + ' has already been removed from server')
            setTimeout(() => {
              props.setMessage('')
            }, 5000)
          })
          

        } else {
          props.setNewName('')
          props.setNewNumber('')
        }
      }
    }
    



    return(
        <div>
        <form onSubmit={addPerson} >
         <div>  name: <input value={props.newName} onChange={props.handleNameChange} /> </div>
         <div>  number: <input value={props.newNumber} onChange={props.handleNumberChange} /> </div>
         <div>
             <button type="submit">add</button>
         </div>
      </form>
        </div>
    )
}

export default PersonForm