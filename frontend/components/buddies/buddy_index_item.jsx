import React from "react";
import { Link, hashHistory, withRouter } from 'react-router-dom';

export const BuddyIndexItem = ({ buddy, filters }) => {
// debugger
  return (
    <div className="outer-index-item">
      <li className="index-item">
        <figure className="index-buddy-pic-frame">

          <span>
          <Link to={`/reservations/${buddy.id}`}>
            <img className="index-buddy-pic" src={buddy.image_url} alt={buddy.name} />
          </Link>
          </span>
          <br/>

          <span>
          <Link to={`/reservations/${buddy.id}`}>
            <button className="index-item-button">
              <span>Book Buddy</span>
            </button>
          </Link>
          </span>

        </figure>

        <section className="index-buddy-content">

          <div className="index-buddy-title-cf">
            <div className="sport-buddy-item">{buddy.sport}</div>
            <div className="index-buddy-name">
              <Link to={`/reservations/${buddy.id}`}>
                {buddy.name}
              </Link>
            </div>
            <div className="index-buddy-rate">${buddy.rate}</div>
          </div>  <br/>

          <div className="index-achivement">
            " {buddy.best_achievement} "
          </div>

        </section>
      </li>
    </div>
  );
}
