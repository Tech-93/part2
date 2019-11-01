import React from 'react'

const Filter = (props) => {
    return (
        <div>
            <form>
        <div> filter shown with <input value={props.searchword} onChange={props.handleSearchChange} /> </div>
      </form>
        </div>
    )
}

export default Filter