import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = ({ teacherInfo, courseInfo }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="booking-form">
      <h2 className="container" style={{ color: '#70e000' }}>
        Book a session with
        <span style={{ color: 'black' }}>{teacherInfo.name}</span>
      </h2>
      <div className="container booking-details">
        <h3>Booking details</h3>
        <p>
          Name of course:
          <span className="emphasis">{courseInfo.title}</span>
        </p>
        <p>
          Hourly rating for
          {teacherInfo.name}
          :
          <span className="emphasis">$50</span>
        </p>
      </div>
      <div className="time-table container">
        <div className="available-days">
          <h3>Choose a day</h3>
          <div>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
        </div>
        <div className="available-times">
          <h3>Choose times</h3>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">10:00am - 11:00am</label>
            <br />

            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label htmlFor="vehicle2">11:00am - 12:00pm</label>
            <br />

            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label htmlFor="vehicle3">13:00pm- 14:00pm</label>
            <br />

            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label htmlFor="vehicle3">14:00pm- 15:00pm</label>
            <br />

            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label htmlFor="vehicle3">15:00pm- 16:00pm</label>
            <br />

            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label htmlFor="vehicle3">16:00pm- 17:00pm</label>
            <br />

            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label htmlFor="vehicle3">17:00pm- 84:00pm</label>
            <br />
          </div>
        </div>
      </div>
      <div className="booking-btn">
        <button type="button" className="book-session">Book session</button>
      </div>
    </div>
  );
};

export default BookingForm;
