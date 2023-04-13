import React, { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import getTeachers from '../features/teachers/teachersApi';

const CourseDetails = () => {
  const location = useLocation();
  const data = location.state;

  const navigate = useNavigate();

  const handleRoute = (teacher, value) => {
    navigate(`/courses/${value.id}/${teacher.name}`, { state: { teacher, data } });
  };

  const courseOutline = data.course_outline.slice(0, 8);

  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const [teachers, setTeachers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTeachers = async () => {
      const teachersData = await dispatch(getTeachers(data.id));

      return setTeachers(teachersData.payload);
    };
    fetchTeachers();
  }, [data.id, dispatch]);

  return (
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
          { showAll ? data.course_outline.map((outline) => (
            <div className="lesson-div" key={outline.id}>
              <p key={outline.id}>
                Lesson
                {data.course_outline.indexOf(outline) + 1}
                :
                {outline}
              </p>
            </div>
          )) : courseOutline.map((outline) => (
            <div className="lesson-div" key={outline.id}>
              <p key={outline.id}>
                Lesson
                {data.course_outline.indexOf(outline) + 1}
                :
                {outline}
              </p>
            </div>
          ))}
          <button type="button" onClick={handleShowAll}>See all</button>
        </div>
      </div>

      <div className="teachers-section">
        <h2>Click to book a course Instructors :</h2>
        <div className="display-teachers">
          {teachers.map((teacher) => (
            <button type="button" className="teachers-details" onClick={() => handleRoute(teacher, data)} key={teacher.id}>
              <img className="teachers-img" src={teacher.image} alt="" />
              <p className="teachers-name">{teacher.name}</p>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CourseDetails;
