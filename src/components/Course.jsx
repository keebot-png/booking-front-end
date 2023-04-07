import React from 'react';
import ReactLogo from '../assets/react.svg';

const Course = () => (
  <div className="course-page">
    <div className="course-display">
      <div className="course-img-div">
        <img className="course-img" src={ReactLogo} alt="React logo" />
        <h2 className="course-description">The Complete ReactJs Course - Basics to Advanced [2023]</h2>
      </div>
      <div className="course-details">
        <h2>Course content</h2>
        <div className="lesson-div">
          <p>Lesson 1</p>
          <p>React Introduction</p>
        </div>
        <div className="lesson-div">
          <p>Lesson 2</p>
          <p>JSX</p>
        </div>
        <div className="lesson-div">
          <p>Lesson 3</p>
          <p>Introduction to Components</p>
        </div>
        <div className="lesson-div">
          <p>Lesson 4</p>
          <p>Import and Export Modules</p>
        </div>
        <div className="lesson-div">
          <p>Lesson 5</p>
          <p>Styling Components</p>
        </div>
        <div className="lesson-div">
          <p>Lesson 6</p>
          <p>Components in Details</p>
        </div>
        <div className="lesson-div">
          <p>Lesson 7</p>
          <p>Practice Problem One</p>
        </div>
        <div className="lesson-div">
          <p>Lesson 8</p>
          <p>Component Life Cycle</p>
        </div>
        <small>Show all</small>
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
);

export default Course;
