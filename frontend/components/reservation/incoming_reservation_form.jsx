import React from 'react';
import merge from 'lodash/merge';
import IncomingReservationItem from './incoming_reservation_item';

class IncomingReservationForm extends React.Component {
  constructor(props) {
    super(props);
  }




  render() {
    // debugger
    // I need to add decline and accept reservations
    return(
      <div>
        {Object.keys(this.props.reservations).reverse().map(id => (
          <IncomingReservationItem
            key={id}
            reservation={this.props.reservations[id]}
            currentUser={this.props.currentUser}
            buddies={this.props.buddies}

            />
        ))}

      </div>

    )
  }
}

export default IncomingReservationForm;
