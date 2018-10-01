import React from 'react'


const SchoolRow = ({ school, selectSchool })=> {
  const { name, id, students } = school
  return (
    <li onClick={()=> selectSchool(id)}>
      {`${name}      (Students: ${students.length})`}
    </li>
  )
}


export default SchoolRow