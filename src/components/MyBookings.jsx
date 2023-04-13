// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from 'react-redux';

// import {
//   deleteReservations,
//   fetchReservations,
// } from "../features/reservations/reservationSlice";

const MyBookings = () => {
  // const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  // const isLoading = useSelector((state) => state.reservations.isLoading);

  // useEffect(() => {
  //   dispatch(fetchReservations());
  // }, [dispatch]);

  // const handleDelete = (reservationID) => {
  //   dispatch(deleteReservations({ reservationID }));
  // }

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
                  {reservation.date}
                </td>
                <td className="px-3 py-4 text-sm font-normal text-left break-words bg-light text-textColor">
                  {reservation.time}
                </td>
                <td className="px-3 py-4 text-sm font-normal text-left break-words bg-light text-textColor">
                  {reservation.teacher_name}
                </td>

                <td className="px-3 py-4 text-sm font-semibold text-left text-red-500 underline break-words bg-light">
                  <button type="button">Cancel</button>
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
