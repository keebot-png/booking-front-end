import React from 'react'

const CourseList = ({ courses } ) => {
  return (
    <div>
          <div className="course-grid">
    { courses.map((coursesData) => <Country data={countryData} key={countryData.name} />) }
  </div>
    </div>
  )
}

export default CourseList