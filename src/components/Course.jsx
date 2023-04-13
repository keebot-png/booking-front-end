import React from 'react';
import { useNavigate } from 'react-router-dom';

const Course = ({ data }) => {
  const text = data?.description?.substring(0, 100);

  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/courses/${data.id}`, { state: data });
  };

  return (
    <div className="course-card">
      <img src={data.image} alt="" />
      <div className="course-description">
        <h3>{data.title}</h3>
        <p>
          {text}
          {' '}
          <button type="button" className="see-more" onClick={handleRoute}>...see more</button>
        </p>
      </div>
    </div>
  );
};

export default Course;
