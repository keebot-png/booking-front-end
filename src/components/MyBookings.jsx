// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import {  useSelector } from "react-redux";

// import {
//   deleteReservations,
//   fetchReservations,
// } from "../features/reservations/reservationSlice";

const MyBookings = () => {
  // const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  const isLoading = useSelector((state) => state.reservations.isLoading);

  // useEffect(() => {
  //   dispatch(fetchReservations());
  // }, [dispatch]);

  // const handleDelete = (reservationID) => {
  //   dispatch(deleteReservations({ reservationID }));
  // }

  // return (
  //   <div>
  //     {isLoading && <p>Loading...</p>}
  //     {!isLoading && reservations.length === 0 && (
  //       <div>
  //         <button
  //           data-modal-target="popup-modal"
  //           data-modal-toggle="popup-modal"
  //           className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  //           type="button"
  //         >
  //           Toggle modal
  //         </button>

  //         <div
  //           id="popup-modal"
  //           tabIndex="-1"
  //           className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  //         >
  //           <div className="relative w-full max-w-md max-h-full">
  //             <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
  //               <button
  //                 type="button"
  //                 className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
  //                 data-modal-hide="popup-modal"
  //               >
  //                 <svg
  //                   aria-hidden="true"
  //                   className="w-5 h-5"
  //                   fill="currentColor"
  //                   viewBox="0 0 20 20"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                 >
  //                   <path
  //                     fillRule="evenodd"
  //                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
  //                     clipRule="evenodd"
  //                   ></path>
  //                 </svg>
  //                 <span className="sr-only">Close modal</span>
  //               </button>

  //               <div className="p-6 text-center">
  //                 <svg
  //                   aria-hidden="true"
  //                   className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
  //                   fill="none"
  //                   stroke="currentColor"
  //                   viewBox="0 0 24 24"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth="2"
  //                     d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  //                   ></path>
  //                 </svg>
  //                 <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
  //                   Are you sure you want to delete this product?
  //                 </h3>
  //                 <button
  //                   data-modal-hide="popup-modal"
  //                   type="button"
  //                   className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
  //                   onClick={() => handleDelete(id)}
  //                 >
  //                   Yes, I'm sure
  //                 </button>
  //                 <button
  //                   data-modal-hide="popup-modal"
  //                   type="button"
  //                   className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
  //                 >
  //                   No, cancel
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //     {!isLoading && reservations.length > 0 && (
  //       <ul>
  //         {reservations.map((reservation) => (
  //           <li>
  //             <p>Reservation ID: {reservation.id}</p>
  //             <p>Course ID: {reservation.course_id}</p>
  //             <p>start-time: {reservation.day}</p>
  //             <p>end-time: {reservation.time}</p>
  //             <button onClick={() => dispatch(openModal())}>Delete</button>
  //           </li>
  //         ))}
  //       </ul>
  //     )}
  //   </div>
  // );

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
                Day
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
            {reservations.map((reservation,index) => (
              <tr key={index}>
                <td className="px-3 py-4 text-sm font-normal text-left break-words bg-light text-textColor">
                  {reservation.course_name}
                </td>
                <td className="px-3 py-4 text-sm font-normal text-left break-words bg-light text-textColor">
                  {reservation.day}
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
