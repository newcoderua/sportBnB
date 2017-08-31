import React from 'react';
import { Link } from 'react-router-dom';

const IncomingReservationItem = ({ reservation, currentUser, buddies }) => {
  // debugger

  return (
      <li id="li">
        <div >
          Workout request from <b>{reservation.user_name}</b><br />
          <div><img id='profile-pic' src={reservation.user_image} /></div>
          <b> Address : </b> {reservation.address}<br />
          <b>Date : </b>{reservation.date}<br />
          <b>Details : </b>{reservation.details}<br /><br />
          <div>
            <button className="button yahoo" >Accept</button>
            <button className="button yahoo" >Decline</button>
          </div>
        </div>
      </li>
  );
};

export default IncomingReservationItem;
