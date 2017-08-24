import React from "react";
import { Link, hashHistory, withRouter } from 'react-router';

const BuddyIndexItem = ({ buddy }) => {

  return (
    <li className="index-item" key={buddy.id}>
      <figure className="index-buddy-pic-frame">
        <Link to={`/buddies/${buddy.id}`}>
          <img className="index-buddy-pic" src={buddy.image_url} alt={buddy.name} />
        </Link>
        <Link to={`/buddies/${buddy.id}/reservation`}>
          <button className="index-item-button">
            <span>Book Buddy</span>
          </button>
        </Link>
      </figure>
      <section className="index-buddy-content">
        <div className="index-buddy-title cf">
          <div className="index-buddy-name">
            <Link to={`/buddies/${buddy.id}`}>
              {buddy.name}
            </Link>
          </div>
          <div className="index-buddy-rate">${buddy.rate}</div>
        </div>
        <div className="index-achivement">
          {buddy.best_achievement}
        </div>
        <div className="index-buddy-feedback">



        </div>
      </section>
    </li>
  );
}

export default BuddyIndexItem;
