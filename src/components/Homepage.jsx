// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import getCourses from '../features/courses/courseApi';


// const Homepage = () => {

//   const courses = useSelector(state => state.courses.courses) 
//   console.log(courses)

//   return (
//     <div>
//       <h1>Courses</h1>
//     </div>
//   )
// }

// export default Homepage;

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCourses } from '../features/courses/courseApi';
import CourseList from './CourseList';

function Homepage() {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);
  const status = useSelector(state => state.courses.status);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch, courses.length]);

  console.log(courses)

  return (
    <div>
        {courses.length ? <CourseList courses={courses} />
    : <p>{status}</p>}
    {/* <h1>Courses</h1> */}
    </div>
  );
}

export default Homepage