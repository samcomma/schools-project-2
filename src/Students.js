import React from 'react'
import {Link} from 'react-router-dom'


const Students = (props) => {
  const students = props.students
  return (
    <div id='stories' className='column'>
      <br />
      {
        students.map(student => (
          <div className='story' key={student.id}>
            <Link to={`/students/${student.id}`}> 
              <div>{student.firstName} {student.lastName} (attending: {student.school.name})</div>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Students