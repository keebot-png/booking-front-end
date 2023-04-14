import React from 'react';
import { useLocation } from 'react-router-dom';
import BookingForm from './BookingForm';

const TeachersDetails = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="book-teacher-div">
      <div className="teachers-det">
        <img src={data.teacher.image} alt="" />
        <h2>
          Name:&nbsp;
          {data.teacher.name}
        </h2>
        <p>
          Professional summary:&nbsp;
          {data.teacher.professional_summary}
        </p>
        <p>
          Years of Experience:&nbsp;
          {data.teacher.years_of_experience}
          years
        </p>
        <p>
          Hourly rating: $
          {data.teacher.hourly_rating}
        </p>
      </div>
      <div className="form">
        <BookingForm teacherInfo={data.teacher} courseInfo={data.data} />
      </div>
    </div>
  );
};

export default TeachersDetails;
