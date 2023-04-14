import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCourses } from '../features/courses/courseApi';
import CourseList from './CourseList';

function Homepage() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const status = useSelector((state) => state.courses.status);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch, courses.length]);

  return (
    <div>
      {courses.length ? <CourseList courses={courses} />
        : <p>{status}</p>}
    </div>
  );
}

export default Homepage;
