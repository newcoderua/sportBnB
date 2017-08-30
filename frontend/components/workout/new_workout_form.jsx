import React from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';
// import { DateTimePicker } from 'react-widgets';
//
// import Moment from 'moment';
//
// import momentLocalizer from '../../../node_modules/react-widgets/lib/localizers/moment';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Autocomplete from 'react-google-autocomplete';

import 'react-datepicker/dist/react-datepicker.css';

class NewWorkoutForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        user_id: this.props.currentUser.id,
        sport: "",
        address: "",
        date: moment(),
        boolean: false,
        details: "",
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      // this.setDate = this.setDate.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.changeDate = this.changeDate.bind(this);
    }

    changeDate (date){
      this.setState({ date: date });
  }

    handleChange(date) {
     this.setState({
       date: date
     });
   }

    handleSubmit(e) {
      e.preventDefault();
      const id = this.props.currentUser.id;
      this.props.createWorkout(merge({}, this.state, { user_id: id })).then(this.props.closeModal);

      geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
    }

    update(property) {
      return e => this.setState({ [property]: e.target.value })
    }

    render() {
      return(
        <div id="post-workout-modal">
          <div className="content-post-workout-modal">
            <form className="form-content-modal" onSubmit={ this.handleSubmit.bind(this) }>

              <div>
                <div className="closing-modal-button">
                  <button  onClick={this.props.closeModal}> ✖︎ </button>
                </div>
                <h3>Please select sport you are interested in </h3>
                <select className="sport-modal-content" name="sport" onChange={this.update('sport')}>
                    <option id="yo">select one</option>
                    <option value="soccer">soccer</option>
                    <option value="basketball">basketball</option>
                    <option value="volleyball">volleyball</option>
                    <option value="box">box</option>
                    <option value="running">running</option>
                    <option value="crossfit">crossfit</option>
                    <option value="swimming">swimming</option>
                    <option value="golf">golf</option>
                </select>
              </div>

              <div className="provide-your-address">
                <h3>Provide your address</h3>
                <Autocomplete
                    onPlaceSelected={(place) => {
                      console.log(place);
                    }}
                    value={this.state.address}
                    onChange={this.update('address')}
                    types={['address']}
                    componentRestrictions={{country: "usa"}}
                />
              </div>

              <h3>Pick a date</h3>
                <div className="date-modal">
                  <DatePicker id="date-modal-id"
                    selected={this.state.date}
                    onChange={this.changeDate} />
                </div>

              <div>
                <h3>Any details that you want to share</h3>
                <textarea
                  id="textarea-modal"
                  onChange={this.update('details')}
                  placeholder=" Provide needed details" />
              </div>

              <button className="yahoo button" type="submit">Add workout</button>
            </form>
          </div>
        </div>
      )
  }
}


export default NewWorkoutForm;

// <h3>Provide your address</h3>
//   <PlacesAutocomplete
//   value={this.state.address}
//   onChange={this.update('address')}
// />
