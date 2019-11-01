import React from 'react'

const Course = (props) => {
    
    
    const Header = (props) => {
      return(
        <div>
          <h1> {props.course.name} </h1>
        </div>
      )
    }

    const Content = (props) => {
      
      const Part = () => {
        
        var info = props.course.parts.map(function(parts) {
          return(
            <p key={parts.id} > {parts.name + ' ' + parts.exercises} </p>
          )
        })
        
        return(
          <div>
             {info} 
          </div>

        )
      }

      return(
        <Part />
      )
    }

    const Total = (props) => {
      
      var all = props.course.parts.map((part) => part.exercises)    
      var total = all.reduce((a,b) => a+b, 0)
      
      return(
        <h4> total of {total} exercises </h4>
      )
    }

    const Orgainizer = (props) => props.courses.map(course => 
      <div key={course.id} >
      <Header course = {course} />
      <Content course = {course} />
      <Total course = {course} />
      </div>
      )


    return(
      <div>
        <Orgainizer courses = {props.courses} />
      </div>
    )
  }

  export default Course