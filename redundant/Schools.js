import React from 'react'
import {Link} from 'react-router-dom'


const Schools = (props) => {
  const schools = props.schools
  return (
    <div id='stories' className='column'>
      {
        schools.map(school => (
          <div className='story' key={school.id}>
            <Link to={`/schools/${school.id}`}> 
              <h4>{school.name}     (Students: {school.students.length}) </h4>
            </Link>
            <hr />
          </div>
        ))
      }
    </div>
  )
}

export default Schools