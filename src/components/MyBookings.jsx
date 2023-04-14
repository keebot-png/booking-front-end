import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchReservations,
  deleteReservations,
} from '../features/reservations/reservationPost';
import { getCourses } from '../features/courses/courseApi';


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
    <section className="w-full px-5 py-24 sm:py-16 justify-self-center sm:justify-self-end min-h-screen">
      <div className="flex flex-col items-center w-full mb-10 text-center">
        <h1 className="mb-4 text-2xl font-black text-gray-900 title-font">
          Bookings
        </h1>
        <p className="text-base leading-relaxed lg:w-2/3">
          Here is the list of all booked course.
        </p>
      </div>
      <div>
        <table className="w-full overflow-auto border-separate table-auto text-slate-500">
          <thead>
            <tr>
              <th className="p-3 text-sm font-semibold text-left bg-thead whitespace-nowrap text-textHeading">
                Course Name
              </th>
              <th className="p-3 text-sm font-semibold text-left bg-thead whitespace-nowrap text-textHeading">
                Date
              </th>
              <th className="p-3 text-sm font-semibold text-left bg-thead whitespace-nowrap text-textHeading">
                Time
              </th>
              <th className="p-3 text-sm font-semibold text-left bg-thead whitespace-nowrap text-textHeading">
                Teacher
              </th>

              <th className="p-3 text-sm font-semibold text-left bg-thead whitespace-nowrap text-textHeading">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td className="px-3 py-4 text-sm font-normal text-left break-words bg-light text-textColor">
                  {reservation.course_name}
                </td>
                <td className="px-3 py-4 text-sm font-normal text-left break-words bg-light text-textColor">
                  {reservation.day.slice(0, 10)}
                </td>
                <td className="px-3 py-4 text-sm font-normal text-left break-words bg-light text-textColor">
                  {reservation.times}
                </td>
                <td className="px-3 py-4 text-sm font-normal text-left break-words bg-light text-textColor">
                  {reservation.teacher_name}
                </td>

                <td className="px-3 py-4 text-sm font-semibold text-left text-red-500 underline break-words bg-light">
                  <button
                    data-modal-target="popup-modal"
                    data-modal-toggle="popup-modal"
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
