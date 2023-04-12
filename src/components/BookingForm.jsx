import React from 'react';

const BookingForm = () => (
  <div className='booking-form'>
    <h2 className='container' style={{color: '#70e000'}}>Book a session with <span style={{color: 'black'}}>Wesly James</span></h2>
    <div className='container booking-details'>
      <h3>Booking details</h3>
        <p>Name of course: <span className="emphasis">React</span></p>
        {/* <p>Name of Instructor: <span className='emphasis'>Wesley James</span></p> */}
        <p>Hourly rating for Wesley James: <span className='emphasis'>$50</span></p>
    </div>
    <div className='time-table container'>
      <div className='available-days'>
        <h3>Choose a day</h3>
        <div>
          <input type="radio" id="monday" name="days" value="monday" />
          <label for="monday">Monday</label><br></br>

          <input type="radio" id="wednesday" name="days" value="wednesday" />
          <label for="wednesday">Wednesday</label><br></br>

          <input type="radio" id="thursday" name="days" value="thursday" />
          <label for="thursday">Thursay</label><br></br>

          <input type="radio" id="friday" name="days" value="friday" />
          <label for="friday">Friday</label>
        </div>
      </div>
      <div className="available-times">
        <h3>Choose times</h3>
        <div>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1">10:00am - 11:00am</label><br></br>

            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label for="vehicle2">11:00am - 12:00pm</label><br></br>

            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3">13:00pm- 14:00pm</label><br></br>

            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3">14:00pm- 15:00pm</label><br></br>

            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3">15:00pm- 16:00pm</label><br></br>

            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3">16:00pm- 17:00pm</label><br></br>

            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3">17:00pm- 84:00pm</label><br></br>
        </div>
    </div>
    </div>
    <div className='booking-btn'>
    <button type='button' className='book-session'>Book session</button>
    </div>
  </div>
);

export default BookingForm;
