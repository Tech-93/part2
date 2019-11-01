import React from 'react'
import personService from '../services/persons'


const Remove = ({person}) => {

    const handleClick = () => {
    var conf = window.confirm('Delete ' + person.name + ' ?')
    
    if(conf) {
        personService.remove(person.id).then(response => {
            window.location.reload()
        })
    }
}

    return(
        <button onClick={handleClick} > delete </button>
    )
}

export default Remove