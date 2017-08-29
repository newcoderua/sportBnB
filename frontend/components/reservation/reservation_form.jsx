import React from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);

    // debugger
    this.state = {
      user_id: this.props.currentUser.id,
      buddy_id: props.history.location.pathname.split('/')[2],
      // buddies: this.props.buddies,
      address: "",
      date: moment(),
      details: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeDate = this.changeDate.bind(this);

  }

  componentDidMount() {
    this.props.fetchBuddies(this.props.filters);
    // debugger
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    if (this.props.filters !== nextProps.filters) {
      this.props.fetchBuddies(nextProps.filters)
    }
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  }

  changeDate (date){
    this.setState({ date: date });
}

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    const id = this.props.user_id;
    this.props.createReservation(merge({}, this.state, { user_id: id })).then(() => this.props.history.push("/reservations")) // I can redirect here later
  }

  render() {
    // debugger
    if (this.props.buddies[this.state.buddy_id] === undefined) {
      return null;
    }
    return(
      <div className="main-reservation-buddy-form">

          <div className="reservation-buddy-form">

            <div className="buddy-personal-info">
              <div>
                <img id="buddy-image-reservation" src={this.props.buddies[this.state.buddy_id].image_url} /><br /><br />
                Sport : {this.props.buddies[this.state.buddy_id].sport}<br /><br />
                Name : {this.props.buddies[this.state.buddy_id].name}<br /><br />
              Rate : $ {this.props.buddies[this.state.buddy_id].rate}<br /><br />
            Motto: "{this.props.buddies[this.state.buddy_id].best_achievement}"
            </div>
            </div>

            <div className="form-reservation-buddy">
              <form className="reserve-buddy-form" onSubmit={this.handleSubmit }>

                <div>

                  <div>
                    <h3>Provide location</h3>
                    <textarea
                      id="address"
                      onChange={this.update('address')}
                      placeholder="159 w 25 street" />
                  </div>

                  <h3>Pick a date</h3>
                    <div className="date-modal">
                      <DatePicker id="date-modal-id"
                        selected={this.state.date}
                        onChange={this.changeDate} />
                    </div>


                    <div>
                      <h3>Details about your future workout</h3>
                      <textarea
                        id="textarea-modal"
                        onChange={this.update('details')}
                        placeholder=" like 'I want all 8 abs after my first workout' " />
                    </div>

                    <button className="yahoo button" type="submit">Submit</button>
                </div>

              </form>
            </div>

          </div>

      </div>
    )
  }
}

export default ReservationForm;
