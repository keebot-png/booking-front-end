import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const CourseDetails = () => {
  const location = useLocation();
  const data = location.state;

  const teachers = data.teachers
  const course_outline = data.course_outline.slice(0, 8)

  console.log(teachers)

  const [showAll, setShowAll] = useState(false)

  const handleShowAll = () => {
    setShowAll(!showAll)
  }

  return(
  <div className="course-page">
    <div className="course-display">
      <div className="course-img-div">
        <img className="course-img" src={data.image} alt="React logo" />
        <div>
          <h2 className="course-description">{data.title}</h2>
          <p>{data.description}</p>
        </div>
      </div>
      <div className="course-details">
        <h2>Course content</h2>
          { showAll ? data.course_outline.map(outline => 
            <div className="lesson-div">
              <p>Lesson {data.course_outline.indexOf(outline) + 1}: {outline}</p>
            </div>
          ) : course_outline.map(outline => 
            <div className="lesson-div">
              <p>Lesson {data.course_outline.indexOf(outline) + 1}: {outline}</p>
            </div>
          )}
        <button onClick={handleShowAll}>See all</button>
      </div>
    </div>
    <div className="teachers-section">
      <h2>Course Instructors :</h2>
      <div className="display-teachers">

        <div className="teachers-details">
          <img className="teachers-img" src="https://randomuser.me/api/portraits/men/4.jpg" alt="" />
          <p className="teachers-name">James Patrick</p>
        </div>
        <div className="teachers-details">
          <img className="teachers-img" src="https://randomuser.me/api/portraits/women/3.jpg" alt="" />
          <p className="teachers-name">Angela John</p>
        </div>
        <div className="teachers-details">
          <img className="teachers-img" src="https://randomuser.me/api/portraits/men/8.jpg" alt="" />
          <p className="teachers-name">Wesley Thomas</p>
        </div>
        <div className="teachers-details">
          <img className="teachers-img" src="https://randomuser.me/api/portraits/women/8.jpg" alt="" />
          <p className="teachers-name">Jane Doe</p>
        </div>
        <div className="teachers-details">
          <img className="teachers-img" src="https://randomuser.me/api/portraits/men/12.jpg" alt="" />
          <p className="teachers-name">Andrew whales</p>
        </div>
      </div>
    </div>
  </div>
  )
};

export default CourseDetails;
