import React from 'react';
import { Link } from 'react-router-dom';

const ReservationItem = ({ reservation, deleteReservation, buddies }) => {
  const handleDelete = () => deleteReservation(reservation.id);
  // debugger
  let status = "pending";
    if (reservation.status) {
      status = "done"
    }
  return (
      <li id="li">
        <div className="reservations-class">
        <div className="img-reservation-buddies"><img id="reservation-buddy-pict" src={buddies[reservation.buddy_id].image_url} /><br /></div>
        <div className="reservation-buddy-info-account">
          <div>
            <b>Buddy name : </b>{buddies[reservation.buddy_id].name}<br />
            <b>Address :  </b>{reservation.address}<br />
           <b>Date :  </b>{reservation.date}<br /><br />
           <b>Details :  </b>{reservation.details}<br />
           <b>Status of request : </b>{status}<br />
          <button className="button-delete-workouts" onClick={handleDelete}>    Delete   </button><br /><br />
        </div>
        </div>
      </div>
      </li>
  );
};

export default ReservationItem;
