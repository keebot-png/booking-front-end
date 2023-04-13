import React from 'react'
import Course from './Course'

const CourseList = ({ courses } ) => {
  return (
    <div>
        <div className="course-grid">
        { courses.map((coursesData) => <Course data={coursesData} key={coursesData.id} />) }
        </div>
    </div>
  )
}

export default CourseList