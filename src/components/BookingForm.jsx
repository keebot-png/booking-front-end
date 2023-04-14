import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router';
import { addReservations } from '../features/reservations/reservationPost';

const BookingForm = ({ teacherInfo, courseInfo }) => {
  const [startDate, setStartDate] = useState(new Date());

  const [checkboxes, setCheckboxes] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;

    if (event.target.checked) {
      setCheckboxes([...checkboxes, value]);
    } else {
      setCheckboxes(checkboxes.filter((item) => item !== value));
    }
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      course_name: courseInfo.title,
      teacher_name: teacherInfo.name,
      day: startDate,
      times: checkboxes,
      course_id: courseInfo.id,
      teacher_id: teacherInfo.id,
    };

    dispatch(addReservations(reservation));
    navigate('/my-bookings');
  };

  return (
    <form className="booking-form" onSubmit={handleFormSubmit}>
      <h2 className="container" style={{ color: '#70e000' }}>
        Book a session with&nbsp;
        <span style={{ color: 'black' }}>{teacherInfo.name}</span>
      </h2>
      <div className="container booking-details">
        <h3>Booking details</h3>
        <p>
          Name of course: &nbsp;
          <span className="emphasis">{courseInfo.title}</span>
        </p>
        <p>
          Hourly rating for&nbsp;
          {teacherInfo.name}
&nbsp;
          :
          <span className="emphasis">$50</span>
        </p>
      </div>
      <div className="time-table container">
        <div className="available-days">
          <h3>Choose a day</h3>
          <div>
            <DatePicker className="date-input" selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
        </div>
        <div className="available-times">
          <h3>Choose times</h3>
          <div>
            <label>
              <input type="checkbox" id="first" name="first" value="10:00am - 11:00am" onChange={handleCheckboxChange} />
              10:00am - 11:00am
            </label>
            <br />

            <label>
              <input type="checkbox" id="second" name="second" value="11:00am - 12:00pm" onChange={handleCheckboxChange} />
              11:00am - 12:00pm
            </label>
            <br />

            <label>
              <input type="checkbox" id="third" name="third" value="13:00pm- 14:00pm" onChange={handleCheckboxChange} />
              13:00pm- 14:00pm
            </label>
            <br />

            <label>
              <input type="checkbox" id="fourth" name="forth" value="14:00pm- 15:00pm" onChange={handleCheckboxChange} />
              14:00pm- 15:00pm
            </label>
            <br />

            <label>
              <input type="checkbox" id="fifth" name="fifth" value="15:00pm- 16:00pm" onChange={handleCheckboxChange} />
              15:00pm- 16:00pm
            </label>
            <br />

            <label>
              <input type="checkbox" id="sixth" name="sixth" value="16:00pm- 17:00pm" onChange={handleCheckboxChange} />
              16:00pm- 17:00pm
            </label>
            <br />

            <label>
              <input type="checkbox" id="seventh" name="seventh" value="17:00pm- 18:00pm" onChange={handleCheckboxChange} />
              17:00pm- 18:00pm
            </label>
            <br />
          </div>
        </div>
      </div>
      <div className="booking-btn">
        <button type="submit" className="book-session">Book session</button>
      </div>
    </form>
  );
};

export default BookingForm;
