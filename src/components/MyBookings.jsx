import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchReservations,
  deleteReservations,
} from '../features/reservations/reservationPost';
import { getCourses } from '../features/courses/courseApi';
import '../stylesheets/bookingPage.css';

const MyBookings = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  useEffect(() => {
    dispatch(fetchReservations());
    dispatch(getCourses());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteReservations(id));
  };

  return (
    <section className="w-full px-5 py-5 sm:py-16 justify-self-center sm:justify-self-end min-h-screen">
      <div className="flex flex-col items-center w-full mb-10 text-center">
        <h1 className="mb-4 text-2xl font-black text-gray-900 title-font">
          Bookings
        </h1>
        <p className="text-base leading-relaxed lg:w-2/3">
          Here is the list of all booked course.
        </p>
      </div>
      <div className="container">
        <table className="w-full overflow-auto border-separate table-auto text-slate-500">
          <thead className="text-white">
            <tr className="bg-lime-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th className="p-3 text-left">
                Course Name
              </th>
              <th className="p-3 text-left">
                Date
              </th>
              <th className="p-3 text-left">
                Teacher
              </th>

              <th className="p-3 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="flex-1 sm:flex-none">
            {reservations.map((reservation) => (

              <tr className="flex flex-col flex-no wrap sm:table-row mb-10 sm:mb-0" key={reservation.id}>
                <td className="border-grey-light border hover:bg-gray-100 p-3">

                  {reservation.course_name}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3">
                  {reservation.day.slice(0, 10)}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3">
                  {reservation.teacher_name}
                </td>

                <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                  <button
                    type="button"
                    onClick={() => handleDelete(reservation.id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
  );
};

export default MyBookings;
